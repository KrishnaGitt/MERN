import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import {getProductDetail} from "../../../src/actions/productAction.js"
import { useEffect } from 'react'
import "./ProductDetails.css"
import { Link, useParams } from "react-router-dom";
import { ReviewCard } from './ReviewCard.js'
export const ProductDetails = () => {
    let {id}=useParams();
    const dispatch=useDispatch();
    const {productDetail}=useSelector((state)=>state.productDetails);
    useEffect(()=>{
        dispatch(getProductDetail(id))
    },[dispatch])
    console.log("productDetail---",productDetail);
    console.log("productDetail.review-------",productDetail.review)
  return (<>
  {productDetail.name? <div className='ProductDetails'>
    
    <div className='"detailsBlock-1'>
    <h2>{productDetail.name}</h2>
    <p>Product#{productDetail._id}</p>
    <p>Product#{productDetail["name"]}</p>
    </div>
    <div className='detailsBlock2'>
      
      <span>{productDetail&& productDetail?.review?.map((review)=><ReviewCard review={review}/>)}</span>

    </div>
    <div className='detailsBlock-3'>
      <h1>{productDetail?.price}</h1>
      <div className='detailBlock-3-1'>
          <div className='detailsBlock3-1-1'>
            <button>-</button>
            <input value="1" type="number"></input>
            <button>+</button>
          </div>
          <button>add to card</button>   
      </div>
      <p>Status
        <b className={productDetail.stock<1?"red":"green"}>{productDetail.stock}</b>
      </p>
      <div className='detailsBlock-4'>
        Description:{productDetail.description}
      </div>
      <button className='submitReview'>Submit</button>
    </div>
  </div>:<></>
}
 
</>
  
  )
}
