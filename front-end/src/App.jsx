import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProvider from './Provider/MyProvider';
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
          <Route exact path="/" element={ <RedirectToLogin /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
