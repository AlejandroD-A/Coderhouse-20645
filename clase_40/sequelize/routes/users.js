const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  User.findOne({ where: { username } }).then((user) => res.send(user));
});

module.exports = router;
