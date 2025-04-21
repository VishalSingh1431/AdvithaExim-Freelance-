import React from 'react';
import './Cereals.css'; // Reusing the same CSS file

const onionsData = [
  {
    name: 'Garwa Onions',
    img: 'https://5.imimg.com/data5/SELLER/Default/2021/10/XR/MT/ZP/121408681/summer-crop-a-grade-pink-garva-onion.jpg', // Replace with actual image URL
    desc: 'Garwa onions are known for their strong flavor and are commonly used in Indian cuisine. They are a staple in many traditional dishes.',
  },
  {
    name: 'Bellary Onions',
    img: 'https://kingshopz.com/public/uploads/all/APr9ezoZkJPzfakitiku7EiYhW270oLEAeFpPKe1.jpg', // Replace with actual image URL
    desc: 'Bellary onions are a popular variety in South India, known for their sweetness and mild flavor. They are ideal for salads and light cooking.',
  }
];

const Onions = () => {
  return (
    <div className="rice-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://www.tastingtable.com/img/gallery/why-are-red-onions-purple/l-intro-1644158494.jpg" alt="Onions Varieties" className="hero-image" />
        <h1 className="hero-heading">Onions</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Onions are a fundamental ingredient in cuisines worldwide, known for their versatility and flavor. We offer premium varieties like Garwa and Bellary onions, sourced from the finest farms.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {onionsData.map((item, index) => (
          <div className={`subsection ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="subsection-image">
              <img src={item.img} alt={item.name} className="animated-image" />
            </div>
            <div className="subsection-content">
              <h2 className="subsection-title">{item.name}</h2>
              <p className="subsection-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onions;