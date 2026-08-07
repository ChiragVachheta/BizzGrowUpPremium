import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NotFound from './components/NotFound.tsx';
import StarterDemo from './components/demo/StarterDemo.tsx';
import StandardDemo from './components/demo/StandardDemo.tsx';
import EcommerceDemo from './components/demo/EcommerceDemo.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/demo/starter" element={<StarterDemo />} />
        <Route path="/demo/standard" element={<StandardDemo />} />
        <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
