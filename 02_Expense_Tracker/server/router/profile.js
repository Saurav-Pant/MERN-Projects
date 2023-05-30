const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.get("/login", async (req, res) => {
  try {
    // Get the authenticated user's ID from the request
    const userId = req.user.id;
    // Fetch the user profile data from the database
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    // Return the user profile data as a response
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
