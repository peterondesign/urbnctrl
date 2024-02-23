const router = require("express").Router()
const {getBlogs, setBlog, editBlog, deleteBlog,getBlogId} = require("../controllers/blogControllers")

router.get("/getBlogs", getBlogs)
router.get("/getBlog/:id", getBlogId)
router.post("/postBlog", setBlog)
router.put("/editBlog/:id",editBlog)
router.delete("/deleteBlog/:id", deleteBlog)


module.exports=router