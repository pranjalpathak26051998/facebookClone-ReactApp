const {default:mongoose}=require('mongoose');

const useSignUpSchema= new mongoose.Schema({
    Firstname:{type:String, required:true, trim:true },
    surname:{type:String, trim:true},
    mobileNumber:{type:Number, maxlength:12, unique:true, trim:true},
    emailAddress:{type:String, unique:true, trim:true},
    password:{type:String, trim:true, minLength:5, maxlength:15},
    DateOfBirth:Date , //this is for taking the input in the form of date,
    Gender:{type:String, trim:true, required:true, enum:["Male","Female","Custom"]},
},
{timestamps:true}
);

const signupModel= new mongoose.model("signup", useSignUpSchema)
module.exports={ signupModel };