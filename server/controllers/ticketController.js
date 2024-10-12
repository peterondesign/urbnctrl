require("dotenv").config();
const { Tickets } = require("../models");
const { Events } = require("../models");
const db = require("../models/index");
const { generateCode } = require("../utilis/randomSring");
// const { mailForOrganizers } = require("../utilis/email");
const asyncHandler = require("express-async-handler");

const createTickect = async (req, res, next) => {
  const { email, vip, regular, table, total, EventId } = req.body;

  try {
    if (!email || !vip || !regular || !table || !EventId) {
      const error = new Error("please fill all required fields");
      error.status = 400;
      next(error);
    }
    const transact = await db.sequelize.transaction();

    const event = await Events.findByPk(EventId, { transact });
    const vipNumber = vip.length;
    const regularpNumber = regular.length;
    const tableNumber = table.length;
    if (
      event.vip < vipNumber ||
      event.regular < regularpNumber ||
      event.table < tableNumber
    ) {
      const err = new Error("not enough tickets left");
      err.status = 400;
      next(err);
    }
    event.vip -= vipNumber;
    event.table -= tableNumber;
    event.regular -= regularpNumber;
    await event.save({ transact });
    const created = await Tickets.create(
      { email, vip, regular, table, EventId, total, code: generateCode() },
      { transact }
    );
    await transact.commit();
    //await mailForOrganizers("kerryesua9@gmail.com",email)
    console.log("ticket created");
    res.status(201).json(created);
  } catch (error) {
    await transact.rollback();
    const err = new Error(error.message);
    next(err);
  }
};

const getTickect = async (req, res, next) => {
  const allTickets = await Tickets.findAll();
  res.status(200).json(allTickets);
};

const checkTicket = async (req, res, next) => {
  const { code } = req.body;
  const ticketDetails = await Tickets.findOne({ where: { code } });

  if (!ticketDetails) {
    const error = new Error("incorrect code");
    error.status = 400;
    next(error);
    return;
  }
  const eventId = ticketDetails.EventId;
  const { name } = await Events.findOne({ where: { id: eventId } });
  res.status(200).json({ name, ticketDetails });
};

module.exports = {
  createTickect,
  getTickect,
  checkTicket,
};
