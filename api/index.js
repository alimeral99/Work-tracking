const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.get("", (req, res) => {
  res.send("API is running...");
});

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
