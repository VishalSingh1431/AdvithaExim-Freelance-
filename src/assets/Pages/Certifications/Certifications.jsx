import React from 'react';
import './Certifications.css'; // Assuming you have a separate CSS file for styling

const Certifications = () => {
  return (
    <div className="certifications-container">
      {/* APEDA Certification */}
      <div className="certification-item">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E12AQE9vOPy3XUhiQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1691598285245?e=2147483647&v=beta&t=yY-L2K6yMXnoDs8XK5PO5UjEZAwTVep296__kBPcVho"
          alt="APEDA"
          className="certification-image"
        />
        <div className="description">
          <h3>APEDA</h3>
          <p>The Agricultural and Processed Food Products Export Development Authority (APEDA) is a government organization responsible for the export of agricultural products.</p>
        </div>
      </div>

      {/* FIEO Certification */}
      <div className="certification-item">
        <img
          src="https://3.imimg.com/data3/CY/CL/MY-5791718/fieo-registration-500x500.jpg"
          alt="FIEO"
          className="certification-image"
        />
        <div className="description">
          <h3>FIEO</h3>
          <p>The Federation of Indian Export Organisations (FIEO) is an apex body that represents the Indian Export Industry and helps promote exports.</p>
        </div>
      </div>

      {/* FSSAI Certification */}
      <div className="certification-item">
        <img
          src="https://media.lendingkart.com/wp-content/uploads/2019/09/fssai.jpg"
          alt="FSSAI"
          className="certification-image"
        />
        <div className="description">
          <h3>FSSAI</h3>
          <p>The Food Safety and Standards Authority of India (FSSAI) is responsible for regulating and supervising food safety standards in India.</p>
        </div>
      </div>

      {/* APPCB Certification */}
      <div className="certification-item">
        <img
          src="https://i.pinimg.com/736x/ae/91/43/ae9143e56dca09fb16e6f45fe6429588.jpg"
          alt="APPCB"
          className="certification-image"
        />
        <div className="description">
          <h3>APPCB</h3>
          <p>The Andhra Pradesh Pollution Control Board (APPCB) is responsible for enforcing environmental laws and regulations in the state of Andhra Pradesh.</p>
        </div>
      </div>

      {/* MSME Certification */}
      <div className="certification-item">
        <img
          src="https://labsolutionindia.com/wp-content/uploads/2022/10/MSME-Certificate.jpg"
          alt="MSME"
          className="certification-image"
        />
        <div className="description">
          <h3>MSME</h3>
          <p>The Micro, Small, and Medium Enterprises (MSME) sector plays a crucial role in the Indian economy, contributing to employment and industrial output.</p>
        </div>
      </div>

      {/* Government of India Logo */}
      <div className="certification-item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg"
          alt="Government of India"
          className="certification-image"
        />
        <div className="description">
          <h3>Government of India</h3>
          <p>The Government of India regulates and oversees various industries, including exports and manufacturing, to ensure compliance with national standards.</p>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
