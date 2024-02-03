import React,{Fragment, useRef, useState } from 'react'
import { useSelector, useDispatch} from "react-redux";
import MetaData from "../layout/MetaData";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";
import "./Payment.css"
import {createOrder} from "../../actions/orderAction.js"

const Payment = () => {
   // const stripe = useStripe();
  // const elements = useElements();
  // const payBtn = useRef(null);
  const[a,seta]=useState(10);

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const dispatch = useDispatch();
  const {cartItems,shippInfo}=useSelector((state)=>state.cart);
  const order={
    // shippInfo,
    // orderItem:cartItems,
    // itemPrice:orderInfo.subTotal,
    // taxPrice:orderInfo.tax,
    // totalPrice:orderInfo.totalPrice,
    // ShippingPrice:orderInfo.shippingcharge
  }
  
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log("hello");
  }
  dispatch(createOrder(order))
  return (
    
    <Fragment>
     
       <h1>payment</h1>
      {/* <div className='paymentContainer'>
        <form className='paymentForm' onSubmit={(e)=>submitHandler(e)}>
          <div className='paymentInput'/>
          <div className='paymentInput'/>
          <div className='paymentInput'/>
          <input
            type="submit"
            value={a}
          />
          
        </form>
      </div> */}
    </Fragment>
  )
}

export default Payment