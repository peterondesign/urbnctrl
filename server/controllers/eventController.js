const router = require("../events/eventRoute");
const cloudinary = require("../utilis/cloudinary");
const { validationResult, matchedData } = require("express-validator");
const { Events } = require("../models");
const { generatePassword } = require("../utilis/randomSring");
// const { mailForOrganizers } = require("../utilis/email");
const asyncHandler = require("express-async-handler");
const paginateSearch = require("../utilis/paginateSearch");
const { Op } = require("sequelize");
const AppError = require("../utilis/AppError");
const db = require("../models");
const sendMail = require("../utilis/email");
const moment = require("moment");

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

const getEvent = asyncHandler(async (req, res) => {
  const results = await paginateSearch(
    Events,
    ["paginate"],
    {
      approved: "approved",
    },
    {},
    req.query
  );

  res.status(200).send({
    status: "success",
    results,
  });
});

const completedEvents = asyncHandler(async (req, res) => {
  const results = await paginateSearch(
    Events,
    ["paginate", { filter: ["email", "name"] }],
    {
      [Op.or]: [{ approved: "approved" }, { approved: "rejected" }],
    },
    { exclude: "password" },
    req.query
  );
  res.status(200).send({
    status: "success",
    results,
  });
});

const pendingEvents = asyncHandler(async (req, res) => {
  const results = await paginateSearch(
    Events,
    ["paginate", { filter: ["email", "name"] }],
    {
      approved: "pending",
    },
    { exclude: "password" },
    req.query
  );
  res.status(200).send({
    status: "success",
    results,
  });
});

const getUnapprovedEvent = async (req, res) => {
  try {
    const events = await Events.findOne({ where: { approved: pending } });
    if (events.length === 0) {
      res.status(404).json("No events available yet");
    }

    res.status(200).json(events);
  } catch (error) {
    const serverError = new Error(error.message);
    next(serverError);
  }
};

const getUnapprovedEventById = async (req, res, next) => {
  const eventId = req.params.id;
  try {
    const eventDetails = await Events.findByPk(eventId);
    const { password, ...others } = eventDetails;
    res.status(200).json(others.dataValues);
  } catch (error) {
    const err = new Error(error.message);
    next(err);
  }
};

const approvalChange = async (req, res, next) => {
  const eventId = req.params.id;
  const approval = req.body.approval;
  try {
    const event = await Events.findByPk(eventId);
    const genPassword = generatePassword();
    event.password = genPassword;
    event.approved = approval;
    const email = event.email;
    await event.save();
    // await mailForOrganizers("kerryesua9@gmail.com", genPassword);
    res.status(201).json("done");
  } catch (error) {
    const err = new Error(error.message);
    next(err);
  }
};
const approvePendingEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const pendingEvent = await Events.findOne({
    where: {
      [Op.and]: [{ id }, { approved: "pending" }],
    },
  });

  if (!pendingEvent) {
    throw new AppError("Invalid event.", 400);
  }

  db.sequelize.transaction(async (t) => {
    const genPassword = generatePassword();

    await Events.update(
      { approved: "approved", password: genPassword },
      { where: { id }, transaction: t }
    );
    await sendMail(
      pendingEvent.email,
      "Approved event",
      {
        eventName: pendingEvent.name,
        date: moment(pendingEvent?.stateDay).format("dddd, Do MMMM YYYY"),
        eventCode: genPassword,
      },
      "event"
    );

    res.status(200).send({
      status: "success",
      message: "Event was approved successfully.",
    });
  });
});

const rejectPendingEvent = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const pendingEvent = await Events.findOne({
    where: {
      [Op.and]: [{ id }, { approved: "pending" }],
    },
  });

  if (!pendingEvent) {
    throw new AppError("Invalid event.", 400);
  }

  db.sequelize.transaction(async (t) => {
    //send mail
    await Events.update(
      { approved: "rejected" },
      { where: { id }, transaction: t }
    );

    res.status(200).send({
      status: "success",
      message: "Event was rejected successfully.",
    });
  });
});

module.exports = {
  rejectPendingEvent,
  approvePendingEvent,
  createEvent,
  getEvent,
  approvalChange,
  getUnapprovedEvent,
  getUnapprovedEventById,
  pendingEvents,
  completedEvents,
};
