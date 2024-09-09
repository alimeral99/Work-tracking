const express = require("express");
const router = express.Router();

const {
  getWorking,
  createWorking,
  searchWorking,
  comparisonWorking,
} = require("../controllers/working");

router.get("/works", getWorking);

router.get("/searchWorks/:query", searchWorking);

router.post("/addWorks", createWorking);
router.post("/comparisonWorks/:query", comparisonWorking);

module.exports = router;
