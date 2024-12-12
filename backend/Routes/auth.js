require('dotenv').config()
const express=require('express')
const router=express.Router()
const Admin=require('../Model/admin')
const jwt=require('jsonwebtoken');
const hash=process.env.hash
const bcrypt=require('bcryptjs');
router.post('/adminsignup',async(req,res)=>{
    try {
        const {email,password,firstname,lastname}=req.body;
        const user=await Admin.findOne({email:email});
        if(user){
            return res.send("User Already Registered");
        }
        const salt=await bcrypt.genSalt(10);
        const pwd=await bcrypt.hash(password,salt);
        const data=await Admin.create({ 
            email,password:pwd,lastname,firstname
        })
        const info={
            user:{id:data.id}}
            jwt.sign(info,hash);
        res.status(200).json({msg:"Everything is fine",data})
    } catch (error) {
        console.log(error); // Correct way to log the error
    res.status(500).json({ error: error.message || "Internal Server Error" }); 
    }
})
module.exports=router;