import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({item}) => {
  return (
    <div className="CartItemCard">
        <p>{`Name:${item.name}`}</p>
        <span>{`price${item.price}`}</span>
    </div>
  )
}

export default CartItemCard