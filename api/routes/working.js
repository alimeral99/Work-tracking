const express = require("express");
const router = express.Router();

const { addWorking, getWorking } = require("../controllers/working");

router.get("/works", getWorking);

router.post("/addworks", addWorking);

module.exports = router;
