require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
// require("./passport");
const expenseRouter = require("./router/routers");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");
const SignupRoute = require("./router/SignUp");
const LoginRoute = require("./router/Login");
const ProfileRoute = require("./router/ProfileImage");

const app = express();
const MONGO_URI = process.env.LOCAL_MONGO_URL;

app.use(express.json({ limit: "10mb" }));

app.use(
  session({
    secret: "sauravpant123",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", expenseRouter);

app.use("/api/records", createRoute); // Route for expense records

app.use("/edit", editRoute); // Route for edit

app.use("/SignUp", SignupRoute); // Route for Signup

app.use("/Login", LoginRoute); // Route for Login

app.use("/ProfileImage", ProfileRoute); // Route for ProfileImage

mongoose
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

// Start the server
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running...");
});
