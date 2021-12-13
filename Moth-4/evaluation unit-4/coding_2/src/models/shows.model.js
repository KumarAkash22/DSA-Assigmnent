const mongoose = require("mongoose");

const showShema = new mongoose.Schema(
    {
        timing: {type: Date, required:true},
        movie:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"movie",
            required:true,
        },
        total_seat: {type:Number, required:true},
        screen: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"screen",
            required:true,
    },
},

    {
        versionKey:false,
        timestamps:true,
    }  
) 

module.exports = mongoose.model("show", showShema);