const express = require("express");
const router = express.Router();

const {
  createWorking,
  searchWorking,
  comparisonWorking,
} = require("../controllers/working");

const { authenticateJWT } = require("../utils/authMiddleWare");
const { checkPremiumUser } = require("../utils/checkPremiumUser");

router.get("/searchWorks/:query", authenticateJWT, searchWorking);
router.get(
  "/comparisonWorks/:query",
  authenticateJWT,
  checkPremiumUser,
  comparisonWorking
);

router.post("/addWorks", authenticateJWT, createWorking);

module.exports = router;
