const express = require("express");
const { signup } = require("../controllers/authController");
const verifyInputs = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup",verifyInputs, signup);

module.exports = router;
