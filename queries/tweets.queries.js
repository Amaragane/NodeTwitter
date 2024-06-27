const Tweet = require("../database/models/tweet.model");

exports.getTweets = () => {
  return Tweet.find({}).exec();
};

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);
  return newTweet.save();
};
exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};
exports.getTweet = (tweetId) => {
  return Tweet.findById(tweetId).exec();
};
exports.updateTweet = (tweetId, tweetBody) => {
  return Tweet.findByIdAndUpdate(
    tweetId,
    { $set: tweetBody },
    { runValidators: true }
  );
};
