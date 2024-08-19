const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "PATCH,DELETE,POST,GET",
  })
);

const workingRouter = require("./routes/working");

app.use("/api", workingRouter);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(
  process.env.PORT,
  console.log(`Server running on port ${process.env.PORT} `)
);
