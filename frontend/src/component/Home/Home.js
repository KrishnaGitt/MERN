import React,{Fragment} from "react"
import "./Home.css"
// import {CgMouse} from "react-icons";
const Home=()=>{
    return(
        <>
        <div className="banner">
        <p>welcome to Ecommerce</p>
        <h1>Find amazing products below</h1>
        <a href="#container">
            <button>
                Scroll
            </button>
        </a>
        </div>
        <h1 className="homeHeading">Products</h1>
        </>
    )
}

export default Home