const router = require("express").Router()
const {getTickect,createTickect,checkTicket} = require("../controllers/ticketController")


router.get("/getTicket", getTickect)
router.post("/createTicket", createTickect)
router.post("/checkTicket", checkTicket)


module.exports=router