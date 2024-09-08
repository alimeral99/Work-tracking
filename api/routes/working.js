const express = require("express");
const router = express.Router();

const {
  getWorking,
  createWorking,
  searchWorking,
  comparisonWorking,
} = require("../controllers/working");

router.get("/works", getWorking);
router.get("/comparisonWorks", comparisonWorking);

router.get("/searchWorks/:query", searchWorking);

router.post("/addWorks", createWorking);

module.exports = router;
