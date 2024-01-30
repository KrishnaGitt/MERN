const express=require("express");

const {addPayment}=require("../controllers/paymentcontroller.js")
const router=express.Router();

router.route("/payment",addPayment)


module.exports=router
