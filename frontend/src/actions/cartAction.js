import axios from "axios";
import { useDispatch } from "react-redux";
import{
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO ,
} from "../constanst/cartConstants"
import store from "../store.js"


export const addItemsToCart=(id,quantity)=>async(dispatch)=>{
    console.log("inside addItemsToCart")

try {
    const {data}=await axios.get(`/api/v1/products/${id}`)
    dispatch({type:  ADD_TO_CART,
        payload:{
            product:data.product._id,
            name:data.product.name,
            stock:data.product.stock,
            price:data.product.price,
            quantity

        }
        
    })
    localStorage.setItem("cardItems",JSON.stringify(store.getState().cart.cartItems));
} catch (error) {
    
}
}

export const removeItemFromCart=(product)=>(dispatch)=>{

dispatch({
    type:REMOVE_CART_ITEM,
    payload:product
})
localStorage.setItem("cardItems",JSON.stringify(store.getState().cart.cartItems));
}

export const addShipping=(data)=>(dispatch)=>{
    
    dispatch({
        type:SAVE_SHIPPING_INFO,
        payload:data
    })
    localStorage.setItem("shippInfo",JSON.stringify(store.getState().cart.shippInfo))
   
}