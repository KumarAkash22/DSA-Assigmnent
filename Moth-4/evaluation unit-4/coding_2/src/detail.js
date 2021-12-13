const express = require("express");
const connect  = require("./configs/db");

const {register,login} = require("./controllers/auth.controller")
const emailController =require("./controllers/email.controller") 
const movieController =require("./controllers/movie.controller") 
const seatController = require("./controllers/seat.controller")
const showController = require("./controllers/show.controller")
const app = express();
app.use(express.json());

app.use("/movies",movieController);
app.use("/shows",showController);
app.use("/seats",showController);
app.use("/shows",showController);
app.use("/movies",movieController);
app.use("/seat",seatController);
app.use("/register",register);
app.use("/login",login)
app.use("/users",emailController);



app.listen(2345, async function(){
    await connect();
    console.log("listening on port 2345")
})