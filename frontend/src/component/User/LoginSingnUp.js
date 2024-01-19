import React from 'react'
import Laoder from '../layout/Loader/Laoder'
import {useState,useRef} from "react"
import { Link } from "react-router-dom";
import "./LoginSingnUp.css"

import { UseDispatch, useDispatch } from 'react-redux';
import {getUserLogin} from "../../actions/userAction"

const LoginSingnUp = () => {

  const dispatch=useDispatch();

    const[loginEmail,setLoginEmail]=useState('')
    const[loginPassword,setLoginPassword]=useState('')


    const[user,setUser]=useState({
      name:"",
      email:"",
      password:""
    });

    const {name,email,password}=user; 

    const loginTab=useRef(null);
    const registerTab=useRef(null);
    const switcherTab=useRef(null);
    const switchTabs = (e, tab) => {
        if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral");
          switcherTab.current.classList.remove("shiftToRight");
    
         registerTab.current.classList.remove("shiftToNeutralForm");
          loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight");
          switcherTab.current.classList.remove("shiftToNeutral");
    
         registerTab.current.classList.add("shiftToNeutralForm");
          loginTab.current.classList.add("shiftToLeft");
        }
      };
const loginSubmit=(e)=>{
  e.preventDefault();
 dispatch(getUserLogin(loginEmail,loginPassword))
} 

const registerDateChange=(e)=>{
  console.log("-------registerDateChange---------------",)

  if(false){

  }
  else{
    let newUser={...user};
    newUser[e.target.name]=e.target.value;
    setUser(newUser);
    // setUser({...user,[e.target.name]:e.target.value})
  }
}
const registerSubmit=(e)=>{
  e.preventDefault();
  const myForm=new FormData();
  myForm.set("name",name);
  myForm.set("email",email)
  myForm.set("password",password)
}   
  return (
  <>
    <div className='LoginSignUpContainer'>
        <div className='LoginSignUpBox'>
            <div>
                <div className='login_signUp_toggle'>
                    <p onClick={(e)=>switchTabs(e,"login")}>Login</p>
                    <p onClick={(e)=>switchTabs(e,"register")}>Registor</p>
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
            <form className='signUpForm' ref={registerTab} onSubmit={registerSubmit}>
              <div className='signUpName'>
                  <input
                  type="text"
                  placeholder='Please enter you name'
                  required
                  name="name"
                  value={name}
                  onChange={registerDateChange}
                  />  
              </div>
              <div className='signUpEmail'>
                  <input
                  type="email"
                  placeholder='Please enter you email'
                  required
                  name="email"
                  value={email}
                  onChange={registerDateChange}
                  />  
              </div>
              <div className='signUpPassword'>
                  <input
                  type="password"
                  placeholder='Please enter you password'
                  required
                  name="email"
                  value={password}
                  onChange={registerDateChange}
                  />  
              </div>
              <input
                type="submit"
                value="Registor"
                className='signUpBtn'
               
              />
            </form>
        </div>
    </div>
  </>
  )
}

export default LoginSingnUp