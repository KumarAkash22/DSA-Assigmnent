const express = require("express");

const router = express.Router();

const productRedis = require("../models/product_redis.model");

const client = require("../configs/redis");

router.get("", (req,res)=>{
    client.get("product_redis", async function(err,prod){
        console.log(prod);
        if (err) console.log(err);

        if(prod) return res.status(200).send(JSON.parse(prod));
        const product = await productRedis.find().lean().exec();
    return res.status(200).send(product); 
    } ) 
})


router.post("", async function(req, res){
    const product_redis = await productRedis.create(res.body);
    
    client.set(`product_redis.${product_redis._id}`,JSON.stringify(product_redis));

    const products_redis = await productRedis.find().lean().exec();

    client.set("product_redis",JSON.stringify(products_redis));

    
    return res.status(201).send(product_redis)
})

router.get("/:id",(req,res) =>{
    client.get(`product_redis.${req.params.id}`, async function(err,prod){
        console.log(prod);
        if (err) console.log(err);

        if(prod) return res.status(200).send({cached_producr:JSON.parse(prod)});
        const product = await productRedis.findById(req.params.id).lean().exec();
    client.set(`product_redis.${req.params.id}`,JSON.stringify(product_redis));

    return res.status(200).send({db_forcast:product}); 
    })
})

router.patch("/:id", async(req,res) =>{
    const product_redis = await productRedis.findByIdAndUpdate(req.params.id, req.body,{new:true});
    client.set(`product_redis.${req.params.id}`,JSON.stringify(product_redis));
    const products_redis = await productRedis.find().lean().exec();

    client.set("product_redis",JSON.stringify(product_redis));
    returnres.status(201).send(products_redis)
})
router.delete("/:id",async (req,res) =>{
    const product_redis = await productRedis.findByIdAndDelete(req.params.id,);
    const products_redis = await productRedis.find().lean().exec();

    client.set("product_redis",JSON.stringify(products_redis));
    return res.status(201).send(product_redis)
})
module.exports = router; 