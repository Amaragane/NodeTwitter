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
exports.findUserPerEmail = (email) => {
  return User.findOne({ "local.email": email }).exec();
};
exports.findUserPerId = (id) => {
  return User.findById(id).exec();
};
exports.findUserPerUsername = (username) => {
  console.log(username);
  return User.findOne({ userName: username }).exec();
};
exports.searchUsersPerUsername = (search) => {
  const esc = escapeRegExp(search);
  const regExp = `^${esc}`;
  const reg = new RegExp(regExp);
  return User.find({ userName: { $regex: reg } }).exec();
};
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[]\]/g, "$&");
}
exports.addToCurrentUserFollowing = (currentUser, userId) => {
  currentUser.following = [...currentUser.following, userId];
  return currentUser.save();
};
exports.removeToCurrentUserFollowing = (currentUser, userId) => {
  currentUser.following = currentUser.following.filter(
    (objId) => objId.toString() !== userId
  );
  return currentUser.save();
};
