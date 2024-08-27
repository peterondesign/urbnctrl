const auth = require("express").Router();

const { Login, setup } = require("../controllers/adminControllers");
const { emailPassword } = require("../middlewares/validator");

auth.post("/login", emailPassword, Login);
auth.post("/setup", emailPassword, setup);

module.exports = auth;
