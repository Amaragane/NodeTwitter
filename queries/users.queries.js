const User = require("../database/models/user.model");

exports.createUser = async (user) => {
  try {
    const hashPassword = await User.hashPassword(user.password);
    const newUser = new User({
      userName: user.username,
      local: {
        email: user.email,
        password: hashPassword,
      },
    });
    return newUser.save();
  } catch (error) {
    throw error;
  }
};
exports.findUserPerEmail = async (email) => {
  return User.findOne({ "local.email": email }).exec();
};
exports.findUserPerId = async (id) => {
  return User.findById(id).exec();
};
