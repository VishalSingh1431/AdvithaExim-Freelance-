import React from 'react';
import './Ferrous.css';

const nonFerrousData = [
  { 
    name: 'Aluminium Scrap', 
    img: 'https://www.chennaimetalscrapbuyers.com/wp-content/uploads/2024/03/Aluminium-Scarp-Dealers-in-Chennai.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality aluminium scrap, known for its versatility and recyclability. Our aluminium scrap is sourced from reliable suppliers and is perfect for various industrial applications.',
    types: [
      {
        name: 'UBC (Used Beverage Cans)',
        desc: 'UBC scrap consists of used beverage cans and is widely recycled for producing new aluminium products.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/2/SY/XY/SV/180896445/aluminum-ubc-scrap-ubc-aluminum-used-beverage-can-ubc-scrap-500x500.JPG' // Blank image link
      },
      {
        name: '6063 Aluminium',
        desc: '6063 aluminium is known for its excellent extrudability and is used in architectural and structural applications.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKzA8QQehC38h2PRolOVH-zOJygpZ0CMR0w&s' // Blank image link
      },
      {
        name: 'TENSE',
        desc: 'TENSE aluminium scrap is clean and free from impurities, making it ideal for high-quality aluminium production.',
        img: 'https://5.imimg.com/data5/GU/LL/IM/SELLER-38359736/aluminium-scrap-tense--500x500.jpg' // Blank image link
      },
      {
        name: 'Wheels',
        desc: 'Aluminium wheels are recycled for their high-quality metal content and are used in automotive and industrial applications.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306316007/VR/LP/BC/186649593/aluminium-wheel-scrap.webp' // Blank image link
      },
      {
        name: 'Wire',
        desc: 'Aluminium wire scrap is used in electrical and cable industries for its conductivity and lightweight properties.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEL91n1rguNlzLM_dOFtNVtCFLGl8QSuTDdQ&s' // Blank image link
      },
      {
        name: 'Extrusion',
        desc: 'Aluminium extrusion scrap is recycled for producing new extrusions used in construction and manufacturing.',
        img: 'https://5.imimg.com/data5/JL/LB/JR/SELLER-83847399/aluminium-extrusion-scrap-500x500.jpg' // Blank image link
      },
      {
        name: 'Turnings',
        desc: 'Aluminium turnings are generated during machining processes and are recycled for their high metal content.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2020/12/FK/CW/YX/12920881/aluminum-turnings-scrap-500x500.jpg' // Blank image link
      },
      {
        name: 'Clean Scrap',
        desc: 'Clean aluminium scrap is free from contaminants and is ideal for producing high-quality aluminium products.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wg7e9qgv2toRP6vuX_HwZZOes18YGunzEg&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Copper', 
    img: 'https://www.euwid-recycling.com/fileadmin/data/euwid_recycling_und_entsorgung/news/images/Kupferschrott-Symbolbild.jpeg', // Blank image link
    desc: 'Our copper scrap is sourced from reliable suppliers and is known for its high conductivity and recyclability. It is perfect for electrical and industrial applications.',
    types: [
      {
        name: 'Millberry Wire Scrap',
        desc: 'Millberry wire scrap consists of clean, unalloyed copper wire and is widely used in recycling.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353829490/FP/UJ/BI/31294426/millberry-copper-wire-scrap.jpg' // Blank image link
      },
      {
        name: 'Copper Cathodes',
        desc: 'Copper cathodes are high-purity copper products used in electrical wiring, electronics, and industrial applications.',
        img: 'https://api.globy.com/public/market/66bdc84fa9e5be007cb1a14a/photos/66bdc851a9e5be007cb1a1cf/66bdc851a9e5be007cb1a1cf_lg.webp' // Blank image link
      }
    ]
  }
];

const NonFerrous = () => {
  return (
    <div className="nonferrous-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://scrapmetalservices.com/wp-content/uploads/2018/11/Fotolia_45895644_Subscription_Monthly_M.jpg" alt="Non-Ferrous Scrap" className="hero-image" />
        <h1 className="hero-heading">Non-Ferrous Scrap</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality non-ferrous scrap, including aluminium and copper.
          Our commitment to excellence ensures that we deliver products that meet global standards and are perfect for recycling and industrial applications.
        </p>
        <p>
          We cater to various industries, including manufacturing, construction, and recycling, ensuring premium-grade non-ferrous scrap
          with superior quality and cost-effectiveness. Our products are carefully processed and packaged to meet industry requirements.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {nonFerrousData.map((item, index) => (
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

export default NonFerrous;