const express = require("express");
const router = express.Router();

const {
  getWorking,
  createWorking,
  searchWorking,
} = require("../controllers/working");

router.get("/works", getWorking);

router.post("/addWorks", createWorking);
router.post("/searchWorks/:query", searchWorking);

module.exports = router;
