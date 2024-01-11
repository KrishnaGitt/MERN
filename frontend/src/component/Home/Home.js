import React,{Fragment} from "react"
import "./Home.css"
import Product from "./Product.js"
// import  playStore from "../../../images/products/playStore.png"
import  appStore from "../../images/products/appStore.jpg"
// import {CgMouse} from "react-icons";
const Home=()=>{
    const product={
        name:"blueTshirt",
        price:200,
        _id:"contact",
        images:[{url:"data:image/jpeg;base64,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"}]
    };
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