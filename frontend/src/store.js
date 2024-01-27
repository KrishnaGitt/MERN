import {createStore,combineReducers,applyMiddleware} from "redux"
import {thunk} from "redux-thunk"
import {productReducers,getProductDetailReducers} from "./reducers/productReducers.js"
import {userReducer,profileReducer} from "./reducers/userReducer.js"
import {cartReducer} from "./reducers/cartReducer.js"
import { composeWithDevTools } from 'redux-devtools-extension'
import { ALL_PRODUCT_FAIL,ALL_PRODUCT_SUCCESS,ALL_PRODUCT_REQUEST ,CLEAR_ERROR} from "./constanst/productConstants.js";


const reducer=combineReducers({
    product:productReducers,
    productDetails:getProductDetailReducers,
    login:userReducer,
    profileUpdate:profileReducer
    ,cart:cartReducer
})

let initialstate={
    cart:{
        cartItems:localStorage.getItem("cardItems")?JSON.parse(localStorage.getItem("cardItems")):[]
    }
}


const store=createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(thunk))
)

//applyMiddleware(thunk.default)
// console.log(store.getState());

// store.dispatch({type:ALL_PRODUCT_SUCCESS,payload:100})

export default store;