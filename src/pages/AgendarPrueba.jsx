/* =====================================================
   AGENDARPRUEBA.JSX — PÁGINA PARA AGENDAR PRUEBA DE MANEJO
   Lógica:
   - Si NO ha iniciado sesión: Muestra la tarjeta de login
   - Si YA inició sesión: Muestra el formulario interactivo
     de agendamiento con pre-llenado de datos de usuario.
===================================================== */

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  Bike,
  User,
  Phone,
  Mail,
  CheckCircle,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import "./AgendarPrueba.css";

import heroMotos from "../assets/hero-motos.jpg";

function AgendarPrueba() {
  const location = useLocation();
  const navigate = useNavigate();

  // Estado de autenticación
  const [isAuth, setIsAuth] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
    telefono: ""
  });

  // Estado del formulario de agendamiento
  const [form, setForm] = useState({
    moto: "Harley Davidson Iron 883",
    sede: "Sede Bogotá Norte (Calle 127 # 19-45)",
    fecha: "",
    hora: "10:30 AM",
    nombre: "",
    correo: "",
    telefono: "",
    licencia: true,
    comentarios: ""
  });

  // Estado de reserva confirmada
  const [reservaConfirmada, setReservaConfirmada] = useState(null);

  // Verificar sesión y cargar datos
  useEffect(() => {
    const email = localStorage.getItem("vertex_user_email");
    const loggedIn = localStorage.getItem("vertex_user_logged_in") === "true" || !!email;

    setIsAuth(loggedIn && !!email);

    if (email) {
      let nombrePerfil = email.split("@")[0];
      let telefonoPerfil = "+57 300 123 4567";

      const savedProfile = localStorage.getItem("vertex_user_profile");
      if (savedProfile) {
        try {
          const parsed = JSON.parse(savedProfile);
          if (parsed.nombre) nombrePerfil = `${parsed.nombre} ${parsed.apellido || ""}`.trim();
          if (parsed.telefono) telefonoPerfil = parsed.telefono;
        } catch (e) {
          console.error(e);
        }
      }

      setUsuario({
        nombre: nombrePerfil,
        correo: email,
        telefono: telefonoPerfil
      });

      // Prellenar formulario
      setForm((prev) => ({
        ...prev,
        nombre: nombrePerfil,
        correo: email,
        telefono: telefonoPerfil,
        moto: location.state?.motoSeleccionada || prev.moto
      }));
    }
  }, [location]);

  // Manejar cambios de input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Enviar formulario de agendamiento
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fecha) {
      alert("Por favor selecciona una fecha para la prueba.");
      return;
    }

    const nuevaReserva = {
      id: `PR-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      modelo: form.moto,
      sede: form.sede,
      fecha: form.fecha,
      hora: form.hora,
      asesor: "Asesor Comercial Vertex",
      cliente: form.nombre,
      telefono: form.telefono,
      correo: form.correo
    };

    setReservaConfirmada(nuevaReserva);
  };

  return (
    <div className="agendar-page">
      {/* ── SECCIÓN HERO ────────────────────────────────────── */}
      <section className="agendar-hero">
        <div className="hero-text">
          <span className="hero-badge">EXPERIENCIA VERTEX</span>
          <h1>
            AGENDA TU
            <br />
            PRUEBA DE
            <br />
            MANEJO
          </h1>
          <p>
            Siente la potencia y el diseño de nuestras motocicletas en una prueba
            exclusiva en nuestras sedes oficiales.
          </p>
        </div>

        <div className="hero-image">
          <img
            src={heroMotos}
            alt="Motocicleta para prueba de manejo"
          />
        </div>
      </section>

      <div className="separator"></div>

      {/* ── SECCIÓN CONDICIONAL: LOGIN O FORMULARIO ─────────── */}
      <section className="agendar-contenido-seccion">
        {!isAuth ? (
          /* ===================================================
             USUARIO NO AUTENTICADO: CARD DE INICIAR SESIÓN
          =================================================== */
          <div className="login-card">
            <span className="card-label">AGENDA TU PRUEBA</span>
            <h2>
              ¿Quieres probar una de
              <br />
              nuestras motos?
            </h2>
            <p>
              Para agendar una prueba debes iniciar sesión en tu cuenta de Vertex Motors.
            </p>
            <Link to="/login" className="btn-iniciar-sesion">
              INICIAR SESIÓN
            </Link>
            <p className="texto-crear-cuenta">
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="link-crear-cuenta">
                Crear una cuenta
              </Link>
            </p>
          </div>
        ) : reservaConfirmada ? (
          /* ===================================================
             RESERVA CONFIRMADA: PANTALLA DE ÉXITO
          =================================================== */
          <div className="tarjeta-exito-agendar">
            <div className="icono-check-reserva">
              <CheckCircle size={44} />
            </div>

            <span className="badge-confirmado">CITA AGENDADA</span>
            <h2>¡Prueba de manejo reservada con éxito!</h2>
            <p className="subtitulo-exito-reserva">
              Hemos registrado tu solicitud. Te esperamos en la sede seleccionada con la motocicleta lista.
            </p>

            <div className="resumen-reserva-caja">
              <div className="item-resumen-reserva">
                <span className="etiqueta-resumen">Código de cita:</span>
                <strong>{reservaConfirmada.id}</strong>
              </div>
              <div className="item-resumen-reserva">
                <span className="etiqueta-resumen">Motocicleta:</span>
                <strong>{reservaConfirmada.modelo}</strong>
              </div>
              <div className="item-resumen-reserva">
                <span className="etiqueta-resumen">Sede:</span>
                <strong>{reservaConfirmada.sede}</strong>
              </div>
              <div className="item-resumen-reserva">
                <span className="etiqueta-resumen">Fecha y Hora:</span>
                <strong>{reservaConfirmada.fecha} — {reservaConfirmada.hora}</strong>
              </div>
              <div className="item-resumen-reserva">
                <span className="etiqueta-resumen">Cliente:</span>
                <strong>{reservaConfirmada.cliente}</strong>
              </div>
            </div>

            <div className="botones-exito-reserva">
              <Link to="/mi-cuenta" className="btn-ir-mi-cuenta">
                <span>Ver en Mi cuenta</span>
                <ArrowRight size={16} />
              </Link>
              <button
                type="button"
                className="btn-otra-prueba"
                onClick={() => setReservaConfirmada(null)}
              >
                Agendar otra prueba
              </button>
            </div>
          </div>
        ) : (
          /* ===================================================
             USUARIO AUTENTICADO: FORMULARIO DE AGENDAMIENTO
          =================================================== */
          <div className="formulario-agendar-contenedor">
            <div className="encabezado-form-agendar">
              <span className="badge-form-agendar">RESERVA INMEDIATA</span>
              <h2>Reserva tu prueba de manejo</h2>
              <p>Completa los detalles de tu cita para tener tu motocicleta lista.</p>
            </div>

            <form onSubmit={handleSubmit} className="form-agendar-grid">
              {/* Modelo de motocicleta */}
              <div className="grupo-agendar-campo ancho-completo">
                <label>Selecciona el modelo de moto</label>
                <div className="input-agendar-wrapper">
                  <Bike size={18} className="icono-input-agendar" />
                  <select
                    name="moto"
                    value={form.moto}
                    onChange={handleChange}
                    required
                  >
                    <option value="Harley Davidson Iron 883">Harley Davidson Iron 883 — $ 48.900.000 COP</option>
                    <option value="Vertex Adventure 650">Vertex Adventure 650 — $ 34.500.000 COP</option>
                    <option value="Vertex Classic 350">Vertex Classic 350 — $ 18.990.000 COP</option>
                    <option value="Royal Enfield Meteor 650">Royal Enfield Meteor 650 — $ 32.000.000 COP</option>
                    <option value="Scram 411">Scram 411 — $ 21.500.000 COP</option>
                    <option value="Interceptor 650">Interceptor 650 — $ 31.900.000 COP</option>
                    <option value="Continental GT 650">Continental GT 650 — $ 33.400.000 COP</option>
                  </select>
                </div>
              </div>

              {/* Sede */}
              <div className="grupo-agendar-campo ancho-completo">
                <label>Sede o concesionario Vertex</label>
                <div className="input-agendar-wrapper">
                  <MapPin size={18} className="icono-input-agendar" />
                  <select
                    name="sede"
                    value={form.sede}
                    onChange={handleChange}
                    required
                  >
                    <option value="Sede Bogotá Norte (Calle 127 # 19-45)">Sede Bogotá Norte — Calle 127 # 19-45</option>
                    <option value="Sede Bogotá Chapinero (Cra 7 # 64-10)">Sede Bogotá Chapinero — Cra 7 # 64-10</option>
                    <option value="Sede Medellín El Poblado (Cra 43A # 1Sur-180)">Sede Medellín El Poblado — Cra 43A # 1Sur-180</option>
                    <option value="Sede Cali Granada (Av 9N # 14-22)">Sede Cali Granada — Av 9N # 14-22</option>
                    <option value="Sede Barranquilla (Cra 53 # 79-112)">Sede Barranquilla — Cra 53 # 79-112</option>
                  </select>
                </div>
              </div>

              {/* Fecha */}
              <div className="grupo-agendar-campo">
                <label>Fecha de la prueba</label>
                <div className="input-agendar-wrapper">
                  <Calendar size={18} className="icono-input-agendar" />
                  <input
                    type="date"
                    name="fecha"
                    value={form.fecha}
                    onChange={handleChange}
                    min={new Date(Date.now() + 86400000).toISOString().split("T")[0]}
                    required
                  />
                </div>
              </div>

              {/* Horario */}
              <div className="grupo-agendar-campo">
                <label>Horario preferido</label>
                <div className="input-agendar-wrapper">
                  <Clock size={18} className="icono-input-agendar" />
                  <select
                    name="hora"
                    value={form.hora}
                    onChange={handleChange}
                    required
                  >
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="03:30 PM">03:30 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Nombre del titular */}
              <div className="grupo-agendar-campo">
                <label>Nombre del conductor</label>
                <div className="input-agendar-wrapper">
                  <User size={18} className="icono-input-agendar" />
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Teléfono */}
              <div className="grupo-agendar-campo">
                <label>Teléfono de contacto</label>
                <div className="input-agendar-wrapper">
                  <Phone size={18} className="icono-input-agendar" />
                  <input
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Correo electrónico */}
              <div className="grupo-agendar-campo ancho-completo">
                <label>Correo electrónico</label>
                <div className="input-agendar-wrapper">
                  <Mail size={18} className="icono-input-agendar" />
                  <input
                    type="email"
                    name="correo"
                    value={form.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Checkbox Licencia */}
              <div className="grupo-agendar-campo ancho-completo">
                <label className="checkbox-licencia-label">
                  <input
                    type="checkbox"
                    name="licencia"
                    checked={form.licencia}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    <ShieldCheck size={18} className="icono-licencia" />
                    Confirmo que cuento con <strong>licencia de conducción vigente para motocicleta</strong> y documento de identidad al momento de la prueba.
                  </span>
                </label>
              </div>

              {/* Botón de confirmación */}
              <div className="grupo-agendar-campo ancho-completo">
                <button type="submit" className="boton-confirmar-agendar">
                  CONFIRMAR RESERVA DE PRUEBA
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}

export default AgendarPrueba;