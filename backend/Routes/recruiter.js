require('dotenv').config()
const express=require('express');
const router=express.Router();
const Feedback=require('../Model/feedBack');

router.post('/feedback',async(req,res)=>{
    try {
        const {name,organization,phone,rating,feedback}=req.body;
        if(!name || !organization || !phone || !rating || !feedback) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const data=await Feedback.create({ 
            name,organization,phone,rating,feedback
        })
        res.status(200).json({
        success: true, 
        message: 'Feedback submitted successfully',
        data: data
        });
    } catch (error) {
        console.log(error); // Correct way to log the error
    res.status(500).json({ error: error.message || "Internal Server Error" }); 
    }
});
router.get('/feedback',async(req,res)=>{
    try {
        const data=await Feedback.find({});
        res.status(200).json({msg:"Feedback fetched successfully",data})
    } catch (error) {
        console.log(error); // Correct way to log the error
    res.status(500).json({ error: error.message || "Internal Server Error" }); 
    }
});

module.exports=router;