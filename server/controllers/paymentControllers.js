const axios = require("axios")


const initiatePayment =async(req,res,next)=>{

const {email,total,vip,regular,table,EventId} =req.body

const metadata={email,total,vip,regular,table,EventId}

const options= {
    email,
    total:total*100,
    metadata
}
try {
    const paystack= await axios.post("https://api.paystack.co/transaction/initialize",options,{
    headers:{
      "authorization":`Bearer ${process.env.PAYSTACK_API_KEY}`,
      "content":"application/json"
    }
  })
  const response = paystack.data?.data.authorization_url
  res.status(200).json(response)
  } catch (error) {
    const err = new Error(err.message)
    next(err)
  }

}