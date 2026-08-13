import "./QuickActions.css";

function QuickActions() {
  return (
    <section className="quick-links">

      <div className="quick-links-container">

        {/* TARJETA AGENDAR PRUEBA */}
        <a href="#" className="quick-link-card">

          <div className="quick-link-icon">
            
          </div>

          <h3>Agendar prueba</h3>

          <span className="quick-link-arrow">
            →
          </span>

        </a>


        {/* TARJETA ENCUÉNTRANOS */}
        <a href="#" className="quick-link-card">

          <div className="quick-link-icon">
            
          </div>

          <h3>Encuéntranos</h3>

          <span className="quick-link-arrow">
            →
          </span>

        </a>

      </div>

    </section>
  );
}

export default QuickActions;