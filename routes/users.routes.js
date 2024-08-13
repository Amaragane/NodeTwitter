const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gards.config");
const {
  signup,
  signupForm,
  updateImage,
  userProfile,
  userList,
} = require("../controllers/users.controller");

router.get("/", userList);
router.get("/:username", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);
router.post("/update/image", ensureAuthenticated, updateImage);
module.exports = router;
