const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema(
    {
        show: {
            type: mongoose.Schema.Types.ObjectId,
        },
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

module.exports = mpongoose.module("seat",seatSchema);