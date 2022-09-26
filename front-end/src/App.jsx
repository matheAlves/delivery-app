import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MyProvider from './Provider/MyProvider';
import ClientProducts from './pages/Client/Products/ClientProducts';
import ClientOrders from './pages/Client/Pedidos/ClientPedidos';
import RedirectToLogin from './pages/RedirectToLogin';
import Login from './pages/Login/Login';
import Register from './pages/Register';
import ClientProvider from './Provider/ClientProvider';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/register" element={ <Register /> } />
          <Route
            exact
            path="/customer/products"
            element={
              <ClientProvider>
                <ClientProducts />
              </ClientProvider>
            }
          />
          <Route
            exact
            path="/customer/checkout"
            element={
              <ClientProvider>
                <ClientOrders />
              </ClientProvider>
            }
          />
          <Route exact path="/" element={ <RedirectToLogin /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
