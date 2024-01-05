const express=require("express");
const {registorUser}=require("../controllers/userController")

const router=express.Router();

router.route("/user/registorUser").post(registorUser)

module.exports=router