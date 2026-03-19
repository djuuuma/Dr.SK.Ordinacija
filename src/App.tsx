import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Code-split pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Usluge = lazy(() => import('./pages/Usluge'));
const Proces = lazy(() => import('./pages/Proces'));
const Galerija = lazy(() => import('./pages/Galerija'));
const OMeni = lazy(() => import('./pages/OMeni'));
const Kontakt = lazy(() => import('./pages/Kontakt'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-bg-medical"><div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="usluge" element={<Usluge />} />
            <Route path="proces" element={<Proces />} />
            <Route path="galerija" element={<Galerija />} />
            <Route path="o-meni" element={<OMeni />} />
            <Route path="kontakt" element={<Kontakt />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
