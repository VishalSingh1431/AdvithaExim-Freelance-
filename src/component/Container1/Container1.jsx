import React from 'react';
import { Link } from 'react-router-dom';
import './Container1.css';

const Container1 = () => {
  return (
    <div className="main-container">
      <h1 style={{ color: "white" }}>We Export All Kinds of Premium Quality Agricultural Products.</h1>

      <div className="container">
        <h2>AGRICULTURAL PRODUCTS</h2>
        <div className="sub-container">
          {/* <div className="box" style={{ backgroundImage: "url('https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_1200x1200.jpg?v=1736270108')" }}>
            <Link to="/products/agro/cereals">Cereals & Grains</Link>
          </div> */}
          <div className="box" style={{ backgroundImage: "url('https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_1200x1200.jpg?v=1736270108')" }}>
            <Link to="/products/agro/cereals">Cereals & Grains</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://www.tastingtable.com/img/gallery/why-are-red-onions-purple/l-intro-1644158494.jpg')" }}>
            <Link to="/products/agro/onions">Onions</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://cdn.shopaccino.com/refresh/articles/dal-pulse-745535_l.jpg?v=426')" }}>
            <Link to="/products/agro/pulses">Pulses</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://res.cloudinary.com/hamstech/images/w_1000,h_645/f_auto,q_auto/v1644405945/Hamstech%20App/Spices/Spices.jpg?_i=AA')" }}>
            <Link to="/products/agro/spices">Spices</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kY0GpkQtcjoEC9Nbh82iX7FRDr7LYTfcQg&s')" }}>
            <Link to="/products/agro/oil">Oil</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://healthnewshub.org/wp-content/uploads/2022/10/Fruit-e1664894335635.jpg')" }}>
            <Link to="/products/agro/fruits">Fruits</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://stopfoodwaste.ie/wp-content/uploads/2023/08/Banners-For-SFW-Website-1024x577.png')" }}>
            <Link to="/products/agro/vegetables">Vegetables</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2022/5/TU/DA/HY/50535433/dryfruit-hamper-500x500.jpeg')" }}>
            <Link to="/products/agro/dryfruits">Dry Fruits & Nuts</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSojvB3ax7IoevF0iHij2lbV9XyLvcIN75OOw&s')" }}>
            <Link to="/products/agro/dairy">Dairy Products</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcibeTAc1R5DjQBMUir_s6G7ftaHsbXI7Aqw&s')" }}>
            <Link to="/products/agro/sugar">Sugar and Sweeteners</Link>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h2>METALS & METAL SCRAPS</h2>
        <div className="sub-container">
          <div className="box" style={{ backgroundImage: "url('https://5.imimg.com/data5/QL/TG/MW/SELLER-7318496/iron-scrap-500x500.jpg')" }}>
            <Link to="/products/metal/ferrous">Ferrous</Link>
          </div>
          <div className="box" style={{ backgroundImage: "url('https://scrap.com/images/non-ferrous-scrap-metal.jpg')" }}>
            <Link to="/products/metal/nonferrous">Non Ferrous</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container1;
