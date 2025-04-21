import React from 'react';
import './Cereals.css';

const vegetablesData = [
  { 
    name: 'Potatoes', 
    img: 'https://healthyfamilyproject.com/wp-content/uploads/2020/05/Potatoes-background.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality potatoes, known for their versatility and nutritional value. Our potatoes are sourced from the finest farms and are perfect for cooking, frying, and baking.',
    types: [
      {
        name: 'White Potatoes',
        desc: 'White potatoes are versatile and widely used in cooking. They are perfect for boiling, mashing, and frying.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8eAJoxh1iyWKBn0IbYwXdk5OA9jx7yzPcw&s' // Blank image link
      },
      {
        name: 'Sweet Potatoes',
        desc: 'Sweet potatoes are rich in vitamins and antioxidants. They are ideal for baking, roasting, and making desserts.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEHLkqrUlXacyGkONCNpb6Z_AWRfgtuMmvw&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Onions', 
    img: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/276/276714/red-and-white-onions.jpg', // Blank image link
    desc: 'Our onions are sourced from the finest farms, ensuring a strong flavor and high nutritional value. They are perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Red Onions',
        desc: 'Red onions are known for their sharp flavor and vibrant color. They are perfect for salads, pickling, and cooking.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpP5PUX2RBhSAxxhXiV9KEUwiUvmm00Kynw&s' // Blank image link
      },
      {
        name: 'White Onions',
        desc: 'White onions have a milder flavor and are ideal for cooking and frying. They are widely used in soups and stews.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxrth0VrVobwxZK5lw3n0pNXah4IBCrSp-g&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Garlic', 
    img: 'https://media.istockphoto.com/id/1340230644/photo/closeup-of-garlic-bulbs-on-wooden-table-with-garlics-blur-background-a-set-of-fresh-garlic-on.jpg?s=612x612&w=0&k=20&c=ViGupj8zL6dDwWKe79V5R2J_NyUqIMLpHduY1e58LGM=', // Blank image link
    desc: 'Garlic from Advitha Exim is known for its strong flavor and health benefits. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Whole Garlic Bulbs',
        desc: 'Whole garlic bulbs are used in cooking and for making spice blends. They are rich in antioxidants and have a strong flavor.',
        img: 'https://images-cdn.ubuy.co.in/64efc1651632da2ebd38d442-garlic-bulb-fresh-whole-each.jpg' // Blank image link
      },
      {
        name: 'Garlic Powder',
        desc: 'Garlic powder is used for seasoning and adding flavor to dishes. It is perfect for soups, curries, and marinades.',
        img: 'https://5.imimg.com/data5/GLADMIN/Default/2024/1/375570198/GB/YK/ZG/33104/garlic-powder-250x250.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Ginger', 
    img: 'http://organicmandya.com/cdn/shop/files/Ginger.jpg?v=1721374786&width=1000', // Blank image link
    desc: 'Our ginger is sourced from the finest farms, ensuring a fresh and aromatic flavor. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Fresh Ginger',
        desc: 'Fresh ginger is used in cooking and for making teas. It is rich in antioxidants and has a strong, spicy flavor.',
        img: 'https://5.imimg.com/data5/WW/QH/MY-41747332/fresh-ginger-500x500.jpg' // Blank image link
      },
      {
        name: 'Dried Ginger',
        desc: 'Dried ginger is used in spice blends and for making traditional remedies. It has a warm and spicy flavor.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUw1UumFpl6CJK3XFr9ZTgp9GPkG8Lecz9YA&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Green Chillies', 
    img: 'https://cdn.shopify.com/s/files/1/1489/8850/files/green-chilli_759_480x480.jpg?v=1649307953', // Blank image link
    desc: 'Green chillies from Advitha Exim are known for their heat and vibrant flavor. They are perfect for adding spice to dishes.',
    types: [
      {
        name: 'Whole Green Chillies',
        desc: 'Whole green chillies are used in cooking and for making pickles. They add heat and flavor to dishes.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/4/300951155/MT/AX/NP/34959049/green-chilli-02-500x500.jpg' // Blank image link
      },
      {
        name: 'Chopped Green Chillies',
        desc: 'Chopped green chillies are used for garnishing and adding heat to dishes. They are perfect for curries and stir-fries.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQazqlVh1KiyXUlleYhc7bhkx4kLbWo-G0pHw&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Okra (Ladyfinger)', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Hong_Kong_Okra_Aug_25_2012.JPG', // Blank image link
    desc: 'Our okra is sourced from the finest farms, ensuring a fresh and tender texture. It is perfect for cooking and frying.',
    types: [
      {
        name: 'Fresh Okra',
        desc: 'Fresh okra is used in cooking and for making stews. It is rich in fiber and vitamins.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpdM_9A8N5J4N67MuLLAiI-_0JrTCnswIkw&s' // Blank image link
      },
      {
        name: 'Dried Okra',
        desc: 'Dried okra is used in traditional dishes and for making snacks. It has a unique texture and flavor.',
        img: 'https://m.media-amazon.com/images/I/71Ud6Tvmg6L._AC_UF1000,1000_QL80_.jpg' // Blank image link
      }
    ]
  }
];

const Vegetables = () => {
  return (
    <div className="vegetables-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://images.healthshots.com/healthshots/en/uploads/2024/05/15135824/vegetables-for-breakfast-1-1.jpg" alt="Vegetables" className="hero-image" />
        <h1 className="hero-heading">Vegetables</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality vegetables sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are fresh, nutritious, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade vegetables
          with superior taste and quality. Our vegetables are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {vegetablesData.map((item, index) => (
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

export default Vegetables;