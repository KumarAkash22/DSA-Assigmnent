const express = require("express");

const connect = require("./configs/db"); 

// const User = require("./models/user.models");

// const Tag = require("./models/tag.model")

// const Post = require("./models/post.model")

// const Comment = require("./models/comment.model")

const userController = require("./controllers/users.controllers");

const tagController = require("./controllers/tag.controllers");

const postController = require("./controllers/post.controllers");

const commentController = require("./controllers/comment.controllers");
// Comment Mongoose => Post and comment are one to many relationship




const app = express();

app.use(express.json());

app.use("/posts",postController);
app.use("/comments",commentController);
app.use("/tags",tagController);
app.use("/users",userController);


app.listen(3000, async function () {
  await connect();
  console.log("listening on port 3000");
});









