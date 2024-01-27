import React, { Fragment, useState } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";

export const Cart = () => {
    const item={
        name:"krishna",
        product:"apple",
        price:120,
        quantity:10
    }
    const [subTotal,setSubTotal]=useState(0);
    const {cartItems}=useSelector((state)=>state.cart)
    console.log("--cartItems------",cartItems)
    const [quantity,setQuantity]=useState(1);
    const decreaseBtn=()=>{
       
    }
    cartItems.map((crd)=>console.log("-------vairable"))
  return (<Fragment>
             <div className="cartPage">
                <div className="cartHeader">
                    <p>product</p>
                    <p>quantity</p>
                    <p>subtotal</p>
                </div>
               
                <div className="cartContainer"> 
                    {cartItems&&cartItems.map((crd)=><CartItemCard item={crd}/>)}
                    <div className="cartInput">
                        <button onClick={decreaseBtn}>-</button>
                        <input className="inputText1" type="number" value={quantity} readOnly ></input>
                        <button>+</button>
                    </div>
                <p className="cartSubtotal">
                    {item.price*item.quantity}
                </p>
                </div>
             </div>
           
        </Fragment>
   
  )
}
 export default Cart;