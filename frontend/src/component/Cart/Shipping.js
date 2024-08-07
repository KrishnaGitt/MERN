import React, { useState } from "react";
import "./Shipping.css";
import { useLocation, useNavigate } from 'react-router-dom'
import { Country, State } from "country-state-city";
import{addShipping} from "../../actions/cartAction.js"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const location=useLocation();
  console.log("lo------->",location);
  const shippingSubmit = (e) => {
    e.preventDefault();
    console.log("shipping submit");
    dispatch(addShipping(shipping));
    navigate("/orders/confirmOrder")
  };
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    pin: "",
    number:"",
    country:"",
    state:""
  });
  const { address, city, pin ,number,country,state} = shipping;
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
          <div>
            <input
              type="number"
              required
              name="number"
              value={number}
              placeholder="Please enter number"
              onChange={onShipping}
            />
          </div>
          <div>
              <select
                value={country}
                required
                name="country"
                onChange={onShipping}>
                <option value="">Country</option>
                {Country.getAllCountries().map((item)=>(
                  <option key={item.isoCode} value={item.isoCode}> {item.name}</option>
                ))}
              </select>
          </div>
          <div>
              <select
                value={state}
                required
                name="state"
                onChange={onShipping}>
                <option value="">State</option>
                { country&& State.getStatesOfCountry(country).map((item)=>(
                  <option key={item.isoCode} value={item.isoCode}> {item.name}</option>
                ))}
              </select>
          </div>
          <input
          type="submit"
          value="continue"
          className="shippingBtn"
          disabled={state?false:true}
          />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
