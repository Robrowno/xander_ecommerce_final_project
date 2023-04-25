import { Link } from "react-router-dom";
import '../assets/styles/navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-container">
          <h1>FLOOM</h1>
          <Link to="/" className="nav-links">HOME</Link>
          <Link to="products" className="nav-links">OUR PRODUCTS</Link>
          <Link to="profile" className="nav-links">CONTACT US</Link>
        </nav>
      );
};

export default Navbar;
