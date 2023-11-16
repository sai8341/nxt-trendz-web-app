import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home'
import Products from './Components/Products';
import NotFound from './Components/NotFound';
import Cart from './Components/Cart';
import './App.css';
import ProtectedRouter from './Components/ProtectedRouter';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route path='/' element={<ProtectedRouter element={<Home />} />} />

        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
