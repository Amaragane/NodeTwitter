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
exports.getCurrentUserTweetsWithFollowing = (currentUser) => {
  return Tweet.find({
    author: { $in: [...currentUser.following, currentUser.id] },
  })
    .populate("author")
    .exec();
};
exports.getUserTweetsFromAuthorId = (authorId) => {
  return Tweet.find({ author: authorId }).populate("author").exec();
};
