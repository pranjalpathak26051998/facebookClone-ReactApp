const { signupModel } =require('../models/signup');
const express=require('express');
const moment = require('moment')
let signupUser=async (req,res)=>{          
    try {
        // let {FirstName,surname,mobileNumber,emailAddress,password,DateOfBirth,Gender}= req.body;
        let data = req.body;
        data.DateOfBirth = moment(data.DateOfBirth, 'DD-MM-YYYY').format('YYYY-MM-DD'); 

        let responseData= await signupModel.create(data);
        console.log(responseData);
      return  res.status(201).send({status:true,"the new account":responseData});
    } catch (error) {
       return res.status(500).send({status:false,data:error.message});        
    }
}
module.exports= signupUser;
    


