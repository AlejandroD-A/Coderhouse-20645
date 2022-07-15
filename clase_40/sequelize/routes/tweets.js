const express = require("express");
const router = express.Router();
const { Tweet, User } = require("../models");

router.get("/", (req, res) => {
  Tweet.findAll({ include: { model: User } }).then((tweets) =>
    res.send(tweets)
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Tweet.findByPk(id).then((tweet) => res.send(tweet));
});

router.post("/", (req, res) => {
  const { username } = req.body;
  User.findOrCreate({ where: { username } }).then((data) => {
    const user = data[0];
    Tweet.create(req.body)
      .then((newTweet) => {
        newTweet.setUser(user);
        res.status(201).send(newTweet);
      })
      .catch((err) => {
        res.sendStatus(500);
        console.log("ERR", err);
      });
  });
});

module.exports = router;
