const express = require('express');

const productRedisController = require("./controllers/product_redis.controller");

const app = express();

app.use (express.json());

app.use("/get", productRedisController);
module.exports = app;