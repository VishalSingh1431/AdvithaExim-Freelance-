import React from 'react';
import './Cereals.css';

const riceData = [
  {
    name: 'Basmati Rice',
    img: 'https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_1024x1024@2x.jpg?v=1736270108',
    desc: 'Basmati rice is known for its long grains and fragrant aroma, perfect for biryanis and pilafs. It is aged to enhance its flavor and texture.',
    types: [
      {
        name: '1121 Sella Raw Rice',
        desc: 'Premium quality raw Basmati rice with long grains and a natural aroma.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvf1GnoOQ-XS-8EJ6dkiBV01CVuYgJNvlPw&s' // Replace with actual image URL
      },
      {
        name: '1121 Sella Boiled Rice / Golden Yellow Rice',
        desc: 'Parboiled Basmati rice with a golden yellow hue, ideal for traditional dishes.',
        img: 'https://tiimg.tistatic.com/fp/1/007/255/1121-golden-sella-basmati-rice-for-cooking-110.jpg' // Replace with actual image URL
      },
      {
        name: '1121 Sella Steam Rice / Creamy',
        desc: 'Steamed Basmati rice with a creamy texture, perfect for rich and flavorful recipes.',
        img: 'https://hamidglobalconnect.com/wp-content/uploads/2024/08/Creamy-white-rice-1024x903.png' // Replace with actual image URL
      }
    ]
  },
  {
    name: 'Non-Basmati Rice',
    img: 'https://www.pentastar.in/wp-content/uploads/2024/02/non-basmati-rice-min.jpg',
    desc: 'Non-Basmati rice is versatile and widely used in everyday cooking. It is available in various grain lengths and is ideal for a variety of dishes.',
    types: [
      {
        name: 'Raw Rice',
        desc: 'Includes varieties like IR 64 Raw Rice, Swarna, BPT, PR11, GR11, and Sona Masuri.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmUCdA7ml_A4uBOV_xq4xvlvWTfK4JA-6wZQ&s' // Replace with actual image URL
      },
      {
        name: 'Parboiled Rice',
        desc: 'Includes varieties like IR 64, Swarna, BPT, PR11, GR11, and KNM.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Riso_parboiled.jpg' // Replace with actual image URL
      },
      {
        name: 'Steam Rice',
        desc: 'Includes varieties like Swarna, BPT, KNM, and Sona Masuri.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyPYVewEuPq-0xsTTg7w6XwDNAmWYoQXTag&s' // Replace with actual image URL
      }
    ]
  },
  {
    name: 'Parboiled Rice',
    img: 'https://3.imimg.com/data3/KF/TH/MY-8497847/long-grain-parboiled-rice.png',
    desc: 'Parboiled rice is partially boiled in the husk, retaining more nutrients and offering a firmer texture. It is perfect for dishes that require a non-sticky texture.',
    types: [
      {
        name: 'IR 64 Parboiled Rice',
        desc: 'High-quality parboiled rice with a firm texture and rich nutrient content.',
        img: 'https://4.imimg.com/data4/VQ/LY/MY-8933375/long-grain-parboiled-rice-ir64-5-broken.jpg' // Replace with actual image URL
      },
      {
        name: 'Swarna Parboiled Rice',
        desc: 'A popular variety of parboiled rice known for its excellent cooking qualities.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpV-QOJuRKVYD_v2Cgege0Hj7AJzmJFyf3Kw&s' // Replace with actual image URL
      },
      {
        name: 'BPT Parboiled Rice',
        desc: 'A versatile parboiled rice variety suitable for a wide range of dishes.',
        img: 'https://5.imimg.com/data5/KQ/FR/MY-24851637/popular-silver-bpt-parboiled-rice-500x500.jpg' // Replace with actual image URL
      }
    ]
  }
];

const Rice = () => {
  return (
    <div className="rice-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://shopfelicity.in/wp-content/uploads/2020/10/ROYAL-BASMATI-RICE.jpg" alt="Rice Varieties" className="hero-image" />
        <h1 className="hero-heading">Rice</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim offers a wide range of rice varieties, including Basmati, Non-Basmati, and Parboiled rice. Our rice is sourced from the finest farms and processed to retain its natural aroma, texture, and nutritional value.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {riceData.map((item, index) => (
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

export default Rice;