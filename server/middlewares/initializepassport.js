const passport = require("passport")



const initializePassport=(req,res,next)=>{
    if(req.path.startWith("/auth/google")){
        passport.initialize()(req,res,next)
    }
    else {
        next()
    }
    
} 

 
    
module.exports = initializePassport