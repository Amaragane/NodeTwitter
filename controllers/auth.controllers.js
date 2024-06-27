const passport = require("passport");

exports.signin = (req, res, next) => {
  try {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        next(err);
      } else if (!user) {
        res.render("auth/auth-form", {
          errors: [info.message],
          isAuthenticated: req.isAuthenticated(),
          currentUser: req.user,
        });
      } else {
        req.login(user, (err) => {
          if (err) {
            next(err);
          } else {
            res.redirect("/tweets");
          }
        });
      }
    })(req, res, next);
  } catch (error) {}
};
exports.signinForm = (req, res, next) => {
  try {
    res.render("auth/auth-form", {
      errors: null,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.signout = (req, res, next) => {
  try {
    req.logout((err) => {
      err ? next(err) : res.redirect("/auth/signin/form");
    });
  } catch (error) {
    console.log(error);
  }
};
