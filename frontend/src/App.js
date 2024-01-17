import Header from "./component/layout/Header.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import Products from "./component/Product/Products.js"
import { Contact } from "./component/Home/Contact.js";
import { Laoder } from "./component/layout/Loader/Laoder.js";
import{ProductDetails} from "./component/Product/ProductDetails.js"
function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route extact path="/" Component={Home} />
        <Route extact path="/contact" Component={Contact} />
        <Route extact path="/details/:id" Component={ProductDetails}/>
        <Route extact path="/products" Component={Products}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
