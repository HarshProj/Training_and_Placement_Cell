require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const otpGenerator=require('otp-generator');
const verifyAdmin = require("../Middleware/verifyAdmin");
const registermail = require("../Controllers/mailer");
const verifyuser = require("../Middleware/verifyuser");
const localvariable = require("../Middleware/localvariable");

const hash = process.env.hash;
const admin_username = process.env.ADMIN_USERNAME;
const admin_password = process.env.ADMIN_PASSWORD;

// Login Route
router.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (admin_username === email && admin_password === password) {
      const data = {
        user: {
          id: admin_username,
          name: "D.L gupta",
          password: admin_password,
        },
      };

      const authtoken = jwt.sign(data, hash, { expiresIn: "1d" });
      return res.status(200).json({ success: true, authtoken });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
});

// Token Verification Route (Middleware Protected)
router.get("/verifyadmin", verifyAdmin, (req, res) => {
  // cosnole.log(req.admin);
  return res.status(200).json({
    success: true,
    message: "Admin token is valid",
    user: req.admin,
  });
});
router.get("/user-type", (req, res) => {
  try {
    
   const token = req.header("Authtoken");
       if(!token){
        return res.status(200).json({
          success: false,
          message: "Welcome,To KNIT CDC Site",
        }); 
       }
       const decoded = jwt.verify(token, hash);
   
       const { id: email, password } = decoded.user;
   
       if (email === admin_username && password === admin_password) {
         return res.status(200).json({
          success: true,
          message: "Welcome Admin!",
        });
       } else {
         return res.status(200).json({
           success: false,
           message: "Welcome,To KNIT CDC Site",
         });
       }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  
  }
});




router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const payload = {
      user: {
        email
      }
    };

    const authtoken = jwt.sign(payload, hash, { expiresIn: '1d' });

    return res.status(200).json({
      msg: "Login Successful",
      success:true,
      email,
      authtoken
    });

  } catch (error) {
    console.error("Internal server error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post("/authenticate",verifyuser,(req,res)=> res.end());

router.get("/generateotp",verifyuser,localvariable,async(req,res)=>{
  req.app.locals.OTP=await otpGenerator.generate(6,{
      lowerCaseAlphabets:false,
      upperCaseAlphabets:false,
      specialChars:false})
  return res.status(200).send({code:req.app.locals.OTP});
})
router.get("/verifyotp",verifyuser,localvariable,async(req,res)=>{
  const { code } = req.query;
  if (parseInt(req.app.locals.OTP) === parseInt(code)) {
      req.app.locals.OTP = null;
      req.app.locals.resetSession = true;
      return res.status(201).send({ msg: "Verified Successfully" });
  }
  return res.status(400).send({ error: "Invalid OTP..." });
})

router.post("/registermail",registermail)
module.exports=router;