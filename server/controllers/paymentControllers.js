const axios = require("axios");
const crypto = require("crypto");
const db = require("../models");

const initiatePayment = async (req, res, next) => {
  const { email, total, vip, regular, table, EventId } = req.body;

  const metadata = { email, total, vip, regular, table, EventId };

  const options = {
    email,
    amount: total * 100,
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
    const err = new Error(error.data.message);
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
        await axios.post("http://localhost:5000/api/ticket/createTicket", {
          email,
          vip,
          table,
          regular,
          EventId,
          total,
        });

        res.status(200).end().json("success");
      } catch (error) {
        const err = new Error(error.message);
        next(err);
      }
    }
  }
};

module.exports = { initiatePayment, paystackWebhook };
