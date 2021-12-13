const express = require("express");
const req = require("express/lib/request");

const User = require("../models/users.model");

const Auth = require("../middleware/authentication");

const router = express.Router();

router.post("/",Auth ,async(req,res) =>{
    try{
        const user = req.user;
    const movie = await User.create({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        roles: req.body.roles
    }) 
    return res.status(201).json({movie});
    } catch(e){
        return res.status(500).json({status: "failed",message: e.message})
    }
})

router.get("/",async(req,res) =>{
    const movie = await Auth.find().lean().exec();
    return res.send(movie);
})

module.exports = router;