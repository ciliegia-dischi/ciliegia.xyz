import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Musica from './pages/Musica.jsx';

/* route components with url */
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='musica' element={<Musica/>} />
      </Routes>
    </main>
  );
}
export default Main;
