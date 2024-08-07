const express = require("express");
const router = express.Router();

const { addWorking, getWorking } = require("../controllers/working");

router.post("/add", addWorking);
router.get("/get", getWorking);

module.exports = router;
