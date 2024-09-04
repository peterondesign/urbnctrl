const auth = require("express").Router();

const { Login, setup, getMe } = require("../controllers/adminControllers");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { emailPassword } = require("../middlewares/validator");

auth.post("/login", emailPassword, Login);
auth.post("/setup", emailPassword, setup);
auth.get("/me", adminMiddleware(["events", "super", "blog"]), getMe);

module.exports = auth;
