import HomePage from './components/HomePage';
import { HashRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Nagivation from './components/Navigation';
import Footer from './components/Footer';
import HeadPhones from './components/HeadPhones';
import Speakers from './components/Speakers';
import EarPhones from './components/EarPhones';
import ProductDetail from './components/ProductDetail';
import { useEffect, useState } from 'react';
import Checkout from './components/Checkout';
// import SummaryItems from './components/SummaryItems';
import Thankyou from './components/Thankyou';
// In src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [product, setProduct] = useState({});
  const [data, setDate] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(value => setDate(value))
  }, [])
  function viewProduct(slug) {
    data.map(item => item.slug == slug && setProduct(item))
  }
  return (
    <Router>
      <div style={{ backgroundColor: "#141414" }}>
        <Nagivation />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage send={slug => viewProduct(slug)} />} /> 
        <Route exact path="/headphones" element={<HeadPhones send={slug => viewProduct(slug)} />} />
        <Route exact path="/speakers" element={<Speakers send={slug => viewProduct(slug)} />} />
        <Route exact path="/earphones" element={<EarPhones send={slug => viewProduct(slug)} />} />
        <Route exact path="/prdDetail" element={<ProductDetail product={product} send={slug => viewProduct(slug)} />} />
        <Route exact path="/checkout" element={        
          <div>
            <Checkout />
            <Thankyou />
        </div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
