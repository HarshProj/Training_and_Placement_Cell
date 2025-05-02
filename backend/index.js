const express=require('express');
const app=express();
const cors=require('cors');

const axios =require('axios');
app.use(cors());
require('dotenv').config()
const port=5000;
app.use(express.json())
const db=require('./db');
db();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.use('/api/auth',require("./Routes/auth"));
app.use('/api/v1/recruiter',require("./Routes/recruiter"));
app.use('/api/gemini' , require('./Routes/chatbot'));
app.use('/api/v1/updates',require("./Routes/updateRoutes"));
app.use('/api/admin',require("./Routes/admin"));
app.use("/images",express.static('uploads'));

app.post('/api/employees', async (req, res) => {
  const { company } = req.body;

  // SQL-style query to find people currently working at the company in India
  const sql = `
    SELECT *
    FROM person
    WHERE experience.company.name = '${company}'
      AND location_country = 'India'
      AND experience.end_date IS NULL
    LIMIT 10
  `;

  try {
    const response = await axios.get('https://api.peopledatalabs.com/v5/person/search', {
      params: {
        api_key: process.env.PDL_API_KEY,
        sql,
      },
    });

    return res.json(response.data.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    return res.status(500).json({ error: 'Failed to fetch employee data from PDL' });
  }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});