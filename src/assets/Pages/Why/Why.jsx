import React from 'react';
import './Why.css';
import Navbar from '../../../component/Navbar/Navbar';
import Img from '../../../component/Img/Img';
import Footer from '../../../component/Footer/Footer';

const Why = () => {
  return (
    <div className="why-container">
      {/* <Navbar /> */}
      <Img />
      <h1>Why Choose ADVITHA EXIM?</h1>
      <div className="why-content">
        <div className="text-column">
          <h2>We are Global Exporter</h2>
          <p>
            1. <strong>Premium Quality Products:</strong> We ensure the finest selection of agro products and high-grade metal scraps, adhering to global standards for quality and purity.
          </p>
          <p>
            2. <strong>Wide Product Range:</strong> From export essentials like spices, fruits, pulses, and maize to imports of aluminum UBC, wire, copper millberry, and copper cathodes, we meet diverse trade needs.
          </p>
          <p>
            3. <strong>Global Expertise:</strong> With extensive market knowledge and a strong supply chain, we provide seamless and reliable import-export services across borders.
          </p>
          <p>
            4. <strong>Customer-Centric Approach:</strong> Our transparent communication, personalized service, and on-time delivery ensure customer satisfaction at every step.
          </p>
          <p>
            5. <strong>Sustainability Focus:</strong> By sourcing responsibly and promoting efficient recycling through our metal scrap imports, we support environmentally conscious practices.
          </p>
          <p>
            6. <strong>Strategic Location:</strong> Based in Nellore, Andhra Pradesh, we benefit from proximity to key ports, enabling faster and more cost-effective shipping solutions.
          </p>
          <p>
            Choose <strong>ADVITHA EXIM</strong> for a trusted, professional, and efficient trade partnership designed to meet your global business needs.
          </p>
        </div>
        <div className="image-column">
          <img src="/images/about.jpeg" alt="Advitha Exim" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Why;
