import React from 'react'
import { Link } from "react-router-dom";
import Usercss from"./Usercss.css"
import {useDispatch,useSelector } from 'react-redux'
import {logOutUser} from "../../../src/actions/userAction.js"
const UserOption = ({user}) => {
    const dispatch=useDispatch();
    const logout=(e)=>{
        console.log("loggout user is callled")
        dispatch(logOutUser)
    }

    const dashboard=(e)=>{
        console.log("hello logout");
    }
    const orders=(e)=>{
        console.log("hello logout");
    }
  return (
   <>{user?<div className='uptionsdiv'>
    <p>UserOption:{user.name}</p>
    <ol>
        <li><button onClick={(e)=>logout(e)}>Logout</button></li>
        <li><button onClick={(e)=>dashboard(e)}>Dashboard</button></li>
        <li> <button onClick={(e)=>orders(e)}>orders</button></li>
    </ol>
   
   
    
  
   
   
</div>:<></>}
         
         
   </>
  )
}

export default UserOption