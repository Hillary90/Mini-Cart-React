import React, { useState }  from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import { productsData } from "./data";
import Cart from './components/Cart';

function App() {
  // State to hold items currently in the cart
  // Initial it starts with an empty array, and each item added will be an object { id, name, price, }
  const [cartItems, setCartItems] = useState([]);
  
  // Function to handle adding a product to the cart
  // It checks if the product is already in the cart before adding
  const addToCart = (product) => {

    // conditional rendering to checks if the product is not found, add it to the cart
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };
  // Function to handle the removal of an item from the cart using its id
  const removeFromCart = (id) => {
    // Keep only the items whose id does not match the one we want to remove
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <NavBar 
     cartCount={cartItems.length}
    />

    <main style={{ padding: "1rem" }}>

      <ProductList 
        products={productsData} 
        addToCart={addToCart} 
      />
      <Cart 
        items={cartItems}
        removeFromCart={removeFromCart} 
      />
    </main>
    </>
  )
}

export default App
