import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProvider from './Provider/MyProvider';
import Exemplo from './pages/Exemplo';
import ClientProducts from './pages/Client/Products/ClientProducts';
import ClientOrders from './pages/Client/Pedidos/ClientPedidos';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Exemplo /> } />
          <Route path="/customer/products" element={ <ClientProducts /> } />
          <Route path="/customer/checkout" element={ <ClientOrders /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
