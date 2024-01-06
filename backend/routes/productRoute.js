const express=require("express");
const {authenication,authenticateAdmin}=require("../MiddleWare/authenication");
const{getAllProducts,createProduct,updateProduct,deleteProduct,getProducts}=require("../controllers/productController");
const router=express.Router();
// router.route("/products").get(getAllProducts);

router.route("/products").get(getAllProducts)
router.route("/products/new").post(authenication,authenticateAdmin("admin"),createProduct)   
router.route("/products/:_id").put(updateProduct)   
router.route("/products/:_id").delete(deleteProduct) 
router.route("/products/:_id").get(getProducts) 


module.exports=router       
