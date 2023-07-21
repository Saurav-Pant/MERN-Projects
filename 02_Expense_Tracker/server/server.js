// app.js (or your main file name)

require("dotenv").config();
const app = require("./index");
const db = require("./utils/db"); // Connect to MongoDB

const PORT = 3001;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
