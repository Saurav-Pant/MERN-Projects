const express = require("express");
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/expense-tracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

app.listen(3001, () => console.log(`Server is running on port ${3001}`));
