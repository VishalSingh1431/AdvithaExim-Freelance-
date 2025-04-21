import React from 'react';
import './Cereals.css';

const sugarData = [
  { 
    name: 'Sugarcane', 
    img: 'https://cdn.mos.cms.futurecdn.net/wrPsuVgWd9UpVxC8oEZ7sS.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality sugarcane, known for its natural sweetness and versatility. Our sugarcane is sourced from the finest farms and is perfect for producing sugar and other sweeteners.',
    types: [
      {
        name: 'Raw Sugarcane',
        desc: 'Raw sugarcane is used for juicing and extracting natural sugars. It is rich in nutrients and provides a natural energy boost.',
        img: 'https://www.millerchemical.com/wp-content/uploads/2021/03/sugarcane-157608572-1024x685.png' // Blank image link
      },
      {
        name: 'Processed Sugarcane',
        desc: 'Processed sugarcane is used for producing refined sugar and other sweeteners. It is widely used in the food and beverage industry.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_ignZeu5DhOo3otF7NZlAtuXnli3Kcv8zg&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Jaggery (Gur)', 
    img: 'https://images.meesho.com/images/products/96191509/irxgu_512.webp', // Blank image link
    desc: 'Our jaggery is made from pure sugarcane juice, ensuring a rich flavor and high nutritional value. It is perfect for culinary uses and traditional remedies.',
    types: [
      {
        name: 'Solid Jaggery',
        desc: 'Solid jaggery is used in cooking and for making traditional sweets. It is rich in iron and other minerals.',
        img: 'https://img.clevup.in/25743/1704394807306_Jaggeryballs.jpeg?width=600' // Blank image link
      },
      {
        name: 'Powdered Jaggery',
        desc: 'Powdered jaggery is used for sweetening beverages and desserts. It is easy to use and dissolves quickly.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrjU4bSDMl3lzPg2IkRvodRLBtr31XHu4EQ&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Honey', 
    img: 'https://lh7-us.googleusercontent.com/docsz/AD_4nXegGI3TiMP1VA7dg9NM9s74UiVjz03ykV6vriPjhueDEFDByeCykWVlt7jQl9_1oXKFwDTTRSONhfuiVYNX6EpBU1I2EaaDIoUuGC2b5NTa4fNYs7o1tTcQ-JDQQyqqAHDAQYmehDfiFW_q4PpjX5_UHQdB?key=sSd4HTTcsx8a0nLkjBPRVA', // Blank image link
    desc: 'Honey from Advitha Exim is known for its natural sweetness and health benefits. It is perfect for culinary uses, traditional remedies, and skincare.',
    types: [
      {
        name: 'Raw Honey',
        desc: 'Raw honey is unprocessed and retains its natural enzymes and nutrients. It is perfect for health-conscious consumers.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HHRdKjPSE3ZDgnSSnivwRbdw7Tk48txofg&s' // Blank image link
      },
      {
        name: 'Processed Honey',
        desc: 'Processed honey is filtered and pasteurized for a smooth texture. It is widely used in the food and beverage industry.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusYc96TWr0qneuWF83tyXQygNSr35yeu6TKSHxzKkl4i9PGXa0C9drRSnolbuU2dy_L0&usqp=CAU' // Blank image link
      }
    ]
  }
];

const Sugar = () => {
  return (
    <div className="sugar-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://d1e3z2jco40k3v.cloudfront.net/-/media/project/oneweb/fon21/articles/2020/08/sweetener-types-sugar-honey-stevia-1620x1080jpg.jpg?rev=eeb9b4a5f15341a78588d1cfc774a8b6" alt="Sugar and Sweeteners" className="hero-image" />
        <h1 className="hero-heading">Sugar and Sweeteners</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality sugar and sweeteners sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are natural, nutritious, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade sugar and sweeteners
          with superior taste and quality. Our products are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {sugarData.map((item, index) => (
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

export default Sugar;