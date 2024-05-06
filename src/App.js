import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList'; 
import ShoppingCart from './pages/ShoppingCart'; 
import Checkout from './pages/Checkout'; 
import './App.css'; // Import CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation bar */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="nav-link">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* Main content area */}
        <div className="content">
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route exact path="/cart" element={<ShoppingCart />} />
            <Route exact path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
