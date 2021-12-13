const mongoose = require("mongoose");
const theaterSchema = new mongoose(
    {
        name:{type:String, require:true},
        location: {type: String, require:true}
    },
    {
        versionKey:false,
        timestamps:true,
    }
);

module.exports = mongoose.model("theatre",theaterSchema);