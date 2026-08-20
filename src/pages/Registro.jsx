/* =====================================================
   REGISTRO.JSX — PÁGINA DE CREACIÓN DE CUENTA
   Diseño dividido en dos columnas:
   - Izquierda: imagen de fondo con texto motivacional
   - Derecha: formulario de registro con múltiples campos

   Campos del formulario:
   - Nombre y apellido
   - Correo electrónico
   - Teléfono
   - Tipo y número de documento
   - Contraseña (con indicador de requisitos en tiempo real)
   - Confirmar contraseña
   - Aceptación de términos y condiciones

   Validaciones:
   - Todos los campos son requeridos
   - Correo debe ser válido (regex)
   - Contraseña: mínimo 10 chars, mayúscula, minúscula,
     número y sin espacios
   - Las dos contraseñas deben coincidir
===================================================== */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff, Check, Circle, ArrowRight } from "lucide-react";
import "./Registro.css";

function Registro() {

  /* Hook para navegar a /login tras el registro exitoso */
  const navigate = useNavigate();

  /* ── ESTADO DEL FORMULARIO ────────────────────────────────
     Un único objeto agrupa todos los campos del formulario.
     Se actualiza con handleChange de forma genérica.
  ──────────────────────────────────────────────────────────── */
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    tipoDocumento: "",
    numeroDocumento: "",
    password: "",
    confirmarPassword: "",
    terminos: false,         // Checkbox de aceptación de términos
  });

  /* ── VISIBILIDAD DE CONTRASEÑAS ──────────────────────────── */
  const [mostrarPassword, setMostrarPassword] = useState(false);     // Alterna vista contraseña
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);   // Alterna vista confirmación
  const [passwordFocus, setPasswordFocus] = useState(false);         // Muestra panel de requisitos

  /* ── ERRORES DE VALIDACIÓN ───────────────────────────────── */
  const [errores, setErrores] = useState({});

  /* ── MANEJADOR GENÉRICO DE CAMBIOS ────────────────────────
     Detecta el tipo de input (checkbox o texto) y actualiza
     el campo correspondiente en el objeto form.
     También limpia el error de ese campo en tiempo real.
  ──────────────────────────────────────────────────────────── */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value, // Si es checkbox usa checked, si no usa value
    });

    /* Limpia el error del campo que está siendo editado */
    setErrores({
      ...errores,
      [name]: "",
    });
  };

  /* ── VALIDACIONES DE CONTRASEÑA EN TIEMPO REAL ────────────
     Objeto booleano con el resultado de cada requisito.
     Se usa para colorear el panel de indicadores.
  ──────────────────────────────────────────────────────────── */
  const passwordValidations = {
    length: form.password.length >= 10,           // Mínimo 10 caracteres
    lowercase: /[a-z]/.test(form.password),       // Al menos una minúscula
    uppercase: /[A-Z]/.test(form.password),       // Al menos una mayúscula
    number: /[0-9]/.test(form.password),          // Al menos un número
    noSpaces: !/\s/.test(form.password),          // Sin espacios en blanco
  };

  /* ── VALIDAR TODO EL FORMULARIO ──────────────────────────
     Se llama antes de enviar. Construye un objeto de errores.
     Retorna true si no hay errores, false si los hay.
  ──────────────────────────────────────────────────────────── */
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
      nuevosErrores.correo = "Ingresa un correo válido";   // Regex básico de email
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

    /* Valida los requisitos de la contraseña */
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

    /* Verifica que las contraseñas coincidan */
    if (!form.confirmarPassword) {
      nuevosErrores.confirmarPassword = "Confirma tu contraseña";
    } else if (form.password !== form.confirmarPassword) {
      nuevosErrores.confirmarPassword = "Las contraseñas no coinciden";
    }

    /* Verifica que se hayan aceptado los términos */
    if (!form.terminos) {
      nuevosErrores.terminos =
        "Debes aceptar los términos y condiciones";
    }

    setErrores(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0; // true = sin errores
  };

  /* ── ENVIAR FORMULARIO ────────────────────────────────────
     Si la validación pasa, muestra confirmación y redirige
     al usuario a la página de login.
  ──────────────────────────────────────────────────────────── */
  const handleSubmit = (e) => {
    e.preventDefault();   // Evita la recarga de la página

    if (!validarFormulario()) {
      return;             // Sale si hay campos inválidos
    }

    alert("Cuenta creada correctamente");

    navigate("/login");   // Redirige al formulario de inicio de sesión
  };

  return (
    <div className="registro-page">

      {/* =====================================================
          COLUMNA IZQUIERDA — Imagen de fondo decorativa
          Texto motivacional superpuesto sobre la foto
      ===================================================== */}

      <section className="registro-image">

        {/* Capa oscura sobre la imagen para contraste */}
        <div className="registro-overlay"></div>

        {/* Contenido textual centrado */}
        <div className="registro-image-content">

          <span>VERTEX MOTORS</span>

          <h1>
            TU PRÓXIMA
            <br />
            <strong>AVENTURA</strong>
            <br />
            COMIENZA AQUÍ.
          </h1>

          {/* Línea decorativa separadora */}
          <div className="registro-line"></div>

          <p>
            Únete y descubre un mundo
            <br />
            de experiencias sobre dos ruedas.
          </p>

        </div>

      </section>


      {/* =====================================================
          COLUMNA DERECHA — Formulario de registro
      ===================================================== */}

      <section className="registro-form-section">

        <div className="registro-form-container">

          <h2>CREA TU CUENTA</h2>

          <p className="registro-subtitle">
            Completa tus datos para comenzar
          </p>


          <form onSubmit={handleSubmit}>

            {/* =================================================
                NOMBRE / APELLIDO — Dos campos en fila
            ================================================= */}

            <div className="registro-two-columns">

              {/* Campo: Nombre */}
              <div className="registro-field">

                <label>NOMBRE</label>

                <div className="registro-input">

                  <span><User size={17} /></span>

                  <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                  />

                </div>

                {/* Error del campo nombre */}
                {errores.nombre && (
                  <small>{errores.nombre}</small>
                )}

              </div>


              {/* Campo: Apellido */}
              <div className="registro-field">

                <label>APELLIDO</label>

                <div className="registro-input">

                  <span><User size={17} /></span>

                  <input
                    type="text"
                    name="apellido"
                    placeholder="Tu apellido"
                    value={form.apellido}
                    onChange={handleChange}
                  />

                </div>

                {/* Error del campo apellido */}
                {errores.apellido && (
                  <small>{errores.apellido}</small>
                )}

              </div>

            </div>


            {/* =================================================
                CORREO ELECTRÓNICO
            ================================================= */}

            <div className="registro-field">

              <label>CORREO ELECTRÓNICO</label>

              <div className="registro-input">

                <span><Mail size={17} /></span>

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

                <span><Phone size={17} /></span>

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
                DOCUMENTOS — Tipo y número en dos columnas
            ================================================= */}

            <div className="registro-two-columns">

              {/* Campo: Tipo de documento (select) */}
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


              {/* Campo: Número de documento */}
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
                CONTRASEÑAS — En dos columnas
            ================================================= */}

            <div className="registro-two-columns">

              {/* ── CONTRASEÑA ──────────────────────────────────
                  Al hacer focus en este campo, se muestra el
                  panel de requisitos de la contraseña.
              ──────────────────────────────────────────────────── */}
              <div
                className="registro-field password-field"
                onFocus={() => setPasswordFocus(true)}   // Activa el panel de requisitos
                onBlur={(e) => {

                  /* Solo oculta el panel si el foco salió completamente del contenedor */
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

                  <span><Lock size={17} /></span>

                  {/* Alterna entre "text" y "password" según mostrarPassword */}
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

                  {/* Botón para alternar visibilidad */}
                  <button
                    type="button"
                    className="password-button"
                    onClick={() =>
                      setMostrarPassword(
                        !mostrarPassword
                      )
                    }
                  >
                    {mostrarPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>

                </div>

                {errores.password && (
                  <small>{errores.password}</small>
                )}


                {/* =================================================
                    PANEL DE REQUISITOS DE CONTRASEÑA
                    Solo se muestra cuando el campo tiene el foco.
                    Cada requisito cambia a verde cuando se cumple.
                ================================================= */}

                {passwordFocus && (

                  <div className="password-requirements">

                    <h3>
                      TU CONTRASEÑA DEBE TENER:
                    </h3>

                    <div className="password-requirements-grid">

                      {/* Requisito: mínimo 10 caracteres */}
                      <div
                        className={`password-requirement ${
                          passwordValidations.length
                            ? "valid"      // Clase "valid" cambia el color a verde
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.length ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <Circle size={8} fill="currentColor" />
                          )}
                        </span>

                        Mínimo 10 caracteres

                      </div>


                      {/* Requisito: mayúscula */}
                      <div
                        className={`password-requirement ${
                          passwordValidations.uppercase
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.uppercase ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <Circle size={8} fill="currentColor" />
                          )}
                        </span>

                        Una letra mayúscula

                      </div>


                      {/* Requisito: minúscula */}
                      <div
                        className={`password-requirement ${
                          passwordValidations.lowercase
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.lowercase ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <Circle size={8} fill="currentColor" />
                          )}
                        </span>

                        Una letra minúscula

                      </div>


                      {/* Requisito: número */}
                      <div
                        className={`password-requirement ${
                          passwordValidations.number
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.number ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <Circle size={8} fill="currentColor" />
                          )}
                        </span>

                        Al menos un número

                      </div>


                      {/* Requisito: sin espacios */}
                      <div
                        className={`password-requirement ${
                          passwordValidations.noSpaces
                            ? "valid"
                            : ""
                        }`}
                      >

                        <span className="requirement-dot">
                          {passwordValidations.noSpaces ? (
                            <Check size={12} strokeWidth={3} />
                          ) : (
                            <Circle size={8} fill="currentColor" />
                          )}
                        </span>

                        Sin espacios

                      </div>

                    </div>

                  </div>

                )}

              </div>


              {/* ── CONFIRMAR CONTRASEÑA ─────────────────────── */}

              <div className="registro-field">

                <label>CONFIRMAR CONTRASEÑA</label>

                <div className="registro-input">

                  <span><Lock size={17} /></span>

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

                  {/* Botón para alternar visibilidad del campo de confirmación */}
                  <button
                    type="button"
                    className="password-button"
                    onClick={() =>
                      setMostrarConfirmar(
                        !mostrarConfirmar
                      )
                    }
                  >
                    {mostrarConfirmar ? <EyeOff size={18} /> : <Eye size={18} />}
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
                TÉRMINOS Y CONDICIONES
                Checkbox de aceptación con links a las políticas
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


            {/* Error si no aceptó los términos */}
            {errores.terminos && (
              <small className="terms-error">
                {errores.terminos}
              </small>
            )}


            {/* =================================================
                BOTÓN CREAR CUENTA
            ================================================= */}

            <button
              type="submit"
              className="registro-submit"
            >
              CREAR CUENTA
              <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </button>


            {/* =================================================
                ENLACE A LOGIN para usuarios ya registrados
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