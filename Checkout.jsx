import React, { useState } from "react";
import { useStore } from "../context/StoreContext.jsx";

export default function Checkout() {
  const { state } = useStore();
  const [address, setAddress] = useState("");

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed! Total: ₹${total}\nShipping to: ${address}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>
      {state.cart.length === 0 ? <p>Cart is empty</p> :
        <div>
          <h2>Billing Summary</h2>
          {state.cart.map(item => <p key={item.id}>{item.title} - ₹{item.price}</p>)}
          <h3>Total: ₹{total}</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Shipping Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              style={{ width: "300px", padding: "5px", marginRight: "10px" }}
            />
            <button type="submit">Place Order</button>
          </form>
        </div>
      }
    </div>
  );
}
