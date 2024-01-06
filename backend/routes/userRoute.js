const express=require("express");
const {registorUser,loginUser,logoutUser}=require("../controllers/userController")
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication")
const router=express.Router();

router.route("/user/registorUser").post(registorUser)
router.route("/user/loginUser").post(loginUser)
router.route("/user/logoutUser").post(

        authenication,
    logoutUser)
module.exports=router