import { Routes, Route } from 'react-router-dom';
// import Nav from './sections/Nav';
// import Footer from './sections/Footer';
import Home from './sections/Home';
import Music from './sections/Music';
import Gallery from './sections/Gallery';
import Events from './sections/Events';
import Contacts from './sections/Contacts';
import Support from './sections/Support';

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

function App() {
  return (
    <div className="App">
      {/*<Nav />*/}
      <Main />
      {/*<Footer />*/}
    </div>
  );
}
export default App;
