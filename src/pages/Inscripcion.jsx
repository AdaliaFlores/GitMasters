function Inscripcion() {
  return (
    <div className="inscripcion">
      <h1>Inscripción</h1>

      <p>
        Forma parte del Club de Ajedrez Git Masters. Completa tus datos y nos
        pondremos en contacto contigo.
      </p>

      <form className="formulario">
        <input type="text" placeholder="Nombre completo" required />
        <input type="number" placeholder="Edad" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="tel" placeholder="Número de celular" required />

        <select required>
          <option value="">Nivel de ajedrez</option>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>

        <textarea
          placeholder="¿Por qué quieres unirte al club?"
          rows="4"
        ></textarea>

        <button type="submit">Enviar inscripción</button>
      </form>
    </div>
  );
}

export default Inscripcion;