import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProvider from './Provider/MyProvider';
import RedirectToLogin from './pages/RedirectToLogin';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/" element={ <RedirectToLogin /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
