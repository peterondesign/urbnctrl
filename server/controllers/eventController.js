const router = require("../events/eventRoute");
const { validationResult, matchedData } = require("express-validator");
const { Events } = require("../models");

const createEvent = async (req, res, next) => {
  const result = validationResult(req);
  try {
    if (!result.isEmpty()) {
      const fieldErrors = result.array();
      const errMsg = fieldErrors.map((err) => err.msg);
      const error = new Error(errMsg);
      error.status = 400;
      next(error);
    }

    const data = matchedData(req);
    await Events.create(data);
    res.status(201).json("Event submitted for approval");
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const events = await Events.findAll({ where: { approved: "approved" } });
    if (events.length === 0) {
      res.status(404).json("No events available yet");
    }

    res.status(200).json(events);
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getUnapprovedEvent = async (req, res) => {
  console.log("events fetched");
};

const deleteEvent = async (req, res) => {
  console.log("event deleted");
};

module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
  getUnapprovedEvent,
};
