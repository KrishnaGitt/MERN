import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux';
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from "../constanst/userConstants.js";
import axios from "axios";
import { application } from 'express';

export const getUserLogin =(email,password)=> async(dispatch) => {
    
  dispatch({
    type:LOGIN_REQUEST
  })
// try {
//    // const config = { headers: { "Content-Type": "application/json" } };
  
//     const { data } = await axios.post(
//         `/api/v1/login,
//         ${ email, password }`
//       );
  
     
//     dispatch({
//         type:LOGIN_SUCCESS,
//         payload:data
//     });
// } catch (error) {
//     dispatch({
//         type:LOGIN_FAIL,
//         payload:error.message
//     })
// }
}