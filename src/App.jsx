import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Hero/Navbar';
import Home from './Pages/Home';
// import Servicios from './pages/Servicios';
// import Nosotros from './pages/Nosotros';
// import Ubicacion from './pages/Ubicacion';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ubicacion" element={<Ubicacion />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}
