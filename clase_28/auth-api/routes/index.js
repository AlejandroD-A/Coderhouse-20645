const express = require("express");
const passport = require("passport");
const User = require("../models/User");
const router = express.Router();

/*
  ALL YOUR ROUTES HERE!
*/

router.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    console.log("The user already exists");
    return res.sendStatus(400);
  }

  const newUser = new User(req.body);
  await newUser.save();

  return res.status(201).send(newUser);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.get("/secret", (req, res) => {
  if (req.user) {
    res.send("cake.jpg");
  } else {
    res.sendStatus(401);
  }
});

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  res.send(req.user);
});

// Don´t modify this route, keep it at the bottom.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
