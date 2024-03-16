const router = require("express").Router()
const {getBlogs, setBlog, editBlog, deleteBlog,getBlogId,upload} = require("../controllers/blogControllers")

router.get("/getBlogs", getBlogs)
router.get("/getBlog/:id", getBlogId)
router.post("/postBlog",upload.array("img"), setBlog)
router.put("/editBlog/:id",editBlog)
router.delete("/deleteBlog/:id", deleteBlog)


module.exports=router