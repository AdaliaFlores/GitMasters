import { useState } from "react";

function Galeria() {
  const imagenes = [
  "/assets/ajedrez1.jpg",
  "/assets/ajedrez2.jpg",
  "/assets/ajedrez3.jpg",
];

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
        <button className="galeria-btn prev" onClick={anterior}>
          ❮
        </button>

        <img src={imagenes[index]} alt="Galería ajedrez" className="galeria-img" />

        <button className="galeria-btn next" onClick={siguiente}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Galeria;