const router = require("express").Router()
const {organizerController} = require("../controllers/organizerController")

router.post("/auth", organizerController)

module.exports = router