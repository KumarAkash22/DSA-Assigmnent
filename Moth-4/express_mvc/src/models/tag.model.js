const mongoose = require("mongoose")


const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: String, required: true },
    instroctor_id: {
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

module.exports = mongoose.model("tag", evaluationSchema); 