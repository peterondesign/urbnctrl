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
