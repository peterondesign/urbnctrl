const router = require("express").Router()
const {eventBody} = require("../utilis/eventValidator")
const {upload} = require("../controllers/blogControllers")


const {createEvent,deleteEvent,getEvent, getUnapprovedEvent,getUnapprovedEventById} = require("../controllers/eventController")

router.get("/getEvent",getEvent)
router.get("/getUnapprovedEvent",getUnapprovedEvent)
router.get("/getUnapprovedEvent/:id",getUnapprovedEventById)
router.post("/createEvent",upload.array("img"),eventBody,createEvent)
router.delete("/deleteEvent", deleteEvent)


module.exports = router 