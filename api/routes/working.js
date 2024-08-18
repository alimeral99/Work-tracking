const express = require("express");
const router = express.Router();

const { addWorking, getWorking } = require("../controllers/working");

router.get("/works", getWorking);

router.post("/add", addWorking);

module.exports = router;
