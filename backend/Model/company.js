const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {type:String , required: true},
    description: {type:String , required:true},
    ctc: {type:Number , required:true},
    image:{type:String , required:true},
    roles_offered:{type:Array , required:true}
})

const companyModel = mongoose.models.company || mongoose.model("company" , companySchema);

module.exports = companyModel;