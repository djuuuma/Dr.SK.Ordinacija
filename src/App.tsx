import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Usluge from './pages/Usluge';
import Proces from './pages/Proces';
import Galerija from './pages/Galerija';
import OMeni from './pages/OMeni';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="usluge" element={<Usluge />} />
          <Route path="proces" element={<Proces />} />
          <Route path="galerija" element={<Galerija />} />
          <Route path="o-meni" element={<OMeni />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
