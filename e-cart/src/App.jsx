import React, { useState } from "react";
import Product from "./assets/component/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./assets/component/ProductDetails";
import SearchItem from "./assets/component/SearchItem";
import Cart from "./assets/component/Cart";
import { items } from "./assets/component/Data";
import Navbar from "./assets/component/Navbar";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Product cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
