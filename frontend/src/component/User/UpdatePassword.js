import React from 'react'
import {changeUserPassword} from "../../actions/userAction.js"
import  { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./UpdatePassword.css";
 const UpdatePassword = () => {
  const dispatch=useDispatch();
  const [password,setPassword]=useState({
    oldPassword:"",
    newPassword:"",
    confirmPassword:""
  })

  const {oldPassword,newPassword,confirmPassword}=password;
  const passwordChange=(e)=>{
    let pss={...password}
    pss[e.target.name]=e.target.value;
    setPassword(pss)
  }

  const updatePasswordSubmit=(e)=>{
    e.preventDefault()
    dispatch(changeUserPassword(newPassword,confirmPassword))
  }
  return (
    <Fragment>
          {/* <MetaData title="Change Password" /> */}
          <div className="updatePasswordContainer">
            <div className="updatePasswordBox">
              <h2 className="updatePasswordHeading">Update Profile</h2>

              <form
                className="updatePasswordForm"
                onSubmit={updatePasswordSubmit}
              >
                <div className="loginPassword">
                  
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    name="oldPassword"
                    value={oldPassword}
                     onChange={passwordChange}
                  />
                </div>

                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    name="newPassword"
                    value={newPassword}
                    onChange={passwordChange}
                  />
                </div>
                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={passwordChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn"
                />
              </form>
            </div>
          </div>
        </Fragment>
  )
}

export default UpdatePassword