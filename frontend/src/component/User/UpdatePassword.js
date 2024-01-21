import React from 'react'
import  { Fragment, useState, useEffect } from "react";
import "./UpdatePassword.css";
 const UpdatePassword = () => {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Fragment>
          {/* <MetaData title="Change Password" /> */}
          <div className="updatePasswordContainer">
            <div className="updatePasswordBox">
              <h2 className="updatePasswordHeading">Update Profile</h2>

              <form
                className="updatePasswordForm"
                // onSubmit={updatePasswordSubmit}
              >
                <div className="loginPassword">
                  
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    // value={oldPassword}
                    // onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    // value={newPassword}
                    // onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                 
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    // value={confirmPassword}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
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