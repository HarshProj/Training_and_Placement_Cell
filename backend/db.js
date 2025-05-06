require('dotenv').config()
const mongoose=require('mongoose')
const uri = process.env.MONGO_URI;
const connecttodb=()=>{
    mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to db");
    })
    .catch((err) => {
        console.error("Error connecting to db:", err.message);
    });
}
module.exports= connecttodb;