import{
      ADD_TO_CART,
      REMOVE_CART_ITEM,
      SAVE_SHIPPING_INFO ,
} from "../constanst/cartConstants"

export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{
                cartItems:action.payload
            }
             
    }
   
return {...state}
}