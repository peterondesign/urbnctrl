const router = require("express").Router()
const {getTickect,createTickect} = require("../controllers/ticketController")


router.get("/getTicket", getTickect)
router.post("/getTicket", createTickect)


module.exports=router