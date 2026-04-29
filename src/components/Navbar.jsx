import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Git Masters</h2>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/galeria">Galería</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/inscripcion">Inscripción</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;