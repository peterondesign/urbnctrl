const router = require("express").Router()
const {eventBody} = require("../utilis/eventValidator")
const {upload} = require("../controllers/blogControllers")
const {uploadImage} = require("../controllers/blogControllers")
const {adminAuth} =require("../middlewares/authmiddleware")

const {createEvent,approvalChange,getEvent, getUnapprovedEvent,getEventById} = require("../controllers/eventController")

router.get("/getEvent",getEvent)
router.get("/getUnapprovedEventByPage/:page",getUnapprovedEvent)
router.get("/EventById/:id",adminAuth,getEventById)
router.post("/createEvent",eventBody,createEvent)
router.post("/eventImage",upload.array("img"),uploadImage)
router.put("/changeStatus/:id", approvalChange)


module.exports = router 