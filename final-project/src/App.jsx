import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Error from './pages/Error';
import SharedLayout from "./pages/SharedLayout";
import Checkout from './pages/Checkout';
import SingleProduct from "./pages/SingleProduct"
import './assets/styles/profileProducts.css'
import ContactPage from './pages/Contact';



function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<h1>Single Product Page</h1>} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product" element={<SingleProduct />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="contact" element={<ContactPage />} />  
          <Route path="*" element={<Error />}/>   
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
