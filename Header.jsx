import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";

export default function Header() {
  const { state } = useStore();
  const user = state.user;

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#232f3e", color: "#fff" }}>
      <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>Amazon Clone</Link>
      <div>
        <Link to="/cart" style={{ color: "#fff", marginRight: "20px" }}>Cart ({state.cart.length})</Link>
        {user ? <span>Hello, {user.name}</span> : <Link to="/login" style={{ color: "#fff" }}>Login</Link>}
      </div>
    </header>
  );
}
