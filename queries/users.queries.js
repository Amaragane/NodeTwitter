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
exports.findUserPerEmail =  (email) => {
  return User.findOne({ "local.email": email }).exec();
};
exports.findUserPerId =  (id) => {
  return User.findById(id).exec();
};
exports.findUserPerUsername =  (username)=>{
  console.log(username)
  return User.findOne({"userName":username}).exec();
  
}
