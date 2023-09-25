const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
// setting config file
dotenv.config({ path: "Backend/config/config.env" });
// connect database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server start on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
// setting
dotenv.config({ path: "backend/config/config.env" });
// su ly loi Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down due to uncaught exception");
  process.exit(1);
});
// su ly loi Unhandled Promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log("Shutting down the server due to Unhandled Promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
