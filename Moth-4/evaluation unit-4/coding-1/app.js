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


const workHomeSchema = new mongoose.Schema(
    {
       company_name : {type:String,required:true},
        company_homeWork: {type:String, required:true},
    },
    {
        timestamps:true,
        versionKey:false
    }
);
const Workhome =mongoose.model("workhome",workHomeSchema);

const app = express();
app.use(express.json());



app.post("/companies",async(req,res) => {
    try{
        const company = await Company.create(req.body);
        return res.status(201).send(company);
    }catch (e){
        return res.status(500).json({Message: e.message,status:"Failed"});
    }
});
app.get("/companies",async (req,res) => {
    try {
        const company = await Company.find().lean().exec();
        return res.send({company});
    }catch (e){
        return res.status(500).json({message: e.message,status:"Failed"});
    }
})


app.listen(2345,async function(){
    await connect();
    console.log("listening on port 2345")
})