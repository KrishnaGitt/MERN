import Header from "./component/layout/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import Search from"./component/Product/Search.js"
import Products from "./component/Product/Products.js"
import { Contact } from "./component/Home/Contact.js";
import { Laoder } from "./component/layout/Loader/Laoder.js";
import{ProductDetails} from "./component/Product/ProductDetails.js"
import LoginSingnUp from"./component/User/LoginSingnUp.js"
import  store  from "./store";
import { getCurrentUser } from "./actions/userAction.js";
import { useSelector } from "react-redux";
import UserOption from "./component/layout/UserOption.js";
import Profile from "./component/User/Profile.js"
import UpdatePassword from "./component/User/UpdatePassword.js"
import UpdateProfile from "./component/User/UpdateProfile.js"
import myOders from "./component/Order/myOders.js"
function App() {
  const user=useSelector((state)=>state.login.user)
  console.log("inside app .js------------")
  React.useEffect(() => {
 WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
    
    user && store.dispatch(getCurrentUser)
   }, []);
  
  return (
    <Router>
      <Header />
      {user?.name?<UserOption user={user}></UserOption>:<></>}
      <Routes>
        <Route   path="/" Component={Home} />
        <Route   path="/contact" Component={Contact} />
        <Route   path="/details/:id" Component={ProductDetails}/>
        <Route   path="/products" Component={Products}/>
        <Route   path="/products/:keyword" Component={Products} />
        <Route   path="/search" Component={Search}/>
        <Route   path="/login" Component={LoginSingnUp}/>
        <Route   path="/account" Component={Profile}/>
        <Route   path="/password/update" Component={UpdatePassword}/>
        <Route   path="/me/update" Component={UpdateProfile}/>
        <Route   path="/orders" Component={myOders}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
