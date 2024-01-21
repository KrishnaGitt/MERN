import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Profile = () => {
  const {user}=useSelector((state)=>state.login)
  console.log("--------inside profile function---",user)
  return (<>
            <div className='profileContainer'>
              <div>
                <h1>Profile of User</h1>
              </div>
              <div>
                <h4>USerName</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>UserEmail</h4>
                <p>{user.email}</p>
              </div>
             <div><Link to="/me/update">Edit profile</Link></div>
             <div><Link to="/orders">My Orders</Link></div>
             <div><Link to="/password/update">Change Password</Link></div>
              </div>
          </>
   
  )
}

export default Profile