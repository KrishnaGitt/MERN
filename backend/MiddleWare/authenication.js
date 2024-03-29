const jwt = require("jsonwebtoken");
const errorHandler = require("../Utils/errorHandler");
const User=require("../models/userModel")

exports.authenication=async(req,res,next)=>{

    const accestoken=req.cookies?.accessToken
  try {
      if(!accestoken){
          throw new errorHandler(404,"please login to aceess the product")
      }
     const decodedtoken= jwt.verify(accestoken,process.env.ACCESS_TOKEN_SECREAT)
     if(!decodedtoken){
      throw new errorHandler(404,"User is not allowed to do login related actvities")
     }
      req.user=await User.findById(decodedtoken._id);
      next();
  } catch (error) {
    throw new errorHandler("400",error);
    
  }
}

exports.authenticateAdmin=(...roles)=>{
return (req,res,next)=>{
    if(!roles.includes(req.user.role)){
        throw new errorHandler(4002,"You are not admin")
    }
    next();
}
}