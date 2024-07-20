const router = require("express").Router()
const {checkPassword} = require("../middlewares/authmiddleware")
const {getTickect,createTickect,checkTicket} = require("../controllers/ticketController")


router.get("/getTicket", getTickect)
router.post("/createTicket", createTickect)
router.post("/checkTicket",checkPassword, checkTicket)

  
module.exports=router