const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
    {
      body: { type: String, required: true },
      topic: { type: String, require:true},
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        required: true,
      },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports = mongoose.model("comment", commentSchema); // comments collection