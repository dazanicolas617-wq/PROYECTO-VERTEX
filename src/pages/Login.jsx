import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarPassword, setMostrarPassword] = useState(false);

  const [errores, setErrores] = useState({});

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!correo.trim()) {
      nuevosErrores.correo = "El correo electrónico es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }

    if (!password) {
      nuevosErrores.password = "La contraseña es obligatoria.";
    } else if (password.length < 8) {
      nuevosErrores.password =
        "La contraseña debe tener mínimo 8 caracteres.";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    // Por ahora solamente simulamos el inicio de sesión.
    alert("Inicio de sesión correcto");

    navigate("/");
  };

  return (
    <div className="login-page">

      {/* IMAGEN */}
      <section className="login-image">

        <div className="login-image-overlay"></div>

        <div className="login-image-content">
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

      {/* FORMULARIO */}
      <section className="login-form-section">

        <Link to="/" className="back-home">
          ← Volver al inicio
        </Link>

        <div className="login-content">

          <h2>
            BIENVENIDO A
            <br />
            VERTEX
          </h2>

          <p className="login-subtitle">
            Inicia sesión para continuar
          </p>

          <form onSubmit={handleSubmit}>

            {/* CORREO */}
            <div className="form-group">

              <label>Correo electrónico</label>

              <div className="input-container">

                <span className="input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  placeholder="ejemplo@correo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />

              </div>

              {errores.correo && (
                <span className="error-message">
                  {errores.correo}
                </span>
              )}

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label>Contraseña</label>

              <div className="input-container">

                <span className="input-icon">
                  🔒
                </span>

                <input
                  type={mostrarPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setMostrarPassword(!mostrarPassword)
                  }
                >
                  {mostrarPassword ? "◉" : "◉"}
                </button>

              </div>

              {errores.password && (
                <span className="error-message">
                  {errores.password}
                </span>
              )}

            </div>

            {/* RECUPERAR */}
            <div className="forgot-password">
              <Link to="/recuperar-password">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* BOTÓN */}
            <button
              type="submit"
              className="login-submit"
            >
              INICIAR SESIÓN
            </button>

          </form>

          {/* REGISTRO */}
          <p className="register-text">
            ¿No tienes una cuenta?{" "}
            <Link to="/registro">
              Crear cuenta
            </Link>
          </p>

        </div>

      </section>

    </div>
  );
}

export default Login;