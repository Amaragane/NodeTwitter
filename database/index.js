const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://micka:aze@cluster0.vmzjztg.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connexion ok!");
  })
  .catch((err) => {
    console.log(err);
  });
