const app=require("./app");
const dotenv=require("dotenv");
const connectDb=require("./config/database");

dotenv.config({path:"backend/config/config.env"})
connectDb();
const server=app.listen(process.env.PORT,()=>{
    console.log("server is working");
})
//unHandle Promise Rejection 