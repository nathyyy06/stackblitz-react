import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import AuthMiddleware from './middleware/middleware.jsx';
import Registra from './Registrar.jsx';
import App from './App.jsx'; // <-- Adiciona isso aqui

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AuthMiddleware />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<App />} />
        <Route path="/registrar" element={<Registra />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
