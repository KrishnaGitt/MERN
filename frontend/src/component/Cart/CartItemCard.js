import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { removeItemFromCart } from "../../actions/cartAction";
import { useSelector, useDispatch } from "react-redux";


const CartItemCard = ({crd}) => {
    const dispatch=useDispatch();

    const removeItemCart=(productId)=>{
        dispatch(removeItemFromCart(productId))

    }
  return (
    <div className="CartItemCard">
        <p>{`Name:${crd.name}`}</p>
        <span>{`price${crd.price}`}</span>
        <button onClick={()=>removeItemCart(crd.product)}><Link to="/cart"> Remove</Link></button>

    </div>
  )
}

export default CartItemCard