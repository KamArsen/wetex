import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import City from './pages/City';
import Priroda from './pages/Priroda';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/city" element={<City />} />
        <Route path="/priroda" element={<Priroda />} />
      </Routes>
     
      <Footer />
    </Router>
  );
};

export default App;
