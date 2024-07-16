const axios = require("axios");
const crypto = require("crypto");
const db = require("../models/index")
const { Events } = require("../models");
const { Tickets } = require("../models");
const {generateCode} = require("../utilis/randomSring")
const{ mailForOrganizers } = require("../utilis/email");


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
  const hash = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");
  if (hash === req.headers["x-paystack-signature"]) {
    const details = req.body;
    console.log(details.data.metadata)
    const { email, vip, table, regular, EventId, total } =details.data.metadata;
  
    if (details.event === "charge.success") {
      //place order
      try {
        const transact =await db.sequelize.transaction()

         const event = await Events.findByPk(EventId,{transact})

   if (event.vip < vip.length || event.regular < regular.length || event.table < table.length) {
    const err = new Error("not enough tickets left")
    err.status = 400
    next(err)
  }
         console.log("progress...")
        event.vip-= vip?.length
        event.table -= table?.length
        event.regular-= regular?.length
        await event.save({transact})
        console.log("good so far")
        await Tickets.create({email,vip,table,regular,EventId,total, code:generateCode()},{transact})
        console.log("worked")
        await transact.commit()
        //await mailForOrganizers("kerryesua9@gmail.com",email)
        res.status(200).end().json("success");
      } catch (error) {
        console.log(error.message)
        res.status(200).end().json("error");
        await transact.rollback()
        const err = new Error(error.message);
        next(err);
      }
    }  
  }
};

module.exports = { initiatePayment, paystackWebhook };
