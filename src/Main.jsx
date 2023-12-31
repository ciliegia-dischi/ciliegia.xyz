import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import Support from './pages/Support';

/* route components with url */
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='musica' element={<Music/>} />
        <Route path='galleria' element={<Gallery/>} />
        <Route path='eventi' element={<Events/>} />
        <Route path='contatti' element={<Contacts/>} />
      </Routes>
      <Support />
    </main>
  );
}
export default Main;
