const {
  pendingEvents,
  completedEvents,
  approvePendingEvent,
  rejectPendingEvent,
} = require("../controllers/eventController");
const adminMiddleware = require("../middlewares/adminMiddleware");

const events = require("express").Router({ mergeParams: true });

events.use(adminMiddleware(["events", "super"]));

events.get("/pending", pendingEvents);
events.post("/pending/:id/approve", approvePendingEvent);
events.post("/pending/:id/reject", rejectPendingEvent);
events.get("/completed", completedEvents);

module.exports = events;
