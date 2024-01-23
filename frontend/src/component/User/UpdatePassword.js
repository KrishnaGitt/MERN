import React from 'react'
import {changeUserPassword} from "../../actions/userAction.js"
import  { Fragment, useState, useEffect } from "react";
import "./UpdatePassword.css";
 const UpdatePassword = () => {

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
    dispatchEvent(changeUserPassword(...password))
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
                    value={oldPassword}
                     onChange={passwordChange}
                  />
                </div>

                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={passwordChange}
                  />
                </div>
                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
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