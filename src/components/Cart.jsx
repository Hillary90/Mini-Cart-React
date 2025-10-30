import React from "react";
import CartItem from "./CartItem";

function Cart({ items, removeFromCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section>
      <h2>Your Cart </h2>
      {/* conditional rendering */}
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))}
          <h3>Total: Ksh {total.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default Cart;
