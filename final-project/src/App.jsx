import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="products" element={<h1>Products List Page</h1>} />
        <Route path="product" element={<h1>Single Product Page</h1>} />
        <Route path="checkout" element={<h1>Checkout Page</h1>} />
        <Route path="profile" element={<h1>Profile</h1>} />
        <Route path="contact" element={<h1>Contact page</h1>} />       
      </Routes>
    </BrowserRouter> 
  )
}

export default App
