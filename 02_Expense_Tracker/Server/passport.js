const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

// Load environment variables or configuration file
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./config');

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "311210694533-tssbtfl1396eock30n6lbjntroj5n5k7.apps.googleusercontent.com",
      // process.env.GOOGLE_CLIENT_ID,
      clientSecret: "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",
      // process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(profile);
        done(null, profile);
      } catch (err) {
        done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
