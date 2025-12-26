import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../data/products.js";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Amazon UI Clone</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <Link to={`/product/${p.id}`}>
              <img src={p.image} alt={p.title} style={{ width: "100%" }} />
              <h3>{p.title}</h3>
            </Link>
            <p>Price: ₹{p.price}</p>
            <p>Rating: {p.rating} ⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}
