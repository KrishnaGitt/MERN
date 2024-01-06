const User = require("../models/userModel")
const errorHandler=require("../Utils/errorHandler")
const responseHandler=require("../Utils/responseHandler")
const cookie=require("cookie-parser")
exports.registorUser= async(req,resp)=>{
    const {name,email}=req.body
   
  try {
    const userExist=await User.findOne({
      $or:[{name},{email}]
    })
    if(userExist){
      console.log("--------",userExist.name)
      throw new errorHandler(400,"Username or email id Existed Please try with some other user")
    }
    const user= await User.create(req.body)
      if(!user){
          throw new errorHandler(401,"Could not registor the user")
      }
  const createdUserInDB=await User.findById(user._id).select("-password")
  const token=createdUserInDB.generateAccessToken();
      resp.status(200).json(
          new responseHandler(200,{createdUserInDB,token},"User Registor Sucessfully")
      )
  } catch (error) {
    console.log("eeee",error)
  }
}

exports.loginUser=async(req,res)=>{
  //username|| email and passwordword check
  const{name,password}=req.body
  if(!(name&&password)){
    throw new errorHandler(400,"please enter username or password")
  }
  const user=await User.findOne({
    $or:[{name}]
  }) 
  if(!user){
    throw new errorHandler(400,"User doesnot exits with this username or password")
  }
  const passwordValidate=await user.comparePassword(password)
  console.log("------------->>>>>>>>>",passwordValidate)
  if(!passwordValidate){
    throw new errorHandler(400,"Password is not correect")
  }
  const userExist=await User.findById(user._id).select("-password")
  const acesstoken=userExist.generateAccessToken()
  res.cookie("accessToken",acesstoken).
  status(200).json(
     new responseHandler(400,userExist,"you logged in sucessfully")
  )
}

exports.logoutUser=async(req,res)=>{}
