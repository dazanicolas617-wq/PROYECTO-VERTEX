import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registro.css";

function Registro() {
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    tipoDocumento: "",
    numeroDocumento: "",
    password: "",
    confirmarPassword: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormulario((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrores((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    // NOMBRE
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    } else if (formulario.nombre.trim().length < 2) {
      nuevosErrores.nombre = "El nombre debe tener mínimo 2 caracteres.";
    }

    // APELLIDO
    if (!formulario.apellido.trim()) {
      nuevosErrores.apellido = "El apellido es obligatorio.";
    }

    // CORREO
    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)
    ) {
      nuevosErrores.correo = "Ingresa un correo válido.";
    }

    // TELÉFONO
    if (!formulario.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^[0-9]{10}$/.test(formulario.telefono)) {
      nuevosErrores.telefono =
        "El teléfono debe tener 10 números.";
    }

    // TIPO DOCUMENTO
    if (!formulario.tipoDocumento) {
      nuevosErrores.tipoDocumento =
        "Selecciona un tipo de documento.";
    }

    // NÚMERO DOCUMENTO
    if (!formulario.numeroDocumento.trim()) {
      nuevosErrores.numeroDocumento =
        "El número de documento es obligatorio.";
    } else if (
      !/^[0-9]{6,12}$/.test(formulario.numeroDocumento)
    ) {
      nuevosErrores.numeroDocumento =
        "Ingresa un número de documento válido.";
    }

    // CONTRASEÑA
    if (!formulario.password) {
      nuevosErrores.password =
        "La contraseña es obligatoria.";
    } else if (formulario.password.length < 8) {
      nuevosErrores.password =
        "Debe tener mínimo 8 caracteres.";
    } else if (!/[A-Z]/.test(formulario.password)) {
      nuevosErrores.password =
        "Debe tener al menos una mayúscula.";
    } else if (!/[a-z]/.test(formulario.password)) {
      nuevosErrores.password =
        "Debe tener al menos una minúscula.";
    } else if (!/[0-9]/.test(formulario.password)) {
      nuevosErrores.password =
        "Debe tener al menos un número.";
    }

    // CONFIRMAR CONTRASEÑA
    if (!formulario.confirmarPassword) {
      nuevosErrores.confirmarPassword =
        "Confirma tu contraseña.";
    } else if (
      formulario.password !== formulario.confirmarPassword
    ) {
      nuevosErrores.confirmarPassword =
        "Las contraseñas no coinciden.";
    }

    // TÉRMINOS
    if (!formulario.terminos) {
      nuevosErrores.terminos =
        "Debes aceptar los términos y condiciones.";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    alert("¡Cuenta creada correctamente!");

    navigate("/login");
  };

  return (
    <main className="registro-page">

      {/* =========================
          IMAGEN IZQUIERDA
      ========================= */}

      <section className="registro-image">

        <div className="registro-overlay"></div>

        <div className="registro-image-content">

          <span>VERTEX MOTORS</span>

          <h1>
            TU PRÓXIMA
            <br />
            <strong>AVENTURA</strong>
            <br />
            COMIENZA AQUÍ.
          </h1>

          <div className="registro-line"></div>

          <p>
            Únete y descubre un mundo
            <br />
            de experiencias sobre dos ruedas.
          </p>

        </div>

      </section>

      {/* =========================
          FORMULARIO
      ========================= */}

      <section className="registro-form-section">

        <div className="registro-form-container">

          <h2>CREA TU CUENTA</h2>

          <p className="registro-subtitle">
            Completa tus datos para comenzar
          </p>

          <form onSubmit={handleSubmit}>

            {/* NOMBRE / APELLIDO */}

            <div className="registro-two-columns">

              <div className="registro-field">
                <label>NOMBRE</label>

                <div className="registro-input">
                  <span>👤</span>

                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                  />
                </div>

                {errores.nombre && (
                  <small>{errores.nombre}</small>
                )}
              </div>

              <div className="registro-field">
                <label>APELLIDO</label>

                <div className="registro-input">
                  <span>👤</span>

                  <input
                    type="text"
                    name="apellido"
                    placeholder="Tu apellido"
                    value={formulario.apellido}
                    onChange={handleChange}
                  />
                </div>

                {errores.apellido && (
                  <small>{errores.apellido}</small>
                )}
              </div>

            </div>

            {/* CORREO */}

            <div className="registro-field">
              <label>CORREO ELECTRÓNICO</label>

              <div className="registro-input">
                <span>✉</span>

                <input
                  type="email"
                  name="correo"
                  placeholder="ejemplo@correo.com"
                  value={formulario.correo}
                  onChange={handleChange}
                />
              </div>

              {errores.correo && (
                <small>{errores.correo}</small>
              )}
            </div>

            {/* TELÉFONO */}

            <div className="registro-field">
              <label>TELÉFONO</label>

              <div className="registro-input">
                <span>☎</span>

                <input
                  type="tel"
                  name="telefono"
                  placeholder="+57 300 123 4567"
                  value={formulario.telefono}
                  onChange={(e) => {
                    const valor = e.target.value.replace(/\D/g, "");

                    setFormulario((prev) => ({
                      ...prev,
                      telefono: valor,
                    }));

                    setErrores((prev) => ({
                      ...prev,
                      telefono: "",
                    }));
                  }}
                />
              </div>

              {errores.telefono && (
                <small>{errores.telefono}</small>
              )}
            </div>

            {/* DOCUMENTOS */}

            <div className="registro-two-columns">

              <div className="registro-field">
                <label>TIPO DE DOCUMENTO</label>

                <div className="registro-input">
                  <span>▣</span>

                  <select
                    name="tipoDocumento"
                    value={formulario.tipoDocumento}
                    onChange={handleChange}
                  >
                    <option value="">
                      Selecciona
                    </option>

                    <option value="CC">
                      Cédula de ciudadanía
                    </option>

                    <option value="CE">
                      Cédula de extranjería
                    </option>

                    <option value="PAS">
                      Pasaporte
                    </option>
                  </select>
                </div>

                {errores.tipoDocumento && (
                  <small>{errores.tipoDocumento}</small>
                )}
              </div>

              <div className="registro-field">
                <label>NÚMERO DE DOCUMENTO</label>

                <div className="registro-input">
                  <span>#</span>

                  <input
                    type="text"
                    name="numeroDocumento"
                    placeholder="Número de documento"
                    value={formulario.numeroDocumento}
                    onChange={(e) => {
                      const valor = e.target.value.replace(/\D/g, "");

                      setFormulario((prev) => ({
                        ...prev,
                        numeroDocumento: valor,
                      }));

                      setErrores((prev) => ({
                        ...prev,
                        numeroDocumento: "",
                      }));
                    }}
                  />
                </div>

                {errores.numeroDocumento && (
                  <small>{errores.numeroDocumento}</small>
                )}
              </div>

            </div>

            {/* CONTRASEÑAS */}

            <div className="registro-two-columns">

              <div className="registro-field">
                <label>CONTRASEÑA</label>

                <div className="registro-input">
                  <span>🔒</span>

                  <input
                    type={
                      mostrarPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    placeholder="Crea una contraseña"
                    value={formulario.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="password-button"
                    onClick={() =>
                      setMostrarPassword(!mostrarPassword)
                    }
                  >
                    👁
                  </button>
                </div>

                {errores.password && (
                  <small>{errores.password}</small>
                )}
              </div>

              <div className="registro-field">
                <label>CONFIRMAR CONTRASEÑA</label>

                <div className="registro-input">
                  <span>🔒</span>

                  <input
                    type={
                      mostrarConfirmar
                        ? "text"
                        : "password"
                    }
                    name="confirmarPassword"
                    placeholder="Confirma tu contraseña"
                    value={formulario.confirmarPassword}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="password-button"
                    onClick={() =>
                      setMostrarConfirmar(
                        !mostrarConfirmar
                      )
                    }
                  >
                    👁
                  </button>
                </div>

                {errores.confirmarPassword && (
                  <small>
                    {errores.confirmarPassword}
                  </small>
                )}
              </div>

            </div>

            {/* TÉRMINOS */}

            <div className="registro-terms">

              <input
                type="checkbox"
                name="terminos"
                checked={formulario.terminos}
                onChange={handleChange}
              />

              <p>
                ACEPTO LOS{" "}
                <a href="#">
                  TÉRMINOS Y CONDICIONES
                </a>{" "}
                Y LA{" "}
                <a href="#">
                  POLÍTICA DE PRIVACIDAD
                </a>
              </p>

            </div>

            {errores.terminos && (
              <small className="terms-error">
                {errores.terminos}
              </small>
            )}

            {/* BOTÓN */}

            <button
              type="submit"
              className="registro-submit"
            >
              CREAR CUENTA
              <span>→</span>
            </button>

          </form>

          <p className="login-link">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login">
              Iniciar sesión
            </Link>
          </p>

        </div>

      </section>

    </main>
  );
}

export default Registro;