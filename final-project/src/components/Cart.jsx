import React, { useState } from 'react';

// Define a functional component named ShoppingCart
function ShoppingCart({ items }) {
  // Declare a state variable named showCart, which will be toggled to show or hide the cart dropdown
  const [showCart, setShowCart] = useState(false);

  // Define a function named handleCartClick, which will be called when the cart icon is clicked
  const handleCartClick = () => {
    // Toggle the value of showCart when the cart icon is clicked
    setShowCart(!showCart);
  };

  // Return the JSX for the ShoppingCart component
  return (
    // A div with the class "shopping-cart"
    <div className="shopping-cart">
      {/* A div with the class "cart-icon" and an onClick event listener that calls the handleCartClick function */}
      <div className="cart-icon" onClick={handleCartClick}>
        {/* A span that displays the number of items in the cart */}
        <span>{items.length}</span>
        {/* An icon that represents a shopping cart */}
        <i className="fa fa-shopping-cart"></i>
      </div>
      {/* A conditional rendering of a div with the class "cart-dropdown", which will only display if showCart is true */}
      {showCart && (
        <div className="cart-dropdown">
          {/* A list of items in the cart */}
          <ul className="cart-items">
            {/* Map over the items array and create a list item for each item in the cart */}
            {items.map((item) => (
              // Assign a unique key to each list item to optimize performance
              <li key={item.id}>
                {/* Display the item's name */}
                <div>{item.name}</div>
                {/* Display the item's price */}
                <div>${item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Export the ShoppingCart component as the default export of this module
export default ShoppingCart;
