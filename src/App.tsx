import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './pages/product-list';

const App: React.FC = () => {
  return (
    <main className="App">
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          {/* <Route path="/products/:id" element={<ProductDisplay />} />
          <Route path="/checkout" element={<CheckoutPage />} /> */}
        </Routes>
    </main>
  );
};

export default App;
