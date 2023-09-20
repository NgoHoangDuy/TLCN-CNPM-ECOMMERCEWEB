const express = require("express");
const app = express();
const errorMiddleware = require("./middlewares/errors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cookieParser());
//Import all routes
const products = require("./routes/product");
const users = require("./routes/user");

app.use("/api/v1", products);
app.use("/api/v1", users);
app.use(errorMiddleware);

module.exports = app;
