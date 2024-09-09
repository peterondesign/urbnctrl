const nodemailer = require("nodemailer");
const path = require("path");
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
  try {
    const templatePath = path.join(__dirname, "../views", `${emailName}.ejs`);
    const template = await ejs.renderFile(templatePath, data);

    await transporter.sendMail({
      from: "no-reply@example.com",
      to: receipients,
      subject,
      html: template,
    });
  } catch (err) {
    throw new AppError(err.message);
  }
};

module.exports = sendMail;
