import React, { useState } from "react";
import { useStore } from "../context/StoreContext.jsx";

export default function Login() {
  const { state, dispatch } = useStore();
  const [name, setName] = useState("");

  const handleLogin = () => {
    dispatch({ type: "SET_USER", payload: { name } });
    setName("");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (state.user) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Welcome, {state.user.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
