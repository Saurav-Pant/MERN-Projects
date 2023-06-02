const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  profile: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userData = mongoose.model("user", UserSchema);

module.exports = userData;
