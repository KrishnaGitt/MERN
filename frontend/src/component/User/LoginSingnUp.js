import React from 'react'
import Laoder from '../layout/Loader/Laoder'
import {useState,useRef} from "react"
import { Link } from "react-router-dom";
import "./LoginSingnUp.css"
const LoginSingnUp = () => {
    const [loginEmail,setLoginEmail]=useState('');
    const[loginPassword,setLoginPassword]=useState('')
    const loginTab=useRef(null);
    const registerTab=useRef(null);
    const switcherTab=useRef(null);
    const switchTabs = (e, tab) => {
        if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral");
          switcherTab.current.classList.remove("shiftToRight");
    
         // registerTab.current.classList.remove("shiftToNeutralForm");
          loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight");
          switcherTab.current.classList.remove("shiftToNeutral");
    
         // registerTab.current.classList.add("shiftToNeutralForm");
          loginTab.current.classList.add("shiftToLeft");
        }
      };
const loginSubmit=()=>{

}    
  return (
  <>
    <div className='LoginSignUpContainer'>
        <div className='LoginSignUpBox'>
            <div>
                <div className='login_signUp_toggle'>
                    <p onClick={(e)=>switchTabs(e,"login")}>Login</p>
                    <p onClikc={(e)=>switchTabs(e,"register")}>Registor</p>
                </div>
                <button ref={switcherTab}></button>
            </div>
            <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                <div className='loginForm'>
                    <input
                    type="email"
                    required
                    placeholder='Email'
                    value={loginEmail}
                    onChange={(e)=>setLoginEmail(e.target.value)}
                    />
                </div>
                <div className='loginPassword'>
                    <input
                    type="password"
                    required
                    placeholder='password'
                    value={loginPassword}
                    onChange={(e)=>setLoginPassword(e.target.value)}
                    />
                </div>
                <Link to="/password/forgot">ForgotPassword</Link>
                <input type="submit" value="login" className='loginBtn'/>
            </form>
        </div>
    </div>
  </>
  )
}

export default LoginSingnUp