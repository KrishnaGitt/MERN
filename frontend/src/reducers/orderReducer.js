 import {CREATE_ORDER_REQUEST, 
 CREATE_ORDER_SUCCESS , 
 CREATE_ORDER_FAIL} from "../constanst/orderConstants";
 import { Dispatch } from "redux";

 export const orderReducer=(state={order:{}},action)=>{

    switch(action.type){
        case CREATE_ORDER_REQUEST:
        return{...state,
        loading :true}
        case  CREATE_ORDER_SUCCESS:
            return{state:action.payload}
        case CREATE_ORDER_FAIL:
            return{
                ...state,
                loading:false
        }
        default:
            return{...state}    
    }
 }