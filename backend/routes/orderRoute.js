const express=require("express")
const{createOrder,getSingleOrder,getMyOder,getAllOrders}=require("../controllers/orderController")
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication")
const router=express.Router()


router.route("/Order/new").post(authenication,createOrder)
router.route("/Order/singleOder/:_id").get(authenication,getSingleOrder)
router.route("/Order/getMyOder").get(authenication,getMyOder)
router.route("/Order/getAllOrders").get(getAllOrders)

module.exports=router