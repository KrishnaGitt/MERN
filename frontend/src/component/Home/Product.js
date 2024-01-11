import React from "react";
import { Link } from "react-router-dom";

const Product=({product})=>{
    console.log(product);
    return(
      <>
      <Link className="productCard" to={product._id}>
      <img src={product.images[0].url}></img>
      <p>{product.name}</p>
      <p>{product.price}</p>
     
      </Link>
      </>
    )
}

export default Product