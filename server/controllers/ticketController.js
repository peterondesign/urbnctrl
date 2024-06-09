
const createTickect=async(req,res,next)=>{
  const {email,vip,regular,table,total,EventId} =req.body

  try {
    if (!email || !vip || !regular || !table || !EventId ) {
        const error = new Error("please fill all required fields")
        error.status = 400
        next(error)
    }
  } catch (error) {
    
  }
}



const getTickect=async()=>{
    
}


module.exports={
    createTickect,
    getTickect
}