const multer = require("multer")
const {Posts} = require("../models")
const cloudinary = require("../utilis/cloudinary")

// FETCH ALL BLOGS
const getBlogs=async(req,res)=>{
   try {
      const allPosts = await Posts.findAll()
      res.status(200).json(allPosts)
   } catch (error) {
      res.status(400).json(error.message)
   }
}

// FETCH A SINGLE BLOG
const getBlogId=async(req,res)=>{
   const id = req.params.id
   try {
      const singleBlog = await Posts.findByPk(id)
      res.status(200).json(singleBlog)
   } catch (error) {
      res.status(400).json(error.message)
   }
 }
 
  //CREATE BLOGPOST
 const setBlog= async(req,res)=>{
    const {title,content,category,author} = req.body

     if (!title || !content || !category || !author) {
       res.status(401).json("fill in all the columns")
    }
     try {
      await Posts.create({title,content,category,author})
      res.status(201).json("blog created")
     } catch (error) {
      res.status(400).json(error 
         .message)
      console.log(error.message)
     }
   }
  //EDIT A BLOG
   const editBlog=async(req,res)=>{
      const id = req.params.id
      const {img,title,content}=req.body

      try {
         const singleBlog = await Posts.findByPk(id)
         singleBlog.img=img
         singleBlog.title=title
         singleBlog.content=content
         await singleBlog.save()
         res.status(201).json("blog edited")
      } catch (error) {
         res.status(400).json(error.message)
      }
   }
  
   //DELETE SINGLE BLOG
   const deleteBlog=async(req,res)=>{
     const id = req.params.id

     try {
      const singleBlog = await Posts.findByPk(id)
      await singleBlog.destroy()
      res.status(200).json("Blog deleted")
     } catch (error) {
      res.status(401).json(error.message)
     }
 }

 const uploadImage =async(req,res)=>{
   try {
       const images = req.files
      const img =[]
      for(const singleImg of images){
         const result = await cloudinary.uploader.upload(singleImg.path)
         img.push(result.url)

         await Images.create({img})
         res.status(201).json(img)
      }
   } catch (error) {
      res.status(400).json(error.message)
   }
 }

  //IMAGE UPLOAD CONTROLLER
   const storage = multer.diskStorage({
      filename : (req,file,cb)=>{
         cb(null, file.originalname)
      },
   })
   const upload =multer({storage:storage})
  
module.exports={
    getBlogs,
    setBlog,
    editBlog,
    deleteBlog,
    getBlogId,
    uploadImage,
    upload
}