// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");

// router.get("/profile", async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.user.id }).select("profile");

//     if (!user) {
//       return res.status(404).json({ msg: "User not found" });
//     }

//     res.json({ profile: user.profile });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });
