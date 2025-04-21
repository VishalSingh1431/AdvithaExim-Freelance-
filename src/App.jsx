import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import Home from './assets/Pages/Home/Home';
import Certifications from './assets/Pages/Certifications/Certifications';
import Why from './assets/Pages/Why/Why';
import Brands from './assets/Pages/Brands/Brands';
import About from './assets/Pages/About/About';
import Cereals from './assets/Pages/Products/Agro/Cereals';
import Pulses from './assets/Pages/Products/Agro/Pulses';
import Spices from './assets/Pages/Products/Agro/Spices';
import Oil from './assets/Pages/Products/Agro/Oil';
import Fruits from './assets/Pages/Products/Agro/Fruits';
import Vegetables from './assets/Pages/Products/Agro/Vegetables';
import DryFruits from './assets/Pages/Products/Agro/DryFruits';
import Dairy from './assets/Pages/Products/Agro/Dairy';
import Sugar from './assets/Pages/Products/Agro/Sugar';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Ferrous from './assets/Pages/Products/Metal/Ferrous';
import NonFerrous from './assets/Pages/Products/Metal/NonFerrous';
import Whatsapp from './component/Whatsapp/Whatsapp';
import Contact from './component/Contact/Contact';
import Onions from './assets/Pages/Products/Agro/Onions';
import Rice from './assets/Pages/Products/Agro/Rice';
function App() {
  return (
    <Router>
      <Whatsapp/>
      <Navbar />
      
      {/* Navigation Menu */}
     
      <Routes>


        
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/why" element={<Why />} />
        
        {/* Agro Product Routes */}
        <Route path="/products/agro/rice" element={<Rice />} />
        <Route path="/products/agro/onions" element={<Onions />} />
        <Route path="/products/agro/cereals" element={<Cereals />} />
        <Route path="/products/agro/pulses" element={<Pulses />} />
        <Route path="/products/agro/spices" element={<Spices />} />
        <Route path="/products/agro/oil" element={<Oil />} />
        <Route path="/products/agro/fruits" element={<Fruits />} />
        <Route path="/products/agro/vegetables" element={<Vegetables />} />
        <Route path="/products/agro/dryfruits" element={<DryFruits />} />
        <Route path="/products/agro/dairy" element={<Dairy />} />
        <Route path="/products/agro/sugar" element={<Sugar />} />
        <Route path="/products/metal/ferrous" element={<Ferrous />} />
        <Route path="/products/metal/nonferrous" element={<NonFerrous />} />
        <Route path="/component/Contact/Contact" element={<Contact/>} />

        {/* Handle undefined routes */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
