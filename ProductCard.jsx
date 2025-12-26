import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "200px", textAlign: "center" }}>
      <img src={product.image} alt={product.title} style={{ width: "150px" }} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <p>Rating: {product.rating} ⭐</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}
