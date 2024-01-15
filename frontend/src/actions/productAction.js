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

export const getProduct = async (dispatch) => {
    
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const { data } = await axios.get("/api/v1/products");
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

export const getProductDetail = async (dispatch) => {
    const id="65a4e245c06b3c073ededc2d"
  try {
    dispatch({ type:  PRODUCTDETAIL_PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/v1/products/${id}`);
    console.log("-------->>>>>>>",data.product)
    dispatch({
      type:  PRODUCTDETAIL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:  PRODUCTDETAIL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};