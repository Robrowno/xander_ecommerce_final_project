import { Link } from "react-router-dom";
import "../assets/styles/footer.css"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
 

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-icons">
            <FaFacebookF className="footer-icon"/>
            <FaTwitter className="footer-icon" />
            <FaInstagram className="footer-icon"/>
          </div>
          <div className="footer-links">          
            <Link to="products" style={{display:'block', color:'white', marginBottom: '0.5rem'}}>Contact Us</Link>
            <Link to="products" style={{display:'block', color:'white'}}>Products</Link>
          </div>
          <div className="footer-address-container">
            <p>Where you can find us:</p>
            <address>
              1234 Main St.<br></br>
              London<br></br>
              SW18 UK
            </address>
          </div>
        </footer>
      );
};

export default Footer;