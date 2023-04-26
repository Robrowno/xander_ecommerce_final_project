import { Link } from "react-router-dom";
import "../assets/styles/footer.css"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
 

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-small-screen">
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
          </div>
          <div className="footer-lg-screen">
            <div className="footer-lg-first-col">
              <h1>FLOOM</h1>
              <h3>Social Media</h3>
              <FaFacebookF className="footer-icon"/>
              <FaTwitter className="footer-icon" />
              <FaInstagram className="footer-icon"/>
            </div>
            <div className="footer-lg-sec-col">
              <h3>Products</h3>
              <ul>
                <li>Active Wear</li>
                <li>Essentials</li>
                <li>Bed & Bath</li>
                <li>Kitchen</li>
                <li>Clearance</li>
                <li>Deals</li>
                <li>Jeans</li>
                <li>Shirts</li>
                <li>New Arrivals</li>
              </ul>
            </div>
            <div className="footer-lg-third-col">
              <Link to="contact"><h3>Contact Us</h3></Link>
            </div>
            <div className="footer-lg-fourth-col">
              <h3>Where Can You Find Us?</h3>
              <address>
                1234 Main St.<br></br>
                London<br></br>
                SW18<br></br> 
                UK
              </address>
            </div>
          </div>
        </footer>
      );
};

export default Footer;