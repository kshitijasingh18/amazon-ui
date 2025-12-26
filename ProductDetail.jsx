import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import { useStore } from "../context/StoreContext.jsx";
import Rating from "../components/Rating.jsx";

export default function ProductDetail() {
  const { id } = useParams();
  const { dispatch } = useStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.title} style={{ width: "300px" }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <p>Rating: <Rating value={product.rating} /></p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        style={{ padding: "10px 20px", marginTop: "10px", cursor: "pointer" }}
      >
        Add to Cart
      </button>
    </div>
  );
}
