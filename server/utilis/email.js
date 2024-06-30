const nodemailer = require("nodemailer")

const mailForOrganizers=async(email)=>{
   
   const transporter= nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth:{
         user: process.env.GMAIL_ADDRESS,
         pass: process.env.GMAIL_PASS
      }
   })
   
      await transporter.sendMail({
         from: process.env.GMAIL_ADDRESS,
         to: email,
         subject: "testing",
         html: "<p>Hello</p>",
         text: "testing 1 2"
      })
  
}




const mailForTickets=()=>{}

module.exports={mailForOrganizers}