import React,{Fragment,useEffect} from "react"
import "./Home.css"
import ProductCart from "./ProductCart.js"
import MetaData from "../layout/MetaData.js"
// import  playStore from "../../../images/products/playStore.png"
import  appStore from "../../images/products/appStore.jpg"
// import {CgMouse} from "react-icons";
import {getProduct} from "../../../src/actions/productAction.js"
import {useDispatch,useSelector}  from "react-redux"
import Loader from "../layout/Loader/Laoder"
const Home=()=>{
    const dispatch=useDispatch()
    const {loading,product}=useSelector((state)=>state.product)
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])
    return(<>
        {loading?<Loader/>: <>  
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
        <div id="container" class="container">
        {product&&product.map((product)=>< ProductCart product={product}/>) }
        </div>
        </>
    }
</>
    )
}

export default Home