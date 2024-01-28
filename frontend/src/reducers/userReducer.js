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
     LOAD_USER_FAIL,
     LOGOUT_SUCCESS,
     LOGOUT_FAIL,
     UPDATE_PROFILE_REQUEST,
     UPDATE_PROFILE_SUCCESS,
     UPDATE_PROFILE_FAIL,
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
            user:action.payload.data,
            isAuthenticated: true,
        }
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case LOAD_USER_FAIL:
        return{
            user:{},
            error:action.payload,
            isAuthenticated: false,
        }
    case  LOAD_USER_FAIL:
        return{
            ...state
        }
    case LOGOUT_SUCCESS:
        return{
            user:null
        }
  
    default:
        return state;    
    }
   
 }

 export const profileReducer=(state={user:{}},action)=>{
    switch(action.type){
        case UPDATE_PROFILE_REQUEST:
            return{
                ...state
            }
        case  UPDATE_PROFILE_SUCCESS:    
            return{
                loading :false,
                state:action.payload.data
            }
        case UPDATE_PROFILE_FAIL:
            return{...state}    

         default:
            return {...state}   
    }
   
 }

export default userReducer