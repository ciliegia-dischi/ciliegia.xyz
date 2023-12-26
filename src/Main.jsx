import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import Contacts from './modals/Contacts';
import Support from './modals/Support';

/* route components with url */
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='musica' element={<Music/>} />
        <Route path='galleria' element={<Gallery/>} />
      </Routes>
      <Contacts />
      <Support />
    </main>
  );
}
export default Main;
