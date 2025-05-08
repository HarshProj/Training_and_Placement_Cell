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
  const dbPathHR = path.join(__dirname, 'hr_table.db');
  const dbPathAL = path.join(__dirname, 'al_table.db');
  const dbPathHR2 = path.join(__dirname, 'final_hr_table.db');
  const dbPathAL2 = path.join(__dirname, 'final_al_table.db');

  const dbHR = new sqlite3.Database(dbPathHR);
  const dbAL = new sqlite3.Database(dbPathAL);
  const dbHR2 = new sqlite3.Database(dbPathHR2);
  const dbAL2 = new sqlite3.Database(dbPathAL2);

  try {
    const userQuestion = req.body.question;
    if (!userQuestion) {
      return res.status(400).json({ error: 'Question is required in the request body.' });
    }

    // Promisify the `all` method
    const allAsyncHR = promisify(dbHR.all).bind(dbHR);
    const allAsyncAL = promisify(dbAL.all).bind(dbAL);
    const allAsyncHR2 = promisify(dbHR2.all).bind(dbHR2);
    const allAsyncAL2 = promisify(dbAL2.all).bind(dbAL2);

    // Fetch and flatten all rows
    const hrRowsNested = await Promise.all([
      allAsyncHR('SELECT * FROM hr_table'),
      allAsyncHR2('SELECT * FROM final_hr_table')
    ]);
    const alRowsNested = await Promise.all([
      allAsyncAL('SELECT * FROM al_table'),
      allAsyncAL2('SELECT * FROM final_al_table')
    ]);

    const hrRows = hrRowsNested.flat();
    const alRows = alRowsNested.flat();

    // Convert rows to LangChain documents
    const hrDocuments = hrRows.map(row => ({
      pageContent: Object.entries(row).map(([k, v]) => `${k}: ${v}`).join('\n'),
      metadata: { source: 'HR', ...row }
    }));

    const alDocuments = alRows.map(row => ({
      pageContent: Object.entries(row).map(([k, v]) => `${k}: ${v}`).join('\n'),
      metadata: { source: 'ALUMNI', ...row }
    }));

    // Generate embeddings
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: GEMINI_API_KEY,
      modelName: 'embedding-001',
    });

    const hrVectorStore = await MemoryVectorStore.fromDocuments(hrDocuments, embeddings);
    const alVectorStore = await MemoryVectorStore.fromDocuments(alDocuments, embeddings);

    const model = new ChatGoogleGenerativeAI({
      apiKey: GEMINI_API_KEY,
      model: 'gemini-2.0-flash',
    });

    const systemPrompt = `answer briefly`;

    const hrChain = RetrievalQAChain.fromLLM(model, hrVectorStore.asRetriever(), {
      llmChainOptions: { promptPrefix: systemPrompt },
    });

    const alChain = RetrievalQAChain.fromLLM(model, alVectorStore.asRetriever(), {
      llmChainOptions: { promptPrefix: systemPrompt },
    });

    const lowerQ = userQuestion.toLowerCase();
    const hrKeywords = ['company', 'hr', 'recruiter', 'hiring', 'interview', 'recruitment'];
    const alKeywords = ['alumni', 'graduate', 'student', 'passed out', 'batch', 'working at', 'college'];

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
      const [hrResponse, alResponse] = await Promise.all([
        hrChain.call({ query: userQuestion }),
        alChain.call({ query: userQuestion })
      ]);
      response = {
        text: `🧠 HR says:\n${hrResponse.text}\n\n🎓 Alumni says:\n${alResponse.text}`
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
    dbHR2.close();
    dbAL2.close();
  }
});

module.exports = router;
