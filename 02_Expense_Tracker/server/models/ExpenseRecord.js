const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  description: {
    type: String,
  },
});

const ExpenseRecord = mongoose.model("ExpenseRecord", recordSchema);

module.exports = ExpenseRecord;
