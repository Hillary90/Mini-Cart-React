import React  from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import { productsData } from "./data";

function App() {

  return (
    <>
    <NavBar />
    <main style={{ padding: "1rem" }}>

     <ProductList products={productsData} />

    </main>
    </>
  )
}

export default App
