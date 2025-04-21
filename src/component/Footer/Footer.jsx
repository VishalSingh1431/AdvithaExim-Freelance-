import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import "@fortawesome/fontawesome-free/css/all.min.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and About Section */}
        <div className="footer-section logo-about">
          <img src="/images/logo.jpeg" alt="Advitha Exim Logo" className="footer-logo" />
          <p>
            <b>Advitha Exim </b> 
           is a dynamic import-export company based in Nellore, Andhra Pradesh, India. We specialize in exporting premium Indian agro products, including spices, fresh fruits, pulses, onions, and maize, to global markets. Additionally, we import high-quality metal scraps such as aluminum UBC, aluminum wire, copper millberry, and copper cathodes. With a strong commitment to quality, integrity, and customer satisfaction, Advitha Exim aims to foster reliable trade partnerships worldwide.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/brands">Brands</a></li>
            <li><a href="/certifications">Certifications</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products Section */}
        <div className="footer-section products">
          <h3>Our Products</h3>
          <ul>
            <li><a href="/products/agro/rice">Rice</a></li>
            <li><a href="/products/agro/onions">Onions</a></li>
            <li><a href="/products/agro/cereals">Cereals & Grains</a></li>
            <li><a href="/products/agro/pulses">Pulses (Legumes)</a></li>
            <li><a href="/products/agro/spices">Spices</a></li>
            <li><a href="/products/agro/oil">Oil</a></li>
            <li><a href="/products/agro/fruits">Fruits</a></li>
            <li><a href="/products/agro/vegetables">Vegetables</a></li>
            <li><a href="/products/agro/dryfruits">Dry Fruits & Nuts</a></li>
            <li><a href="/products/agro/dairy">Dairy Products</a></li>
            <li><a href="/products/agro/sugar">Sugar and Sweeteners</a></li>
            <li><a href="/products/metal/ferrous">Ferrous (Metal)</a></li>
            <li><a href="/products/metal/nonferrous">Non-Ferrous (Metal)</a></li>
            {/* <li><Link to="/products/metal/ferrous">Ferrous</Link></li> */}
            {/* <li><Li */}
            {/* <li><Link to="/products/agro/cereals">Cereals & Grains</Link></li>
                      <li><Link to="/products/agro/pulses">Pulses</Link></li>
                      <li><Link to="/products/agro/spices">Spices</Link></li>
                      <li><Link to="/products/agro/oil">Oil</Link></li>
                      <li><Link to="/products/agro/fruits">Fruits</Link></li>
                      <li><Link to="/products/agro/vegetables">Vegetables</Link></li>
                      <li><Link to="/products/agro/dryfruits">Dry Fruits & Nuts</Link></li>
                      <li><Link to="/products/agro/dairy">Dairy Products</Link></li>
                      <li><Link to="/products/agro/sugar">Sugar and Sweeteners</Link></li> */}
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="footer-section stay-connected">
          <h3>Stay Connected</h3>
          <div className="contact-info">
            <p><strong>Registered Address:</strong></p>
            <p>Nellore, A.P. India</p>
            <p><strong>Phone Number:</strong> 7989866407 / 9963243272</p>
            <p><strong>Email:</strong> advithaexim@gmail.com</p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Advitha-Exim/pfbid023Dw9h6vPqJQNictvyzFsfpCBgApqWX2n2eJzguhmC3FCiVy5MdRxZYjXgE84RP7Rl/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/advithaexim/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://in.linkedin.com/in/torahatula-venkatesh-64141a262" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
           
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All rights reserved. | Designed by Vishal Kumar Singh & Shaikh Teepu  Mohaseen |
          <a href="https://www.linkedin.com/in/vishal-singh1431" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue', marginLeft: '5px' }}>
            <i className="fab fa-linkedin"></i> LinkedIn
          </a> |
          <a href="https://www.instagram.com/_vishal1431?igshid=ZDBuYmwxeDVkcHhx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#E1306C', marginLeft: '5px' }}>
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
