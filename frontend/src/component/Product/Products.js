import React, { useEffect } from 'react'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux'
import ProductCart from "../Home/ProductCart.js"
import {getProduct} from "../../../src/actions/productAction.js"
import { useParams } from 'react-router-dom'

//import Slider from "material-ui-slider";

//import Typography from '@material-ui/core/Typography';

export const Products = () => {
    const dispatch=useDispatch();
    const {product}=useSelector((state)=>state.product)
    const {keyword}=useParams()
    useEffect(()=>{
      dispatch(getProduct(keyword))
    },[dispatch])
  return (<>
  <h2 className='productsHeading'>Prodducts</h2>
  <div className='products'>
        {product&&product.map((product)=><ProductCart product={product}/>)}
    </div>
  </>
  
  )
}

export default Products;