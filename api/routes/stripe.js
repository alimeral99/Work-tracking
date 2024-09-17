const express = require("express");
const router = express.Router();

const { makingPayment } = require("../controllers/stripe");

router.post("/payment", makingPayment);

module.exports = router;
