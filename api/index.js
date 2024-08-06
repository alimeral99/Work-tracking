const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("API is running...");
});

app.listen(4000, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
