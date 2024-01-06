const jwt = require("jsonwebtoken");
const errorHandler = require("../Utils/errorHandler");

exports.authenication=async(req,res,next)=>{

    const accestoken=req.cookies?.accessToken
    if(!accestoken){
        throw new errorHandler(404,"please login to aceess the product")
    }
   const decodedtoken= jwt.verify(accestoken,process.env.ACCESS_TOKEN_SECREAT)
   if(!decodedtoken){
    throw new errorHandler(404,"User is not allowed to do login related actvities")
   }
    req.user=decodedtoken;
    console.log("-------->>",decodedtoken);
    next();
}
