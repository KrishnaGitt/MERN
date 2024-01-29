import React, { useState } from "react";
import "./Shipping.css";
const Shipping = () => {
  const shippingSubmit = (e) => {
    e.preventDefault();
    console.log("shipping submit");
  };
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    pin: "",
    phnumber:""
  });
  const { address, city, pin } = shipping;
  const onShipping = (e) => {
    const newShipping = { ...shipping };
    newShipping[e.target.name] = e.target.value;
    console.log(newShipping);
    setShipping(newShipping);
  };
  return (
    <div className="shippingContainer">
      <div className="shippingBox">
        <p className="shippingHeading"> Add you shipping details</p>
        <form className="shippingForm" onSubmit={shippingSubmit}>
          <div>
            <input
              type="text"
              required
              name="address"
              value={address}
              placeholder="Please enter your address"
              onChange={onShipping}
            />
          </div>
          <div>
            <input
              type="text"
              required
              name="city"
              value={city}
              placeholder="Please enter your city"
              onChange={onShipping}
            />
          </div>
          <div>
            <input
              type="number"
              required
              name="pin"
              value={pin}
              placeholder="Please pin"
              onChange={onShipping}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
