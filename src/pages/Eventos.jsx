function Eventos() {
  const eventos = [
    {
      id: 1,
      titulo: "Torneo Regional de Ajedrez",
      fecha: "15 de Junio, 2026",
      hora: "09:00 AM",
      ubicacion: "Club de Ajedrez Bravo's, Cochabamba",
      descripcion: "Torneo abierto para todas las categorías. Sistema瑞士 y control de tiempo estándar.",
      estado: "Próximo",
    },
    {
      id: 2,
      titulo: "Copa Master semanal",
      fecha: "Cada Sábado",
      hora: "06:00 PM",
      ubicacion: "Sala de Ajedrez Central",
      descripcion: "Torneo blitz semanal. Entrada libre para todos los miembros del club.",
      estado: "Activo",
    },
    {
      id: 3,
      titulo: "Taller de Aperturas",
      fecha: "20 de Junio, 2026",
      hora: "04:00 PM",
      ubicacion: "Aula de Formación",
      descripcion: "Aprende las aperturas más populares con nuestros instructores certificados.",
      estado: "Próximo",
    },
    {
      id: 4,
      titulo: "Simultáneas con Maestr@s",
      fecha: "25 de Junio, 2026",
      hora: "03:00 PM",
      ubicacion: "Salón Principal",
      descripcion: "Jugador@s experimentad@s enfrentarán a múltiples tablero simultaneously. ¡Inscripción limitada!",
      estado: "Próximo",
    },
    {
      id: 5,
      titulo: "Campeonato Nacional Sub-20",
      fecha: "10-12 Julio, 2026",
      hora: "10:00 AM",
      ubicacion: "La Paz, Bolivia",
      descripcion: "Clasificatorio para el equipo nacional. Categorías sub-12, sub-14, sub-16 y sub-20.",
      estado: "Próximo",
    },
  ];

  return (
    <div className="eventos">
      <h1>Eventos</h1>
      <p className="subtexto">
        Descubre nuestros próximos torneos, talleres y actividades de ajedrez.
      </p>

      <div className="eventos-grid">
        {eventos.map((evento) => (
          <div key={evento.id} className="evento-card">
            <div className="evento-header">
              <span className={`evento-badge ${evento.estado.toLowerCase()}`}>
                {evento.estado}
              </span>
              <h3>{evento.titulo}</h3>
            </div>
            
            <div className="evento-detalles">
              <div className="evento-item">
                <span>📅</span>
                <span>{evento.fecha}</span>
              </div>
              <div className="evento-item">
                <span>⏰</span>
                <span>{evento.hora}</span>
              </div>
              <div className="evento-item">
                <span>📍</span>
                <span>{evento.ubicacion}</span>
              </div>
            </div>
            
            <p className="evento-descripcion">{evento.descripcion}</p>
            
            <button className="evento-btn">Inscribirse</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;