const axios = require("axios");
const crypto = require("crypto");
const db = require("../models");
const { Tickets } = require("../models");


const initiatePayment = async (req, res, next) => {
  const { email, total, vip, regular, table, EventId } = req.body;

  const metadata = { email, total, vip, regular, table, EventId };

  const options = {
    email,
    amount: total * 100,
    callback_url: "https://urbnctrl-frontend.onrender.com/socials",
    channels: ["card", "bank_transfer"],
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
    const { email, vip, table, regular, EventId, total } =
      details.data.metadata;

    if (received.event === "charge.success") {
      //place order
      try {
        await Tickets.create({email,vip,table,regular,EventId,total,})
        res.status(200).end().json("success");
      } catch (error) {
        const err = new Error(error.message);
        next(err);
      }
    }
  }
};

module.exports = { initiatePayment, paystackWebhook };
