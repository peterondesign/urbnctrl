const { Events } = require("../models");
const jwt = require("jsonwebtoken")

const organizerController=async(req,res,next)=>{

const {password}= req.body

const findEvent = await Events.findOne({where:{password}})
if (!findEvent) {
    const error = new Error("wrong password")
    error.status=400
    next(error)
    return
}
 res.status(200).json({password: generateTRoken(password)})
}


const generateTRoken = (password) => {
  return jwt.sign({ password },process.env.JWT_KEY,{ expiresIn: "1d" });
}
  module.exports ={organizerController}