import { useState } from "react";

function Contacto() {
  // Estado simple para mostrar mensaje al enviar
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (e) => {
    e.preventDefault(); // evita recargar la página
    setEnviado(true);   // muestra mensaje de éxito
  };

  return (
    <div className="contacto">
      <h1>Contacto</h1>

      <p>
        ¿Tienes dudas o quieres unirte al club? Escríbenos y te responderemos.
      </p>

      <div className="contacto-grid">
        {/* Información del club */}
        <div className="contacto-info">
          <h3>Información</h3>
          <p><strong>Correo:</strong> clubajedrez@gmail.com</p>
          <p><strong>Teléfono:</strong> +591 70000000</p>
          <p><strong>Ubicación:</strong> Cochabamba, Bolivia</p>
        </div>

        {/* Formulario */}
        <form className="formulario" onSubmit={manejarEnvio}>
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>

          <button type="submit">Enviar mensaje</button>

          {enviado && <span className="mensaje-ok">Mensaje enviado ✔</span>}
        </form>
      </div>
    </div>
  );
}

export default Contacto;