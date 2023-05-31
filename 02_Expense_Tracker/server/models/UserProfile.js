const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const UserProfile = mongoose.model("Profile", userSchema);

module.exports = UserProfile;
