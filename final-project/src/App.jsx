import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Profile from './pages/Profile'
import Products from './pages/Products'
import Error from './pages/Error';
import SharedLayout from "./pages/SharedLayout";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Checkout from './pages/Checkout';
import SingleProduct from "./pages/SingleProduct"
import './assets/styles/profileProducts.css'
import ContactPage from './pages/Contact';
import Basket from './pages/Basket';



function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/product/:id" element={<SingleProduct />} />     
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="contact" element={<h1>Contact page</h1>} /> 
          <Route path="login" element={<LoginPage/>} /> 
          <Route path="register" element={<RegisterPage/>} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart" element={<Basket />} /> 
          <Route path="*" element={<Error />}/>   
        </Route>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
