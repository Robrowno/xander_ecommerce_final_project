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
      {cartItems.forEach((cartItem) => (
        <tr key={cartItem.id}>
          <td><img src={cartItem.image_url} alt={cartItem.name} /></td>
          <td>{cartItem.name}</td>
          <td>{cartItem.price}</td>
          <td>{cartItem.quantity}</td>
        </tr>
      ))}
    </table>
  );
};

export default Basket;
