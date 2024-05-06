import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

// Shopping Cart Component
const ShoppingCart = () => {
  // State for cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to remove item from cart
  const removeFromCart = (itemId) => {
    // Implement removing item from cart
    console.log('Removed from cart:', itemId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
