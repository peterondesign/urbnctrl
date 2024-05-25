const router = require("express").Router()
const {createEvent,deleteEvent,getEvent} = require("../controllers/eventController")

router.get("/getEvent", getEvent)
router.post("/createEvent", createEvent)
router.delete("/deleteEvent", deleteEvent)


module.exports = router