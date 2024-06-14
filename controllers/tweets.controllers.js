const {
  getTweets,
  createTweet,
  deleteTweet,
  getTweet,
  updateTweet,
} = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getTweets();
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (err) {
    next(err);
  }
};
exports.tweetNew = (req, res, next) => {
  try {
    res.render("tweets/tweet-form", {
      tweet: {},
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (err) {
    next(err);
  }
};
exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTweet({ ...body, author: req.user._id });
    res.redirect("/tweets");
  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (key) => err.errors[key].message
    );
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweets();
    res.render("tweets/tweet-list", { tweets });
  } catch (err) {
    next(err);
  }
};
exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await getTweet(tweetId);

    res.render("tweets/tweet-form", {
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (err) {
    next(err);
  }
};
exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  const body = req.body;
  try {
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
    console.log(body);
  } catch (err) {
    console.log(err);
    const errors = Object.keys(err.errors).map(
      (key) => err.errors[key].message
    );
    const tweet = await getTweet(tweetId);
    res.status(400).render("tweets/tweet-form", {
      errors,
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};
