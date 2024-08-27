const admins = require("express").Router();
const {
  createAdmin,
  updateAdmin,
  deleteAdmin,
  getAllAdmins,
} = require("../controllers/adminControllers");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { adminBody, adminBodyUnPassword } = require("../middlewares/validator");

admins.use(adminMiddleware(["super"]));

admins.get("/", getAllAdmins);
admins.post("/", adminBody, createAdmin);
admins.put("/:id", adminBodyUnPassword, updateAdmin);
admins.delete("/:id", deleteAdmin);

module.exports = admins;
