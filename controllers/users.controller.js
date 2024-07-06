const { createUser,findUserPerUsername } = require("../queries/users.queries");
const multer = require("multer");
const path = require("path");
const { getTweets,getUserTweetsFromAuthorId } = require("../queries/tweets.queries");
const storage = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/images/avatars"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}.${file.originalname}`);
    },
  }),
});
exports.signupForm = (req, res, next) => {
  try {
    res.render("users/user-form", {
      errors: null,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {}
};
exports.signup = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await createUser(body);
    res.redirect("/");
  } catch (error) {
    res.render("users/user-form", {
      errors: [error.message],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};
exports.updateImage = [
  storage.single("avatar"),
  async (req, res, next) => {
    try {
      const user = req.user;
      user.avatar = `/images/avatars/${req.file.filename}`;
      await user.save();
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  },
];
exports.userProfile = async (req, res, next) => {
  try {
    const username = req.params.username;
    const user = await findUserPerUsername(username);
    
    const tweets = await getUserTweetsFromAuthorId(user._id);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user,
      editable: false,
    });
  } catch (error) {
    next(error);
  }
};
