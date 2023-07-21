const express = require("express");
const cors = require("cors");
const session = require("express-session");
const createRoute = require("./router/createRoute");
const editRoute = require("./router/editRoute");
const SignupRoute = require("./router/SignUp");
const LoginRoute = require("./router/Login");
const app = express();

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

app.use("/api/records", createRoute); // Route for expense records
app.use("/edit", editRoute); // Route for edit
app.use("/SignUp", SignupRoute); // Route for Signup
app.use("/Login", LoginRoute); // Route for Login

module.exports = app;
