import React from "react";
import { Link } from "react-router-dom";


const Product=({product})=>{
    const option={
      edit:false,
      color:"green",
      activeColor:"tomato",
      size:window.innerWidth<600?20:25,
      value:product.rating,
      isHalf:true

    }
    return(
      <>
      <Link className="productCard" to={product._id}>
      <img src={"product.image[0]?.public_id}"}/>
      <p><span>{product.name}</span><span>({product.rating} Rating)</span></p>
      <p><span>{product.price}</span></p>
      </Link>
      </>
    )
}

export default Product