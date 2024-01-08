const express=require("express")
const{createOrder,getSingleOrder,getMyOder,getAllOrders,updateOrder,deleteOrder}=require("../controllers/orderController")
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication")
const router=express.Router()


router.route("/Order/new").post(authenication,createOrder)
router.route("/Order/singleOder/:_id").get(authenication,getSingleOrder)
router.route("/Order/getMyOder").get(authenication,getMyOder)
router.route("/Order/getAllOrders").get(getAllOrders)
router.route("/Order/updateOrder/:_id").post(updateOrder)
router.route("Order/deleteOrder/:_id").post(deleteOrder)
module.exports=router