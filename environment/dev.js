const path = require("path");
module.exports = {
  dbUrl:
    "mongodb+srv://micka:aze@cluster0.vmzjztg.mongodb.net/Twitter?retryWrites=true&w=majority&appName=Cluster0",
  cert: path.join(__dirname, "../ssl/cert.pem"),
  key: path.join(__dirname, "../ssl/key.pem"),
  portHttp: 3000,
  portHttps: 3001,
};
