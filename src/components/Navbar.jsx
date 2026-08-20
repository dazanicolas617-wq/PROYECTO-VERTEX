/* =====================================================
   NAVBAR.JSX — BARRA DE NAVEGACIÓN SUPERIOR
   Muestra el logo, los enlaces de navegación y:
   - Si el usuario NO ha iniciado sesión: Botón "Iniciar sesión"
   - Si el usuario YA inició sesión: Avatar interactivo con
     dropdown (Mi cuenta, Cerrar sesión, Dashboard si es admin)
===================================================== */

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { User, LogOut, LayoutDashboard } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Estados de autenticación del usuario
  const [userEmail, setUserEmail] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const dropdownRef = useRef(null);

  // Comprobar estado de autenticación
  const checkAuth = () => {
    const email = localStorage.getItem("vertex_user_email") || "";
    const authenticated = localStorage.getItem("vertex_authenticated") === "true";
    const loggedIn = localStorage.getItem("vertex_user_logged_in") === "true" || !!email;

    setUserEmail(email);
    setIsAuth(loggedIn && !!email);
    setIsAdmin(authenticated || email.toLowerCase().includes("admin"));
  };

  useEffect(() => {
    checkAuth();

    // Escuchar eventos de storage o cambios de sesión
    const handleStorage = () => checkAuth();
    window.addEventListener("storage", handleStorage);
    window.addEventListener("vertex_auth_change", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("vertex_auth_change", handleStorage);
    };
  }, [location]);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickAfuera = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMenuAbierto(false);
      }
    };

    document.addEventListener("mousedown", handleClickAfuera);
    return () => {
      document.removeEventListener("mousedown", handleClickAfuera);
    };
  }, []);

  // Función para cerrar sesión
  const handleCerrarSesion = () => {
    localStorage.removeItem("vertex_authenticated");
    localStorage.removeItem("vertex_user_email");
    localStorage.removeItem("vertex_user_logged_in");
    localStorage.removeItem("vertex_user_name");
    setUserEmail("");
    setIsAuth(false);
    setIsAdmin(false);
    setMenuAbierto(false);
    window.dispatchEvent(new Event("vertex_auth_change"));
    navigate("/");
  };

  // Inicial del avatar (primera letra del correo o nombre)
  const inicialAvatar = userEmail ? userEmail.charAt(0).toUpperCase() : "U";

  return (
    <header className="barra-navegacion">
      <div className="contenedor-barra-navegacion">
        {/* ── LOGO ───────────────────────────────────────── */}
        <Link to="/" className="logo-barra-navegacion">
          <img src={logo} alt="Vertex Motors" />
        </Link>

        {/* ── ENLACES DE NAVEGACIÓN ──────────────────────── */}
        <nav className="enlaces-barra-navegacion">
          <Link to="/">Inicio</Link>
          <Link to="/motos">Motos</Link>
          <Link to="/encuentranos">Encuéntranos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/agendar-prueba">Agendar prueba</Link>
        </nav>

        {/* ── CONTROL DE SESIÓN ──────────────────────────── */}
        <div className="contenedor-usuario-navbar" ref={dropdownRef}>
          {isAuth ? (
            <div className="usuario-menu-wrapper">
              {/* Botón de avatar circular */}
              <button
                type="button"
                className={`boton-avatar-usuario ${menuAbierto ? "activo" : ""}`}
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Menú de usuario"
              >
                {inicialAvatar}
              </button>

              {/* Menú desplegable */}
              {menuAbierto && (
                <div className="menu-desplegable-usuario">
                  {/* Encabezado con correo del usuario */}
                  <div className="usuario-header-dropdown">
                    <div className="avatar-dropdown-circulo">
                      {inicialAvatar}
                    </div>
                    <span className="correo-dropdown" title={userEmail}>
                      {userEmail}
                    </span>
                  </div>

                  <div className="divisor-dropdown"></div>

                  {/* Enlace: Mi cuenta */}
                  <Link
                    to="/mi-cuenta"
                    className="item-dropdown"
                    onClick={() => setMenuAbierto(false)}
                  >
                    <User size={18} className="icono-dropdown azul" />
                    <span>Mi cuenta</span>
                  </Link>

                  {/* Enlace Admin (si aplica) */}
                  {isAdmin && (
                    <Link
                      to="/dashboard"
                      className="item-dropdown"
                      onClick={() => setMenuAbierto(false)}
                    >
                      <LayoutDashboard size={18} className="icono-dropdown verde" />
                      <span>Panel Admin</span>
                    </Link>
                  )}

                  <div className="divisor-dropdown"></div>

                  {/* Botón: Cerrar sesión */}
                  <button
                    type="button"
                    className="item-dropdown cerrar-sesion"
                    onClick={handleCerrarSesion}
                  >
                    <LogOut size={18} className="icono-dropdown rojo" />
                    <span>Cerrar sesión</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="login-barra-navegacion">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
