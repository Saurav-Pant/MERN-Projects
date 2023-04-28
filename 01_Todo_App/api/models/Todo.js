const mongoose = require("mongoose");
const schema = mongoose.Schema;

const todoSchema = new schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
