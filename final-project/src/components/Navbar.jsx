import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import '../assets/styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
          <h1>FLOOM</h1>
          <Link to="/" className="nav-links">HOME</Link>
          <Link to="products" className="nav-links">OUR PRODUCTS</Link>
          <Link to="profile" className="nav-links">PROFILE</Link>    
          <Link to="login" className="nav-links">LOGIN</Link>
          <FaShoppingCart className="shopping-cart-icon"/>
        </nav>
      );
};

export default Navbar;
