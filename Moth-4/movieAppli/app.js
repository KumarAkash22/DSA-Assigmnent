const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const connect = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/entertainment");
}
const userSchema = new mongoose.Schema(
    {
      id: { type: Number, required: true },
      movie_name: { type: String, required: true },
      movie_genre: { type: String, required: false },
      production_year: { type: Number, required: true },
      budget: { type: Number, required: false }
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  const User = mongoose.model("movie", userSchema); 
  app.post("/users", async (req, res) => {
    try {
      const user = await User.create(req.body);
  
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  app.get("/users", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.send({ users });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  const tagSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
  
  const Tag = mongoose.model("tag", tagSchema);
app.listen(2345,async ()=>{
     await connect()
    console.log("Listen on port number")
})