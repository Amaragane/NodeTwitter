const express = require("express");
const morgan = require("morgan");
require("./database");
const path = require("path");
const app = express();
module.exports = app;

const routing = require("./routes");
const { error } = require("console");
const errorHandler = require("errorhandler");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routing);

if (process.env.NODE_ENV === "dev") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message,
    });
  });
}
