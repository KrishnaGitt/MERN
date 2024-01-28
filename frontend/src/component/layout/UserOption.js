import React from 'react'
import { Link } from "react-router-dom";
import Usercss from"./Usercss.css"
import {useDispatch,useSelector } from 'react-redux'
import {logOutUser} from "../../../src/actions/userAction.js"
import { useNavigate } from "react-router-dom";
import Profile from "../../component/User/Profile.js"
const UserOption = ({user}) => {
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const logout=(e)=>{
        dispatch(logOutUser)
    }

    const dashboard=(e)=>{
    }
    const orders=(e)=>{
        navigate("/cart")
    }
    const profile=(e)=>{
        navigate("/account")
    }
  return (
   <>{user?<div className='uptionsdiv'>
    <p>UserOption:{user.name}</p>
    <ol>
        <li><button onClick={(e)=>logout(e)}>Logout</button></li>
        <li><button onClick={(e)=>dashboard(e)}>Dashboard</button></li>
        <li> <button onClick={(e)=>orders(e)}>orders</button></li>
        <li> <button onClick={(e)=>profile(e)}>Profile</button></li>
    </ol>
   
   
    
  
   
   
</div>:<></>}
         
         
   </>
  )
}

export default UserOption