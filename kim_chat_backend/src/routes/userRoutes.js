const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");



const router = express.Router();

// Protected route example
router.get("/profile", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to your profile", userId: req.user.id });
});

module.exports = router;
