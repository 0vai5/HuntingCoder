const express = require("express");
const app = express();
const userModel = require("./models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require('cors')

const session = require("express-session");
const flash = require("connect-flash");
const postModel = require("./models/post");

passport.use(new LocalStrategy(userModel.authenticate()));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the actual URL of your frontend application
    credentials: true, // Allow cookies and other credentials to be included
  })
);


app.use(flash());
app.set("view engine", "ejs");

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "heyheybyebye",
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());

app.post("/signup", async (req, res) => {
  try {
    const newUser = new userModel({
      username: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      fullname: req.body.fullName,
    });

    userModel.register(newUser, req.body.password, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Error in user registration" });
      }
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});
