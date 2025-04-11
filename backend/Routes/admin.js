require('dotenv').config()
const express=require('express');
const {addCompany , getcompanies} = require('../Controllers/companyController.js');
const multer = require('multer');

const router=express.Router();

const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req , file , cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:Storage})

router.post("/addcompany" ,upload.single("image"),addCompany)
router.get("/getcompanies" , getcompanies);

module.exports = router;