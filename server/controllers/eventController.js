const router = require("../events/eventRoute");
const cloudinary = require("../utilis/cloudinary");
const { validationResult, matchedData } = require("express-validator");
const { Events } = require("../models");
const {generatePassword} =require("../utilis/randomSring")
const {mailForOrganizers} = require("../utilis/email")

const createEvent = async (req, res, next) => {
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
const getUnapprovedEvent = async (req, res, next) => {
  const page = parseInt(req.params.page) || 1
  const limit =5
  if (page<1) page =1
  
  try {
    const offset = (page-1) * limit
    const {count,rows} = await Events.findAndCountAll({where:{approved:"pending"},offset:offset,limit:limit}); 
    if (rows.length === 0) {
      res.status(404).json("No events available yet");
      return
    }
    const totalPages=Math.ceil(count/limit)
    res.status(200).json({
      page,limit,totalPages,events:rows
    });
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getEventById = async (req, res, next) => {
  const eventId = req.params.id
  try {
    const eventDetails = await Events.findByPk(eventId)
    const {password, ...others} = eventDetails
    res.status(200).json(others.dataValues)
  } catch (error) {
    const err = new Error(error.message)
    next(err)
  }
};

const approvalChange = async (req, res, next) => {
  const eventId = req.params.id
  const approval = req.body.approval
  try {
    const event = await Events.findByPk(eventId)
    const genPassword = generatePassword()
    event.password=genPassword
    event.approved= approval
    const email = event.email
    await event.save()
    if (approval==="approved") {
      await mailForOrganizers(email, genPassword)
    }
    res.status(201).json("done")
  } catch (error) {
    const err = new Error(error.message)
    next(err)
  }
};

module.exports = {
  createEvent,
  getEvent,
  approvalChange,
  getUnapprovedEvent,
  getEventById,
};
