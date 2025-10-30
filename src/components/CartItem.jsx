import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <span>
       {item.name}
      </span>

      <span>
       Ksh {item.price}
      </span>

      <button 
       onClick={() => removeFromCart(item.id)}
      >
       Remove
      </button>
      
    </div>
  );
}

export default CartItem;
