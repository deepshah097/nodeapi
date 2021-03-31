const express = require("express");
const DBConnection = require("./config/databaseConnection");
require("dotenv").config();

const productRouter = require("./api/product/product.router");

const app = express();
DBConnection();

app.use(express.json());
app.use("/api/p", productRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening on PORT : ", process.env.PORT);
});
