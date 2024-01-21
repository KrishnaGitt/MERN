import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
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
              </div>
          </>
   
  )
}

export default Profile