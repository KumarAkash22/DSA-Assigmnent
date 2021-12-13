require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/users.model");


const newToken = (user) => {
    return jwt.sign({user:user},process.env.JWT_ACCESS_KEY);
};

const register =  async(req,res) =>{
try{
    let user = await User.findOne({email:req.body.email}).lean().exec();
    
    if(user)
    return res.status(400).json({
        status:"failed",
        message:"Please provide different email id"
    });
    user = await User.create(req.body);
    const token = newToken(user);

    res.status(201).json({user,token});
}catch(e){
    return res.status(500).json({status:"failed",messagr: e.message});
}
}
const login =  async(req,res) =>{
    try{
        let user = await User.findOne({email:req.body.email});
        
        if(!user)
        return res.status(400).json({
            status:"failed",
            message:"Please provide correct email id and password"
        });

        let match = await User.checkPassword(req.body.password);
        
        if(!match)
        return res.status(400).json({
            status:"failed",
            message:"Please provide correct email id and password"
        });
        
        const token = newToken(user);
    
        res.status(201).json({user,token});
    }catch(e){
        return res.status(500).json({status:"failed",messagr: e.message});
    }
    }

    module.exports = {register, login}
