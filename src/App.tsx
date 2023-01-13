import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/Navbar';
import ProductDetailPage from './pages/product-detail';
import ProductListPage from './pages/product-list';

const App: React.FC = () => {
  return (
    <main className="App">
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/* {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
      </Routes>
    </main>
  );
};

export default App;
