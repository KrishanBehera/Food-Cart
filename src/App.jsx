import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Components/Home";
import FoodItems from "./Components/FoodItems";
import Cart from "./Components/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Layout />
      <ToastContainer />
      <Routes>
        <Route path="Food-Cart" element={<Home />} />
        <Route path="fooditem" element={<FoodItems />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
