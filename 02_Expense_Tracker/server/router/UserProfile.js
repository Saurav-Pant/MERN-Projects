const express = require("express");
const router = express.Router();

const User = require("../models/UserProfile");

router.post("/profile", async (req, res) => {
  try {
    const { image, name } = req.body;
    const newProfile = new User({
      image,
      name,
    });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ error: "Failed to save the profile." });
  }
});

router.get("/profile", async (req, res) => {
  try {
    const profile = await User.find();
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch profile." });
  }
});

module.exports = router;
