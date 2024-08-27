const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.generateToken = function (data) {
  return jwt.sign(data, process.env.JWT_KEY, {
    expiresIn: "3d",
  });
};
