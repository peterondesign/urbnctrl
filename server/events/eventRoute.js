const router = require("express").Router()
const { body}=require("express-validator")
const {eventBody} = require("../utilis/eventValidator")


const {createEvent,deleteEvent,getEvent} = require("../controllers/eventController")

router.get("/getEvent",getEvent)
router.post("/createEvent" ,eventBody,createEvent)
router.delete("/deleteEvent", deleteEvent)


module.exports = router 