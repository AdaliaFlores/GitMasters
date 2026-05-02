import { useState } from "react";
import img1 from "../assets/ajedrez1.jpg";
import img2 from "../assets/ajedrez2.jpg";
import img3 from "../assets/ajedrez3.jpg";

function Galeria() {
  const imagenes = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex((prev) => (prev + 1) % imagenes.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagenes.length) % imagenes.length);
  };

  return (
    <div className="galeria">
      <h1>Galería</h1>
      <div className="carrusel">
        <button className="galeria-btn prev" onClick={anterior}>❮</button>
        <img src={imagenes[index]} alt="Galería ajedrez" className="galeria-img" />
        <button className="galeria-btn next" onClick={siguiente}>❯</button>
      </div>
      <div className="galeria-indicadores">
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={i === index ? "activo" : ""}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Galeria;