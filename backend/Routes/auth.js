require('dotenv').config()
const express=require('express')
const router=express.Router()
const Admin=require('../Model/admin')
const jwt=require('jsonwebtoken');
const hash=process.env.hash
const bcrypt=require('bcryptjs');

const admin_username = process.env.admin_username;
const admin_password = process.env.admin_password;

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
router.post('/adminlogin',async(req,res)=>{
    try {
        const { email, password } = req.body;
        console.log(email);
      
        if (admin_username === email && admin_password === password) {
          const data = {
            user: {
              id: admin_username,
              name: "D.L gupta",
              password:admin_password
            },
          };
      
          const authtoken = jwt.sign(data, hash);
          return res.status(200).json({ success: true, authtoken });
        } else {
          return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message || "Internal Server Error" });
      }
      
})

router.get('/verifyadmin', async (req, res) => {
    try {
      // Get token from Authorization header
      const token = req.header("Authtoken");
  
      if (!token) {
        return res.status(401).json({ success: false, message: "Access denied. No token provided." });
      }
  
  
      // Verify token
      const decoded = jwt.verify(token, hash);
      
      const email = decoded.user.id
      const password = decoded.user.password
    
        if(email==admin_username && password == admin_password)
        {
          // Token is valid
          res.status(200).json({
              success: true,
              message: "Token is valid",
              user: decoded.user, // this will return { id, name }
            });
        }
    } catch (err) {
        console.log(err);
        
      res.status(401).json({ success: false, message: "Invalid token" });
    }
  });
module.exports=router;