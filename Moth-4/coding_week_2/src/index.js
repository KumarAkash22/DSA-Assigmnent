const express = require("express");

const productsController = require("./controllers/product.controller");


const app = express();

app.use("/product", productsController)

module.exports = app;