import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {getProductDetail} from "../../../src/actions/productAction.js"
import { useEffect } from 'react'
export const ProductDetails = () => {
    const dispatch=useDispatch();
    // const {ProductDetails}=useSelector();//
    console.log("-------->",dispatch)
    useEffect(()=>{
        dispatch(getProductDetail)
    },[dispatch])
  return (
    <div>ProductDetails</div>
  )
}
