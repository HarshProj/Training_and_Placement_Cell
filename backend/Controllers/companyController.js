const companyModel = require('../Model/company');

const addCompany = async (req , res) => {
    let image_filename = `${req.file.filename}`;

    const company = new companyModel({
        name:req.body.name,
        description:req.body.description,
        ctc:req.body.ctc,
        roles_offered:req.body.roles_offered,
        image:image_filename
    })

    try{
        await company.save();
        res.json({success:true,message:"Company Added"})
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }

}

const getcompanies = async (req , res) => {

    try {
        const companies = await companyModel.find({});
        res.json({success:true, data:companies})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }

}

module.exports = {addCompany , getcompanies};