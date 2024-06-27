const mongoose = require("mongoose");
const path = require("path");
const env = require(path.join(
  __dirname,
  `../environment/${process.env.NODE_ENV}`
));
mongoose
  .connect(env.dbUrl)
  .then(() => {
    console.log("Connexion ok!");
  })
  .catch((err) => {
    console.log(err);
  });
