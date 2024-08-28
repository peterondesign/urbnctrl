const db = require("../models");
const asyncHandler = require("express-async-handler");
const AppError = require("../utilis/AppError");
const { generateToken } = require("../utilis/tokenGen");
const { Op } = require("sequelize");

exports.confirmEventCode = asyncHandler(async (req, res) => {
  const { code } = req.data;

  const event = await db.Events.findOne({
    where: {
      password: code,
    },
  });

  if (!event) {
    throw new AppError("Event not found.", 404);
  }

  const token = generateToken({ code });
  res.status(200).send({
    status: "success",
    message: "Event is valid.",
    token,
  });
});

exports.validateTicket = asyncHandler(async (req, res) => {
  const { ticketCode } = req.data;
  const { code } = req.organizer;

  const event = await db.Events.findOne({
    where: {
      password: code,
    },
  });

  const ticket = await db.Tickets.findOne({
    where: {
      [Op.and]: [{ code: ticketCode }, { EventId: event.id }],
    },
  });

  if (!ticket) {
    throw new AppError("Invalid ticket.", 400);
  }
  res.status(200).send({
    status: "success",
    message: "Ticket is valid.",
    results: ticket,
  });
});

exports.getEvent = asyncHandler(async (req, res) => {
  const { code } = req.organizer;

  const event = await db.Events.findOne({
    where: {
      password: code,
    },
  });

  if (!event) {
    throw new AppError("Event not found.", 404);
  }

  res.status(200).send({
    status: "success",
    results: event,
  });
});
