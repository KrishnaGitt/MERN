const mongoose=require("mongoose");
// const Schema=require("mongoose")
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
}

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
module.exports =mongoose.model("User",UserSchema)