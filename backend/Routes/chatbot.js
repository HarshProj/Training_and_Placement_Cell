require('dotenv').config();
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const { promisify } = require('util');
const { GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI } = require('@langchain/google-genai');
const { MemoryVectorStore } = require('langchain/vectorstores/memory');
const { RetrievalQAChain } = require('langchain/chains');

const router = express.Router();
const GEMINI_API_KEY = process.env.gemini_key;

router.post('/chatbot', async (req, res) => {
  // Resolve full paths to your database files
  const dbPathHR = path.join(__dirname, 'final_hr_table.db');
  const dbPathAL = path.join(__dirname, 'final_al_table.db');

  // Open databases
  const dbHR = new sqlite3.Database(dbPathHR);
  const dbAL = new sqlite3.Database(dbPathAL);

  try {
    const userQuestion = req.body.question;
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required in the request body.' });
    }

    // Promisify the `all` method for each DB
    const allAsyncHR = promisify(dbHR.all).bind(dbHR);
    const allAsyncAL = promisify(dbAL.all).bind(dbAL);

    const hrRows = await allAsyncHR('SELECT * FROM final_hr_table');
    const alRows = await allAsyncAL('SELECT * FROM final_al_table');

    // Convert rows to document objects with metadata
    const hrDocuments = hrRows.map(row => ({
      pageContent: Object.entries(row)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n'),
      metadata: { source: 'HR', ...row },
    }));

    const alDocuments = alRows.map(row => ({
      pageContent: Object.entries(row)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\n'),
      metadata: { source: 'ALUMNI', ...row },
    }));

    // Create embeddings using Gemini
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GEMINI_API_KEY,
      modelName: 'embedding-001',
    });

    const hrVectorStore = await MemoryVectorStore.fromDocuments(hrDocuments, embeddings);
    const alVectorStore = await MemoryVectorStore.fromDocuments(alDocuments, embeddings);

    // Initialize the Gemini model
    const model = new ChatGoogleGenerativeAI({
      apiKey: GEMINI_API_KEY,
      model: 'gemini-1.5-pro-latest',
    });

    // Create a prompt prefix to instruct the model for detailed, well-formatted answers.
    const systemPrompt = `
You are a helpful AI assistant working for a college Training & Placement Cell.
Answer the student's or recruiter's question clearly, in detail, and professionally.
Include relevant examples and use bullet points or numbered lists for clarity.
Indicate whether the answer is based on HR or Alumni database information.
    `;

    // Create RetrievalQA chains for HR and Alumni data,
    // passing the system prompt as a prompt prefix in the chain options.
    const hrChain = RetrievalQAChain.fromLLM(model, hrVectorStore.asRetriever(), {
      llmChainOptions: {
        promptPrefix: systemPrompt,
      },
    });

    const alChain = RetrievalQAChain.fromLLM(model, alVectorStore.asRetriever(), {
      llmChainOptions: {
        promptPrefix: systemPrompt,
      },
    });

    // Determine which data source to query based on keywords
    const hrKeywords = ['company', 'hr', 'recruiter', 'hiring', 'interview', 'recruitment'];
    const alKeywords = ['alumni', 'graduate', 'student', 'passed out', 'batch', 'working at', 'college'];

    const lowerQ = userQuestion.toLowerCase();
    const isHRQuery = hrKeywords.some(k => lowerQ.includes(k));
    const isALQuery = alKeywords.some(k => lowerQ.includes(k));

    let response, source;
    if (isHRQuery) {
      response = await hrChain.call({ query: userQuestion });
      source = '📁 HR Database';
    } else if (isALQuery) {
      response = await alChain.call({ query: userQuestion });
      source = '🎓 Alumni Database';
    } else {
      // If the query type is unclear, query both and combine the results.
      const hrResponse = await hrChain.call({ query: userQuestion });
      const alResponse = await alChain.call({ query: userQuestion });
      response = {
        text: `🧠 HR says:\n${hrResponse.text}\n\n🎓 Alumni says:\n${alResponse.text}`,
      };
      source = '🔍 Both Databases';
    }

    res.json({
      question: userQuestion,
      source,
      answer: response.text,
    });
  } catch (error) {
    console.error('❌ Error in /chatbot:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    dbHR.close();
    dbAL.close();
  }
});

module.exports = router;
