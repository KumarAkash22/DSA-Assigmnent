const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/naukri");
}

const companySchema = new mongoose.Schema(
    {
        company_name : {type: String, required:true},
        company_address : {type: String, require: true},
        company_type : {type:String, require:true},
        company_foundation:{type:Number, require:false},
        company_totalEmploy:{type:Number,require:false},
        company_rating: {type: Number,required:true},
        company_openjobs:{type:Number,required:true}
    },
    {
        versionKey:false,
        timestamps: true
    }
);
const Company = mongoose.model("company", companySchema);
const app = express();
app.use(express.json());

app.listen(2345,async function(){
    await connect();
    console.log("listening on port 2345")
})