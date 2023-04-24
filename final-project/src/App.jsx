import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="products" element={<h1>Products List Page</h1>} />
        <Route path="product" element={<h1>Single Product Page</h1>} />
        <Route path="checkout" element={<h1>Checkout Page</h1>} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<h1>Contact page</h1>} />       
      </Routes>
    </BrowserRouter> 
  )
}

export default App
