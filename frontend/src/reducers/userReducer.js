import React from 'react'

import {
     LOGIN_REQUEST,
     LOGIN_SUCCESS,
     LOGIN_FAIL,
     REGISTER_USER_REQUEST,
     REGISTER_USER_SUCCESS,
     REGISTER_USER_FAIL,
     LOAD_USER_REQUEST,
     LOAD_USER_SUCCESS,
     LOAD_USER_FAIL
    } from "../constanst/userConstants";
import { UseDispatch,useSelector } from 'react-redux';

export const userReducer = (state={user:{}},action) => {
switch(action.type){
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
        return{
            ...state
        }
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:

        return{
            user:action.payload.data
        }
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
        return{
            user:{},
            error:action.payload
        }
    case  LOAD_USER_FAIL:
        return{
            ...state
        }     
    default:
        return state;    
    }
   
 }

export default userReducer