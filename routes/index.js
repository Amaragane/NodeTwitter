const router = require("express").Router();
const users = require("./users.routes");
const tweets = require("./tweets.routes");
const auth = require("./auth.routes");
router.use("/tweets", tweets);
router.use("/users", users);
router.get("/", (req, res) => {
  res.redirect("/tweets");
});
router.use("/auth", auth);
module.exports = router;
