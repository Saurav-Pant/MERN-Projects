// user Schema for sign In with Google OAuth

const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user;
