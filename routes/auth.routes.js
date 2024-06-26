const router = require("express").Router();
const {
  signin,
  signinForm,
  signout,
} = require("../controllers/auth.controllers");
router.get("/signin/form", signinForm);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
