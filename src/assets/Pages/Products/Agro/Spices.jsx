import React from 'react';
import './Cereals.css';

const spicesData = [
  { 
    name: 'Turmeric', 
    img: 'https://www.nirvanaorganic.in/cdn/shop/articles/Untitled_design_25.jpg?v=1725415857&width=1500', // Blank image link
    desc: 'Advitha Exim offers premium quality turmeric, known for its vibrant color and health benefits. Our turmeric is sourced from the finest farms and is perfect for culinary and medicinal uses.',
    types: [
      {
        name: 'Whole Turmeric',
        desc: 'Whole turmeric roots are used in traditional cooking and Ayurvedic remedies. They are rich in curcumin, a powerful antioxidant.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUeW6DMsO_Y2etuGavxTccRLqaZrFK5lV7A&s' // Blank image link
      },
      {
        name: 'Turmeric Powder',
        desc: 'Turmeric powder is widely used in cooking for its vibrant color and earthy flavor. It is also used in skincare and health supplements.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2024/5/415594764/ZN/NE/ZA/212628420/turmeric-powder.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Cardamom', 
    img: 'https://m.media-amazon.com/images/I/61P2X5yWxeL.jpg', // Blank image link
    desc: 'Our cardamom is sourced from the finest farms, ensuring a rich aroma and flavor. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Green Cardamom',
        desc: 'Green cardamom is known for its sweet and floral flavor. It is widely used in desserts, teas, and savory dishes.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBhy6KB9PwhkhQMGE62OJN9QCeKhS0II1Yg&s' // Blank image link
      },
      {
        name: 'Black Cardamom',
        desc: 'Black cardamom has a smoky flavor and is used in savory dishes and spice blends. It is rich in antioxidants.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVa2agAYf5GaOjmcaI_sMcAtdObyJPeMyEcbaBjYzzMxKsLVNtkJegqVZKyi1VzPFUS-Y&usqp=CAU' // Blank image link
      }
    ]
  },
  { 
    name: 'Cumin', 
    img: 'https://images.squarespace-cdn.com/content/v1/52bc612ae4b038e4d94a53e6/6189786f-95c0-402a-9662-aa0743dd5796/Cumin+%284%29.JPG', // Blank image link
    desc: 'Cumin from Advitha Exim is known for its warm, earthy flavor. It is widely used in cooking and for its digestive benefits.',
    types: [
      {
        name: 'Whole Cumin Seeds',
        desc: 'Whole cumin seeds are used for tempering and adding flavor to dishes. They are rich in iron and antioxidants.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVBP2lIhDw4LlCVXuOvunh9oBM4Lj6rqnREw&s' // Blank image link
      },
      {
        name: 'Cumin Powder',
        desc: 'Cumin powder is used in spice blends and for seasoning dishes. It is perfect for adding depth to curries and soups.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyZlXfd8hL-LR373mcaTfrrwNMu2_ON9hksQ&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Coriander', 
    img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/09/coriander-cilantro-seeds-herb-1296x728-header-1296x728.jpg?w=1155&h=1528', // Blank image link
    desc: 'Our coriander is sourced from the finest farms, ensuring a fresh and citrusy flavor. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Coriander Seeds',
        desc: 'Coriander seeds are used in spice blends and for pickling. They have a warm, citrusy flavor.',
        img: 'https://www.trustbasket.com/cdn/shop/articles/Coriander_Seeds.webp?v=1681212343' // Blank image link
      },
      {
        name: 'Coriander Powder',
        desc: 'Coriander powder is used in curries, soups, and marinades. It adds a fresh and citrusy flavor to dishes.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDC-4M0r4l0vhTGowiMSACunV269NaG_pZQ&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Cloves', 
    img: 'https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/01/18135455/Cloves%402440x1200px-1024x504.jpg', // Blank image link
    desc: 'Cloves from Advitha Exim are known for their strong, aromatic flavor. They are perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Whole Cloves',
        desc: 'Whole cloves are used in cooking and for making spice blends. They are rich in antioxidants and have a strong flavor.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7zJeTAaVjTOXqRI86PuirZYzpSbUy6Ah_PQ&s' // Blank image link
      },
      {
        name: 'Clove Powder',
        desc: 'Clove powder is used in baking and for seasoning dishes. It adds a warm and aromatic flavor.',
        img: 'https://5.imimg.com/data5/ECOM/Default/2023/3/294876725/PZ/GR/HR/182022969/clovespowder2-500x500.png' // Blank image link
      }
    ]
  },
  { 
    name: 'Black Pepper', 
    img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/fro/fro02955/l/9.jpg', // Blank image link
    desc: 'Our black pepper is sourced from the finest farms, ensuring a sharp and pungent flavor. It is perfect for culinary uses and health benefits.',
    types: [
      {
        name: 'Whole Black Pepper',
        desc: 'Whole black pepper is used for grinding and adding flavor to dishes. It is rich in antioxidants and has a sharp flavor.',
        img: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/fro/fro02955/l/9.jpg' // Blank image link
      },
      {
        name: 'Black Pepper Powder',
        desc: 'Black pepper powder is used for seasoning and adding heat to dishes. It is perfect for soups, curries, and marinades.',
        img: 'https://media.istockphoto.com/id/1301622377/photo/ground-black-pepper-in-a-wooden-bowl-and-peppercorns-on-a-white-background-isolated-top-view.jpg?s=612x612&w=0&k=20&c=xPqOOYHRslVzSSlFAyLc9evjCFgLW2oHxgvmw8uR1Nc=' // Blank image link
      }
    ]
  },
  { 
    name: 'Mustard Seeds', 
    img: 'https://www.viralspices.com/wp-content/uploads/2024/08/Mustard-seed-624x312.jpg', // Blank image link
    desc: 'Mustard seeds from Advitha Exim are known for their pungent flavor and health benefits. They are perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Yellow Mustard Seeds',
        desc: 'Yellow mustard seeds are mild and used in pickling and tempering. They add a tangy flavor to dishes.',
        img: 'https://www.nutrixia.in/cdn/shop/files/Brassica-alba-Nutrixia-Food-78830372.jpg?v=1698390544&width=1946' // Blank image link
      },
      {
        name: 'Black Mustard Seeds',
        desc: 'Black mustard seeds are strong and used in Indian cooking. They add a pungent flavor to dishes.',
        img: 'http://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-mustard-seeds-premium-quality-indian-spice.20230810042906.webp' // Blank image link
      }
    ]
  },
  { 
    name: 'Fenugreek', 
    img: 'https://d2jx2rerrg6sh3.cloudfront.net/images/news/ImageForNews_772967_1709086156673855.jpg', // Blank image link
    desc: 'Our fenugreek is sourced from the finest farms, ensuring a bitter and nutty flavor. It is perfect for culinary uses and health benefits.',
    types: [
      {
        name: 'Fenugreek Seeds',
        desc: 'Fenugreek seeds are used in cooking and for making spice blends. They are rich in fiber and antioxidants.',
        img: 'https://cdn.britannica.com/05/118605-004-4D6BF054/Seeds-fenugreek.jpg?w=400&h=300&c=crop' // Blank image link
      },
      {
        name: 'Fenugreek Powder',
        desc: 'Fenugreek powder is used in curries and for seasoning dishes. It adds a bitter and nutty flavor.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK42npEj2-PGi0JMHfFms4v5cVLpr8nH3hg&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Red Chilli (Whole, Powder, Flakes)', 
    img: 'https://image.made-in-china.com/2f0j00FkEVwGdPAWuh/Dried-Red-Chilli-Powder-Spicy-Pepper-Powder-Jalapeno.webp', // Blank image link
    desc: 'Red chilli from Advitha Exim is known for its heat and vibrant color. It is perfect for adding spice to dishes.',
    types: [
      {
        name: 'Whole Red Chillies',
        desc: 'Whole red chillies are used in cooking and for making spice blends. They add heat and flavor to dishes.',
        img: 'https://image.made-in-china.com/2f0j00iGKMsJSCLfca/100-Red-Chili-Hot-Pepper-Pure-Natural-Dried-Bhut-Jolokia-Red-Ghost-Chili-Pepper-No-Preservatives-Whole-Flakes-Powder-Spices.jpg' // Blank image link
      },
      {
        name: 'Red Chilli Powder',
        desc: 'Red chilli powder is used for seasoning and adding heat to dishes. It is perfect for curries and marinades.',
        img: 'https://shop.thesourcebulkfoods.com.au/wp-content/uploads/sites/3/2019/10/80209_Ground-Chilli-shop-resize.jpg' // Blank image link
      },
      {
        name: 'Red Chilli Flakes',
        desc: 'Red chilli flakes are used for garnishing and adding heat to dishes. They are perfect for pizzas and pasta.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-5h-bB7i0wUfoWFCn54TF-k5QaHGE5VCvA&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Star Anise', 
    img: 'https://m.media-amazon.com/images/I/61I0qNnF3gL._AC_UF1000,1000_QL80_.jpg', // Blank image link
    desc: 'Star anise from Advitha Exim is known for its sweet and licorice-like flavor. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Whole Star Anise',
        desc: 'Whole star anise is used in cooking and for making spice blends. It adds a sweet and aromatic flavor to dishes.',
        img: 'https://dukaan.b-cdn.net/1000x1000/webp/projecteagle/images/04c3afeb-0800-483c-b93b-afd487b40945.jpg' // Blank image link
      },
      {
        name: 'Star Anise Powder',
        desc: 'Star anise powder is used in baking and for seasoning dishes. It adds a warm and sweet flavor.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzGeuqrg9M9JnNau11Cp4jSf1yMpR-82qFeA&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Nutmeg', 
    img: 'https://blog.lafco.com/wp-content/uploads/2024/01/nutmeg-482.jpg', // Blank image link
    desc: 'Our nutmeg is sourced from the finest farms, ensuring a warm and nutty flavor. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Whole Nutmeg',
        desc: 'Whole nutmeg is used for grating and adding flavor to dishes. It is rich in antioxidants and has a warm flavor.',
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/nutmeg-benefits-1200x628-facebook-1200x628.jpg' // Blank image link
      },
      {
        name: 'Nutmeg Powder',
        desc: 'Nutmeg powder is used in baking and for seasoning dishes. It adds a warm and nutty flavor.',
        img: 'https://www.wockhardthospitals.com/wp-content/uploads/2020/11/Nutmeg-aka-jaiphal-for-weight-loss-768x512-1.webp' // Blank image link
      }
    ]
  }
];

const Spices = () => {
  return (
    <div className="spices-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://images.ctfassets.net/3s5io6mnxfqz/3pLESMFjNopcam5J5qGcoT/0427544b060a8fd29e3c0b68281d56cf/AdobeStock_191057762.jpeg" alt="Spices" className="hero-image" />
        <h1 className="hero-heading">Spices</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality spices sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are fresh, flavorful, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade spices
          with superior taste and quality. Our spices are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {spicesData.map((item, index) => (
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

export default Spices;