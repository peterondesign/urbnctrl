const {
  confirmEventCode,
  validateTicket,
  getEvent,
} = require("../controllers/organizerController");
const organizerMiddleware = require("../middlewares/organizerMiddleware");
const { code, ticketCode } = require("../middlewares/validator");

const router = require("express").Router();

router.post("/verify-event", code, confirmEventCode);

router.use(organizerMiddleware);

router.get("/event", getEvent);
router.post("/verify-ticket", ticketCode, validateTicket);

module.exports = router;
