const express = require("express");
const MockData = require("./MOCK_DATA.json")
const app = express();
app.get("/", (req,res)=>{
    res.send("hello world")
})
app.get("/users", (req,res)=>{
    res.send(MockData)
})
app.listen(2345, ()=>{
    console.log("Listen on port number")
})