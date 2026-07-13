// import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ForgetPassword } from "./pages/ForgetPassword";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";

// Dashboard
// import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
