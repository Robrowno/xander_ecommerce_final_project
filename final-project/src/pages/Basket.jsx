import { useState, useEffect } from "react";

const Basket = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    setCartItems(JSON.parse(storedItems));
    
  }, []);

  if (!Array.isArray(cartItems)) {
    return <div>There are no items in your cart.</div>;
  }

  return (
    <table>
        <tr key={cartItems.id}>
          <td><img src={cartItems.image_url} alt={cartItems.name} /></td>
          <td>{cartItems.name}</td>
          <td>{cartItems.price}</td>
          <td>{cartItem.quantity}</td>
        </tr>
    </table>
  );
};

export default Basket;
