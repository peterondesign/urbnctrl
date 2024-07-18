const nodemailer = require("nodemailer")

const mailForCustomer=async(email, detail)=>{
   
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
         html: `<p>hello ${detail}</p>`,
         text: "testing 1 2"
      })
  
}




const mailForOrganizers=async(email,password)=>{
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
      html: `<p>hello ${password}</p>`,
      text: "testing 1 2"
   })
}

module.exports={mailForOrganizers}