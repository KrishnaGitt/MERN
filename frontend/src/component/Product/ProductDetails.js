import React from 'react'
import { UseDispatch,useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
export const ProductDetails = () => {
    const dispatch=useDispatch();
    const {ProductDetails}=useSelector();
    // useEffect(()=>{
    //     dispatch()
    // },[])
  return (
    <div>ProductDetails</div>
  )
}
