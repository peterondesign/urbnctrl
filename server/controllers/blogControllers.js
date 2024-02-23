const getBlogs=(req,res)=>{
  res.status(200).json("got blog")
}


const getBlogId=(req,res)=>{
   const id = req.params.id
   res.status(200).json({message:`blog ${id} fetched` })
 }
 

 const setBlog=(req,res)=>{
    res.status(201).json("blog set")
   }

   const editBlog=(req,res)=>{
      const id = req.params.id
      res.status(200).json({message:`blog ${id} edited` })
   }

   const deleteBlog=(req,res)=>{
     const id = req.params.id
    res.status(200).json({message:`blog ${id} deleted` })
 }
module.exports={
    getBlogs,
    setBlog,
    editBlog,
    deleteBlog,
    getBlogId
}