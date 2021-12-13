const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{type:String, required: true},
        email: {type:email, required: true},
        password: {type: password, required: true},
        roles: { type: String, required:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mongoose.model("user",userSchema);