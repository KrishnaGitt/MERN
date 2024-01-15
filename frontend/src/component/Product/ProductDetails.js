import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {getProductDetail} from "../../../src/actions/productAction.js"
import { useEffect } from 'react'
import "./ProductDetails.css"
import { Link } from "react-router-dom";
export const ProductDetails = () => {
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.productDetails.product);
    console.log("----Product---->",product)
    useEffect(()=>{
        dispatch(getProductDetail)
    },[dispatch])
  return (
    <div className='ProductDetails'>
      <div>
      <Link className="productCard" to={product._id}>
      <img src={"product.image[0]?.public_id}"}/>
      <p><span>{product.name}</span><span>({product.rating} Rating)</span></p>
      <p><span>{product.price}</span></p>
      </Link>
      </div>
    </div>
  )
}
