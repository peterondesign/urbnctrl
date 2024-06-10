const router = require("../events/eventRoute");
const cloudinary = require("../utilis/cloudinary");
const { validationResult, matchedData } = require("express-validator");
const { Events } = require("../models");

const createEvent = async (req, res, next) => {
  const image = req.file;
  try {
    const result = validationResult(req);

    if (!result.isEmpty()) {
      const fieldErrors = result.array();
      const errMsg = fieldErrors.map((err) => err.msg);
      const error = new Error(errMsg);
      error.status = 400;
      next(error);
    }

    const data = matchedData(req);
    const results = await cloudinary.uploader.upload(image.path);
    const img = results.url;
    data.img = img;

    await Events.create(data);
    res.status(201).json("Event submitted for approval");
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getEvent = async (req, res, next) => {
  try {
    const events = await Events.findAll({ where: { approved: "pending" } });
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
  try {
    const events = await Events.findAll({ where: { approved: "pending" } });
    if (events.length === 0) {
      res.status(404).json("No events available yet");
    }

    res.status(200).json(events);
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getUnapprovedEventById = async (req, res) => {
  console.log("event by id");
};

const deleteEvent = async (req, res) => {
  console.log("event deleted");
};

module.exports = {
  createEvent,
  getEvent,
  deleteEvent,
  getUnapprovedEvent,
  getUnapprovedEventById,
};
