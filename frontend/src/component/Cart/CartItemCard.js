import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({item}) => {
  return (
    <div className="CartItemCard">User name:{item.name}</div>
  )
}

export default CartItemCard