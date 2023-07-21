require("dotenv").config();
const app = require("./index");
const db = require("./utils/db"); // Connect to MongoDB

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
