const {
  pendingEvents,
  completedEvents,
} = require("../controllers/eventController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const events = require("express").Router();

adminMiddleware(["events", "super"]);

events.get("/pending", pendingEvents);
events.get("/completed", completedEvents);

module.exports = events;
