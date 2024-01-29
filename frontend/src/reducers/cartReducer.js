import{
      ADD_TO_CART,
      REMOVE_CART_ITEM,
      SAVE_SHIPPING_INFO ,
} from "../constanst/cartConstants"


  
  export const cartReducer = (
    state = { cartItems: [], shippInfo:{}},
    action
  ) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item = action.payload;
  
        const isItemExist = state.cartItems.find(
          (i) => i.product === item.product
        );
  
        if (isItemExist) {
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.product === isItemExist.product ? item : i
            ),
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, item],
          };
        }
        case REMOVE_CART_ITEM:{
          return{
            ...state,
            cartItems:state.cartItems.filter((i)=>{
              console.log("i.product--->",i.product,"action.payload.product----->",action.payload)
              return i.product!==action.payload
            })
          }
        }
        case SAVE_SHIPPING_INFO:
          return{
            ...state,
            shippInfo:action.payload
          }
      default:
        return state;
    }
  };