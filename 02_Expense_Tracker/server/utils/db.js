const mongoose = require("mongoose");
const MONGO_URI = process.env.LOCAL_MONGO_URL;

const connectToDB = mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = connectToDB;
