import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, RESET_PASSWORD_FAIL, REGISTER_USER_FAIL} from "../constanst/userConstants.js";
import axios from "axios";


export const getUserLogin =(email,password)=> async(dispatch) => {
    
  dispatch({
    type:LOGIN_REQUEST
  })
try { 
    const {data} =await axios.post("/api/v1/user/loginUser",{email,password});
     console.log("----------data---",data)
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data
    });
} catch (error) {
    dispatch({
        type:LOGIN_FAIL,
        payload:error.message
    })
}
}

export const registerUser =({name,email ,password})=> async(dispatch) => {
    
  dispatch({
    type:REGISTER_USER_REQUEST
  })
try { 
    const {data} =await axios.post("/api/v1/user/registorUser",{name,email,password});
      console.log("---------data--",data);
    dispatch({
        type:REGISTER_USER_SUCCESS,
        payload:data
    })
} catch (error) {
    dispatch({
        type:REGISTER_USER_FAIL,
        payload:error.message
    })
}
}