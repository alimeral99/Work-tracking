const express = require("express");
const router = express.Router();

const {
  getWorking,
  createWorking,
  searchWorking,
} = require("../controllers/working");

router.get("/works", getWorking);
router.get("/searchWorks/:query", searchWorking);

router.post("/addWorks", createWorking);

module.exports = router;
