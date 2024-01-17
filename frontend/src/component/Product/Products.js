import React from 'react'
import "./Product.css"
import { useDispatch, useSelector } from 'react-redux'
import ProductCart from "../Home/ProductCart.js"

export const Products = () => {
    const dispatch=useDispatch();
    const {product}=useSelector((state)=>state.product)
    console.log("------------ProductComponents",product);
  return (<>
  <h2 className='productsHeading'>Prodducts</h2>
  <div className='products'>
        {product&&product.map((product)=><ProductCart product={product}/>)}
    </div>
  </>
  
  )
}

export default Products;