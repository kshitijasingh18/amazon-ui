import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <nav style={{ padding: "10px", background: "#eee" }}>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/cart" style={{ marginRight: "10px" }}>Cart</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}
