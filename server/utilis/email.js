const nodemailer = require("nodemailer");
const ejs = require("ejs");
const AppError = require("./AppError");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async (receipients, subject, data, emailName) => {
  ejs.renderFile(
    `${__dirname}../views/${emailName}.ejs`,
    data,
    async (err, template) => {
      if (err) {
        throw new AppError(err.message);
      } else {
        await transporter.sendMail({
          from: "no-reply@example.com",
          to: receipients,
          subject,
          html: template,
        });
      }
    }
  );
};

module.exports = sendMail;
