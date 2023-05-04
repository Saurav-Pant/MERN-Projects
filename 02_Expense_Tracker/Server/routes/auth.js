const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";
const SUCCESS_URL = "http://localhost:3000/Dashboard/";

router.get("/Authentication/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/Authentication/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: SUCCESS_URL,
    failureRedirect: "/Authentication/failed",
  })
);

module.exports = router;
