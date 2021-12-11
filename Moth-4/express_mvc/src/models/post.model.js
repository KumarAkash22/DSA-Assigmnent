const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    roll_id: {type: Number, require: true},
    current_batch: {type: Number, require:true},
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model("post", studentSchema); // posts collection