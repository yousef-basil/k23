import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WebsitePage from './pages/WebsitePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<WebsitePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
