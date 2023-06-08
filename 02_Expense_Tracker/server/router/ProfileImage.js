const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/signup/signup", async (req, res) => {
  try {
    const user = await User.findById(id);
    res.json(user.profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
