import React from 'react';
import './Cereals.css';

const dryFruitsData = [
  { 
    name: 'Cashew Nuts', 
    img: 'https://post.healthline.com/wp-content/uploads/2019/10/cashew-nut-nuts-bowl-1296x728-header-1296x728.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality cashew nuts, known for their rich flavor and nutritional benefits. Our cashews are carefully processed to ensure they are fresh and free from impurities.',
    types: [
      {
        name: 'Whole Cashews',
        desc: 'Whole cashews are perfect for snacking and cooking. They are rich in healthy fats, proteins, and essential minerals.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353965095/CL/PL/KQ/123456531/w320-whole-cashew-nuts.jpg' // Blank image link
      },
      {
        name: 'Split Cashews',
        desc: 'Split cashews are ideal for garnishing and adding a crunchy texture to dishes. They are widely used in desserts and savory recipes.',
        img: 'https://gonefarmers.com/cdn/shop/products/image_a514be9f-c96d-4c27-9288-bc1f13b20f34_1024x1024@2x.jpg?v=1595943423' // Blank image link
      }
    ]
  },
  { 
    name: 'Almonds', 
    img: 'https://www.health.com/thmb/xklPFBrlPpwcHND_ov5EZwLHAwc=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/almonds-GettyImages-683814187-2000-44a06e730fac4c60a10cbb5f9642b589.jpg', // Blank image link
    desc: 'Our almonds are sourced from the finest orchards, ensuring high nutritional value and excellent taste. They are rich in vitamins, minerals, and antioxidants.',
    types: [
      {
        name: 'Whole Almonds',
        desc: 'Whole almonds are perfect for snacking and baking. They are a great source of healthy fats and proteins.',
        img: 'https://thesweetblend.com/cdn/shop/products/whole-almond-nuts-berries-150-grams-141963.jpg?v=1656923636&width=1445' // Blank image link
      },
      {
        name: 'Sliced Almonds',
        desc: 'Sliced almonds are ideal for garnishing salads, desserts, and breakfast dishes. They add a delightful crunch and flavor.',
        img: 'https://dryfruitsmandy.com/wp-content/uploads/2021/03/Natural_Sliced_Almonds-3.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Walnuts', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/1200px-Walnuts_-_whole_and_open_with_halved_kernel.jpg', // Blank image link
    desc: 'Walnuts from Advitha Exim are known for their rich, earthy flavor and high omega-3 content. They are perfect for snacking, baking, and cooking.',
    types: [
      {
        name: 'Whole Walnuts',
        desc: 'Whole walnuts are great for snacking and adding to baked goods. They are rich in healthy fats and antioxidants.',
        img: 'https://jagsfresh-bucket.s3.amazonaws.com/media/package/img_one/2020-12-18/Walnut_Whole.jpg' // Blank image link
      },
      {
        name: 'Chopped Walnuts',
        desc: 'Chopped walnuts are ideal for adding to salads, oatmeal, and desserts. They provide a rich, nutty flavor.',
        img: 'https://i.etsystatic.com/10362636/r/il/b4f7f3/1204297994/il_fullxfull.1204297994_c8ul.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Raisins', 
    img: 'https://cdn.shopify.com/s/files/1/0027/6008/1477/articles/what-are-raisins-957608.jpg?v=1649978940', // Blank image link
    desc: 'Our raisins are made from the finest grapes, ensuring a sweet and chewy texture. They are perfect for snacking, baking, and cooking.',
    types: [
      {
        name: 'Black Raisins',
        desc: 'Black raisins are rich in iron and antioxidants. They are perfect for adding sweetness to desserts and savory dishes.',
        img: 'https://m.media-amazon.com/images/I/61egVeNnFUL.jpg' // Blank image link
      },
      {
        name: 'Golden Raisins',
        desc: 'Golden raisins are slightly sweeter and are often used in baking and as a topping for cereals and yogurt.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2021/2/MT/OV/OT/123440641/golden-raisins-500x500.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Pistachios', 
    img: 'https://www.realsimple.com/thmb/xt6C3f0RcNO4ZFhjMQ9sngHN5j4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pistachio-benefits-2000-dce2ac6714bf4e9594e7e71cd6a6558d.jpg', // Blank image link
    desc: 'Pistachios from Advitha Exim are known for their vibrant green color and rich flavor. They are a great source of protein, fiber, and healthy fats.',
    types: [
      {
        name: 'Shelled Pistachios',
        desc: 'Shelled pistachios are perfect for snacking and adding to desserts. They are rich in nutrients and have a unique flavor.',
        img: 'https://cdn.dotpe.in/longtail/store-items/7914440/37q3IbTN.jpeg' // Blank image link
      },
      {
        name: 'Unshelled Pistachios',
        desc: 'Unshelled pistachios are great for roasting and adding to savory dishes. They provide a satisfying crunch.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2022/7/YD/FY/PB/12475064/dry-roasted-no-shell-pistachios-with-himalayan-salt-main-min-1-500x500.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Dates', 
    img: 'https://cdn.shopify.com/s/files/1/0669/9093/2145/files/variety-dry-fruits-wooden-platter-1024x683.jpg?v=1731310627', // Blank image link
    desc: 'Our dates are sourced from the finest farms, ensuring a sweet and chewy texture. They are perfect for snacking, baking, and as a natural sweetener.',
    types: [
      {
        name: 'Medjool Dates',
        desc: 'Medjool dates are large, sweet, and perfect for snacking or adding to desserts. They are rich in fiber and natural sugars.',
        img: 'https://nutnutties.com/wp-content/uploads/2021/09/Medjool-Dates-Premium.png' // Blank image link
      },
      {
        name: 'Deglet Noor Dates',
        desc: 'Deglet Noor dates are smaller and less sweet, making them ideal for cooking and baking. They are a great source of energy.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2024/6/428579358/KX/KX/LF/15234166/deglet-noor-dates-500x500.jpg' // Blank image link
      }
    ]
  }
];

const DryFruits = () => {
  return (
    <div className="dryfruits-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://www.itoozhiayurveda.in/wp-content/uploads/2023/10/set-pecan-pistachios-almond-peanut-cashew-pine-nuts-lined-up-assorted-nuts-dried-fruits-mini-different-bowls-scaled.jpg" alt="Dry Fruits & Nuts" className="hero-image" />
        <h1 className="hero-heading">Dry Fruits & Nuts</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality dry fruits and nuts sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are fresh, nutritious, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade dry fruits and nuts
          with superior taste and quality. Our products are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {dryFruitsData.map((item, index) => (
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

export default DryFruits;