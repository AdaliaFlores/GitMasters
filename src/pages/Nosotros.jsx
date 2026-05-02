function Nosotros() {
  return (
    <div className="nosotros">
      <h1>Nosotros</h1>
      <p className="subtexto">
        Conoce más sobre Bravo's Club de Ajedrez de la UMSS
      </p>

      <div className="nosotros-container">
        <div className="nosotros-hero">
          <h2>Bravo's Club de Ajedrez UMSS</h2>
          <p>
            Somos el club de ajedrez oficial de la Universidad Mayor de San Simón (UMSS),
            promoviendo el desarrollo intelectual y competitivo del ajedrez en Cochabamba
            desde hace más de una década.
          </p>
        </div>

        <div className="nosotros-mision-vision">
          <div className="nosotros-card">
            <h3>Misión</h3>
            <p>
              Fomentar el aprendizaje y práctica del ajedrez en la comunidad universitaria
              y en la ciudad de Cochabamba, proporcionando un espacio de desarrollo
              intelectual, competitivo y social para jugadores de todos los niveles.
            </p>
          </div>

          <div className="nosotros-card">
            <h3>Visión</h3>
            <p>
              Ser el club de ajedrez referência en Bolivia, formando jugadores
              competitivos y promoviendo el pensamiento estratégico como herramienta
              de desarrollo personal y académico.
            </p>
          </div>
        </div>

        <div className="nosotros-valores">
          <h3>Nuestros Valores</h3>
          <div className="valores-grid">
            <div className="valor-item">
              <span>♟️</span>
              <h4>Excelencia</h4>
              <p>Buscamos la mejora continua en todos los aspectos</p>
            </div>
            <div className="valor-item">
              <span>🤝</span>
              <h4>Comunidad</h4>
              <p>Creamos vínculos entre jugadores de todas las edades</p>
            </div>
            <div className="valor-item">
              <span>📚</span>
              <h4>Aprendizaje</h4>
              <p>Promovemos la educación y el desarrollo intelectual</p>
            </div>
            <div className="valor-item">
              <span>⚖️</span>
              <h4>Fair Play</h4>
              <p>Jugamos con respeto y honradez</p>
            </div>
          </div>
        </div>

        <div className="nosotros-ubicacion">
          <h3>¿Dónde nos encontrarás?</h3>
          <div className="ubicacion-info">
            <div className="info-item">
              <span>📍</span>
              <span>Campus Central UMSS, Cochabamba</span>
            </div>
            <div className="info-item">
              <span>📧</span>
              <span>bravosclubajedrez@umss.edu.bo</span>
            </div>
            <div className="info-item">
              <span>📱</span>
              <span>+591 76988047</span>
            </div>
          </div>
          <p className="horario">
            Horario de atención: Lunes a Viernes de 16:00 a 21:00 hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;