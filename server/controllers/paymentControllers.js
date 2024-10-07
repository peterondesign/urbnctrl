require("dotenv").config();
const axios = require("axios");
const crypto = require("crypto");
const db = require("../models/index");
const { Events } = require("../models");
const { Tickets } = require("../models");
const { generateCode } = require("../utilis/randomSring");
// const { mailForOrganizers } = require("../utilis/email");

const initiatePayment = async (req, res, next) => {
  const { email, total, vip, regular, table, EventId } = req.body;
  const metadata = { email, total, vip, regular, table, EventId };

  const options = {
    email,
    amount: total * 100,
    callback_url: "https://urbnctrl-frontend.onrender.com/socials",
    channels: ["card"],
    metadata,
  };

  try {
    const paystack = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      options,
      {
        headers: {
          authorization: `Bearer ${process.env.PAYSTACK_API_KEY}`,
          content: "application/json",
        },
      }
    );

    const response = paystack.data?.data.authorization_url;
    res.status(200).json(response);
  } catch (error) {
    const err = new Error(error.response.data.message);
    next(err);
  }
};

const paystackWebhook = async (req, res, next) => {
  const secret = process.env.PAYSTACK_API_KEY;
  const hash = crypto
    .createHmac("sha512", secret)
    .update(JSON.stringify(req.body))
    .digest("hex");
  if (hash === req.headers["x-paystack-signature"]) {
    const details = req.body;
    console.log(details.data.metadata);
    const {
      email,
      vip = [],
      table = [],
      regular = [],
      EventId,
      total,
    } = details.data.metadata;

    if (details.event === "charge.success") {
      const transact = await db.sequelize.transaction();
      //place order
      try {
        const event = await Events.findByPk(EventId, { transaction: transact });
        const vipNumber = vip.length;
        const regularpNumber = regular.length;
        const tableNumber = table.length;
        if (
          event.vip < vipNumber ||
          event.regular < regularpNumber ||
          event.table < tableNumber
        ) {
          const err = new Error("not enough tickets left");
          await transact.rollback();
          err.status = 400;
          next(err);
          return;
        }
        event.vipTicket -= vipNumber;
        event.tableTicket -= tableNumber;
        event.regularTicket -= regularpNumber;

        await event.save({ transaction: transact });
        


      if (regular.length > 0) {
        for (let i = 0; i < regular.length; i++) {
          const email = regular[i];
          const ticketCode= generateCode()
          await Tickets.create(
            { email, type:"regular", EventId, eventName: event.name, total, code: ticketCode },
            { transaction: transact }
          )
         // await sendRegularMail(email,event.name,ticketCode)
          
        }
      }


       if (vip.length > 0) {

        for (let i = 0; i < vip.length; i++) {
          const email = vip[i];
          const ticketCode= generateCode()

          await Tickets.create(
            { email, type:"vip", EventId, total, eventName: event.name,code: ticketCode },
            { transaction: transact }
          )
         // await sendVipMail(email,event.name,ticketCode)
          
        }
       }

       if (table.length > 0) {
        
        for (let i = 0; i < table.length; i++) {
          const email = table[i];
          const ticketCode= generateCode()
          await Tickets.create(
            { email, type:"table", EventId, total, eventName: event.name, code: ticketCode },
            { transaction: transact }
          )
         // await sendTableMail(email,event.name,ticketCode)
          
        }
       }
      
        console.log("worked");
        await transact.commit();
        //await mailForOrganizers("kerryesua9@gmail.com",email,)
        return res.status(200).end().json("success");
      } catch (error) {
        console.log(error.message);
        const err = new Error(error.message);
        next(err);
        return res.status(200).end().json("error");
      }
    }
  }
};

module.exports = { initiatePayment, paystackWebhook };
