import React from 'react';
import './Cereals.css'; // Reusing the same CSS file

const oilData = [
  { 
    name: 'Groundnut (Peanuts)', 
    img: 'https://5.imimg.com/data5/XQ/UR/RH/SELLER-7944710/groundnut-oil-peanut-.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality groundnut oil, known for its rich flavor and high smoke point. It is perfect for cooking, frying, and baking.',
    types: [
      {
        name: 'Refined Groundnut Oil',
        desc: 'Refined groundnut oil is light and neutral in flavor, making it ideal for frying and sautéing. It is rich in monounsaturated fats.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2024/11/464830778/KV/ZV/XH/69384121/refined-groundnut-oil-500x500.jpg' // Blank image link
      },
      {
        name: 'Cold-Pressed Groundnut Oil',
        desc: 'Cold-pressed groundnut oil retains its natural flavor and nutrients. It is perfect for salad dressings and low-heat cooking.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Z1ou2b_JkWSuo_50F_cN4Dy6D_XaghEJkA&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Mustard Seeds', 
    img: 'https://www.jiomart.com/images/product/original/rvjb3gy0ch/annratnam-100-pure-organic-radiance-kachi-ghani-mustard-seed-oil-collection-5-liter-free-250-ml-small-pack-product-images-orvjb3gy0ch-p607470155-1-202401201738.jpg?im=Resize=(420,420)', // Blank image link
    desc: 'Our mustard seed oil is known for its pungent flavor and high nutritional value. It is widely used in Indian cooking and for its health benefits.',
    types: [
      {
        name: 'Refined Mustard Oil',
        desc: 'Refined mustard oil has a milder flavor and is ideal for cooking and frying. It is rich in omega-3 fatty acids.',
        img: 'https://3.imimg.com/data3/HI/VH/MY-7055318/mustard-refined-oil-500x500.jpg' // Blank image link
      },
      {
        name: 'Kachi Ghani Mustard Oil',
        desc: 'Kachi Ghani mustard oil is cold-pressed and retains its strong flavor and nutrients. It is perfect for traditional Indian dishes.',
        img: 'https://2.wlimg.com/product_images/bc-full/2024/6/10141037/kachi-ghani-mustard-oil-1717487786-6340291.jpeg' // Blank image link
      }
    ]
  },
  { 
    name: 'Sesame Seeds (White & Black)', 
    img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/edible-seed/l/z/u/400-best-quality-white-sesame-seed-black-sesame-seed-combo-200gm-original-imagtmy3hxt4rkfc.jpeg?q=90&crop=false', // Blank image link
    desc: 'Sesame seed oil from Advitha Exim is rich in antioxidants and has a nutty flavor. It is perfect for cooking, dressings, and traditional remedies.',
    types: [
      {
        name: 'White Sesame Oil',
        desc: 'White sesame oil is light and has a mild flavor. It is ideal for stir-frying and salad dressings.',
        img: 'https://m.media-amazon.com/images/I/512ZSP37cXL._AC_UF1000,1000_QL80_.jpg' // Blank image link
      },
      {
        name: 'Black Sesame Oil',
        desc: 'Black sesame oil has a stronger flavor and is rich in antioxidants. It is perfect for traditional Asian dishes.',
        img: 'https://i0.wp.com/ecosureoils.com/wp-content/uploads/2023/05/Black-Sesame-Oil-1.jpg?fit=626%2C417&ssl=1' // Blank image link
      }
    ]
  },
  { 
    name: 'Sunflower Seeds', 
    img: 'https://thehouseoforigins.com/cdn/shop/articles/Buy_Pumpkin_and_Sunflower_Seed_Mix_Online.webp?v=1718196781&width=1100', // Blank image link
    desc: 'Our sunflower seed oil is light, healthy, and perfect for cooking and baking. It is rich in vitamin E and low in saturated fats.',
    types: [
      {
        name: 'Refined Sunflower Oil',
        desc: 'Refined sunflower oil is neutral in flavor and ideal for frying and baking. It is rich in polyunsaturated fats.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/3/292116470/AX/WU/IB/63408647/soya-chunks-500x500.jpg' // Blank image link
      },
      {
        name: 'Cold-Pressed Sunflower Oil',
        desc: 'Cold-pressed sunflower oil retains its natural nutrients and flavor. It is perfect for salad dressings and low-heat cooking.',
        img: 'https://healthybuddha.in/image/cache/catalog/sunflower-oil-500x500-500x515.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Soybean', 
    img: 'https://media.post.rvohealth.io/wp-content/uploads/2019/11/soybean-oil-732x549-thumbnail.jpg', // Blank image link
    desc: 'Soybean oil from Advitha Exim is versatile and widely used in cooking and industrial applications. It is rich in omega-6 fatty acids.',
    types: [
      {
        name: 'Refined Soybean Oil',
        desc: 'Refined soybean oil is neutral in flavor and ideal for frying and baking. It is widely used in processed foods.',
        img: 'https://www.ncdex.com/public/uploads/commodity/image/Refined-soy-oil.jpg' // Blank image link
      },
      {
        name: 'Organic Soybean Oil',
        desc: 'Organic soybean oil is cold-pressed and retains its natural nutrients. It is perfect for health-conscious consumers.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKb8otEIZhtb1p1yvDZIEvAKdHWqlbfQGhQ&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Linseed (Flaxseed)', 
    img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353320657/FU/UW/TU/182307758/linseed-flaxseed.jpg', // Blank image link
    desc: 'Linseed oil is rich in omega-3 fatty acids and is known for its health benefits. It is perfect for dressings and supplements.',
    types: [
      {
        name: 'Cold-Pressed Linseed Oil',
        desc: 'Cold-pressed linseed oil retains its natural nutrients and is ideal for salad dressings and supplements.',
        img: 'https://villageorganica.com/cdn/shop/files/web4.webp?v=1690600430&width=1445' // Blank image link
      },
      {
        name: 'Refined Linseed Oil',
        desc: 'Refined linseed oil is used in industrial applications and as a dietary supplement. It is rich in omega-3 fatty acids.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2024/1/379259606/SH/WU/HP/16747711/linseed-oil-500x500.png' // Blank image link
      }
    ]
  },
  { 
    name: 'Coconut', 
    img: 'https://foodcare.in/cdn/shop/files/Coconut.png?v=1725364574', // Blank image link
    desc: 'Coconut oil from Advitha Exim is known for its rich flavor and health benefits. It is perfect for cooking, baking, and skincare.',
    types: [
      {
        name: 'Virgin Coconut Oil',
        desc: 'Virgin coconut oil is cold-pressed and retains its natural flavor and nutrients. It is ideal for cooking and skincare.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVmU_OWEv-f_3oQCFKkDJXrV6xnh6l4OptZQ&s' // Blank image link
      },
      {
        name: 'Refined Coconut Oil',
        desc: 'Refined coconut oil has a neutral flavor and is perfect for frying and baking. It is widely used in processed foods.',
        img: 'https://5.imimg.com/data5/OC/JR/SC/SELLER-41949405/coconut-oil-500x500.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Pamoil', 
    img: 'https://www.thehealthy.com/wp-content/uploads/2021/03/GettyImages-489659546-e1615839646921.jpg', // Replace with actual image URL
    desc: 'Pamoil is a versatile oil used in various industries. It is known for its stability and high smoke point, making it ideal for frying and industrial applications.',
    types: [
      {
        name: 'RBD Pamoil',
        desc: 'Refined, Bleached, and Deodorized (RBD) Pamoil is highly refined and suitable for high-temperature cooking and industrial uses.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0DuH0OAz8ywZO2oRIXhZRDe3qVm8JGUosw&s' // Replace with actual image URL
      },
      {
        name: 'Normal Pamoil',
        desc: 'Normal Pamoil is less refined and retains some of its natural flavor. It is ideal for general cooking purposes.',
        img: 'https://tiimg.tistatic.com/fp/1/005/715/palm-olein-cooking-oil-598.jpg' // Replace with actual image URL
      }
    ]
  }
];

const Oil = () => {
  return (
    <div className="oil-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://cdn.britannica.com/16/234016-050-0220A0BE/canola-oil-and-canola-blossoms.jpg" alt="Oil" className="hero-image" />
        <h1 className="hero-heading">Oil</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality oils sourced from the finest seeds and nuts.
          Our commitment to excellence ensures that we deliver products that are nutritious, flavorful, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade oils
          with superior taste and quality. Our oils are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {oilData.map((item, index) => (
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

export default Oil;