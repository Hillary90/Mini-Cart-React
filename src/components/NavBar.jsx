import React from "react";

function NavBar({ cartCount }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "1rem 2rem",
      }}
    >
      <h2> Mini Cart</h2>
      <div style={{ fontSize: "1.2rem" }}>
        Cart Items: <strong>{cartCount}</strong>
      </div>
    </nav>
  );
}

export default NavBar;
