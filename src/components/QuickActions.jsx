import "./QuickActions.css";

function QuickActions() {
  return (
    <section className="quick-links quick-links--single">
      <div className="quick-links-grid">
        <a href="/agendar-prueba" className="quick-link-card">
          <div className="quick-link-icon" aria-hidden="true">
            🛵
          </div>

          <h3>Agendar prueba</h3>

          <span className="quick-link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}

export default QuickActions;