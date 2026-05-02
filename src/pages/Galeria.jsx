function Galeria() {
  return (
    <div className="galeria">
      <h1>Galería</h1>

      <div className="carrusel">
        <button className="galeria-btn prev">❮</button>

        <img
          src="/images/ajedrez1.jpg"
          alt="Galería ajedrez"
          className="galeria-img"
        />

        <button className="galeria-btn next">❯</button>
      </div>
    </div>
  );
}


export default Galeria;