import React from 'react'
import { Link } from "react-router-dom";
import Usercss from"./Usercss.css"
const UserOption = ({user}) => {
    const logout=(e)=>{
        console.log("hello logout");
    }
  return (
   <>{user?<div>
    <p>UserOption:{user.name}</p>
    <p onclick={(e)=>logout(e)}>Logout</p>
    <ul>
        <li></li>
        <li>  <Link to="/orders">Orders</Link></li>
        <li> <Link to="/dashboard">Dashboard</Link></li>
    </ul>
    
  
   
    {/* <p onClick={(e)=>switchTabs(e,"login")}>Login</p> */}
</div>:<></>}
         
         
   </>
  )
}

export default UserOption