const auth = require("express").Router();

const { Login, setup, getMe } = require("../controllers/adminControllers");
const { emailPassword } = require("../middlewares/validator");

auth.post("/login", emailPassword, Login);
auth.post("/setup", emailPassword, setup);
auth.post("/me", getMe);

module.exports = auth;
