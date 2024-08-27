const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/admins", require("./admins"));
router.use("/events", require("./events"));
router.use("/blog", require("./blogs"));

module.exports = router;
