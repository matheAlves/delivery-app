import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyProvider from './Provider/MyProvider';
import ClientProducts from './pages/Client/Products/ClientProducts';
import ClientOrders from './pages/Client/Pedidos/ClientPedidos';
import RedirectToLogin from './pages/RedirectToLogin';
import Login from './pages/Login/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route exact path="/customer/products" element={ <ClientProducts /> } />
          <Route exact path="/customer/checkout" element={ <ClientOrders /> } />
          <Route exact path="/" element={ <RedirectToLogin /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
