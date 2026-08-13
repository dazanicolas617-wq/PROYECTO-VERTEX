import "./AgendarPrueba.css";
import { Link } from "react-router-dom";

function AgendarPrueba() {
  return (
    <main className="agendar-page">

      {/* HERO */}
      <section className="agendar-hero">
        <div className="hero-text">
          <h1>
            AGENDA TU
            <br />
            PRUEBA DE
            <br />
            MANEJO
          </h1>

          <p>
            Prueba nuestras motocicletas y elige el
            verdadero motociclismo puro que vivimos desde
            1980.
          </p>
        </div>

        <div className="hero-image">
           <img
              src="/moto-prueba.jpg"
              alt="Motocicleta para prueba de manejo"
              />
            </div>
      </section>

      <div className="separator"></div>

      {/* CARD */}
      <section className="login-section">
        <div className="login-card">

          <span className="card-label">
            AGENDA TU PRUEBA
          </span>

          <h2>
            ¿Quieres probar una de
            <br />
            nuestras motos?
          </h2>

          <p>
            Para agendar una prueba debes iniciar sesión en tu
            cuenta.
          </p>

          <Link to="/login">
            INICIAR SESIÓN
          </Link>

          <Link to="/registro">
            CREAR CUENTA
          </Link>

        </div>
      </section>
    </main>
  );
}

export default AgendarPrueba;