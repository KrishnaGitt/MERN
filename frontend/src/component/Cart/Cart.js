import React, { Fragment, useState } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";

export const Cart = () => {
    const dispatch=useDispatch();
    const item={
        name:"krishna",
        product:"apple",
        price:120,
        quantity:10,
        stock:10
    }
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
  return (<Fragment>
             <div className="cartPage">
                <div className="cartHeader">
                    <p>product</p>
                    <p>quantity</p>
                    <p>subtotal</p>
                </div>
               
               
                    {cartItems&&cartItems.map((crd)=>(
                     <div className="cartContainer"> 
                    <CartItemCard item={crd}/>
                    <div className="cartInput">
                        <button onClick={decreaseBtn}>-</button>
                        <input className="inputText1" type="number" value={item.quantity} readOnly ></input>
                        <button onClick={()=>increaseQuantity(item.product,item.stock,item.quantity)}>+</button>
                    </div>
                <p className="cartSubtotal">
                    {item.price*item.quantity}
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