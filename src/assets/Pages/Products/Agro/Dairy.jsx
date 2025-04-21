import React from 'react';
import './Cereals.css';


const dairyData = [
  { 
    name: 'Milk (Buffalo, Cow)', 
    img: 'https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2023/11/cow-milk-vs-buffalo-milk-which-is-better-for-health-1700991125.jpg', // Blank image link
    desc: 'Advitha Exim provides high-quality milk sourced from healthy buffaloes and cows. Our milk is rich in essential nutrients, ensuring freshness and purity for all your dairy needs.',
    types: [
      {
        name: 'Buffalo Milk',
        desc: 'Buffalo milk is rich in fat and protein, making it ideal for producing dairy products like ghee, cheese, and yogurt. It has a creamy texture and is highly nutritious.',
        img: 'https://aumswow.com/life-veda/assets/images/ingredients/milk-indian-buffalo.jpg' // Blank image link
      },
      {
        name: 'Cow Milk',
        desc: 'Cow milk is lighter and easier to digest compared to buffalo milk. It is rich in calcium and vitamins, making it perfect for daily consumption and dairy products.',
        img: 'https://tamilmilk.com/cdn/shop/files/freshmilk_4c782fa0-0ba2-4eab-81c3-21707b7b9819.jpg?v=1724966928&width=1024' // Blank image link
      }
    ]
  },
  { 
    name: 'Ghee (Clarified Butter)', 
    img: 'https://recipeland.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MjEwMTQsInB1ciI6ImJsb2JfaWQifX0=--70a6fa61b9b18467773a0212de4c683ee334a44d/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fbGltaXQiOlsxMjAwLDEyMDBdLCJjb252ZXJ0Ijoid2VicCIsInNhdmVyIjp7InN1YnNhbXBsZV9tb2RlIjoib24iLCJzdHJpcCI6dHJ1ZSwiaW50ZXJsYWNlIjp0cnVlLCJxdWFsaXR5Ijo2MH19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--5a3eca78d160e66d54692afbdfb68cce4a255017/ghee-clarified-butter.jpg', // Blank image link
    desc: 'Our ghee is made from pure, high-quality milk and is traditionally prepared to retain its rich aroma and nutritional benefits. It is perfect for cooking, baking, and Ayurvedic remedies.',
    types: [
      {
        name: 'Cow Ghee',
        desc: 'Cow ghee is known for its light texture and digestive properties. It is rich in antioxidants and is widely used in traditional Indian cooking and Ayurveda.',
        img: 'https://siribelenatural.com/public/uploads/products/A2-Desi-Hallikar-cow-ghee-picture-1_80801629971829.webp' // Blank image link
      },
      {
        name: 'Buffalo Ghee',
        desc: 'Buffalo ghee has a rich, creamy texture and is high in fat content. It is ideal for enhancing the flavor of dishes and is commonly used in sweets and desserts.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQTvo7cYlJ0_QkBtmmHxnweYyb1GKzaQgGUw&s' // Blank image link
      }
    ]
  }
];

const Dairy = () => {
  return (
    <div className="dairy-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://domf5oio6qrcr.cloudfront.net/medialibrary/9685/iStock-544807136.jpg" alt="Dairy Products" className="hero-image" />
        <h1 className="hero-heading">Dairy Products</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality dairy products sourced from trusted farms.
          Our commitment to excellence ensures that we deliver products that are fresh, nutritious, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade dairy products
          with superior taste and quality. Our products are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {dairyData.map((item, index) => (
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

export default Dairy;