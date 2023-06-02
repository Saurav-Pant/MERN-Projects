const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get user profile image
router.get("/profile/image", async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("profile");
    res.json({ profile: user.profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
