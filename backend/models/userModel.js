const mongoose=require("mongoose");
const crypto=require("crypto")
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"Please enter your name"],
    maxLength:[30,"Name cannot be more then 30"],
    minLength:[4,"Name cannot be less then 4"]
},
password:{
    type:String,
    required:[true,"Please Enter Your Password"],
    maxLength:[30,"password cannot be more then 30"],
    minLength:[2,"password cannot be less then 2"]
},
email:{
    type:String,
    required:[true,"Please Enter Your Email"]
  
},
avatar:{
    public_id:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
},
role:{
    type:String,
    default:"user"
},
refreshToken:{
    type:String
},
resetPasswordToken:String,
resetPasswordExpire:Date

})

UserSchema.pre("save",async function(next){
if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10)
    next();
})

UserSchema.methods.generateAccessToken=function(){
  return jwt.sign(
    {
        _id:this._id
   },
   process.env.ACCESS_TOKEN_SECREAT,
   {
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
   )
}
UserSchema.methods.comparePassword= function(checkPassword){
return  bcrypt.compare(checkPassword,this.password);
}

UserSchema.methods.getResetPasswordToken=function(){
    const resetToken=crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken=crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")
    resetPasswordExpire=Date.now()+15*60*1000
    return resetToken; 
}
module.exports =mongoose.model("User",UserSchema)