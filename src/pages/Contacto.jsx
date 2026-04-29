import { useState } from "react";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="contacto">
      <h1>Contacto</h1>

      <p className="subtexto">
        ¿Quieres unirte al club o tienes dudas? Escríbenos.
      </p>

      <div className="contacto-container">
        {/* LADO IZQUIERDO */}
        <div className="contacto-info">
          <h3>Club de Ajedrez Bravo's</h3>

          <div className="info-item">
            <span>📧</span>
            <p>clubajedrez@gmail.com</p>
          </div>

          <div className="info-item">
            <span>📱</span>
            <p>+591 76988047</p>
          </div>

          <div className="info-item">
            <span>📍</span>
            <p>Cochabamba, Bolivia</p>
          </div>
        </div>

        {/* LADO DERECHO */}
        <form className="formulario-pro" onSubmit={manejarEnvio}>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Escribe tu mensaje..." rows="5" required></textarea>

          <button type="submit">Enviar mensaje</button>

          {enviado && (
            <span className="mensaje-ok">
              Mensaje enviado correctamente
            </span>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacto;