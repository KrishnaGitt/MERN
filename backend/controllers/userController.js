const User = require("../models/userModel")
const errorHandler=require("../Utils/errorHandler")
const responseHandler=require("../Utils/responseHandler")

exports.registorUser= async(req,resp)=>{
    console.log("aya----------");
   
  try {
    const user= await User.create(req.body)
      if(!user){
          throw new errorHandler(401,"Could not registor the user")
      }
  
      resp.status(200).json(
          new responseHandler(200,user,"User Registor Sucessfully")
      )
  } catch (error) {
    console.log("eeee",error)
  }
}
