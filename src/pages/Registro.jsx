import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registro.css";

function Registro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    setErrores({
      ...errores,
      [name]: "",
    });
  };

  const passwordValidations = {
    length: form.password.length >= 10,
    lowercase: /[a-z]/.test(form.password),
    uppercase: /[A-Z]/.test(form.password),
    number: /[0-9]/.test(form.password),
    noSpaces: !/\s/.test(form.password),
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "Ingresa tu nombre";
    }

    if (!form.apellido.trim()) {
      nuevosErrores.apellido = "Ingresa tu apellido";
    }

    if (!form.correo.trim()) {
      nuevosErrores.correo = "Ingresa tu correo";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      nuevosErrores.correo = "Ingresa un correo válido";
    }

    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "Ingresa tu teléfono";
    }

    if (!form.tipoDocumento) {
      nuevosErrores.tipoDocumento = "Selecciona un tipo de documento";
    }

    if (!form.numeroDocumento.trim()) {
      nuevosErrores.numeroDocumento = "Ingresa tu número de documento";
    }

    if (!passwordValidations.length) {
      nuevosErrores.password =
        "La contraseña debe tener mínimo 10 caracteres";
    } else if (
      !passwordValidations.lowercase ||
      !passwordValidations.uppercase ||
      !passwordValidations.number ||
      !passwordValidations.noSpaces
    ) {
      nuevosErrores.password =
        "La contraseña no cumple todos los requisitos";
    }

    if (!form.confirmarPassword) {
      nuevosErrores.confirmarPassword = "Confirma tu contraseña";
    } else if (form.password !== form.confirmarPassword) {
      nuevosErrores.confirmarPassword = "Las contraseñas no coinciden";
    }

    if (!form.terminos) {
      nuevosErrores.terminos =
        "Debes aceptar los términos y condiciones";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    alert("Cuenta creada correctamente");

    navigate("/login");
  };

  return (
    <div className="registro-page">

      {/* =====================================================
          COLUMNA IZQUIERDA
      ===================================================== */}

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


      {/* =====================================================
          COLUMNA DERECHA
      ===================================================== */}

      <section className="registro-form-section">

        <div className="registro-form-container">

          <h2>CREA TU CUENTA</h2>

          <p className="registro-subtitle">
            Completa tus datos para comenzar
          </p>


          <form onSubmit={handleSubmit}>

            {/* =================================================
                NOMBRE / APELLIDO
            ================================================= */}

            <div className="registro-two-columns">

              <div className="registro-field">

                <label>NOMBRE</label>

                <div className="registro-input">

                  <span>👤</span>

                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
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
                    value={form.apellido}
                    onChange={handleChange}
                  />

                </div>

                {errores.apellido && (
                  <small>{errores.apellido}</small>
                )}

              </div>

            </div>


            {/* =================================================
                CORREO
            ================================================= */}

            <div className="registro-field">

              <label>CORREO ELECTRÓNICO</label>

              <div className="registro-input">

                <span>✉</span>

                <input
                  type="email"
                  name="correo"
                  placeholder="ejemplo@correo.com"
                  value={form.correo}
                  onChange={handleChange}
                />

              </div>

              {errores.correo && (
                <small>{errores.correo}</small>
              )}

            </div>


            {/* =================================================
                TELÉFONO
            ================================================= */}

            <div className="registro-field">

              <label>TELÉFONO</label>

              <div className="registro-input">

                <span>📞</span>

                <input
                  type="tel"
                  name="telefono"
                  placeholder="+57 300 123 4567"
                  value={form.telefono}
                  onChange={handleChange}
                />

              </div>

              {errores.telefono && (
                <small>{errores.telefono}</small>
              )}

            </div>


            {/* =================================================
                DOCUMENTOS
            ================================================= */}

            <div className="registro-two-columns">

              <div className="registro-field">

                <label>TIPO DE DOCUMENTO</label>

                <div className="registro-input">

                  <span>▣</span>

                  <select
                    name="tipoDocumento"
                    value={form.tipoDocumento}
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

                    <option value="PASAPORTE">
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
                    value={form.numeroDocumento}
                    onChange={handleChange}
                  />

                </div>

                {errores.numeroDocumento && (
                  <small>{errores.numeroDocumento}</small>
                )}

              </div>

            </div>


            {/* =================================================
                CONTRASEÑAS
            ================================================= */}

            <div className="registro-two-columns">

              {/* CONTRASEÑA */}

              <div
                className="registro-field password-field"
                onFocus={() => setPasswordFocus(true)}
                onBlur={(e) => {

                  if (
                    !e.currentTarget.contains(
                      e.relatedTarget
                    )
                  ) {
                    setPasswordFocus(false);
                  }

                }}
              >

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
                    value={form.password}
                    onChange={handleChange}
                  />

                  <button
                    type="button"
                    className="password-button"
                    onClick={() =>
                      setMostrarPassword(
                        !mostrarPassword
                      )
                    }
                  >
                    {mostrarPassword ? "◉" : "◉"}
                  </button>

                </div>

                {errores.password && (
                  <small>{errores.password}</small>
                )}


                {/* =================================================
                    REQUISITOS
                ================================================= */}

                {passwordFocus && (

                  <div className="password-requirements">

                    <h3>
                      TU CONTRASEÑA DEBE TENER:
                    </h3>

                    <div className="password-requirements-grid">

                      <div
                        className={`password-requirement ${
                          passwordValidations.length
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.length
                            ? "●"
                            : "○"}
                        </span>

                        Mínimo 10 caracteres

                      </div>


                      <div
                        className={`password-requirement ${
                          passwordValidations.uppercase
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.uppercase
                            ? "●"
                            : "○"}
                        </span>

                        Una letra mayúscula

                      </div>


                      <div
                        className={`password-requirement ${
                          passwordValidations.lowercase
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.lowercase
                            ? "●"
                            : "○"}
                        </span>

                        Una letra minúscula

                      </div>


                      <div
                        className={`password-requirement ${
                          passwordValidations.number
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.number
                            ? "●"
                            : "○"}
                        </span>

                        Al menos un número

                      </div>


                      <div
                        className={`password-requirement ${
                          passwordValidations.noSpaces
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.noSpaces
                            ? "●"
                            : "○"}
                        </span>

                        Sin espacios

                      </div>

                    </div>

                  </div>

                )}

              </div>


              {/* CONFIRMAR CONTRASEÑA */}

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
                    value={form.confirmarPassword}
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
                    ◉
                  </button>

                </div>

                {errores.confirmarPassword && (
                  <small>
                    {errores.confirmarPassword}
                  </small>
                )}

              </div>

            </div>


            {/* =================================================
                TÉRMINOS
            ================================================= */}

            <div className="registro-terms">

              <input
                type="checkbox"
                name="terminos"
                checked={form.terminos}
                onChange={handleChange}
              />

              <p>

                ACEPTO LOS{" "}

                <Link to="/terminos">
                  TÉRMINOS Y CONDICIONES
                </Link>

                {" "}Y LA{" "}

                <Link to="/privacidad">
                  POLÍTICA DE PRIVACIDAD
                </Link>

              </p>

            </div>


            {errores.terminos && (
              <small className="terms-error">
                {errores.terminos}
              </small>
            )}


            {/* =================================================
                BOTÓN
            ================================================= */}

            <button
              type="submit"
              className="registro-submit"
            >
              CREAR CUENTA
              <span>→</span>
            </button>


            {/* =================================================
                LOGIN
            ================================================= */}

            <p className="login-link">

              ¿Ya tienes una cuenta?{" "}

              <Link to="/login">
                Iniciar sesión
              </Link>

            </p>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Registro;