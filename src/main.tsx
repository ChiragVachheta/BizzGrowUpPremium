import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NotFound from './components/NotFound.tsx';
import PortfolioIndex from './components/portfolio/PortfolioIndex.tsx';
import CaseStudy from './components/portfolio/CaseStudy.tsx';
import { getProject } from './lib/portfolio.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio" element={<PortfolioIndex />} />
        <Route
          path="/portfolio/sandip-electricals"
          element={<CaseStudy project={getProject('sandip-electricals')!} />}
        />
        <Route
          path="/portfolio/repairingwale"
          element={<CaseStudy project={getProject('repairingwale')!} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
