import React, { useState } from 'react';

// Checkout Component
const Checkout = () => {
    const [shippingDetails, setShippingDetails] = useState({
      fullName: '',
      address: '',
      city: '',
      // Add more fields as needed
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setShippingDetails(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Implement checkout process
      console.log('Shipping details:', shippingDetails);
    };
  
    return (
      <div>
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={shippingDetails.fullName} onChange={handleInputChange} />
          <input type="text" name="address" placeholder="Address" value={shippingDetails.address} onChange={handleInputChange} />
          <input type="text" name="city" placeholder="City" value={shippingDetails.city} onChange={handleInputChange} />
          {/* Add more input fields for other shipping details */}
          <button type="submit">Place Order</button>
        </form>
      </div>
    );
  };

  export default Checkout;
