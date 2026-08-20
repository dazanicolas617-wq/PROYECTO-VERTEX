/* =====================================================
   RECUPERARCONTRASENA.JSX — PÁGINA DE RECUPERACIÓN DE CUENTA
   Diseño dividido en dos columnas:
   - Izquierda: imagen de fondo con texto motivacional
   - Derecha: formulario para recuperar acceso

   Flujo de la página:
   1. El usuario elige el método de recuperación (correo o teléfono)
   2. Ingresa su dato de contacto
   3. Al enviar, se muestra una pantalla de confirmación
      indicando a dónde se enviaron las instrucciones

   Validaciones:
   - El campo no puede estar vacío
   - Si el método es "correo", el valor debe ser un email válido
===================================================== */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Phone, Check, ArrowLeft } from "lucide-react";
import "./RecuperarContrasena.css";

function RecuperarContrasena() {

  /* Hook para navegar de vuelta al login tras el proceso */
  const navigate = useNavigate();

  /* ── ESTADOS ─────────────────────────────────────────────
     - metodo  : "correo" o "telefono" — método seleccionado
     - valor   : lo que el usuario ingresa en el campo dinámico
     - enviado : true cuando el formulario fue enviado exitosamente
     - error   : mensaje de error del campo
  ──────────────────────────────────────────────────────────── */
  const [metodo, setMetodo] = useState("correo");   // Método activo por defecto
  const [valor, setValor] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  /* ── ENVIAR FORMULARIO ────────────────────────────────────
     Valida el campo según el método seleccionado.
     Si pasa la validación, muestra la pantalla de éxito.
  ──────────────────────────────────────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();   // Evita la recarga de la página

    /* Verifica que el campo no esté vacío */
    if (!valor.trim()) {
      setError(
        metodo === "correo"
          ? "Por favor ingresa tu correo electrónico."
          : "Por favor ingresa tu número de teléfono."
      );
      return;
    }

    /* Si el método es correo, valida el formato con regex */
    if (metodo === "correo" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim())) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    /* Si la validación pasa, limpia el error y muestra pantalla de éxito */
    setError("");
    setEnviado(true);
  };

  return (
    <div className="pagina-recuperar">

      {/* ── COLUMNA IZQUIERDA: Imagen de fondo ──────────────
          Muestra texto motivacional sobre una foto de moto
      ──────────────────────────────────────────────────────── */}
      <section className="imagen-recuperar">
        {/* Capa oscura sobre la imagen para mejorar legibilidad */}
        <div className="capa-imagen-recuperar"></div>

        {/* Texto centrado sobre la imagen */}
        <div className="contenido-imagen-recuperar">
          <h1>
            TU PRÓXIMA
            <br />
            AVENTURA
            <br />
            COMIENZA AQUÍ
          </h1>
          <p>
            Motos premium, experiencias únicas
            <br />
            y un camino sin límites.
          </p>
        </div>
      </section>

      {/* ── COLUMNA DERECHA: Formulario de recuperación ─────── */}
      <section className="seccion-recuperar">

        {/* Enlace para volver al login */}
        <Link to="/login" className="volver-recuperar">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <div className="contenido-recuperar">

          {/* ── CONDICIONAL: muestra formulario o pantalla de éxito ── */}
          {!enviado ? (
            <>
              <h2>RECUPERAR CUENTA</h2>
              <p className="subtitulo-recuperar">
                Selecciona el método que prefieras para recibir las instrucciones
                y recuperar el acceso a tu cuenta.
              </p>

              {/* ── SELECTOR DE MÉTODO ────────────────────────────
                  Dos botones tipo toggle para elegir correo o teléfono.
                  Al cambiar, limpia el campo de valor y el error.
              ──────────────────────────────────────────────────── */}
              <label className="etiqueta-recuperar">
                Selecciona el método de recuperación
              </label>

              <div className="selector-metodo">

                {/* Botón: correo electrónico */}
                <button
                  type="button"
                  className={`opcion-metodo ${metodo === "correo" ? "activo" : ""}`}
                  onClick={() => { setMetodo("correo"); setValor(""); setError(""); }}
                >
                  <span className="icono-metodo"><Mail size={16} /></span>
                  Correo electrónico
                  {/* Radio visual que indica si está seleccionado */}
                  <span className={`radio-dot ${metodo === "correo" ? "activo" : ""}`}></span>
                </button>

                {/* Botón: teléfono */}
                <button
                  type="button"
                  className={`opcion-metodo ${metodo === "telefono" ? "activo" : ""}`}
                  onClick={() => { setMetodo("telefono"); setValor(""); setError(""); }}
                >
                  <span className="icono-metodo"><Phone size={16} /></span>
                  Teléfono
                  <span className={`radio-dot ${metodo === "telefono" ? "activo" : ""}`}></span>
                </button>

              </div>

              {/* ── CAMPO DINÁMICO ────────────────────────────────
                  El tipo y placeholder cambian según el método elegido
              ──────────────────────────────────────────────────── */}
              <form onSubmit={handleSubmit}>
                <div className="grupo-recuperar">
                  <label>
                    {metodo === "correo" ? "Correo electrónico" : "Número de teléfono"}
                  </label>

                  <div className="contenedor-input-recuperar">

                    {/* Ícono dinámico según el método */}
                    <span className="icono-input-recuperar">
                      {metodo === "correo" ? <Mail size={16} /> : <Phone size={16} />}
                    </span>

                    {/* Input dinámico: cambia entre email y tel */}
                    <input
                      type={metodo === "correo" ? "email" : "tel"}
                      placeholder={
                        metodo === "correo"
                          ? "ejemplo@correo.com"
                          : "+57 300 123 4567"
                      }
                      value={valor}
                      onChange={(e) => { setValor(e.target.value); setError(""); }}
                    />
                  </div>

                  {/* Mensaje de error de validación */}
                  {error && <span className="error-recuperar">{error}</span>}
                </div>

                {/* Botón de envío */}
                <button type="submit" className="boton-enviar-recuperar">
                  ENVIAR INSTRUCCIONES
                </button>
              </form>

              {/* Enlace para quienes recordaron su contraseña */}
              <p className="texto-login-recuperar">
                ¿Recuerdas tu contraseña?{" "}
                <Link to="/login">Iniciar sesión</Link>
              </p>
            </>

          ) : (
            /* ── PANTALLA DE ÉXITO ────────────────────────────
               Se muestra cuando el formulario fue enviado con éxito.
               Confirma a dónde se enviaron las instrucciones.
            ──────────────────────────────────────────────────── */
            <div className="exito-recuperar">

              {/* Ícono de confirmación (check) */}
              <div className="icono-exito-recuperar">
                <Check size={32} strokeWidth={2.5} />
              </div>

              <h2>¡Instrucciones enviadas!</h2>

              <p>
                Hemos enviado las instrucciones para recuperar tu cuenta
                {metodo === "correo" ? " al correo" : " al teléfono"}:{" "}
                {/* Muestra el valor ingresado por el usuario */}
                <strong>{valor}</strong>
              </p>

              <p className="nota-exito-recuperar">
                Revisa tu {metodo === "correo" ? "bandeja de entrada" : "mensajes"} y
                sigue los pasos indicados. Si no lo ves, revisa tu carpeta de spam.
              </p>

              {/* Botón para regresar al login */}
              <button
                className="boton-enviar-recuperar"
                onClick={() => navigate("/login")}
              >
                VOLVER AL INICIO DE SESIÓN
              </button>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default RecuperarContrasena;
