const express = require("express");
const router = express.Router();
const Tweet = require("../database/models/tweet.model");
const {
  tweetList,
  tweetNew,
  tweetCreate,
  tweetDelete,
  tweetEdit,
  tweetUpdate,
} = require("../controllers/tweets.controllers");

router.get("/new", tweetNew);
router.get("/", tweetList);
router.delete("/:tweetId", tweetDelete);
router.post("/", tweetCreate);
router.get("/edit/:tweetId", tweetEdit);
router.post("/update/:tweetId", tweetUpdate);

module.exports = router;
