const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name:{type:String, required:true},
    actors:[{type:String, required:false}],
    languages: [{type:String, required:false}],
    directors:[{type:String, required:false}],
    poster_url:{type:String, required:false},
},
    {
        versionKey:false,
        timestamps: true,
    }
)

module.exports = mongoose.model("movie",movieSchema);