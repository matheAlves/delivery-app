import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyProvider from './Provider/MyProvider';
import Exemplo from './pages/Exemplo';

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={ <Exemplo /> } />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
