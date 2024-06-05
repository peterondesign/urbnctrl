const router = require("../events/eventRoute");

const createEvent = async (req, res, next) => {
  res.json("created");
};

const getEvent = async (req, res) => {
  console.log("events fetched");
};

const deleteEvent = async (req, res) => {
  console.log("event deleted");
};

module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
};
