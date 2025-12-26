import React from "react";
import { useStore } from "../context/StoreContext.jsx";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state, dispatch } = useStore();

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {state.cart.length === 0 ? <p>Cart is empty</p> :
        <div>
          {state.cart.map(item => (
            <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
              <h3>{item.title}</h3>
              <p>Price: ₹{item.price}</p>
              <button onClick={() => removeItem(item)}>Remove</button>
            </div>
          ))}
          <h2>Total: ₹{total}</h2>
          <Link to="/checkout"><button>Checkout</button></Link>
        </div>
      }
    </div>
  );
}
