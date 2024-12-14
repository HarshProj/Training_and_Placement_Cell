require('dotenv').config()
const mongoose=require('mongoose')
const uri = process.env.MONGO_URI;
// pwd=ljh4XDu2muSeYUqb 
const connecttodb=()=>{
    // mongoose.connect(uri)
    // mongoose.connection
    // .once("open",()=>{console.log("Connected to db")})
    mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to db");
    })
    .catch((err) => {
        console.error("Error connecting to db:", err.message);
    });
}
module.exports= connecttodb;