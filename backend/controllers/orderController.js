const Order=require("../models/orderModel")
const errorHandler=require("../Utils/errorHandler")
const responseHandler=require("../Utils/responseHandler")

exports.createOrder=async(req,res)=>{
    const
    {
        shippInfo,
        orderItem,
        paymentInfo,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    
    }=req.body

const order=await Order.create({
    shippInfo,
    orderItem,
    paymentInfo,
    itemPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt:Date.now(),
    user:req.user._id
})
res.status(200).json(
    new responseHandler(200,"order","Order created sucessFully")
)
}

exports.getSingleOrder=async(req,res)=>{
    console.log("----------->>>>>",req.params)
const order=await Order.findById(req.params)
if(!order){
    throw new errorHandler(404,"Could able to find the respected order")
}
res.status(200).json(
    new responseHandler(200,order,"Please check the order details")
)
}