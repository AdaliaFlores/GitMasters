import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Eventos from "./pages/Eventos";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Inscripcion from "./pages/Inscripcion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inscripcion" element={<Inscripcion />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
