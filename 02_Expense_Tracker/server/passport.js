// const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;

// const User = require("./models/userSchema");

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       // create a new user
//       const newUser = {
//         googleId: profile.id,
//         displayName: profile.displayName,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         image: profile.photos[0].value,
//       };

//       try {
//         // find the user
//         let user = await User.findOne({ googleId: profile.id });

//         // if the user exists
//         if (user) {
//           done(null, user);
//         } else {
//           // if the user doesn't exist
//           user = new User(newUser);
//           user = await user.save();
//           done(null, user);
//         }
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });
// module.exports = passport;
