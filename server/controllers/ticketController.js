const { Tickets } = require("../models");
const { Events } = require("../models");
const db = require("../models/index")
const {generateCode} = require("../utilis/randomSring")
const{ mailForOrganizers } = require("../utilis/email");
const { where } = require("sequelize");
const { Where } = require("sequelize/lib/utils");

const createTickect=async(req,res,next)=>{
  const {email,vip=[],regular=[],total,EventId} =req.body
  const transact =await db.sequelize.transaction()

  try {
    if (!email || !vip || !regular || !EventId ) {
        const error = new Error("please fill all required fields")
        error.status = 400 
        next(error)
    } 

    const event = await Events.findByPk(EventId,{transact})
  const vipNumber= vip.length
  const regularpNumber= regular.length
  if (event.vip < vipNumber || event.regular < regularpNumber ) { 
    const err = new Error("not enough tickets left")
    err.status = 400
    next(err)
  }
    event.vip -= vipNumber
    event.regular-= regularpNumber
    await event.save({transact})

    for (let index = 0; index < vip.length; index++) {
      const element = {
         email:vip[index],
         type: "vip",
         EventId,
         total : total/vipNumber,
         code: generateCode()
      };
      const created= await Tickets.create(element,{transact})
    }
    for (let index = 0; index < regular.length; index++) {
      const element = {
         email:regular[index],
         type: "regular",
         EventId,
         total: total/regularpNumber,
         code: generateCode()
      };
      const created= await Tickets.create(element,{transact})
      //await mailForOrganizers("kerryesua9@gmail.com",email)
      console.log("ticket regular")
    }
    await transact.commit()

    res.status(201).json("done")


  } catch (error) {
    await transact.rollback()
    const err = new Error(error.message)
    next(err)
  }
}
 


const getTickect=async(req,res,next)=>{
    const allTickets = await Tickets.findAll()
    res.status(200).json(allTickets)
}


const checkTicket=async(req,res,next)=>{
  const {code}= req.body
  const ticketDetails = await Tickets.findOne({where:{code}})

  if (!ticketDetails) {
    const error = new Error("incorrect code")
    error.status =400
    next(error)
    return
  }
  const eventId = ticketDetails.EventId
  const {name} = await Events.findOne({where:{id:eventId}})
  res.status(200).json({name,ticketDetails})
}

module.exports={
    createTickect,
    getTickect,
    checkTicket
}