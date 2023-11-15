import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import ProtectedRoute from './Components/ProtectedRoute';
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <ProtectedRoute path="/" />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
