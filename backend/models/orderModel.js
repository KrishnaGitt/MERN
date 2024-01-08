const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  shippInfo: {
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required:true
    },
  },
  orderItem: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      product: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
      },
      quantity:{
        type:Number,
        required:true
      }
    },
  ],
  user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:false
  },
  paymentInfo:{
    id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
  },
paidAt:{
    type:Date,
    required:true
},
itemPrice:{
    type:Number,
    default:0,
    required:true
},
taxPrice:{
    type:Number,
    default:0,
    required:true
},
shippingPrice:{
    type:Number,
    default:0,
    required:true
},
totalPrice:{
    type:Number,
    default:0,
    required:true
},
deliveredAt:Date,
createdAt:{
    type:Date,
    default:Date.now
}
});

module.exports=mongoose.model("OrderSchema",OrderSchema)
