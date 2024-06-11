const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140, "Tweet trop long"],
    minlength: [1, "Tweet trop court"],
    required: [true, "champ requis"],
  },
});
const Tweet = mongoose.model("Tweets", tweetSchema);

module.exports = Tweet;
