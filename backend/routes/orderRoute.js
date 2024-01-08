const express=require("express")
const{createOrder,getSingleOrder}=require("../controllers/orderController")
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication")
const router=express.Router()


router.route("/Order/new").post(authenication,createOrder)
router.route("/Order/singleOder/:_id").get(authenication,getSingleOrder)

module.exports=router