const express = require("express");
const Show = require("../models/movies.model");

const router = express.Router();

router.get("", async(req,res) =>{
    try{
        const show = await Show.findMany().lean().exec();

        return res.status(201).send(show)
    }catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
});


router.get("", async(req,res) =>{
    try{
        const shows = await Show.find().lean().exec();

        return res.status(201).send(shows)
    }catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
});

module.exports = router;