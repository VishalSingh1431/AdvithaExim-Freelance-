import React from 'react';
import './Whatsapp.css'; // Import the CSS file to style the WhatsApp component

const Whatsapp = () => {
  const phoneNumber = '+918074075520'; // Replace with your WhatsApp number
  const message = encodeURIComponent('Hello! 👋 Thank you for contacting ADVITHA EXIM. Our team will get back to you shortly. For urgent queries, please call us at 7989866407 or 8074075520.'); // Customizable message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-chat">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
