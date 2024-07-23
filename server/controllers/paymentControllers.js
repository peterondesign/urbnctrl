const axios = require("axios");
const crypto = require("crypto");
const db = require("../models/index")
const { Events } = require("../models");
const { Tickets } = require("../models");
const {generateCode} = require("../utilis/randomSring")
const{ mailForOrganizers,mailForRegular,mailForTable,mailForVIP } = require("../utilis/email");


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
    const { email, vip=[], table=[], regular=[], EventId, total } =details.data.metadata;
  
    if (details.event === "charge.success") {
      const transact =await db.sequelize.transaction()
      //place order
      try {

         const event = await Events.findByPk(EventId,{transaction:transact})
         const vipNumber= vip.length
         const regularpNumber= regular.length
         const tableNumber= table.length

   if (event.vip < vipNumber || event.regular < regularpNumber || event.table < tableNumber){
      const err = new Error("not enough tickets left")
      await transact.rollback()
      err.status = 400
      next(err)
      return
  }
        event.vipTicket-= vipNumber
        event.tableTicket -= tableNumber
        event.regularTicket-= regularpNumber
        await event.save({transaction:transact})

       //for vip
        for (let index = 0; index < vip.length; index++) {
          if (vip.length===0) {
            return null
          }
          const code = generateCode()
          const element = {
             email:vip[index],
             type: "vip",
             EventId,
             total,
             code
          };
          await Tickets.create(element,{transact})
          //await mailForVIP(vip[index],code)

        }
          // for regular
        for (let index = 0; index < regular.length; index++) {
          if (regular.length===0) {
            return null
          }
          const code = generateCode()
          const element = {
             email:regular[index],
             type: "regular",
             EventId,
             total,
             code
          };
          await Tickets.create(element,{transact})
          //await mailForRegular(regular[index],code)
        }
         //fot tables
        for (let index = 0; index < table.length; index++) {
          if (table.length===0) {
            return null
          }
          const code = generateCode()
          const element = {
             email:table[index],
             type: "table",
             EventId,
             total,
             code
          };
            await Tickets.create(element,{transact})
            await mailForTable(table[index],code)

        }

        await transact.commit()
        //await mailForOrganizers("kerryesua9@gmail.com",email)
       return res.status(200).end().json("success");
      } catch (error) {
        console.log(error.message)
        const err = new Error(error.message);
        next(err);
        return res.status(200).end().json("error");
      }
    }  
  }
};

module.exports = { initiatePayment, paystackWebhook };
