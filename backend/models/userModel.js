const {mongoose,Schema}=require('./mongoose');

const UserSchema=new Schema({
name:{
    type:String,
    required:[true,"Please enter your name"],
    maxLength:[30,"Name cannot be more then 30"],
    minLength:[4,"Name cannot be less then 4"]
},
password:{
    type:String,
    required:[true,"Please Enter Your Password"],
    maxLength:[30,"Name cannot be more then 30"],
    minLength:[2,"Name cannot be less then 2"]
},
avatar:{
    Public_id:{
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


model.export =mongoose.model("User",UserSchema)