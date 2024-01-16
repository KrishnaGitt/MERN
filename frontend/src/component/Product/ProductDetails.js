import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {getProductDetail} from "../../../src/actions/productAction.js"
import { useEffect } from 'react'
import "./ProductDetails.css"
import { Link, useParams } from "react-router-dom";
export const ProductDetails = () => {
    let id=useParams();
    const dispatch=useDispatch();
    const {productDetail}=useSelector((state)=>state.productDetails);
    useEffect(()=>{
        dispatch(getProductDetail("65a4e245c06b3c073ededc2d"))
    },[dispatch])
  return (
    <div className='ProductDetails'>
      <div>
      <Link className="productCard" to={productDetail._id}>
      <img src={"productDetail.image[0]?.public_id}"}/>
      <p><span>{productDetail.name}</span><span>({productDetail.rating} Rating)</span></p>
      <p><span>{productDetail.price}</span></p>
      </Link>
      </div>
    </div>
  )
}
