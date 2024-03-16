const router = require("express").Router()
const passport = require("passport")
 
router.get("/google", passport.authenticate("google", ["profile", "email"]))

router.get("/google/callback",passport.authenticate)

module.exports = router