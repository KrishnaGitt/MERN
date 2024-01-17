const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    description:{
        type:String,
        required:[true,"Please enter the product Details"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter the price"],
        maxLength:[8,"The max length is 8"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
       { public_id:{
            type:String,
            required:true
        }
    },
        {url:{
            type:String,
            required:true
        }
    }
    ],
    category:{
        type:String,
        required:[true,"Please enter price"]
    },
    stock:{
        type:Number,
        required:[true,"Please enter the stock"],
        maxLength:[3,"Stocks cannot acces"],
        default:0
    },
    review:[
        {
            name:{
            type:String,
            required:[true,"Please enter the reviews"]
        }
    ,
    
        rating:{
            type:Number,
            required:[true, "please provide rating"]
        }
    ,
    
        comment:{
            type:String,
            required:false
        }
    }
    ],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports =mongoose.model("Product",ProductSchema)