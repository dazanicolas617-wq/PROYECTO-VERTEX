/* =====================================================
   AGENDARPRUEBA.JSX — PÁGINA PARA AGENDAR PRUEBA DE MANEJO
   Muestra dos secciones:
   1. Hero: imagen y texto introductorio
   2. Card de login: indica que hay que iniciar sesión
      para poder agendar la prueba

   Nota: La funcionalidad de agendamiento real requiere
   que el usuario esté autenticado. Actualmente redirige
   al formulario de login o creación de cuenta.
===================================================== */

import "./AgendarPrueba.css";
import { Link } from "react-router-dom";

function AgendarPrueba() {
  return (
    <main className="agendar-page">

      {/* ── SECCIÓN HERO ──────────────────────────────────────
          Dividida en dos mitades:
          - Izquierda: Título e introducción
          - Derecha: Imagen de la moto
      ──────────────────────────────────────────────────────── */}
      <section className="agendar-hero">

        {/* Texto del hero */}
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

        {/* Imagen de referencia de la moto para prueba */}
        <div className="hero-image">
          <img
            src="/moto-prueba.jpg"
            alt="Motocicleta para prueba de manejo"
          />
        </div>
      </section>

      {/* Línea separadora decorativa */}
      <div className="separator"></div>

      {/* ── SECCIÓN CARD DE ACCIÓN ────────────────────────────
          Informa al usuario que debe iniciar sesión para
          poder reservar su prueba de manejo.
          Ofrece dos opciones: Login o Registro.
      ──────────────────────────────────────────────────────── */}
      <section className="login-section">
        <div className="login-card">

          {/* Etiqueta de contexto */}
          <span className="card-label">
            AGENDA TU PRUEBA
          </span>

          {/* Pregunta principal */}
          <h2>
            ¿Quieres probar una de
            <br />
            nuestras motos?
          </h2>

          {/* Explicación del requisito */}
          <p>
            Para agendar una prueba debes iniciar sesión en tu
            cuenta.
          </p>

          {/* Botón principal — redirige al login */}
          <Link to="/login" className="btn-iniciar-sesion">
            INICIAR SESIÓN
          </Link>

          {/* Enlace secundario para usuarios sin cuenta */}
          <p className="texto-crear-cuenta">
            ¿No tienes una cuenta? <Link to="/registro" className="link-crear-cuenta">Crear una cuenta</Link>
          </p>

        </div>
      </section>
    </main>
  );
}

export default AgendarPrueba;