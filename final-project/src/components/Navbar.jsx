
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="products">Products</Link>
          <Link to="profile">Profile</Link>
          <Link to="checkout"> Checkout</Link>
        </nav>
      );
};

export default Navbar;
