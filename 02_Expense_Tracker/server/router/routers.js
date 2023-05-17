const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/authentication/success", (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
      cookies: req.cookies,
    });
  }

  res.json({
    success: false,
    message: "User has not been authenticated",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/authentication");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashboard",
    failureRedirect: "http://localhost:3000/authentication",
  })
);

// Export the router
module.exports = router;
