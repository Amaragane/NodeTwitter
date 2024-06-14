const { createUser } = require("../queries/users.queries");

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
