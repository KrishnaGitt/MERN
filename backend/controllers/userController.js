const User = require("../models/userModel")
const errorHandler=require("../Utils/errorHandler")
const responseHandler=require("../Utils/responseHandler")
const cookie=require("cookie-parser")
const sendEmail=require("../Utils/sendEmail")
exports.registorUser= async(req,resp)=>{
    const {name,email}=req.body
   
  try {
    const userExist=await User.findOne({
      $or:[{name},{email}]
    })
    if(userExist){
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
  }
}

exports.loginUser=async(req,res)=>{
  //username|| email and passwordword check
  const{email,password}=req.body
  if(!(email&&password)){
    throw new errorHandler(400,"please enter username or password")
  }
  const user=await User.findOne({email});
  if(!user){
    throw new errorHandler(400,"User doesnot exits with this username or password")
  }
  const passwordValidate=await user.comparePassword(password)
  if(!passwordValidate){
    throw new errorHandler(400,"Password is not correect")
  }
  const userExist=await User.findById(user._id).select("-password")
  userExist.refreshToken=process.env.REFRESH_TOKEN_SECREAT;
  await userExist.save({ validateBeforeSave: false })
  const acesstoken=userExist.generateAccessToken()
  res.cookie("accessToken",acesstoken).
  status(200).json(
     new responseHandler(400,userExist,"you logged in sucessfully")
  )
}

exports.logoutUser=async(req,res)=>{
  const decodedToken=req.user.id
  res.status(200).
  clearCookie("accessToken").json(
   new responseHandler(
    200,
    "user logged out"
   )
  )
}

exports.forgotPassword=async (req,res)=>{
  const {email}=req.body
  const user=await User.findOne({email})
if(!user){
  throw new errorHandler(404,"Please entered the correct Email id to reset the password")
}
//Get Reset Password Token//saving in database
const resetToken=user.getResetPasswordToken();
await user.save({validateBeforeSave:false})
 
//const resetPasswordUrl=`http://localhost/api/v1/password/reset/${resetToken}`
const resetPasswordUrl=`${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
const message=`your password reset token is:-\n\n${resetPasswordUrl}\n\nIf you have not requested this please ignore`

try {
  await sendEmail({
    email:user.email,
    subject:"Ecommerce Password Recovery",
    message
  })
  res.status(200).json(
    new responseHandler(400,"secess","Email send sucessfully")
  )
} catch (error) {
    user.resetPasswordToken=undefined
    user.resetPasswordExpire=undefined
    await user.save({validateBeforeSave:false})
  }
}

exports.getUserDetails=async (req,res)=>{
  const user=await User.findById(req.user.id)
  if(!user){
    throw new errorHandler(404,"User is not found")
  }

  res.status(200).json(
    new responseHandler(200,user,"Please check your profile")
  )
}

exports.changePassword=async (req,res)=>{
  const {newPassword,confirmPassword}=req.body
  if(newPassword!==confirmPassword){
    throw new errorHandler("404","Please enter the same password")
  }
  const user=await User.findById(req.user.id)
  if(!user){
    throw new errorHandler(404,"Not able to find the user in the data base")
  }
  user.password=newPassword;
await user.save({validateBeforeSave:false})

res.status(200).json(
  new responseHandler(200,user,"PasswordChanged Sucessfully")
)
}


exports.getCurrentUser=async (req,res)=>{
  const {user}=req.body
  const userLoggedIn=await User.findById(req.user.id)
  if(!userLoggedIn){
    throw new errorHandler(404,"Not able to find the user in the data base")
  }
res.status(200).json(
  new responseHandler(200,userLoggedIn,"Logged in Sucessfully")
)
}
exports.changeUserProfile=async(req,res)=>{
 const id=req.user.id;
 const {name,email}=req.body;
 const existedUser=await User.findById(id);
 if(!existedUser){
  throw new errorHandler(204,"Not Able to change the user name or password ")
 }
 existedUser.name=name;
 existedUser.email=email;
 await existedUser.save({validateBeforeSave:false})
 res.status(200).json(
  new responseHandler(200,existedUser,"dataChanged sucessfully")
 )
 }