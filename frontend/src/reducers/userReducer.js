import React from 'react'

import {
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     REGISTER_USER_REQUEST,
     REGISTER_USER_SUCCESS,
     REGISTER_USER_FAIL
    } from "../constanst/userConstants";
import { UseDispatch,useSelector } from 'react-redux';

export const userReducer = (state={user:{}},action) => {
switch(action.type){
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
        return{
            ...state
        }
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
        return{
            user:action.payload
        }
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
        return{
            user:{},
            error:action.payload
        }  
    default:
        return state;    
    }
   
 }

export default userReducer