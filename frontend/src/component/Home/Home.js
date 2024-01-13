import React,{Fragment} from "react"
import "./Home.css"
import Product from "./Product.js"
import MetaData from "../layout/MetaData.js"
// import  playStore from "../../../images/products/playStore.png"
import  appStore from "../../images/products/appStore.jpg"
// import {CgMouse} from "react-icons";
const Home=()=>{
    const product={
        name:"blueTshirt",
        price:200,
        _id:"contact",
        images:[{url:"https://th.bing.com/th/id/OIP.jixgd7mHrAEK6dtFTK-UdwD6D6?w=192&h=192&c=7&r=0&o=5&dpr=1.5&pid=1.7"}]
    };
    return(
        <>
        <MetaData title="HomePage is working"/>
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
        <div className="container" id="container">
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>
        <Product product={product}/>


        </div>
        </>
    )
}

export default Home