import React from 'react';
import './Ferrous.css';

const ferrousData = [
  { 
    name: 'HMS1 Scrap', 
    img: 'https://media.kallanish.com/filer_public/8a/0d/8a0d5447-1efe-4368-be66-43448f331f8a/scrap_steel_4.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality HMS1 scrap, known for its high density and low impurities. Our HMS1 scrap is sourced from reliable suppliers and is perfect for steel production and recycling.',
    types: [
      {
        name: 'Heavy Melting Steel 1',
        desc: 'HMS1 scrap consists of heavy steel sections with a minimum thickness of 6mm. It is ideal for steelmaking and foundry applications.',
        img: 'https://api.globy.com/public/market/66ab4afff4dd8b01a47b4090/photos/66ab4afff4dd8b01a47b409a/66ab4afff4dd8b01a47b409a_lg.webp' // Blank image link
      }
    ]
  },
  { 
    name: 'HMS2 Scrap', 
    img: 'https://static.wixstatic.com/media/966d4b_68dea144c80f49a9b32ec4ddf18c2e4c~mv2.webp', // Blank image link
    desc: 'Our HMS2 scrap is sourced from reliable suppliers and is known for its versatility and cost-effectiveness. It is perfect for steel production and recycling.',
    types: [
      {
        name: 'Heavy Melting Steel 2',
        desc: 'HMS2 scrap consists of lighter steel sections with a minimum thickness of 3mm. It is widely used in steelmaking and recycling industries.',
        img: 'https://image.made-in-china.com/202f0j00RUYcFBLKCwzP/Heavy-Melting-Steel-Scrap-Iron-Scrap-1-2-Factory-Price-Railway-Scrap.webp' // Blank image link
      }
    ]
  }
];

const Ferrous = () => {
  return (
    <div className="ferrous-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="/images\WhatsApp Image 2025-02-02 at 11.32.45 PM.jpeg" alt="Ferrous Scrap" className="hero-image" />
        <h1 className="hero-heading">Ferrous Scrap</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality ferrous scrap, including HMS1 and HMS2 scrap.
          Our commitment to excellence ensures that we deliver products that meet global standards and are perfect for steel production and recycling.
        </p>
        <p>
          We cater to various industries, including steel manufacturing, foundries, and recycling, ensuring premium-grade ferrous scrap
          with superior quality and cost-effectiveness. Our products are carefully processed and packaged to meet industry requirements.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {ferrousData.map((item, index) => (
          <div className={`subsection ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="subsection-image">
              <img src={item.img} alt={item.name} className="animated-image" />
            </div>
            <div className="subsection-content">
              <h2 className="subsection-title">{item.name}</h2>
              <p className="subsection-desc">{item.desc}</p>
              {/* Nested sections for types */}
              {item.types && (
                <div className="nested-sections">
                  {item.types.map((type, idx) => (
                    <div className="nested-section" key={idx}>
                      <img src={type.img} alt={type.name} className="nested-image" />
                      <h3 className="nested-title">{type.name}</h3>
                      <p className="nested-desc">{type.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ferrous;