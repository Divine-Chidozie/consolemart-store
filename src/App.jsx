import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [cart, setCart] = useState([]); // shared state

  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    // </Routes>
    <Home />
  );
}

export default App;
