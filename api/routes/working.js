const express = require("express");
const router = express.Router();

const {
  createWorking,
  searchWorking,
  comparisonWorking,
} = require("../controllers/working");

router.get("/searchWorks/:query", searchWorking);

router.post("/addWorks", createWorking);
router.post("/comparisonWorks/:query", comparisonWorking);

module.exports = router;
