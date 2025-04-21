import React from 'react';
import './Cereals.css';

const cerealsData = [
  { 
    name: 'Rice (Basmati, Non-Basmati, Parboiled)', 
    img: 'https://5.imimg.com/data5/HJ/IO/NG/SELLER-11034022/parboiled-rice.jpeg',
    desc: 'Advitha Exim provides premium quality rice sourced from the finest farms, ensuring superior taste and nutrition. Our rice varieties are carefully processed to retain their natural aroma and texture, making them ideal for both domestic and international markets.',
    types: [
      {
        name: 'Basmati Rice',
        desc: 'Basmati rice is known for its long grains and fragrant aroma, perfect for biryanis and pilafs. It is aged to enhance its flavor and texture.',
        img: 'https://plus.unsplash.com/premium_photo-1723925093264-40b6b957c44d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Non-Basmati Rice',
        desc: 'Non-Basmati rice is versatile and widely used in everyday cooking. It is available in various grain lengths and is ideal for a variety of dishes.',
        img: 'https://plus.unsplash.com/premium_photo-1705516190542-8b3376798ea4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        name: 'Parboiled Rice',
        desc: 'Parboiled rice is partially boiled in the husk, retaining more nutrients and offering a firmer texture. It is perfect for dishes that require a non-sticky texture.',
        img: 'https://3.imimg.com/data3/KF/TH/MY-8497847/long-grain-parboiled-rice.png'
      }
    ]
  },
  { 
    name: 'Wheat', 
    img: 'https://naturebiofoods.organic/wp-content/uploads/2020/12/Organic-Wheat.jpg',
    desc: 'Our wheat is carefully selected to meet international quality standards, ideal for baking and cooking. We ensure that our wheat is rich in gluten and nutrients, making it perfect for producing high-quality flour and other wheat-based products.'
  },
  { 
    name: 'Maize (Corn)', 
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/8/334836385/UJ/RM/IO/23524314/yellow-corn-maize.jpg',
    desc: 'We offer high-quality maize, rich in nutrients and suitable for food and industrial use. Our maize is sourced from trusted farmers and is processed under strict quality control measures to ensure it meets global standards.'
  },
  { 
    name: 'Barley', 
    img: 'https://upaj.ag/cdn/shop/articles/Barley.png?v=1724838064',
    desc: 'Barley from Advitha Exim is perfect for brewing, animal feed, and various culinary applications. Our barley is known for its high nutritional value and is widely used in the production of malt and health foods.'
  },
  { 
    name: 'Millets (Ragi, Bajra, Jowar)', 
    img: 'https://static.toiimg.com/photo/98123065.cms',
    desc: 'Our millet varieties are organic, nutrient-rich, and perfect for a healthy diet. Millets are gluten-free and packed with essential vitamins and minerals, making them an excellent choice for health-conscious consumers.',
    types: [
      {
        name: 'Ragi (Finger Millet)',
        desc: 'Ragi is rich in calcium and iron, making it ideal for bone health. It is commonly used in porridge, flatbreads, and snacks.',
        img: 'https://milletamma.com/cdn/shop/products/52_f1e5355f-4f1e-471e-b012-b983371899b5.jpg?v=1717387255'
      },
      {
        name: 'Bajra (Pearl Millet)',
        desc: 'Bajra is high in protein and fiber, aiding in weight management. It is often used in flatbreads and porridge.',
        img: 'http://milletamma.com/cdn/shop/products/77_2cd0fde0-b2fe-434a-9a5c-172d43bba8c9.jpg?v=1717386773'
      },
      {
        name: 'Jowar (Sorghum)',
        desc: 'Jowar is a versatile grain used in flatbreads, porridge, and snacks. It is rich in antioxidants and gluten-free.',
        img: 'https://static.wixstatic.com/media/c7c732_640c6356cf5f4f9bbcfe83e38b405091~mv2.jpg/v1/fill/w_519,h_364,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7c732_640c6356cf5f4f9bbcfe83e38b405091~mv2.jpg'
      }
    ]
  },
  { 
    name: 'Sorghum', 
    img: 'https://foodsofnations.com/cdn/shop/products/organic-sorghum-grains-main-min.jpg?v=1651523452',
    desc: 'Sorghum supplied by Advitha Exim is of export quality and widely used for food and fodder. It is a versatile grain that is rich in antioxidants and is a staple in many diets around the world.'
  }
];

const Cereals = () => {
  return (
    <div className="cereals-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://static.vecteezy.com/system/resources/previews/045/909/780/non_2x/variety-of-grains-and-cereals-cut-out-stock-png.png" alt="Cereals & Grains" className="hero-image" />
        <h1 className="hero-heading">Cereals & Grains</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality cereals and grains sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are rich in nutrition and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, agriculture, and export markets, ensuring premium-grade grains
          with superior taste and texture. Our grains are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {cerealsData.map((item, index) => (
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

export default Cereals;