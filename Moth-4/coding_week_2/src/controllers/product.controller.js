const express = require("express");

const Product = require("../models/product.model")

const router = express.Router();

router.get("/",async (req,res) =>{
    try{
        const products = await Product.find().lean().exec();
        return res.send(products);
    }catch (e){
        return res.status(500).json({status: "failed",message: e.message});

    }
});

module.exports = router;