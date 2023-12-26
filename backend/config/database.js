const mongoose=require("mongoose");


const connectDb=()=>{
    mongoose.connect(process.env.DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((data)=>{
    console.log(`dataBase--------------------------- ${data.connection.host}`)

}).catch((erorr)=>{
    console.log(erorr)

})
}
module.exports=connectDb