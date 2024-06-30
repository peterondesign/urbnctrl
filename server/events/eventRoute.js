const router = require("express").Router()
const {eventBody} = require("../utilis/eventValidator")
const {upload} = require("../controllers/blogControllers")
const {uploadImage} = require("../controllers/blogControllers")

const {createEvent,approvalChange,getEvent, getUnapprovedEvent,getUnapprovedEventById} = require("../controllers/eventController")

router.get("/getEvent",getEvent)
router.get("/getUnapprovedEvent",getUnapprovedEvent)
router.get("/getUnapprovedEvent/:id",getUnapprovedEventById)
router.post("/createEvent",eventBody,createEvent)
router.post("/eventImage",upload.array("img"),uploadImage)
router.put("/changeStatus/:id", approvalChange)


module.exports = router 