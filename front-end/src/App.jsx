import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Exemplo from './pages/Exemplo';
import Register from './pages/Register';
import MyProvider from './Provider/MyProvider';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Exemplo /> } />
          <Route exact path="/register" element={ <Register /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
