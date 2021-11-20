const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send({name:"Akash"})
});
app.listen(2345,function(){
    console.log("listen on port 2345")
});