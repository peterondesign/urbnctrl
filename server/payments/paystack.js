const router = require("express").Router()
const {initiatePayment,paystackWebhook} = require("../controllers/paymentControllers")

router.post("/initiate-payment",initiatePayment)
router.post("/webhook", paystackWebhook)

module.exports = router 