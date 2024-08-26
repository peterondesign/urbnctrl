const blog = require("express").Router();
const { setBlog } = require("../controllers/blogControllers");
const adminMiddleware = require("../middlewares/adminMiddleware");

adminMiddleware(["blog", "super"]);
blog.post("/", setBlog);

module.exports = blog;
