import React from 'react'
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";


const ComfirmOrder = () => {
  const {cartItems,shippInfo}=useSelector((state)=>state.cart);
  const {user,isAuthenticated}=useSelector((state)=>state.login);
  console.log(cartItems,shippInfo,user)
  const address = `${shippInfo.address}, ${shippInfo.city}, ${shippInfo.state}, ${shippInfo.pin}, ${shippInfo.country}`;
  console.log("address---------->",address)
  return (
    <div className='confirmOrderPage'>
      <div>
        <div className='confirmshippingArea'>
          <div className='confirmshippingAreaBox'>
            <div>
              <p>Name</p>
              <span>{user.name}</span>
            </div>
            <div>
              <p>Email</p>
              <span>{user.email}</span>
            </div>
            <div>
              <p>number</p>
              <span>{shippInfo.number}</span>
            </div>
            <div>
              <p>Address</p>
              <span>{address}</span>
            </div>

          </div>
        </div>
        <div className='confirmCartItems'>
          <div className='confirmCartItemsContainer'>
            {cartItems.map((item)=>(
              <div>
                <p>Name</p>
                <span>{item.name}</span>
                <p>Price</p>
                <span>{item.price}</span>
                <p>quantity</p>
                <span>{item.quantity}</span>
                <p>Total</p>
                <span>
                  {item.price}X{item.quantity}={item.price*item.quantity}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default ComfirmOrder