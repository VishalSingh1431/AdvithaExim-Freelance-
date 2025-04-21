import React from 'react';
import './Cereals.css';

const pulsesData = [
  { 
    name: 'Chickpeas (Chana)', 
    img: 'https://5.imimg.com/data5/SELLER/Default/2022/4/WE/JD/JU/131368427/07-4-col-gettyimages-1305450580-500x500.jpg',
    desc: 'Advitha Exim offers premium quality chickpeas, known for their rich protein content and versatility in culinary applications. Our chickpeas are carefully sourced and processed to ensure they meet the highest standards of quality and taste.',
    types: [
      {
        name: 'Kabuli Chana',
        desc: 'Kabuli Chana is larger and lighter in color, commonly used in salads, stews, and hummus. It is rich in protein and fiber.',
        img: 'https://m.media-amazon.com/images/I/61geMsFcXTL.jpg'
      },
      {
        name: 'Desi Chana',
        desc: 'Desi Chana is smaller and darker, often used in traditional Indian dishes like chana masala. It is packed with nutrients and has a robust flavor.',
        img: 'https://clicknbuy.qa/cdn/shop/files/Blackchana02_1024x1024.jpg?v=1730035698'
      }
    ]
  },
  { 
    name: 'Lentils (Masoor Dal)', 
    img: 'https://onelifetoeat.com/wp-content/uploads/2010/04/polished-brown-lentil-orange-lentil.jpg',
    desc: 'Our lentils are sourced from the finest farms, ensuring high nutritional value and excellent taste. They are perfect for soups, stews, and traditional dal preparations.',
    types: [
      {
        name: 'Whole Masoor',
        desc: 'Whole Masoor lentils are brown in color and retain their shape when cooked. They are rich in protein and iron.',
        img: 'https://neelamfoodlandmumbai.com/cdn/shop/products/IMG_7380_55892985-b845-4c29-9137-b2d66331dfd5_800x.jpg?v=1678352126'
      },
      {
        name: 'Split Masoor',
        desc: 'Split Masoor lentils are red or orange and cook faster. They are commonly used in Indian dal recipes.',
        img: 'https://www.haridwarmart.com/wp-content/uploads/2020/12/haridwar-mart-masoor-dal.png'
      }
    ]
  },
  { 
    name: 'Pigeon Peas (Toor Dal)', 
    img: 'https://uocb.org/wp-content/uploads/2023/01/Pigeon-Pea-Toor.jpg',
    desc: 'Pigeon peas are a staple in Indian cuisine, known for their earthy flavor and high protein content. They are widely used in dal, soups, and stews.'
  },
  { 
    name: 'Black Gram (Urad Dal)', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Black_gram.jpg',
    desc: 'Black gram is a highly nutritious pulse, often used in South Indian dishes like idli, dosa, and vada. It is rich in protein, iron, and fiber.'
  },
  { 
    name: 'Green Gram (Moong Dal)', 
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/3/292208774/WT/HA/IK/2899929/green-mung-beans.png',
    desc: 'Green gram is a light and easily digestible pulse, perfect for soups, salads, and traditional Indian dal. It is rich in protein, vitamins, and minerals.'
  }
];

const Pulses = () => {
  return (
    <div className="pulses-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://bariatricsurgeonmumbai.com/wp-content/uploads/2021/01/Legumes-variety.jpg" alt="Pulses & Legumes" className="hero-image" />
        <h1 className="hero-heading">Pulses & Legumes</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality pulses and legumes sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are rich in nutrition and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, agriculture, and export markets, ensuring premium-grade pulses
          with superior taste and texture. Our pulses are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {pulsesData.map((item, index) => (
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

export default Pulses;