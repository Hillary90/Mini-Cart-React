# Mini Cart — React Project

## Overview
This project is a **Mini Shopping Cart** built with **React**.  
It demonstrates core React concepts including:  

- **Props** — passing data and functions between components  
- **State management** — using `useState` to manage cart items  
- **Event handling** — adding and removing items from the cart  
- **Component structure** — breaking the app into reusable components  
- **Dynamic rendering** — displaying products and updating the UI in response to user actions  

This project was built as part of the **Phase 2 React Code Challenge** to showcase understanding of React fundamentals, code efficiency, and UI rendering.


## Features
- **View a list of products** with images, names, and prices in Ksh  
- **Add products to the cart** with a single click  
- **Remove products from the cart**  
- **Dynamic cart counter** in the navigation bar  
- **Live total price calculation**  
- Clean and responsive layout using simple CSS  

## Components
1. **App.jsx** — main container and state manager  
2. **NavBar.jsx** — shows the app title and current cart count  
3. **ProductList.jsx** — displays all products  
4. **ProductCard.jsx** — individual product with “Add to Cart” button  
5. **Cart.jsx** — displays all items in the cart with total price  
6. **CartItem.jsx** — single cart item with remove button  

**Data flow:**  
- `App` holds the cart state.  
- `App` passes **props** (`cartCount`, `products`, `addToCart`, `removeFromCart`) to child components.  
- Events (like adding/removing items) bubble up through props functions to update the state in `App`.

## Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Hillary90/Mini-Cart-React.git
   cd Mini-Cart-React/
   ```
1. 

2. Install dependencies
   ```bash
   npm install
   ```
3. Run the app
   ```bash
   npm run dev
   ```
4. Open your browser at the URL provided by Vite (usually http://localhost:3000). 
   
## Future Improvents
- Add quantity selection for each cart item
- Add search or filter for products
- Use Tailwind CSS for a modern, responsive design

## Author
 Hillary Tanui