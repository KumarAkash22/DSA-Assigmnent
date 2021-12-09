// const app = require("mongoose");
// const { connect } = require("mongoose");
const app = require("./index");
const connect = require("./configs/db")

app.listen(2345, async function(){
    await connect()
    console.log("listening on port 2345");
});