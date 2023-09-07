const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/errors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

app.use(express.json());

//Import all routes
const products = require("./routes/product");

app.use("/api/v1", products);

module.exports = app;
