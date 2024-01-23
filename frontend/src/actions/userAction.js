import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL, 
  REGISTER_USER_REQUEST, 
  REGISTER_USER_SUCCESS, 
  RESET_PASSWORD_FAIL, 
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL
} from "../constanst/userConstants.js";
import axios from "axios";


export const changeUserPassword=({oldPassword,newPassword,confirmPassword})=>async(dispatch)=>{

  try{
    dispatch({
      type:UPDATE_PASSWORD_REQUEST
    })
    const {data}=await axios.post("/api/v1/user/changePassword",{oldPassword,newPassword,confirmPassword})

  }catch(error){
    dispatch({
      type:UPDATE_PASSWORD_FAIL,
      payload:error
    })
  }
}


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

export const logOutUser=async(dispatch)=>{
  try{
    await axios.post("/api/v1/user/logoutUser")
    dispatch({
      type:LOGOUT_SUCCESS
    })
  }catch(error){
    dispatch({
      type:LOGOUT_FAIL,
      payload:error
    })
  }
}

export const getCurrentUser=async(dispatch)=>{
try {
  dispatch({type:LOAD_USER_REQUEST})
  const {data}=await axios.get("/api/v1/user/getCurrentUser");
  dispatch({
    type:LOAD_USER_SUCCESS,
    payload:data
  })
} catch (error) {
  dispatch({
    type:LOAD_USER_FAIL,
    payload:error
  })
}

}