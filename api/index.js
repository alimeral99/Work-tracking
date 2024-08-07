const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

var corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const workingRouter = require("./routes/working");

app.get("", (req, res) => {
  res.send("API is running...");
});
app.use("/working", workingRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
