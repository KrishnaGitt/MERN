import React, { useState } from "react";
import "./UpdateProfile.css"
import { useDispatch, useSelector } from 'react-redux';
import {updateUser} from "../../actions/userAction"
const UpdateProfile = () => {
  const dispatch=useDispatch();
  const [user,setUser]=useState({
    name:"",
    email:""
  })
  const {name,email}=user
const updateUsers=(e)=>{
  e.preventDefault();
  dispatch(updateUser(name,email))
}

const registerChange=(e)=>{
  let newuser={...user};
  newuser[e.target.name]=e.target.value;
  setUser(newuser)

}

  return (
    <div className="updateProfileContainer">
     
      <div className="updateProfileBox">
      <div className="updateProfileHeading">Update user profile</div>
        <form className="updateProfileForm" onSubmit={updateUsers}>
          <div className="">
            <input
              type="text"
              required
              placeholder="Please enter your name"
              name="name"
              value={name}
              onChange={registerChange}
            />
          </div>
          <div className="">
            <input
              type="email"
              required
              placeholder="Please enter your email"
              name="email"
              value={email}
              onChange={registerChange}
            />
          </div>

          <input  className="updateProfileBtn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
