const { Tickets } = require("../models");
const { Events } = require("../models");
const db = require("../models/index")
const {generateCode} = require("../utilis/randomSring")

const createTickect=async(req,res,next)=>{
  const {email,vip,regular,table,total,EventId} =req.body

  try {
    if (!email || !vip || !regular || !table || !EventId ) {
        const error = new Error("please fill all required fields")
        error.status = 400 
        next(error)
    } 
    const transact =await db.sequelize.transaction()

    const event = await Events.findByPk(EventId,{transact})

  if (event.vip < vip || event.regular < regular || event.table < table) {
    const err = new Error("not enough tickets left")
    err.status = 400
    next(err)
  }
    event.vip -= vip
    event.table -= table
    event.regular-= regular
    await event.save({transact})
    await Tickets.create({email,vip,regular,table,EventId,total, code:generateCode()},{transact})
    await transact.commit()
    res.status(201).json("ticket(s) purchased successfully!") 

  } catch (error) {
    await transact.rollback()
    const err = new Error(error.message)
    next(err)
  }
}
 


const getTickect=async()=>{
    
}


module.exports={
    createTickect,
    getTickect
}