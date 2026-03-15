// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import BestSales from './pages/BestSales';
import NewProducts from './pages/NewProducts';
import Sales from './pages/Sales';
import SocialShop from './pages/SocialShop';
import Favorites from './pages/Favorites';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestsales" element={<BestSales />} />
        <Route path="/newproducts" element={<NewProducts />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/socialshop" element={<SocialShop />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;