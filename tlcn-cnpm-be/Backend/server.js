const app = require("./app");

const dotenv = require("dotenv");

// setting config file
dotenv.config({ path: "Backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(
    `server start on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
