import React, { Fragment, useState } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";

export const Cart = () => {
    const dispatch=useDispatch();
    // const {cartItems}=useSelector((state)=>state.cart)
    const [subTotal,setSubTotal]=useState(0);
    const {cartItems}=useSelector((state)=>state.cart)
    console.log("--cartItems------",cartItems)
    // const [quantity,setQuantity]=useState(1);
    const decreaseBtn=()=>{
       
    }
    cartItems.map((crd)=>console.log("-------vairable"))

    const increaseQuantity=(id,stock,quantity)=>{
        if(stock<=quantity){return}
        let newQauntity =quantity+1;
            dispatch(addItemsToCart(id,newQauntity));
    }
    const decreaseQuantity=(id,stock,quantity)=>{
        if(quantity<=1){return}
        const newQauntity=quantity-1;
        dispatch(addItemsToCart(id,newQauntity))
    }
  return (<Fragment>
             <div className="cartPage">
                <div className="cartHeader">
                    <p>product</p>
                    <p>quantity</p>
                    <p>subtotal</p>
                </div>
               
               
                    {cartItems&&cartItems.map((crd)=>(
                     <div className="cartContainer"> 
                    <CartItemCard crd={crd}/>
                    <div className="cartInput">
                        <button onClick={()=>decreaseQuantity(crd.product,crd.stock,crd.quantity)}>-</button>
                        <input className="inputText1" type="number" value={crd.quantity} readOnly ></input>
                        <button onClick={()=>increaseQuantity(crd.product,crd.stock,crd.quantity)}>+</button>
                    </div>
                <p className="cartSubtotal">
                    {crd.price*crd.quantity}
                </p>
                </div>))}
                <div className="cartGrossProfit">
                    <div></div>
                    <div className="cartGrossProfitBox">
                        <p>{`gross totoal`}</p>
                        <p>{`600`}</p>
                        <p></p>
                    </div>

                    <div></div>
                    <div className="checkOutBtn">
                        <button>checkout</button>
                    </div>

                </div>
             </div>
           
        </Fragment>
   
  )
}
 export default Cart;