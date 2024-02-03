const express=require("express");

const {addPayment,sendStripeKey}=require("../controllers/paymentcontroller.js")
const router=express.Router();

router.route("/payment").post(addPayment);
router.route("/stripekey").get(sendStripeKey);


module.exports=router
