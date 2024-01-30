const express=require("express")
const cookieParser=require("cookie-parser")
const app=express();
app.use(cookieParser())
app.use(express.json())
//Routes Imports
const product=require("./routes/productRoute");
const user=require("./routes/userRoute");
const order=require("./routes/orderRoute")
const payment=require("./routes/paymentRoute")
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment)

module.exports=app