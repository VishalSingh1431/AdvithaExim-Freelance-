import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <h2>
            <Link to="/">
              <img
                src="/images\logo1.png"
                alt="Logo"
                style={{ height: '130px', width: 'auto', borderRadius: '5px', margin: '5px' }}
              />
            </Link>
          </h2>
          {/* <p className="logo-text">Advitha Exim</p> Added a class for styling */}
        </div>

        {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={toggleMobileMenu}
          style={{ padding: '15px', cursor: 'pointer' }} // Increased padding for larger hover area
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </div>

        {/* Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? 'mobile' : ''}`}>
          <li><Link to="/home">Home</Link></li>
          
          
          {/* Products Link with Hover Effect */}
          <li className="products-link">
            <Link to="/products">Products</Link>
            <div className="dropdown">
              <ul>
                <li className="dropdown-item">
                  <Link to="/products/agro">Agricultural Products</Link>
                  <div className="sub-dropdown">
                    <ul>
                    <li><Link to="/products/agro/rice">Rice</Link></li>
                      <li><Link to="/products/agro/onions">Onions</Link></li>
                      
                      <li><Link to="/products/agro/cereals">Cereals & Grains</Link></li>
                      <li><Link to="/products/agro/pulses">Pulses</Link></li>
                      <li><Link to="/products/agro/spices">Spices</Link></li>
                      <li><Link to="/products/agro/oil">Oil</Link></li>
                      <li><Link to="/products/agro/fruits">Fruits</Link></li>
                      <li><Link to="/products/agro/vegetables">Vegetables</Link></li>
                      <li><Link to="/products/agro/dryfruits">Dry Fruits & Nuts</Link></li>
                      <li><Link to="/products/agro/dairy">Dairy Products</Link></li>
                      <li><Link to="/products/agro/sugar">Sugar and Sweeteners</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown-item">
                  <Link to="/products/metal">Metals</Link>
                  <div className="sub-dropdown">
                    <ul>
                      <li><Link to="/products/metal/ferrous">Ferrous</Link></li>
                      <li><Link to="/products/metal/nonferrous">Non Ferrous</Link></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/why">Why Advitha</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Contact Us Button */}
        <div className="navbar-contact">
        <Link 
  to="/component/Contact/Contact" 
  className="contact-button" 
  style={{ color: "hsl(50, 96%, 51%)" }}
>
  Contact Us
</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;