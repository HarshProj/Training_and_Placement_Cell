const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
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
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});