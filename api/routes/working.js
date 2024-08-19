const express = require("express");
const router = express.Router();

const { getWorking, createWorking } = require("../controllers/working");

router.get("/works", getWorking);

router.post("/addWorks", createWorking);

module.exports = router;
