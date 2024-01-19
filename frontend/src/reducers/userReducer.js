import React from 'react'

import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../constanst/userConstants";
import { UseDispatch,useSelector } from 'react-redux';

export const userReducer = (state={user:{}},action) => {
switch(action.type){
    case LOGIN_REQUEST:
        return{
            ...state
        }
    case LOGIN_SUCCESS:
        return{
            user:action.payload
        }
    case LOGIN_FAIL:
        return{
            user:{},
            error:action.payload
        }  
    default:
        return state;    
    }
   
 }

export default userReducer