import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async (url) => {
        try {
          const response = await axios.get(url);
          setProducts(response.data);
        } catch (error) {
          console.log("error");
        }
      };
  
      fetchProducts("http://127.0.0.1:8000/api/products");
    }, []);

    const addToCart = (product) => {
      
      console.log('Added to cart:', product);
    };
  
    console.log(products)
    return (
      <div>
        <h2>Product List</h2>
        {products?.map(product => (
          <div key={product.id}>
            <p>{product.Cars}</p>
            <p>Price: ₱{product.Price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  };

  export default ProductList;
