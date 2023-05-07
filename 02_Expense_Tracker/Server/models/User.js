const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  username: {
    type: String,
    required: [true, "Please Provide a UserName"],
  },

  email: {
    type: String,
    required: [true, "Please Provide a Email"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please Provide a Valid Email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please Provide a Password"],
    unique: true,
    minlength: 6,
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.passwordMatch = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const user = mongoose.model("user", userSchema);
module.exports = user;
