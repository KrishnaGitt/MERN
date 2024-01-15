import React from "react";
import { Link } from "react-router-dom";

const Product=({product})=>{
    console.log("insdie product----------->",product);
    return(product?
      <>
      <Link className="productCard" to={product._id}>
      <img src={"product.image[0]?.public_id}"}/>
      <p>{product.name}</p>
      <p>{product.price}</p>
      </Link>
      </>
    :<></>)
}

export default Product