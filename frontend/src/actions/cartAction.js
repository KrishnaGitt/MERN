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
    console.log("dtata in productcard--->",data,"eeeeee",{data})
    dispatch({type:  ADD_TO_CART,
        payload:{
            product:data.product._id,
            name:data.product.name,
            stock:data.product.stock,
            price:data.product.price,
            quantity

        }
        
    })
    localStorage.setItem("cardItem",JSON.stringify(store.getState().cart.cartItems));
} catch (error) {
    
}
}