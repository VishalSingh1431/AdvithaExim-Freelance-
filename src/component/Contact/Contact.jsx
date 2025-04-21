import React from 'react';
import './Contact.css'; // CSS for styling

const Contact = () => {
  return (
    <div className="contact-container2">
      <h1>Contact Us</h1>

      {/* Yellow Container for Contact Info */}
      <div className="yellow-container2">
        <div className="contact-info2">
          <div className="info-box2">
            <img src='https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png' alt="Address" className="info-icon2" />
            <h2>Address</h2>
            <p>Nellore, A.P. India</p>
          </div>
          <div className="info-box2">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOjFMSXGI2AHBsFfspNlWEPiVxKHHtjfN0p1H6lklqs2MCXMVhF24tHst2ZgqJQTTqVE&usqp=CAU' alt="Phone" className="info-icon2" />
            <h2>Phone</h2>
            <p>+91 7989866407</p>
            <p>+91 9963243272</p>
          </div>
          <div className="info-box2">
            <img src='https://i.pinimg.com/736x/1e/1e/8f/1e1e8fbfed3d555c052154b6bad2c05c.jpg' alt="Email" className="info-icon2" />
            <h2>Email</h2>
            <p>advithaexim@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Map and Form in a Row for Big Screens */}
      <div className="map-form-container2">
        {/* Google Maps Integration */}
        <div className="map-container2">
          <iframe
            title="Advitha Exim Location"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3496.419952261668!2d80.00714957510323!3d14.446182286022044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDI2JzQ2LjMiTiA4MMKwMDAnMzUuMCJF!5e1!3m2!1sen!2sin!4v1738585350649!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Get in Touch Form */}
        <div className="contact-form2">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group2">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group2">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group2">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group2">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
