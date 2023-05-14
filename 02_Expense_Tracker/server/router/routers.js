const express = require("express");
const router = express.Router();
const passport = require("passport");

// // Callback URL for Google OAuth
// const callbackURL = "/auth/google/callback";

// // Redirect URLs for success and failure
// const successRedirectURL = "/dashboard";
// const failureRedirectURL = "/login";

// // Google OAuth authentication route
// router.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// // Google OAuth callback route
// router.get(
//   callbackURL,
//   passport.authenticate("google", {
//     successRedirect: successRedirectURL,
//     failureRedirect: failureRedirectURL,
//   })
// );

// Routes for user authentication
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect to dashboard page.
    res.redirect("/dashboard");
  }
);

router.get("/login", function (req, res) {
  // Render the login page
  res.render("login");
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/dashboard", isLoggedIn, function (req, res) {
  // Render the dashboard page
  res.render("dashboard", { user: req.user });
});

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

// Export the router
module.exports = router;
