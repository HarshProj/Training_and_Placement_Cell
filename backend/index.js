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
app.use('/api/auth',require("./Routes/auth"))
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});