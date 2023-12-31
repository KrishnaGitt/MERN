const express=require("express");
const {registorUser,loginUser,logoutUser,forgotPassword,getUserDetails,changePassword}=require("../controllers/userController")
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication")
const router=express.Router();

router.route("/user/registorUser").post(registorUser)
router.route("/user/loginUser").post(loginUser)
router.route("/user/logoutUser").post(

        authenication,
    logoutUser)

router.route("/password/reset").post(forgotPassword)   
router.route("/user/getUserDetails").get(authenication,getUserDetails)
router.route("/user/changePassword").post(authenication,changePassword)
module.exports=router