import { useState } from "react";

function Galeria() {
  const [index, setIndex] = useState(0);

  const siguiente = () => {
    setIndex(index + 1);
  };

  const anterior = () => {
    setIndex(index - 1);
  };

  return (
    <div className="galeria">
      <h1>Galería</h1>

      <div className="carrusel">
        <button className="galeria-btn prev" onClick={anterior}>
          ❮
        </button>

        <img
          src="/images/ajedrez1.jpg"
          alt="Galería ajedrez"
          className="galeria-img"
        />

        <button className="galeria-btn next" onClick={siguiente}>
          ❯
        </button>
      </div>
    </div>
  );
}

export default Galeria;