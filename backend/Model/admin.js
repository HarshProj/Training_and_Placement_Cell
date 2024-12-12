const mongoose=require('mongoose');
const {Schema}=mongoose;

const AdminSchema=new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    }
})
const Admin=mongoose.model('admin',AdminSchema);
module.exports=Admin;