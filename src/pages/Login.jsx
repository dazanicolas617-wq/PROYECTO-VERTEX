/* =====================================================
   LOGIN.JSX — PÁGINA DE INICIO DE SESIÓN
   Diseño dividido en dos columnas:
   - Izquierda: imagen de fondo con texto motivacional
   - Derecha: formulario de login con validaciones

   Lógica de acceso:
   - Si el correo/contraseña corresponde a un administrador
     → redirige a /dashboard
   - Si las credenciales son de usuario normal
     → redirige a la portada (/)
   - Las sesiones se guardan en localStorage

   Validaciones:
   - Correo no puede estar vacío
   - Contraseña no puede estar vacía
===================================================== */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react"; // Íconos de la librería Lucide
import "./Login.css";

function Login() {

  /* Hook para navegar entre páginas programáticamente */
  const navigate = useNavigate();

  /* ── ESTADOS DEL FORMULARIO ──────────────────────────────
     - correo           : valor del campo de correo
     - password         : valor del campo de contraseña
     - mostrarPassword  : alterna entre texto y puntos en contraseña
     - errores          : objeto con mensajes de error por campo
  ──────────────────────────────────────────────────────────── */
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [errores, setErrores] = useState({});

  /* ── VALIDACIÓN DEL FORMULARIO ───────────────────────────
     Verifica que los campos requeridos no estén vacíos.
     Retorna true si el formulario es válido, false si no.
  ──────────────────────────────────────────────────────────── */
  const validarFormulario = () => {
    const nuevosErrores = {};

    /* Verifica que el correo no esté vacío */
    if (!correo.trim()) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    }

    /* Verifica que la contraseña no esté vacía */
    if (!password) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    }

    setErrores(nuevosErrores);

    /* Retorna true si no hay errores */
    return Object.keys(nuevosErrores).length === 0;
  };

  /* ── ENVIAR FORMULARIO ────────────────────────────────────
     Valida los campos y decide a dónde redirigir según
     el tipo de usuario (admin o cliente normal).
  ──────────────────────────────────────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();   // Evita que la página se recargue

    if (!validarFormulario()) {
      return;             // Sale si hay errores de validación
    }

    const emailMinusculas = correo.toLowerCase().trim();

    /* ── ACCESO ADMINISTRADOR ───────────────────────────────
       Condiciones que identifican a un admin:
       - correo contiene "admin" Y contraseña es "admin123"
       - o el correo exacto es "admin@vertex.com"
       Redirige al Dashboard de administración.
    ──────────────────────────────────────────────────────── */
    if (
      emailMinusculas === "admin@vertex.com" ||
      emailMinusculas === "admin" ||
      (emailMinusculas.includes("admin") && password === "admin123") ||
      (emailMinusculas === "admin@vertex.com" && password === "admin123")
    ) {
      localStorage.setItem("vertex_authenticated", "true");
      localStorage.setItem("vertex_user_logged_in", "true");
      localStorage.setItem("vertex_user_email", correo);
      window.dispatchEvent(new Event("vertex_auth_change"));
      navigate("/dashboard");
    } else {
      /* ── ACCESO USUARIO NORMAL ────────────────────────────
         Guarda la sesión del usuario y redirige a la portada.
      ──────────────────────────────────────────────────────── */
      localStorage.setItem("vertex_authenticated", "false");
      localStorage.setItem("vertex_user_logged_in", "true");
      localStorage.setItem("vertex_user_email", correo);
      
      // Si no hay perfil guardado, crea uno básico
      if (!localStorage.getItem("vertex_user_profile")) {
        const nombreUsuario = correo.split("@")[0];
        localStorage.setItem(
          "vertex_user_profile",
          JSON.stringify({
            nombre: nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1),
            apellido: "",
            correo: correo,
            telefono: "+57 300 123 4567",
            tipoDocumento: "CC",
            numeroDocumento: "1020304050",
            ciudad: "Bogotá D.C.",
            direccion: "Cra 15 # 93-40"
          })
        );
      }

      window.dispatchEvent(new Event("vertex_auth_change"));
      navigate("/");
    }
  };

  return (
    <div className="pagina-login">

      {/* ── COLUMNA IZQUIERDA: Imagen de fondo ──────────────
          Muestra texto motivacional sobre una foto de moto
      ──────────────────────────────────────────────────────── */}
      <section className="imagen-login">
        {/* Capa oscura semitransparente sobre la imagen */}
        <div className="capa-imagen-login"></div>

        {/* Contenido textual centrado sobre la imagen */}
        <div className="contenido-imagen-login">
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

      {/* ── COLUMNA DERECHA: Formulario de login ─────────────
          Incluye campos de correo y contraseña con validación
      ──────────────────────────────────────────────────────── */}
      <section className="seccion-formulario-login">
        <div className="contenido-login">
          <h2>
            BIENVENIDO A
            <br />
            VERTEX
          </h2>

          <p className="subtitulo-login">
            Inicia sesión para continuar
          </p>

          <form onSubmit={handleSubmit}>

            {/* ── CAMPO CORREO ────────────────────────── */}
            <div className="grupo-formulario">
              <label>Correo electrónico</label>

              <div className="contenedor-input">
                {/* Ícono de sobre (Mail) de Lucide */}
                <span className="icono-input"><Mail size={16} /></span>

                <input
                  type="text"
                  placeholder="ejemplo@correo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              {/* Muestra el mensaje de error si existe */}
              {errores.correo && (
                <span className="mensaje-error">{errores.correo}</span>
              )}
            </div>

            {/* ── CAMPO CONTRASEÑA ────────────────────── */}
            <div className="grupo-formulario">
              <label>Contraseña</label>

              <div className="contenedor-input">
                {/* Ícono de candado (Lock) de Lucide */}
                <span className="icono-input"><Lock size={16} /></span>

                {/* El tipo cambia entre "text" y "password" según el estado */}
                <input
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Botón para mostrar/ocultar contraseña */}
                <button
                  type="button"
                  className="mostrar-contrasena"
                  onClick={() => setMostrarPassword(!mostrarPassword)}
                >
                  {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Muestra el mensaje de error si existe */}
              {errores.password && (
                <span className="mensaje-error">{errores.password}</span>
              )}
            </div>

            {/* ── ENLACE RECUPERAR CONTRASEÑA ─────────── */}
            <div className="olvidado-contrasena">
              <Link to="/recuperar-contrasena">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* ── BOTÓN ENVIAR ────────────────────────── */}
            <button type="submit" className="enviar-login">
              INICIAR SESIÓN
            </button>
          </form>

          {/* ── ENLACE PARA CREAR CUENTA ────────────── */}
          <p className="texto-registro">
            ¿No tienes una cuenta?{" "}
            <Link to="/registro">Crear cuenta</Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;