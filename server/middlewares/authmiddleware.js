const jwt = require("jsonwebtoken")

const checkToken=(req,res,next)=>{
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token=authHeader.split(" ")[1]

        jwt.verify(token, process.env.JWT_KEY, (err,user)=>{
            if(err){
                res.status(400).json("invalid token")
            }
            req.user=user
          next()

        })
    }else if (req.Authenticated) {
        next()
    }else {
        res.status(400).json("you are not authorized")
    }
}   

const adminAuth=(req, res, next)=>{
    checkToken(req, res,()=>{
      if (req.user.isAdmin) {
          next()
      }
      else{
          res.status(403).json("you are not authorized for this")
      }
    })
  }


  const checkPassword=(req,res,next)=>{
    const passwordCode= req.headers.x-password-token
    
    jwt.verify(passwordCode, process.env.JWT_KEY, (err,password)=>{
        if(err){
            res.status(400).json("invalid token")
            return
        }
        req.user=user
        next()

    })
  }
module.exports ={checkToken,adminAuth,checkPassword}