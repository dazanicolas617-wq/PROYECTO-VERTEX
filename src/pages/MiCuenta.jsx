/* =====================================================
   MICUENTA.JSX — PÁGINA DE PERFIL Y PANEL DE CLIENTE
   Permite al usuario gestionar:
   1. Datos de perfil personales
   2. Pruebas de manejo agendadas
   3. Cotizaciones de crédito solicitadas
   4. Motocicletas guardadas / favoritas
   5. Seguridad y preferencias de notificaciones
===================================================== */

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  FileText,
  Bike,
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  LogOut,
  Save,
  PlusCircle,
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";
import "./MiCuenta.css";

// Imágenes de motos para la sección de favoritos y pruebas
import Moto1 from "../assets/Moto1.jpg";
import Moto2 from "../assets/Moto2.jpg";
import Moto3 from "../assets/Moto3.jpg";
import Moto4 from "../assets/Moto4.jpg";

function MiCuenta() {
  const navigate = useNavigate();

  // Pestaña activa: "perfil", "pruebas", "cotizaciones", "favoritos", "seguridad"
  const [tabActiva, setTabActiva] = useState("perfil");

  // Estado del perfil del usuario
  const [perfil, setPerfil] = useState({
    nombre: "Nicolas",
    apellido: "Daza",
    correo: "daza@gmail.com",
    telefono: "+57 312 456 7890",
    tipoDocumento: "CC",
    numeroDocumento: "1020304050",
    ciudad: "Bogotá D.C.",
    direccion: "Cra 15 # 93-40, Chicó Norte"
  });

  // Mensaje de éxito al guardar perfil
  const [mensajeGuardado, setMensajeGuardado] = useState(false);

  // Estado de seguridad (contraseñas)
  const [passForm, setPassForm] = useState({
    actual: "",
    nueva: "",
    confirmar: ""
  });
  const [passMensaje, setPassMensaje] = useState("");

  // Preferencias de notificaciones
  const [notificaciones, setNotificaciones] = useState({
    email: true,
    whatsapp: true,
    novedades: false
  });

  // Cargar datos del usuario desde localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("vertex_user_email");
    if (!savedEmail) {
      // Si no hay sesión, permitir explorar o iniciar sesión
      // pero dejamos valores por defecto
    } else {
      const savedProfile = localStorage.getItem("vertex_user_profile");
      if (savedProfile) {
        try {
          const parsed = JSON.parse(savedProfile);
          setPerfil((prev) => ({
            ...prev,
            ...parsed,
            correo: savedEmail || parsed.correo
          }));
        } catch (e) {
          console.error("Error al cargar perfil", e);
        }
      } else {
        const nombrePorDefecto = savedEmail.split("@")[0];
        setPerfil((prev) => ({
          ...prev,
          correo: savedEmail,
          nombre: nombrePorDefecto.charAt(0).toUpperCase() + nombrePorDefecto.slice(1)
        }));
      }
    }
  }, []);

  // Pruebas de manejo agendadas (estado local / localStorage)
  const [pruebasManejo, setPruebasManejo] = useState([
    {
      id: "PR-2026-01",
      modelo: "Harley Davidson Iron 883",
      sede: "Sede Bogotá Norte — Calle 127",
      fecha: "26 de Agosto, 2026",
      hora: "10:30 AM",
      asesor: "Carlos Mendoza",
      estado: "Confirmada",
      imagen: Moto1
    },
    {
      id: "PR-2026-02",
      modelo: "Vertex Adventure 650",
      sede: "Sede Medellín — El Poblado",
      fecha: "05 de Septiembre, 2026",
      hora: "03:00 PM",
      asesor: "Valentina Ruiz",
      estado: "En proceso",
      imagen: Moto3
    }
  ]);

  // Cotizaciones solicitadas
  const [cotizaciones, setCotizaciones] = useState([
    {
      id: "COT-7841",
      modelo: "Harley Davidson Fat Bob",
      precioTotal: "$ 48.900.000 COP",
      cuotaInicial: "$ 14.670.000 COP (30%)",
      plazo: "36 meses",
      cuotaMensual: "$ 1.245.000 COP / mes",
      fecha: "18 Ago 2026",
      estado: "Aprobada"
    },
    {
      id: "COT-7842",
      modelo: "Vertex Classic 350",
      precioTotal: "$ 18.990.000 COP",
      cuotaInicial: "$ 5.697.000 COP (30%)",
      plazo: "24 meses",
      cuotaMensual: "$ 695.000 COP / mes",
      fecha: "12 Ago 2026",
      estado: "En revisión"
    }
  ]);

  // Motos guardadas / favoritas
  const [motosFavoritas, setMotosFavoritas] = useState([
    {
      id: 1,
      nombre: "Harley Davidson Custom",
      categoria: "Crucero",
      cilindrada: "1200 cc",
      precio: "$ 52.000.000 COP",
      imagen: Moto1
    },
    {
      id: 2,
      nombre: "Vertex Classic Cruiser",
      categoria: "Clásica",
      cilindrada: "350 cc",
      precio: "$ 18.990.000 COP",
      imagen: Moto2
    },
    {
      id: 3,
      nombre: "Vertex Adventure Rally",
      categoria: "Aventura",
      cilindrada: "650 cc",
      precio: "$ 34.500.000 COP",
      imagen: Moto3
    },
    {
      id: 4,
      nombre: "Vertex Heritage Classic",
      categoria: "Clásica",
      cilindrada: "500 cc",
      precio: "$ 24.000.000 COP",
      imagen: Moto4
    }
  ]);

  // Manejar cambios en formulario de perfil
  const handlePerfilChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Guardar perfil en localStorage
  const handleGuardarPerfil = (e) => {
    e.preventDefault();
    localStorage.setItem("vertex_user_profile", JSON.stringify(perfil));
    localStorage.setItem("vertex_user_name", `${perfil.nombre} ${perfil.apellido}`.trim());
    window.dispatchEvent(new Event("vertex_auth_change"));
    setMensajeGuardado(true);
    setTimeout(() => setMensajeGuardado(false), 3500);
  };

  // Guardar cambio de contraseña
  const handleCambiarPassword = (e) => {
    e.preventDefault();
    if (!passForm.actual || !passForm.nueva || !passForm.confirmar) {
      setPassMensaje("Por favor completa todos los campos de contraseña.");
      return;
    }
    if (passForm.nueva !== passForm.confirmar) {
      setPassMensaje("La nueva contraseña y su confirmación no coinciden.");
      return;
    }
    if (passForm.nueva.length < 8) {
      setPassMensaje("La nueva contraseña debe tener al menos 8 caracteres.");
      return;
    }
    setPassMensaje("¡Contraseña actualizada correctamente!");
    setPassForm({ actual: "", nueva: "", confirmar: "" });
    setTimeout(() => setPassMensaje(""), 4000);
  };

  // Cerrar sesión
  const handleCerrarSesion = () => {
    localStorage.removeItem("vertex_authenticated");
    localStorage.removeItem("vertex_user_email");
    localStorage.removeItem("vertex_user_logged_in");
    localStorage.removeItem("vertex_user_name");
    window.dispatchEvent(new Event("vertex_auth_change"));
    navigate("/");
  };

  // Inicial de avatar
  const inicial = perfil.nombre
    ? perfil.nombre.charAt(0).toUpperCase()
    : perfil.correo.charAt(0).toUpperCase();

  return (
    <div className="pagina-mi-cuenta">
      {/* ── BANNER CABECERA DE PERFIL ───────────────────────── */}
      <section className="cabecera-perfil-cliente">
        <div className="contenedor-cabecera-perfil">
          <div className="bloque-identidad-usuario">
            <div className="avatar-perfil-grande">
              <span>{inicial}</span>
            </div>

            <div className="info-texto-usuario">
              <div className="fila-nombre-badge">
                <h1>{perfil.nombre} {perfil.apellido}</h1>
                <span className="badge-vip">
                  <Sparkles size={13} /> Socio Vertex
                </span>
              </div>
              <p className="correo-subtexto">{perfil.correo}</p>
              <div className="datos-rapidos-usuario">
                <span>
                  <MapPin size={14} /> {perfil.ciudad}
                </span>
                <span>
                  <Phone size={14} /> {perfil.telefono}
                </span>
              </div>
            </div>
          </div>

          <div className="resumen-metadatos-perfil">
            <div className="tarjeta-stat-perfil">
              <span className="stat-valor">{pruebasManejo.length}</span>
              <span className="stat-etiqueta">Pruebas agendadas</span>
            </div>
            <div className="tarjeta-stat-perfil">
              <span className="stat-valor">{cotizaciones.length}</span>
              <span className="stat-etiqueta">Cotizaciones</span>
            </div>
            <div className="tarjeta-stat-perfil">
              <span className="stat-valor">{motosFavoritas.length}</span>
              <span className="stat-etiqueta">Motos de interés</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENIDO PRINCIPAL: SIDEBAR + PANELES ──────────── */}
      <div className="cuerpo-mi-cuenta">
        {/* Barra lateral de navegación por pestañas */}
        <aside className="sidebar-cuenta">
          <nav className="menu-navegacion-cuenta">
            <button
              type="button"
              className={`boton-tab-cuenta ${tabActiva === "perfil" ? "activo" : ""}`}
              onClick={() => setTabActiva("perfil")}
            >
              <User size={18} />
              <span>Información personal</span>
              <ChevronRight size={16} className="flecha-tab" />
            </button>

            <button
              type="button"
              className={`boton-tab-cuenta ${tabActiva === "pruebas" ? "activo" : ""}`}
              onClick={() => setTabActiva("pruebas")}
            >
              <Calendar size={18} />
              <span>Pruebas de manejo</span>
              <span className="contador-tab">{pruebasManejo.length}</span>
            </button>

            <button
              type="button"
              className={`boton-tab-cuenta ${tabActiva === "cotizaciones" ? "activo" : ""}`}
              onClick={() => setTabActiva("cotizaciones")}
            >
              <FileText size={18} />
              <span>Mis cotizaciones</span>
              <span className="contador-tab">{cotizaciones.length}</span>
            </button>

            <button
              type="button"
              className={`boton-tab-cuenta ${tabActiva === "favoritos" ? "activo" : ""}`}
              onClick={() => setTabActiva("favoritos")}
            >
              <Bike size={18} />
              <span>Motos de interés</span>
              <span className="contador-tab">{motosFavoritas.length}</span>
            </button>

            <button
              type="button"
              className={`boton-tab-cuenta ${tabActiva === "seguridad" ? "activo" : ""}`}
              onClick={() => setTabActiva("seguridad")}
            >
              <Shield size={18} />
              <span>Seguridad y ajustes</span>
              <ChevronRight size={16} className="flecha-tab" />
            </button>
          </nav>

          <div className="divisor-sidebar"></div>

          <button
            type="button"
            className="boton-tab-cuenta boton-logout-sidebar"
            onClick={handleCerrarSesion}
          >
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </button>
        </aside>

        {/* Panel de contenido activo */}
        <main className="panel-principal-cuenta">
          {/* ===================================================
              PESTAÑA 1: INFORMACIÓN PERSONAL
          =================================================== */}
          {tabActiva === "perfil" && (
            <div className="seccion-panel-cuenta animada">
              <div className="encabezado-seccion-panel">
                <div>
                  <h2>Información personal</h2>
                  <p>Administra tus datos personales y de contacto para tus trámites en Vertex.</p>
                </div>
              </div>

              {mensajeGuardado && (
                <div className="alerta-exito-cuenta">
                  <CheckCircle size={18} />
                  <span>Tus datos han sido actualizados con éxito.</span>
                </div>
              )}

              <form onSubmit={handleGuardarPerfil} className="formulario-perfil-grid">
                <div className="grupo-input-cuenta">
                  <label>Nombre</label>
                  <div className="campo-input-cuenta">
                    <User size={16} className="icono-campo" />
                    <input
                      type="text"
                      name="nombre"
                      value={perfil.nombre}
                      onChange={handlePerfilChange}
                      required
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Apellido</label>
                  <div className="campo-input-cuenta">
                    <User size={16} className="icono-campo" />
                    <input
                      type="text"
                      name="apellido"
                      value={perfil.apellido}
                      onChange={handlePerfilChange}
                      required
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Correo electrónico</label>
                  <div className="campo-input-cuenta">
                    <Mail size={16} className="icono-campo" />
                    <input
                      type="email"
                      name="correo"
                      value={perfil.correo}
                      onChange={handlePerfilChange}
                      required
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Número de teléfono</label>
                  <div className="campo-input-cuenta">
                    <Phone size={16} className="icono-campo" />
                    <input
                      type="tel"
                      name="telefono"
                      value={perfil.telefono}
                      onChange={handlePerfilChange}
                      required
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Tipo de documento</label>
                  <div className="campo-input-cuenta">
                    <CreditCard size={16} className="icono-campo" />
                    <select
                      name="tipoDocumento"
                      value={perfil.tipoDocumento}
                      onChange={handlePerfilChange}
                    >
                      <option value="CC">Cédula de Ciudadanía (CC)</option>
                      <option value="CE">Cédula de Extranjería (CE)</option>
                      <option value="PASAPORTE">Pasaporte</option>
                      <option value="NIT">NIT Empresarial</option>
                    </select>
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Número de documento</label>
                  <div className="campo-input-cuenta">
                    <CreditCard size={16} className="icono-campo" />
                    <input
                      type="text"
                      name="numeroDocumento"
                      value={perfil.numeroDocumento}
                      onChange={handlePerfilChange}
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Ciudad</label>
                  <div className="campo-input-cuenta">
                    <MapPin size={16} className="icono-campo" />
                    <input
                      type="text"
                      name="ciudad"
                      value={perfil.ciudad}
                      onChange={handlePerfilChange}
                    />
                  </div>
                </div>

                <div className="grupo-input-cuenta">
                  <label>Dirección de residencia</label>
                  <div className="campo-input-cuenta">
                    <MapPin size={16} className="icono-campo" />
                    <input
                      type="text"
                      name="direccion"
                      value={perfil.direccion}
                      onChange={handlePerfilChange}
                    />
                  </div>
                </div>

                <div className="acciones-formulario-cuenta">
                  <button type="submit" className="boton-primario-cuenta">
                    <Save size={17} />
                    <span>Guardar cambios</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ===================================================
              PESTAÑA 2: PRUEBAS DE MANEJO
          =================================================== */}
          {tabActiva === "pruebas" && (
            <div className="seccion-panel-cuenta animada">
              <div className="encabezado-seccion-panel">
                <div>
                  <h2>Pruebas de manejo</h2>
                  <p>Gestiona tus citas reservadas para probar nuestras motocicletas.</p>
                </div>
                <Link to="/agendar-prueba" className="boton-accion-secundario">
                  <PlusCircle size={17} />
                  <span>Agendar nueva prueba</span>
                </Link>
              </div>

              {pruebasManejo.length === 0 ? (
                <div className="estado-vacio-panel">
                  <Calendar size={48} className="icono-vacio" />
                  <h3>No tienes pruebas de manejo agendadas</h3>
                  <p>Agenda una cita en nuestras sedes y vive la experiencia Vertex.</p>
                  <Link to="/agendar-prueba" className="boton-primario-cuenta">
                    Agendar mi primera prueba
                  </Link>
                </div>
              ) : (
                <div className="lista-tarjetas-pruebas">
                  {pruebasManejo.map((item) => (
                    <div key={item.id} className="tarjeta-prueba-manejo">
                      <div className="imagen-prueba-wrapper">
                        <img src={item.imagen} alt={item.modelo} />
                        <span className={`badge-estado-prueba ${item.estado.toLowerCase().replace(" ", "-")}`}>
                          {item.estado}
                        </span>
                      </div>

                      <div className="cuerpo-tarjeta-prueba">
                        <div className="cabecera-tarjeta-prueba">
                          <span className="codigo-cita">{item.id}</span>
                          <h3>{item.modelo}</h3>
                        </div>

                        <div className="detalles-grid-prueba">
                          <div className="dato-prueba">
                            <MapPin size={15} />
                            <span>{item.sede}</span>
                          </div>
                          <div className="dato-prueba">
                            <Calendar size={15} />
                            <span>{item.fecha}</span>
                          </div>
                          <div className="dato-prueba">
                            <Clock size={15} />
                            <span>{item.hora}</span>
                          </div>
                          <div className="dato-prueba">
                            <User size={15} />
                            <span>Asesor: {item.asesor}</span>
                          </div>
                        </div>

                        <div className="botones-accion-prueba">
                          <Link to="/agendar-prueba" className="btn-prueba-secundario">
                            Reprogramar
                          </Link>
                          <button
                            type="button"
                            className="btn-prueba-peligro"
                            onClick={() => {
                              if (confirm("¿Estás seguro de que deseas cancelar esta prueba?")) {
                                setPruebasManejo(pruebasManejo.filter((p) => p.id !== item.id));
                              }
                            }}
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ===================================================
              PESTAÑA 3: MIS COTIZACIONES
          =================================================== */}
          {tabActiva === "cotizaciones" && (
            <div className="seccion-panel-cuenta animada">
              <div className="encabezado-seccion-panel">
                <div>
                  <h2>Mis cotizaciones</h2>
                  <p>Revisa el historial de simulaciones de crédito y cotizaciones solicitadas.</p>
                </div>
                <Link to="/motos" className="boton-accion-secundario">
                  <PlusCircle size={17} />
                  <span>Cotizar otro modelo</span>
                </Link>
              </div>

              {cotizaciones.length === 0 ? (
                <div className="estado-vacio-panel">
                  <FileText size={48} className="icono-vacio" />
                  <h3>No tienes cotizaciones registradas</h3>
                  <p>Explora nuestro catálogo de motos y realiza simulaciones personalizadas.</p>
                  <Link to="/motos" className="boton-primario-cuenta">
                    Ver catálogo de motos
                  </Link>
                </div>
              ) : (
                <div className="lista-cotizaciones-grid">
                  {cotizaciones.map((cot) => (
                    <div key={cot.id} className="tarjeta-cotizacion-cuenta">
                      <div className="top-tarjeta-cotizacion">
                        <div>
                          <span className="codigo-cotizacion">{cot.id}</span>
                          <h3>{cot.modelo}</h3>
                        </div>
                        <span className={`badge-cotizacion ${cot.estado.toLowerCase().replace(" ", "-")}`}>
                          {cot.estado}
                        </span>
                      </div>

                      <div className="valores-cotizacion-cuerpo">
                        <div className="fila-valor-cot">
                          <span>Precio de lista:</span>
                          <strong>{cot.precioTotal}</strong>
                        </div>
                        <div className="fila-valor-cot">
                          <span>Cuota inicial:</span>
                          <strong>{cot.cuotaInicial}</strong>
                        </div>
                        <div className="fila-valor-cot">
                          <span>Plazo de financiación:</span>
                          <strong>{cot.plazo}</strong>
                        </div>
                        <div className="fila-valor-cot cuota-destacada">
                          <span>Cuota estimada:</span>
                          <strong className="texto-azul">{cot.cuotaMensual}</strong>
                        </div>
                      </div>

                      <div className="footer-tarjeta-cotizacion">
                        <span className="fecha-cotizacion">Solicitado: {cot.fecha}</span>
                        <Link to="/motos" className="enlace-contacto-asesor">
                          <span>Ver modelo</span>
                          <ExternalLink size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ===================================================
              PESTAÑA 4: MOTOS DE INTERÉS / FAVORITAS
          =================================================== */}
          {tabActiva === "favoritos" && (
            <div className="seccion-panel-cuenta animada">
              <div className="encabezado-seccion-panel">
                <div>
                  <h2>Motos de interés</h2>
                  <p>Modelos que has guardado para consultar detalles o cotizar más adelante.</p>
                </div>
                <Link to="/motos" className="boton-accion-secundario">
                  <Bike size={17} />
                  <span>Explorar catálogo</span>
                </Link>
              </div>

              {motosFavoritas.length === 0 ? (
                <div className="estado-vacio-panel">
                  <Bike size={48} className="icono-vacio" />
                  <h3>Aún no has guardado motos favoritas</h3>
                  <p>Visita la sección de motocicletas y añade los modelos que más te gusten.</p>
                  <Link to="/motos" className="boton-primario-cuenta">
                    Explorar motocicletas
                  </Link>
                </div>
              ) : (
                <div className="grid-motos-favoritas-cuenta">
                  {motosFavoritas.map((moto) => (
                    <div key={moto.id} className="tarjeta-moto-favorita">
                      <div className="foto-favorita-wrapper">
                        <img src={moto.imagen} alt={moto.nombre} />
                        <span className="categoria-tag">{moto.categoria}</span>
                      </div>

                      <div className="contenido-favorita">
                        <h3>{moto.nombre}</h3>
                        <div className="specs-rapidas">
                          <span>{moto.cilindrada}</span>
                          <span>•</span>
                          <strong className="precio-fav">{moto.precio}</strong>
                        </div>

                        <div className="botones-favorita-accion">
                          <Link to="/motos" className="btn-fav-principal">
                            Ver catálogo
                          </Link>
                          <Link to="/agendar-prueba" className="btn-fav-secundario">
                            Agendar prueba
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ===================================================
              PESTAÑA 5: SEGURIDAD Y AJUSTES
          =================================================== */}
          {tabActiva === "seguridad" && (
            <div className="seccion-panel-cuenta animada">
              <div className="encabezado-seccion-panel">
                <div>
                  <h2>Seguridad y ajustes</h2>
                  <p>Configura tu contraseña de acceso y tus canales de notificación preferidos.</p>
                </div>
              </div>

              {passMensaje && (
                <div className={`alerta-cuenta ${passMensaje.includes("¡") ? "exito" : "error"}`}>
                  {passMensaje.includes("¡") ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{passMensaje}</span>
                </div>
              )}

              <div className="bloque-seguridad-grid">
                {/* Formulario de cambio de contraseña */}
                <div className="caja-ajuste-cuenta">
                  <h3>Cambiar contraseña</h3>
                  <p className="subtexto-caja">
                    Te recomendamos usar una contraseña segura de mínimo 8 caracteres con números y letras.
                  </p>

                  <form onSubmit={handleCambiarPassword} className="form-seguridad">
                    <div className="grupo-input-cuenta">
                      <label>Contraseña actual</label>
                      <div className="campo-input-cuenta">
                        <Shield size={16} className="icono-campo" />
                        <input
                          type="password"
                          placeholder="Tu contraseña actual"
                          value={passForm.actual}
                          onChange={(e) => setPassForm({ ...passForm, actual: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grupo-input-cuenta">
                      <label>Nueva contraseña</label>
                      <div className="campo-input-cuenta">
                        <Shield size={16} className="icono-campo" />
                        <input
                          type="password"
                          placeholder="Mínimo 8 caracteres"
                          value={passForm.nueva}
                          onChange={(e) => setPassForm({ ...passForm, nueva: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grupo-input-cuenta">
                      <label>Confirmar nueva contraseña</label>
                      <div className="campo-input-cuenta">
                        <Shield size={16} className="icono-campo" />
                        <input
                          type="password"
                          placeholder="Repite la nueva contraseña"
                          value={passForm.confirmar}
                          onChange={(e) => setPassForm({ ...passForm, confirmar: e.target.value })}
                        />
                      </div>
                    </div>

                    <button type="submit" className="boton-primario-cuenta">
                      Actualizar contraseña
                    </button>
                  </form>
                </div>

                {/* Preferencias de notificaciones */}
                <div className="caja-ajuste-cuenta">
                  <h3>Notificaciones y avisos</h3>
                  <p className="subtexto-caja">
                    Elige cómo quieres recibir las novedades sobre tus pruebas y cotizaciones.
                  </p>

                  <div className="lista-switches-notificaciones">
                    <label className="switch-item-cuenta">
                      <div>
                        <strong>Confirmaciones por correo electrónico</strong>
                        <p>Recibe recordatorios de pruebas de manejo y cotizaciones.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notificaciones.email}
                        onChange={(e) => setNotificaciones({ ...notificaciones, email: e.target.checked })}
                      />
                    </label>

                    <label className="switch-item-cuenta">
                      <div>
                        <strong>Mensajes y WhatsApp</strong>
                        <p>Contacto directo de nuestros asesores comerciales.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notificaciones.whatsapp}
                        onChange={(e) => setNotificaciones({ ...notificaciones, whatsapp: e.target.checked })}
                      />
                    </label>

                    <label className="switch-item-cuenta">
                      <div>
                        <strong>Novedades y lanzamientos Vertex</strong>
                        <p>Sé el primero en conocer los nuevos modelos 2026.</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={notificaciones.novedades}
                        onChange={(e) => setNotificaciones({ ...notificaciones, novedades: e.target.checked })}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default MiCuenta;
