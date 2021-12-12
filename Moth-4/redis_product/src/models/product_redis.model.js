const mongoose = require("mongoose");

const product_redisSchema = new mongoose.Schema({
    product_name:{type:String, require:true},
    product_categories: {type:String,require:true},
    product_price: {type:Number,require:true},
    product_origin:{type:String, require:false},
    product_manufacture_date: {type:Date, require: false},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product_redis", product_redisSchema);