const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gards.config");
const {
  signup,
  signupForm,
  updateImage,
  userProfile,
  userList,
  userFollow,
  userUnfollow,
} = require("../controllers/users.controller");

router.get("/", userList);
router.get("/follow/:userId", userFollow);
router.get("/unfollow/:userId", userUnfollow);
router.get("/:username", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);
router.post("/update/image", ensureAuthenticated, updateImage);
module.exports = router;
