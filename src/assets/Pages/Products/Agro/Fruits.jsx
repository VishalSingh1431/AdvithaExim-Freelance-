import React from 'react';
import './Cereals.css';

const fruitsData = [
  { 
    name: 'Mangoes (Alphonso, Kesar, Banganapalli)', 
    img: 'https://ichef.bbci.co.uk/images/ic/1200x675/p06hk0h6.jpg', // Blank image link
    desc: 'Advitha Exim offers premium quality mangoes, known as the "King of Fruits." Our mangoes are sourced from the finest orchards, ensuring a rich flavor and juicy texture.',
    types: [
      {
        name: 'Alphonso Mango',
        desc: 'Alphonso mangoes are known for their rich, creamy texture and sweet flavor. They are perfect for eating fresh or making desserts.',
        img: 'https://seed2plant.in/cdn/shop/files/AlphonsoMangoGraftedLivePlant.jpg?v=1689071379' // Blank image link
      },
      {
        name: 'Kesar Mango',
        desc: 'Kesar mangoes have a distinct saffron-like flavor and are widely used in juices, smoothies, and desserts.',
        img: 'https://www.newnessplant.com/uploads/988518da48c694f55ab430f38c906870.jpg' // Blank image link
      },
      {
        name: 'Banganapalli Mango',
        desc: 'Banganapalli mangoes are large, sweet, and fiberless, making them ideal for eating fresh or making pulp.',
        img: 'https://www.gitagged.com/wp-content/uploads/2018/11/media_image2.png' // Blank image link
      }
    ]
  },
  { 
    name: 'Bananas', 
    img: 'https://images.theconversation.com/files/269559/original/file-20190416-147522-9uqn1q.jpg?ixlib=rb-4.1.0&rect=0%2C216%2C3008%2C1504&q=45&auto=format&w=1356&h=668&fit=crop', // Blank image link
    desc: 'Our bananas are sourced from the finest farms, ensuring high nutritional value and excellent taste. They are rich in potassium, vitamins, and natural sugars.',
    types: [
      {
        name: 'Cavendish Bananas',
        desc: 'Cavendish bananas are the most common variety, known for their sweet flavor and creamy texture. They are perfect for snacking and baking.',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg' // Blank image link
      },
      {
        name: 'Red Bananas',
        desc: 'Red bananas have a unique reddish-purple skin and a sweet, creamy flavor. They are rich in antioxidants and vitamins.',
        img: 'https://www.jiomart.com/images/product/original/590000616/red-banana-1-kg-product-images-o590000616-p590000616-0-202412031738.jpg?im=Resize=(1000,1000)' // Blank image link
      }
    ]
  },
  { 
    name: 'Apples', 
    img: 'https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=1200:*', // Blank image link
    desc: 'Apples from Advitha Exim are crisp, juicy, and packed with nutrients. They are perfect for snacking, baking, and making juices.',
    types: [
      {
        name: 'Red Delicious',
        desc: 'Red Delicious apples are sweet and juicy, with a bright red skin. They are ideal for eating fresh or adding to salads.',
        img: 'https://images-cdn.ubuy.co.in/64f0bba619253f21ac6e7b38-fresh-red-delicious-apple-each.jpg' // Blank image link
      },
      {
        name: 'Granny Smith',
        desc: 'Granny Smith apples are tart and crisp, making them perfect for baking and cooking. They are rich in fiber and vitamins.',
        img: 'https://kumaribasket.com/wp-content/uploads/2020/08/commodity-granny-smith-1200x1308.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Papayas', 
    img: 'https://cdn.wikifarmer.com/images/detailed/2023/10/How-to-cultivate-papayas-for-profit.png', // Blank image link
    desc: 'Our papayas are sourced from the finest farms, ensuring a sweet and juicy texture. They are rich in vitamins, antioxidants, and digestive enzymes.',
    types: [
      {
        name: 'Solo Papaya',
        desc: 'Solo papayas are small, sweet, and perfect for eating fresh or adding to fruit salads. They are rich in vitamins A and C.',
        img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/s/k/4/50-papaya-seeds-acms-original-imagsv4z5edzczcg.jpeg?q=90&crop=false' // Blank image link
      },
      {
        name: 'Maradol Papaya',
        desc: 'Maradol papayas are large and sweet, with a vibrant orange flesh. They are ideal for making smoothies and desserts.',
        img: 'https://www.producemarketguide.com/media/user_RZKVrm5KkV/22506/papayas_commodity-page.png' // Blank image link
      }
    ]
  },
  { 
    name: 'Pomegranates', 
    img: 'https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/russia-coronavirus-crypto-film-reviews/pomegranates/@@images/rectangular_image/page-header?v=1669960917.3', // Blank image link
    desc: 'Pomegranates from Advitha Exim are known for their juicy arils and rich flavor. They are packed with antioxidants and vitamins.',
    types: [
      {
        name: 'Wonderful Pomegranate',
        desc: 'Wonderful pomegranates are large, sweet, and perfect for eating fresh or juicing. They are rich in antioxidants.',
        img: 'https://img.imageboss.me/fourwinds/width/425/dpr:2/shop/files/wonderful-pomegranate-tree.jpg?v=1729715185' // Blank image link
      },
      {
        name: 'Kandhari Pomegranate',
        desc: 'Kandhari pomegranates are known for their deep red arils and sweet-tart flavor. They are ideal for garnishing and juicing.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsfZ4N5YPCPYKYrivdbIOgJ1jG78VEy5GhHg&s' // Blank image link
      }
    ]
  },
  { 
    name: 'Guavas', 
    img: 'https://articles-1mg.gumlet.io/articles/wp-content/uploads/2016/11/rsz_shutterstock_173770400.jpg?compress=true&quality=80&w=640&dpr=2.6', // Blank image link
    desc: 'Our guavas are sourced from the finest farms, ensuring a sweet and aromatic flavor. They are rich in vitamins, fiber, and antioxidants.',
    types: [
      {
        name: 'White Guava',
        desc: 'White guavas have a creamy flesh and a mild, sweet flavor. They are perfect for eating fresh or making juices.',
        img: 'https://m.media-amazon.com/images/I/71Ks4iR+-7L._AC_UF1000,1000_QL80_.jpg' // Blank image link
      },
      {
        name: 'Pink Guava',
        desc: 'Pink guavas have a vibrant pink flesh and a sweet-tart flavor. They are ideal for making jams and desserts.',
        img: 'https://fiercefruit.com/cdn/shop/articles/Whole-and-cut-pink-guava-fruits_5173x.jpg?v=1633970138' // Blank image link
      }
    ]
  },
  { 
    name: 'Grapes', 
    img: 'https://www.perfection.com.au/hubfs/Produce%20Close%20up%20or%20Styled/grapes-banner.jpg', // Blank image link
    desc: 'Grapes from Advitha Exim are juicy, sweet, and packed with nutrients. They are perfect for snacking, making juices, and adding to desserts.',
    types: [
      {
        name: 'Green Grapes',
        desc: 'Green grapes are sweet and crisp, making them perfect for snacking and adding to fruit salads. They are rich in vitamins and antioxidants.',
        img: 'https://rukminim2.flixcart.com/image/850/1000/kt0enww0/plant-seed/h/h/n/25-dg-214-paudha-original-imag6fgvre6bmd5y.jpeg?q=90&crop=false' // Blank image link
      },
      {
        name: 'Black Grapes',
        desc: 'Black grapes are rich in flavor and antioxidants. They are ideal for making juices and desserts.',
        img: 'https://m.media-amazon.com/images/I/71MQD-Dj1gL.jpg' // Blank image link
      }
    ]
  },
  { 
    name: 'Pineapples', 
    img: 'https://i.ytimg.com/vi/tPDV-CQ6qxY/maxresdefault.jpg', // Blank image link
    desc: 'Our pineapples are sourced from the finest farms, ensuring a sweet and tangy flavor. They are rich in vitamins, enzymes, and antioxidants.',
    types: [
      {
        name: 'Smooth Cayenne',
        desc: 'Smooth Cayenne pineapples are sweet and juicy, with a vibrant yellow flesh. They are perfect for eating fresh or making juices.',
        img: 'https://5.imimg.com/data5/SELLER/Default/2023/8/334845965/XZ/EU/TG/180835178/a-grade-pineapple-fruit.png' // Blank image link
      },
      {
        name: 'Queen Pineapple',
        desc: 'Queen pineapples are smaller and sweeter, with a golden flesh. They are ideal for snacking and adding to desserts.',
        img: 'https://farmersstudiobiz.com/admin_Panel/upload/images/7983-2023-06-24.png' // Blank image link
      }
    ]
  },
  { 
    name: 'Watermelons', 
    img: 'https://images.ctfassets.net/3s5io6mnxfqz/70xjTuTfPZvNQZSEln0531/9d9eb80c7e8ec28894f084a17f9db45b/AdobeStock_7425002.jpeg', // Blank image link
    desc: 'Watermelons from Advitha Exim are juicy, sweet, and refreshing. They are perfect for staying hydrated and adding to fruit salads.',
    types: [
      {
        name: 'Seedless Watermelon',
        desc: 'Seedless watermelons are sweet and easy to eat, making them perfect for snacking and adding to fruit salads.',
        img: 'https://m.media-amazon.com/images/I/517gToV3+IL.jpg' // Blank image link
      },
      {
        name: 'Seeded Watermelon',
        desc: 'Seeded watermelons are rich in flavor and perfect for juicing or eating fresh. They are a great source of hydration.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UI41suGBE-dEH4EgxWOM7D7UDsixcpdPBw&s' // Blank image link
      }
    ]
  }
];

const Fruits = () => {
  return (
    <div className="fruits-container">
      {/* Full-width image */}
      <div className="hero-section">
        <img src="https://nurserylive.com/cdn/shop/articles/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355-816049.jpg?v=1679747958" alt="Fruits" className="hero-image" />
        <h1 className="hero-heading">Fruits</h1>
      </div>

      {/* About Section */}
      <div className="about-section">
        <p>
          Advitha Exim specializes in supplying high-quality fruits sourced from the finest farms.
          Our commitment to excellence ensures that we deliver products that are fresh, nutritious, and meet global standards.
        </p>
        <p>
          We cater to various industries, including food processing, hospitality, and export markets, ensuring premium-grade fruits
          with superior taste and quality. Our fruits are carefully processed and packaged to retain their natural goodness and freshness.
        </p>
      </div>

      {/* Subsections */}
      <div className="subsections-container">
        {fruitsData.map((item, index) => (
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

export default Fruits;