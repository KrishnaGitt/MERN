import axios from "axios";
import { useDispatch } from "react-redux";
import{
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO ,
} from "../constanst/cartConstants"

export const addItemsToCart=(id,quantity)=>async(dispatch)=>{
    console.log("inside addItemsToCart")

try {
    const {data}=await axios.get(`/api/v1/products/${id}`)
    console.log("dtata in productcard--->",data,"eeeeee",{data})
    dispatch({
        payload:{
            product:data.product._id,
            name:data.product.name,
            stock:data.product.stock,
            price:data.product.price,
            quantity

        }

    })
} catch (error) {
    
}
}