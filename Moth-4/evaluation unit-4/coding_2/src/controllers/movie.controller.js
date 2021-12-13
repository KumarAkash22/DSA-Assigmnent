const express = require("express");
const Movie = require("../models/movies.model");

const router = express.Router();

router.post("", async(req,res) =>{
    try{
        const movie = await Movie.create(req.body);

        return res.status(201).send(movie)
    }catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
})

router.get("", async(req,res) =>{
    try{
        const movies = await Movie.find().lean().exec();

        return res.status(201).send(movies)
    }catch(e){
        return res.status(500).json({message:e.message,status:"Failed"})
    }
});

module.exports = router;