import React,{Fragment,useEffect} from "react"
import "./Home.css"
import Product from "./Product.js"
import MetaData from "../layout/MetaData.js"
// import  playStore from "../../../images/products/playStore.png"
import  appStore from "../../images/products/appStore.jpg"
// import {CgMouse} from "react-icons";
import {getProduct} from "../../../src/actions/productAction.js"
import {useDispatch,useSelector}  from "react-redux"
const Home=()=>{
    const dispatch=useDispatch()
    const {product}=useSelector((state)=>state.product)
    console.log("-------->>>", product);

    useEffect(()=>{
        dispatch(getProduct)
    },[dispatch])
    return(
        <>  
        <MetaData title="Ecommerce"/>
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
        <div id="container">
        {product&&product.map((product)=>< Product product={product}/>) }
        </div>
        </>
    )
}

export default Home