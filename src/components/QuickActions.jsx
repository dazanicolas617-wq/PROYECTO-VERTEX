/* =====================================================
   QUICKACTIONS.JSX — TARJETA DE ACCIÓN RÁPIDA
   Muestra una tarjeta con acceso directo a la página
   de "Agendar prueba de manejo".
   Se usa junto a QuickActionsEncuentranos para formar
   la sección de acciones rápidas en la portada.
===================================================== */

import "./QuickActions.css";

function QuickActions() {
  return (
    /* Sección de enlace rápido — variante de una sola tarjeta */
    <section className="quick-links quick-links--single">
      <div className="quick-links-grid">

        {/* Tarjeta completa como enlace */}
        <a href="/agendar-prueba" className="quick-link-card">

          {/* Ícono decorativo (vacío — se estiliza con CSS) */}
          <div className="quick-link-icon" aria-hidden="true">
            {/* Icono decorativo */}
          </div>

          {/* Texto principal de la tarjeta */}
          <h3>Agendar prueba</h3>

          {/* Flecha decorativa indicando que es un enlace */}
          <span className="quick-link-arrow" aria-hidden="true">
            →
          </span>
        </a>

      </div>
    </section>
  );
}

export default QuickActions;