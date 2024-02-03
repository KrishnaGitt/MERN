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

const Payment = () => {
  const dispatch = useDispatch();
  // const stripe = useStripe();
  // const elements = useElements();
  // const payBtn = useRef(null);
  const[a,seta]=useState(10);
  const submitHandler=(e)=>{
      e.preventDefault();
      console.log("hello");
  }
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