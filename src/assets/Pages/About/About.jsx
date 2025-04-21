import React from 'react';
import Img from '../../../component/Img/Img';
import './About.css';

const About = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <img
                style={{ width: "100%" }}
                src="https://www.thebalancemoney.com/thmb/jwErknp8PxQYGQNzt4sL9w21sWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-807130360-5be32b7e46e0fb0051938d2d.jpg"
                alt="World Map"
            />

      <div className="about-container">
        <h1>Welcome to Advitha Exim</h1>
        <p>We are delighted to have you here. Founded and led by our visionary CEO, Mr. Torahatula Venkatesh, who brings extensive experience as a successful rice miller, Advitha Exim has grown from its origins in rice exports to become a trusted global supplier of premium agro products.  
        </p>
        <p>Driven by a strong commitment to delivering superior quality, we now offer a diverse portfolio that includes spices, fruits, pulses, onions, maize, and more. With a customer-focused approach and a passion for excellence, we aim to build lasting partnerships and meet the evolving needs of our global clients.  
        </p>
        <p>Explore our offerings and discover how we can support your business with trusted products and unparalleled service.</p>

        {/* 4-column sections */}
        <div className="about-sections">
          <div className="section">
            <h2>Our Mission</h2>
            <p>Our mission is to supply all our quality products to more and more customers so that they can take an advantage of our quality products and its affordable prices.</p>
          </div>
          <div className="section">
            <h2>Our Vision</h2>
            <p>To be globally recognized import export company that put quality, service and value as priority to satisfy the needs of our customers, employees and stakeholders.</p>
          </div>
          <div className="section">
            <h2>Our Goal</h2>
            <p>To provide the best quality products to customers & get more success together with your support and our team, who put forward their best effort for our company growth.</p>
          </div>
          <div className="section">
            <h2>Our Value</h2>
            <p>We are not just taken for granted company, we are certified by Government of India to supply or Export our premium quality products to across the globe.</p>
          </div>
        </div>

        {/* Meet The Mind Behind Section */}
        <div className="mind-behind-container">
        <h2 style={{ color: "white" }}>Meet The Mind Behind</h2>

          <div className="mind-behind-content">
            <div className="mind-behind-image">
              {/* Add an image of Torahatula Venkatesh here */}
              <img src="/images\WhatsApp Image 2025-02-03 at 5.54.48 PM.jpeg" alt="Torahatula Venkatesh" />
            </div>
            <div className="mind-behind-text">
              <h3>Torahatula Venkatesh</h3>
              <p>Director-Founder</p>
              <p>Torahatula Venkatesh is the visionary leader behind Advitha Exim. With years of experience in global trade and a passion for excellence, he has built a company that stands for quality, integrity, and innovation. His dedication to sourcing the best products and fostering long-term relationships has made Advitha Exim a trusted name in the industry.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;