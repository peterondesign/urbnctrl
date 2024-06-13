const router = require("express").Router()


router.post("initiate-payment",initiatePayment)
router.post("webhook", paystackWebhook)