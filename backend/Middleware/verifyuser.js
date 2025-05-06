// const User=require("../Models/User")
const verifyuser=async(req,res,next)=>{
    try {
        const {email}=(req.method=='GET'?req.query:req.body);
        // let exist=await User.findOne({email:email});
        if(!email){
            return res.status(404).send({error:"User not found..."});
        }
        if (!email.endsWith("@knit.ac.in")) {
            return res.status(403).send({ error: "Email must be a KNIT institutional email (@knit.ac.in)." });
        }

        next();
    } catch (error) {
        
    }
}
module.exports=verifyuser;