const router = require("express").Router()
const {signup,login,getMe}= require("../controllers/userControllers")
const {adminAuth} = require("../middlewares/authmiddleware")



router.get("/getMe",adminAuth, getMe)
router.post("/signup", signup)
router.post("/login", login)
  
module.exports = router