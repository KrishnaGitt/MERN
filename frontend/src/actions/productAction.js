import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_REQUEST,
  PRODUCTDETAIL_PRODUCT_FAIL,
  PRODUCTDETAIL_PRODUCT_SUCCESS,
  PRODUCTDETAIL_PRODUCT_REQUEST,
  CLEAR_ERROR
} from "../constanst/productConstants";
import axios from "axios";
import { useDispatch } from "react-redux";

export const getProduct =(keyword="")=> async (dispatch) => {
    
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/v1/products?keyword=${keyword}`);
    console.log("-------->>>>>>>",data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export const getProductDetail = (id)=>async (dispatch) => {
  try {
    dispatch({ type:  PRODUCTDETAIL_PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({
      type:  PRODUCTDETAIL_PRODUCT_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type:  PRODUCTDETAIL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};