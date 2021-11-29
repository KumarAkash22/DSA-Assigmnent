const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/naukri");
}


const app = express();
app.use(express.json());

app.listen(2345,async function(){
    await connect();
    console.log("listening on port 2345")
})