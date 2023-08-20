const express=require('express');
const routes=express.Router();
const signup=require('../models/signup');
const signupUser=require('../auth/signup');


routes.post('/test-api',async (req,res)=>{
    await console.log("routing is done successfully")
    res.status(200).send({status:true,message:"successfull routing"})
});

routes.post('/signupUser', signupUser);
module.exports={routes};

