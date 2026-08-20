import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bike,
  FileText,
  Calendar,
  Newspaper,
  Settings,
  LogOut,
  Search,
  Bell,
  Plus,
  Filter,
  Download,
  Edit2,
  Trash2,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  X,
  Check,
  Bold,
  Italic,
  Link2,
  Image as ImageIcon
} from "lucide-react";

import logo from "../assets/logo.png";

import {
  INITIAL_INVENTORY,
  INITIAL_COTIZACIONES,
  INITIAL_AGENDA,
  INITIAL_NOTICIAS
} from "../data/initialData";

import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // Control de sesión
  useEffect(() => {
    const sesionActiva = localStorage.getItem("vertex_authenticated");
    if (!sesionActiva) {
      navigate("/login");
    }
  }, [navigate]);

  // Navegación de pestañas
  const [activeTab, setActiveTab] = useState("inventario");

  // Estado con persistencia en LocalStorage
  const [inventory, setInventory] = useState(() => {
    const guardado = localStorage.getItem("vertex_inventory");
    if (guardado) {
      try {
        const parsed = JSON.parse(guardado);
        if (Array.isArray(parsed) && parsed.length >= 12 && parsed[0].price > 1000000) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_INVENTORY;
  });

  const [cotizaciones, setCotizaciones] = useState(() => {
    const guardado = localStorage.getItem("vertex_cotizaciones");
    return guardado ? JSON.parse(guardado) : INITIAL_COTIZACIONES;
  });

  const [agenda, setAgenda] = useState(() => {
    const guardado = localStorage.getItem("vertex_agenda");
    return guardado ? JSON.parse(guardado) : INITIAL_AGENDA;
  });

  const [noticias, setNoticias] = useState(() => {
    const guardado = localStorage.getItem("vertex_noticias");
    return guardado ? JSON.parse(guardado) : INITIAL_NOTICIAS;
  });

  // Filtros
  const [cotizacionFilter, setCotizacionFilter] = useState("TODAS");
  const [agendaPeriod, setAgendaPeriod] = useState("HOY");

  // Artículo Seleccionado
  const [selectedArticle, setSelectedArticle] = useState(INITIAL_NOTICIAS[0]);
  const [articleTitle, setArticleTitle] = useState(INITIAL_NOTICIAS[0].titulo);
  const [articleContent, setArticleContent] = useState(INITIAL_NOTICIAS[0].resumen);
  const [articleImage, setArticleImage] = useState(INITIAL_NOTICIAS[0].imagen);

  // Búsqueda y Paginación
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas las Categorías");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Modales
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedMoto, setSelectedMoto] = useState(null);

  // Estado Formulario
  const [formData, setFormData] = useState({
    model: "",
    vin: "",
    category: "Aventura",
    price: "",
    stock: "",
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
  });

  // Notificación Flotante Toast
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  useEffect(() => {
    localStorage.setItem("vertex_inventory", JSON.stringify(inventory));
  }, [inventory]);

  useEffect(() => {
    localStorage.setItem("vertex_cotizaciones", JSON.stringify(cotizaciones));
  }, [cotizaciones]);

  useEffect(() => {
    localStorage.setItem("vertex_agenda", JSON.stringify(agenda));
  }, [agenda]);

  useEffect(() => {
    localStorage.setItem("vertex_noticias", JSON.stringify(noticias));
  }, [noticias]);

  // Inventario Filtrado
  const filteredInventory = inventory.filter((item) => {
    const coincideBusqueda =
      item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.vin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const coincideCategoria =
      selectedCategory === "Todas las Categorías" ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    return coincideBusqueda && coincideCategoria;
  });

  // Cotizaciones Filtradas
  const filteredCotizaciones = cotizaciones.filter((cot) => {
    if (cotizacionFilter === "TODAS") return true;
    return cot.estado === cotizacionFilter;
  });

  // Paginación
  const totalPages = Math.ceil(filteredInventory.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInventory = filteredInventory.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Funciones de Inventario
  const handleOpenAddModal = () => {
    setFormData({
      model: "",
      vin: `RM${Math.floor(100 + Math.random() * 900)}X${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      category: "Aventura",
      price: "5499",
      stock: "10",
      status: "ACTIVO",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
    });
    setIsAddModalOpen(true);
  };

  const handleCreateMoto = (e) => {
    e.preventDefault();
    if (!formData.model || !formData.vin) return;

    const nuevaMoto = {
      id: Date.now(),
      model: formData.model,
      vin: formData.vin,
      category: formData.category,
      price: parseFloat(formData.price) || 0,
      stock: parseInt(formData.stock) || 0,
      status: formData.status,
      image: formData.image || "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
    };

    setInventory([nuevaMoto, ...inventory]);
    setIsAddModalOpen(false);
    showToast(`Motocicleta "${formData.model}" guardada en inventario.`);
  };

  const handleOpenEditModal = (moto) => {
    setSelectedMoto(moto);
    setFormData({
      model: moto.model,
      vin: moto.vin,
      category: moto.category,
      price: moto.price.toString(),
      stock: moto.stock.toString(),
      status: moto.status,
      image: moto.image
    });
    setIsEditModalOpen(true);
  };

  const handleUpdateMoto = (e) => {
    e.preventDefault();
    setInventory(
      inventory.map((item) =>
        item.id === selectedMoto.id
          ? {
              ...item,
              model: formData.model,
              vin: formData.vin,
              category: formData.category,
              price: parseFloat(formData.price) || 0,
              stock: parseInt(formData.stock) || 0,
              status: formData.status,
              image: formData.image
            }
          : item
      )
    );
    setIsEditModalOpen(false);
    showToast(`Motocicleta "${formData.model}" actualizada.`);
  };

  const handleOpenDeleteModal = (moto) => {
    setSelectedMoto(moto);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteMoto = () => {
    setInventory(inventory.filter((item) => item.id !== selectedMoto.id));
    setIsDeleteModalOpen(false);
    showToast(`Motocicleta "${selectedMoto.model}" eliminada.`);
  };

  const handleExportCSV = () => {
    const encabezados = ["ID", "MODELO", "VIN", "CATEGORIA", "PRECIO", "STOCK", "ESTADO"];
    const filas = filteredInventory.map((i) => [
      i.id,
      `"${i.model}"`,
      i.vin,
      i.category,
      i.price,
      i.stock,
      i.status
    ]);
    const contenidoCSV =
      "data:text/csv;charset=utf-8," +
      [encabezados.join(","), ...filas.map((e) => e.join(","))].join("\n");
    const uriCodificada = encodeURI(contenidoCSV);
    const enlace = document.createElement("a");
    enlace.setAttribute("href", uriCodificada);
    enlace.setAttribute("download", `inventario_vertex_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    showToast("Inventario exportado a CSV exitosamente.");
  };

  // Funciones de Cotizaciones
  const handleUpdateCotizacion = (id, nuevoEstado) => {
    setCotizaciones(
      cotizaciones.map((c) => (c.id === id ? { ...c, estado: nuevoEstado } : c))
    );
    showToast(`Cotización ${id} actualizada a ${nuevoEstado}.`);
  };

  // Funciones de Noticias
  const handleSelectArticle = (art) => {
    setSelectedArticle(art);
    setArticleTitle(art.titulo);
    setArticleContent(art.resumen);
    setArticleImage(art.imagen);
  };

  const handleSaveArticle = (nuevoEstado) => {
    setNoticias(
      noticias.map((n) =>
        n.id === selectedArticle.id
          ? {
              ...n,
              titulo: articleTitle,
              resumen: articleContent,
              imagen: articleImage,
              estado: nuevoEstado
            }
          : n
      )
    );
    showToast(`Artículo "${articleTitle}" guardado como ${nuevoEstado}.`);
  };

  const handleCreateNewArticle = () => {
    const nuevoArt = {
      id: Date.now(),
      fechaDisplay: new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" }).toUpperCase(),
      titulo: "Nuevo Artículo de Prueba Vertex Motors",
      resumen: "Escribe aquí la descripción o contenido de la nueva publicación del portal.",
      estado: "BORRADOR",
      imagen: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80"
    };
    setNoticias([nuevoArt, ...noticias]);
    handleSelectArticle(nuevoArt);
    showToast("Nuevo artículo borrador creado.");
  };

  return (
    <div className="contenedor-dashboard">
      {/* ================= BARRA LATERAL ================= */}
      <aside className="barra-lateral">
        <div className="barra-lateral-superior">
          <div className="marca-barra-lateral">
            <img src={logo} alt="Vertex Motors" className="imagen-logo-barra-lateral" />
          </div>

          <div className="badge-perfil-usuario">
            <div className="avatar-usuario">
              <User size={18} />
            </div>
            <div className="informacion-usuario">
              <span className="nombre-usuario">VERTEX ADMIN</span>
              <span className="rol-usuario">Admin Dashboard</span>
            </div>
          </div>

          <nav className="navegacion-barra-lateral">
            <button
              className={`item-navegacion ${activeTab === "inventario" ? "activo" : ""}`}
              onClick={() => setActiveTab("inventario")}
            >
              <Bike size={18} />
              <span>INVENTARIO</span>
            </button>

            <button
              className={`item-navegacion ${activeTab === "cotizaciones" ? "activo" : ""}`}
              onClick={() => setActiveTab("cotizaciones")}
            >
              <FileText size={18} />
              <span>COTIZACIONES</span>
            </button>

            <button
              className={`item-navegacion ${activeTab === "agenda" ? "activo" : ""}`}
              onClick={() => setActiveTab("agenda")}
            >
              <Calendar size={18} />
              <span>AGENDA</span>
            </button>

            <button
              className={`item-navegacion ${activeTab === "noticias" ? "activo" : ""}`}
              onClick={() => setActiveTab("noticias")}
            >
              <Newspaper size={18} />
              <span>NOTICIAS</span>
            </button>
          </nav>
        </div>

        <div className="barra-lateral-inferior">
          <button
            className={`item-navegacion ${activeTab === "configuracion" ? "activo" : ""}`}
            onClick={() => setActiveTab("configuracion")}
          >
            <Settings size={18} />
            <span>CONFIGURACIÓN</span>
          </button>

          <button
            className="item-navegacion"
            onClick={() => {
              localStorage.removeItem("vertex_authenticated");
              localStorage.removeItem("vertex_user_email");
              navigate("/login");
            }}
          >
            <LogOut size={18} />
            <span>CERRAR SESIÓN</span>
          </button>
        </div>
      </aside>

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      <main className="contenido-principal">
        {/* ENCABEZADO SUPERIOR */}
        <header className="encabezado-superior">
          <h1 className="titulo-encabezado">
            {activeTab === "inventario" && "Resumen de Inventario"}
            {activeTab === "cotizaciones" && "Cotizaciones y Prospectos"}
            {activeTab === "agenda" && "Calendario de Pruebas de Manejo"}
            {activeTab === "noticias" && "Editor de Contenido"}
            {activeTab === "configuracion" && "Configuración del Sistema"}
          </h1>

          <div className="acciones-encabezado">
            <div className="caja-busqueda">
              <Search className="icono-busqueda" size={16} />
              <input
                type="text"
                placeholder={
                  activeTab === "inventario"
                    ? "Buscar inventario..."
                    : activeTab === "cotizaciones"
                    ? "Buscar cotizaciones, prospectos, modelos..."
                    : activeTab === "agenda"
                    ? "Buscar horarios, clientes o motos..."
                    : "Buscar artículos..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button className="boton-icono-encabezado" title="Notificaciones" onClick={() => showToast("Notificaciones al día")}>
              <Bell size={18} />
              <span className="punto-badge-notificacion"></span>
            </button>

            <button className="boton-icono-encabezado" title="Configuración" onClick={() => setActiveTab("configuracion")}>
              <Settings size={18} />
            </button>

            <div className="boton-logo-marca-superior" title="Vertex Motors Admin" onClick={() => navigate("/")}>
              <img src={logo} alt="Vertex Motors Logo" className="imagen-logo-marca-superior" />
            </div>
          </div>
        </header>

        {/* CUERPO DE LA PÁGINA */}
        <div className="cuerpo-pagina">
          {/* ================= PESTAÑA INVENTARIO ================= */}
          {activeTab === "inventario" && (
            <>
              <div className="encabezado-seccion">
                <div className="grupo-titulo-seccion">
                  <h2>Inventario de Motocicletas</h2>
                  <p>Gestionar existencias, precios y disponibilidad.</p>
                </div>

                <button className="boton-principal" onClick={handleOpenAddModal}>
                  <Plus size={16} />
                  <span>AÑADIR MOTO</span>
                </button>
              </div>

              {/* TARJETAS DE MÉTRICAS */}
              <div className="grid-tarjetas">
                <div className="tarjeta-metrica">
                  <div className="informacion-tarjeta">
                    <span className="etiqueta-tarjeta">INVENTARIO TOTAL</span>
                    <div className="fila-valor-tarjeta">
                      <span className="valor-tarjeta">124</span>
                      <span className="badge-pildora badge-verde">↗ +12%</span>
                    </div>
                  </div>
                  <Bike size={42} className="icono-marca-agua-tarjeta" />
                </div>

                <div className="tarjeta-metrica">
                  <div className="informacion-tarjeta">
                    <span className="etiqueta-tarjeta">COTIZACIONES PENDIENTES</span>
                    <div className="fila-valor-tarjeta">
                      <span className="valor-tarjeta">38</span>
                      <span className="badge-pildora badge-rojo">↘ -2%</span>
                    </div>
                  </div>
                  <FileText size={42} className="icono-marca-agua-tarjeta" />
                </div>

                <div className="tarjeta-metrica destacada">
                  <div className="informacion-tarjeta">
                    <span className="etiqueta-tarjeta">PRUEBAS PROGRAMADAS HOY</span>
                    <div className="fila-valor-tarjeta">
                      <span className="valor-tarjeta">8</span>
                    </div>
                    <div className="subtexto-tarjeta">
                      <Clock size={14} />
                      <span>Prox. en 45m</span>
                    </div>
                  </div>
                  <Calendar size={42} className="icono-marca-agua-tarjeta" />
                </div>
              </div>

              {/* TABLA STOCK ACTUAL */}
              <div className="contenedor-tabla">
                <div className="barra-encabezado-tabla">
                  <span className="titulo-encabezado-tabla">STOCK ACTUAL</span>

                  <div className="controles-tabla">
                    <select
                      className="selector-filtro"
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                        setCurrentPage(1);
                      }}
                    >
                      <option value="Todas las Categorías">Todas las Categorías</option>
                      <option value="Aventura">Aventura</option>
                      <option value="Crucero">Crucero</option>
                      <option value="Naked">Naked</option>
                      <option value="Deportiva">Deportiva</option>
                    </select>

                    <button
                      className="boton-icono-cuadrado"
                      title="Exportar CSV"
                      onClick={handleExportCSV}
                    >
                      <Download size={16} />
                    </button>
                  </div>
                </div>

                <table className="tabla-inventario">
                  <thead>
                    <tr>
                      <th>IMG</th>
                      <th>MODELO</th>
                      <th>CATEGORÍA</th>
                      <th>PRECIO (MSRP)</th>
                      <th>STOCK</th>
                      <th>ESTADO</th>
                      <th>ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedInventory.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.model}
                            className="miniatura-imagen"
                          />
                        </td>
                        <td>
                          <div className="celda-modelo">
                            <span className="nombre-modelo">{item.model}</span>
                            <span className="vin-modelo">VIN: {item.vin}</span>
                          </div>
                        </td>
                        <td>
                          <span className="etiqueta-categoria">{item.category}</span>
                        </td>
                        <td>
                          <span className="texto-precio">
                            ${Number(item.price).toLocaleString("es-CO")} COP
                          </span>
                        </td>
                        <td>{item.stock}</td>
                        <td>
                          <span
                            className={`pildora-estado ${
                              item.status === "ACTIVO"
                                ? "activo"
                                : item.status === "STOCK BAJO"
                                ? "stock-bajo"
                                : "agotado"
                            }`}
                          >
                            <span className="punto-estado"></span>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <div className="botones-accion">
                            <button
                              className="boton-accion"
                              title="Editar"
                              onClick={() => handleOpenEditModal(item)}
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              className="boton-accion eliminar"
                              title="Eliminar"
                              onClick={() => handleOpenDeleteModal(item)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="pie-tabla">
                  <span className="informacion-pie">
                    Mostrando {filteredInventory.length === 0 ? 0 : startIndex + 1} a{" "}
                    {Math.min(startIndex + itemsPerPage, filteredInventory.length)} de {filteredInventory.length} motos
                  </span>

                  <div className="controles-paginacion">
                    <button
                      className="boton-pagina"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
                      <ChevronLeft size={16} />
                    </button>

                    {[...Array(Math.min(3, totalPages))].map((_, i) => (
                      <button
                        key={i + 1}
                        className={`boton-pagina ${currentPage === i + 1 ? "activo" : ""}`}
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </button>
                    ))}

                    {totalPages > 3 && <span style={{ color: "var(--color-texto-oscuro)", padding: "0 4px" }}>...</span>}

                    <button
                      className="boton-pagina"
                      disabled={currentPage === totalPages || totalPages === 0}
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ================= PESTAÑA COTIZACIONES ================= */}
          {activeTab === "cotizaciones" && (
            <>
              <div className="encabezado-seccion">
                <div className="grupo-titulo-seccion">
                  <h2>Cotizaciones y Prospectos</h2>
                  <p>Gestionar consultas de clientes y el proceso de ventas.</p>
                </div>
              </div>

              <div className="barra-pildoras-filtro">
                <button
                  className={`boton-pildora-filtro ${cotizacionFilter === "TODAS" ? "activo" : ""}`}
                  onClick={() => setCotizacionFilter("TODAS")}
                >
                  <span>TODAS LAS COTIZACIONES</span>
                  <span className="badge-contador-pildora">124</span>
                </button>

                <button
                  className={`boton-pildora-filtro ${cotizacionFilter === "PENDIENTE" ? "activo" : ""}`}
                  onClick={() => setCotizacionFilter("PENDIENTE")}
                >
                  <span>PENDIENTE</span>
                  <span className="badge-contador-pildora">45</span>
                </button>

                <button
                  className={`boton-pildora-filtro ${cotizacionFilter === "SEGUIMIENTO" ? "activo" : ""}`}
                  onClick={() => setCotizacionFilter("SEGUIMIENTO")}
                >
                  <span>SEGUIMIENTO</span>
                  <span className="badge-contador-pildora">62</span>
                </button>

                <button
                  className={`boton-pildora-filtro ${cotizacionFilter === "VENDIDO" ? "activo" : ""}`}
                  onClick={() => setCotizacionFilter("VENDIDO")}
                >
                  <span>VENDIDO</span>
                  <span className="badge-contador-pildora">17</span>
                </button>
              </div>

              <div className="lista-cotizaciones">
                {filteredCotizaciones.map((cot) => (
                  <div key={cot.id} className="tarjeta-cotizacion">
                    <div className="grupo-usuario-cotizacion">
                      <div className="circulo-avatar-cotizacion">{cot.initials}</div>
                      <div className="detalles-usuario-cotizacion">
                        <span className="nombre-usuario-cotizacion">{cot.cliente}</span>
                        <span className="contacto-usuario-cotizacion">{cot.contact}</span>
                      </div>
                    </div>

                    <div className="columna-informacion-cotizacion">
                      <span className="etiqueta-columna-cotizacion">MODELO DE INTERÉS</span>
                      <span className="valor-columna-cotizacion">{cot.modelo}</span>
                    </div>

                    <div className="columna-informacion-cotizacion">
                      <span className="etiqueta-columna-cotizacion">FECHA</span>
                      <span className="valor-columna-cotizacion">{cot.fecha}</span>
                    </div>

                    <div className="columna-accion-cotizacion">
                      {cot.estado === "PENDIENTE" && (
                        <button
                          className="boton-accion-principal"
                          onClick={() => handleUpdateCotizacion(cot.id, "SEGUIMIENTO")}
                        >
                          PROCESAR
                        </button>
                      )}

                      {cot.estado === "SEGUIMIENTO" && (
                        <button
                          className="boton-accion-borde"
                          onClick={() => handleUpdateCotizacion(cot.id, "VENDIDO")}
                        >
                          SEGUIMIENTO
                        </button>
                      )}

                      {cot.estado === "VENDIDO" && (
                        <div className="boton-accion-verificado">
                          <Check size={18} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <span style={{ fontSize: "0.82rem", color: "var(--color-texto-oscuro)", marginTop: "12px" }}>
                Mostrando 1-{filteredCotizaciones.length} de 124 cotizaciones
              </span>
            </>
          )}

          {/* ================= PESTAÑA AGENDA ================= */}
          {activeTab === "agenda" && (
            <>
              <div className="encabezado-seccion encabezado-controles-agenda">
                <div className="grupo-titulo-seccion">
                  <h2>Calendario de Pruebas de Manejo</h2>
                  <p>Gestionar próximas citas de clientes y asignaciones de vehículos.</p>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div className="control-segmentado">
                    <button
                      className={`boton-segmento ${agendaPeriod === "HOY" ? "activo" : ""}`}
                      onClick={() => setAgendaPeriod("HOY")}
                    >
                      HOY
                    </button>
                    <button
                      className={`boton-segmento ${agendaPeriod === "SEMANA" ? "activo" : ""}`}
                      onClick={() => setAgendaPeriod("SEMANA")}
                    >
                      SEMANA
                    </button>
                    <button
                      className={`boton-segmento ${agendaPeriod === "MES" ? "activo" : ""}`}
                      onClick={() => setAgendaPeriod("MES")}
                    >
                      MES
                    </button>
                  </div>

                  <button className="boton-secundario" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Filter size={16} />
                    <span>FILTRAR</span>
                  </button>
                </div>
              </div>

              <div className="titulo-divisor-fecha">24 DE OCTUBRE, 2026</div>

              <div className="linea-tiempo-agenda">
                {agenda.map((item, index) => (
                  <div key={item.id} className="fila-item-agenda">
                    <div className="columna-hora-agenda">
                      <span className="hora-agenda">{item.hora}</span>
                      <span className="duracion-agenda">{item.duracion}</span>
                    </div>

                    <div className="envoltorio-punto-linea-tiempo">
                      <div className={`punto-linea-tiempo ${item.isUpcoming ? "activo" : ""}`}></div>
                      {index < agenda.length - 1 && <div className="linea-linea-tiempo"></div>}
                    </div>

                    <div className="tarjeta-agenda">
                      <div className="parte-superior-tarjeta-agenda">
                        <div className="parte-izquierda-tarjeta-agenda">
                          <img src={item.image} alt={item.modelo} className="imagen-moto-agenda" />
                          <div className="informacion-moto-agenda">
                            <h4>{item.modelo}</h4>
                            <div className="linea-subtexto-agenda">
                              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                <User size={13} /> {item.cliente}
                              </span>
                              <span>·</span>
                              <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                <Briefcase size={13} /> Rep: {item.asesor}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className={`badge-estado-agenda ${item.isUpcoming ? "proximo" : ""}`}>
                          {item.isUpcoming && <span style={{ color: "#3b82f6" }}>●</span>}
                          <span>{item.estado}</span>
                        </div>
                      </div>

                      <div className="parte-inferior-tarjeta-agenda">
                        <button
                          className="boton-enlace-accion"
                          onClick={() => showToast(`Cita de ${item.cliente} reprogramada.`)}
                        >
                          REPROGRAMAR
                        </button>
                        <button
                          className="boton-enlace-accion"
                          style={{ color: "#f87171" }}
                          onClick={() => {
                            setAgenda(agenda.filter((a) => a.id !== item.id));
                            showToast(`Cita cancelada.`);
                          }}
                        >
                          CANCELAR
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= PESTAÑA NOTICIAS ================= */}
          {activeTab === "noticias" && (
            <>
              <div className="encabezado-seccion">
                <div className="grupo-titulo-seccion">
                  <h2>Editor de Contenido</h2>
                  <p>Gestiona noticias y actualizaciones para el portal principal.</p>
                </div>
              </div>

              <div className="grid-editor">
                <div className="panel-lateral-editor">
                  <div className="encabezado-panel">
                    <span className="titulo-panel">ARTÍCULOS PUBLICADOS</span>
                    <button
                      className="boton-icono-cuadrado"
                      title="Crear Artículo"
                      onClick={handleCreateNewArticle}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="lista-articulos-editor">
                    {noticias.map((art) => (
                      <div
                        key={art.id}
                        className={`item-tarjeta-articulo ${
                          selectedArticle?.id === art.id ? "seleccionado" : ""
                        }`}
                        onClick={() => handleSelectArticle(art)}
                      >
                        <span className="fecha-articulo">{art.fechaDisplay}</span>
                        <span className="texto-titulo-articulo">{art.titulo}</span>
                        <div style={{ marginTop: "4px" }}>
                          <span
                            className="etiqueta-categoria"
                            style={{
                              borderColor:
                                art.estado === "PUBLICADO"
                                  ? "rgba(16,185,129,0.3)"
                                  : "rgba(107,114,128,0.3)",
                              color: art.estado === "PUBLICADO" ? "#34d399" : "#9ca3af"
                            }}
                          >
                            {art.estado}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="formulario-principal-editor">
                  <div className="encabezado-panel">
                    <span className="titulo-panel">EDITAR ARTÍCULO</span>
                  </div>

                  <div className="grupo-formulario ancho-completo">
                    <label>Título del Artículo</label>
                    <input
                      type="text"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                    />
                  </div>

                  <div className="grupo-formulario ancho-completo">
                    <label>Imagen Destacada (URL)</label>
                    <input
                      type="text"
                      value={articleImage}
                      onChange={(e) => setArticleImage(e.target.value)}
                    />
                  </div>

                  <div className="grupo-formulario ancho-completo">
                    <label>Contenido</label>
                    <div className="caja-editor-texto">
                      <div className="barra-herramientas-editor">
                        <button className="boton-barra-herramientas" title="Negrita">
                          <Bold size={16} />
                        </button>
                        <button className="boton-barra-herramientas" title="Cursiva">
                          <Italic size={16} />
                        </button>
                        <button className="boton-barra-herramientas" title="Enlace">
                          <Link2 size={16} />
                        </button>
                        <button className="boton-barra-herramientas" title="Imagen">
                          <ImageIcon size={16} />
                        </button>
                      </div>
                      <textarea
                        className="area-texto-editor"
                        value={articleContent}
                        onChange={(e) => setArticleContent(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="acciones-modal">
                    <button
                      type="button"
                      className="boton-secundario"
                      onClick={() => handleSaveArticle("BORRADOR")}
                    >
                      Guardar Borrador
                    </button>
                    <button
                      type="button"
                      className="boton-principal"
                      onClick={() => handleSaveArticle("PUBLICADO")}
                    >
                      Publicar Artículo
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ================= PESTAÑA CONFIGURACIÓN ================= */}
          {activeTab === "configuracion" && (
            <div className="contenedor-tabla" style={{ padding: "24px" }}>
              <h3 style={{ color: "#fff", marginBottom: "16px" }}>Ajustes del Concesionario</h3>
              <div className="grid-formulario" style={{ maxWidth: "600px" }}>
                <div className="grupo-formulario ancho-completo">
                  <label>Nombre del Concesionario</label>
                  <input type="text" defaultValue="VERTEX MOTORS ADMIN" />
                </div>
                <div className="grupo-formulario">
                  <label>Moneda Principal</label>
                  <select defaultValue="USD">
                    <option value="USD">USD ($)</option>
                    <option value="COP">COP ($)</option>
                  </select>
                </div>
                <div className="grupo-formulario">
                  <label>Formato de VIN</label>
                  <input type="text" defaultValue="ISO 3779 (17 dígitos)" disabled />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* ================= MODALES ================= */}
      {isAddModalOpen && (
        <div className="superposicion-modal">
          <div className="contenido-modal">
            <div className="encabezado-modal">
              <h3>Añadir Nueva Motocicleta</h3>
              <button className="cerrar-modal" onClick={() => setIsAddModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleCreateMoto}>
              <div className="grid-formulario">
                <div className="grupo-formulario ancho-completo">
                  <label>Modelo de Motocicleta</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. New Himalayan 450"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Código VIN</label>
                  <input
                    type="text"
                    required
                    value={formData.vin}
                    onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Categoría</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Aventura">Aventura</option>
                    <option value="Crucero">Crucero</option>
                    <option value="Naked">Naked</option>
                    <option value="Deportiva">Deportiva</option>
                  </select>
                </div>
                <div className="grupo-formulario">
                  <label>Precio MSRP ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Stock Inicial</label>
                  <input
                    type="number"
                    required
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario ancho-completo">
                  <label>Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="STOCK BAJO">STOCK BAJO</option>
                    <option value="AGOTADO">AGOTADO</option>
                  </select>
                </div>
              </div>
              <div className="acciones-modal">
                <button type="button" className="boton-secundario" onClick={() => setIsAddModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="boton-principal">
                  Guardar Motocicleta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && selectedMoto && (
        <div className="superposicion-modal">
          <div className="contenido-modal">
            <div className="encabezado-modal">
              <h3>Editar Motocicleta</h3>
              <button className="cerrar-modal" onClick={() => setIsEditModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleUpdateMoto}>
              <div className="grid-formulario">
                <div className="grupo-formulario ancho-completo">
                  <label>Modelo de Motocicleta</label>
                  <input
                    type="text"
                    required
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Código VIN</label>
                  <input
                    type="text"
                    required
                    value={formData.vin}
                    onChange={(e) => setFormData({ ...formData, vin: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Categoría</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Aventura">Aventura</option>
                    <option value="Crucero">Crucero</option>
                    <option value="Naked">Naked</option>
                    <option value="Deportiva">Deportiva</option>
                  </select>
                </div>
                <div className="grupo-formulario">
                  <label>Precio MSRP ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario">
                  <label>Stock</label>
                  <input
                    type="number"
                    required
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  />
                </div>
                <div className="grupo-formulario ancho-completo">
                  <label>Estado</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  >
                    <option value="ACTIVO">ACTIVO</option>
                    <option value="STOCK BAJO">STOCK BAJO</option>
                    <option value="AGOTADO">AGOTADO</option>
                  </select>
                </div>
              </div>
              <div className="acciones-modal">
                <button type="button" className="boton-secundario" onClick={() => setIsEditModalOpen(false)}>
                  Cancelar
                </button>
                <button type="submit" className="boton-principal">
                  Actualizar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isDeleteModalOpen && selectedMoto && (
        <div className="superposicion-modal">
          <div className="contenido-modal" style={{ maxWidth: "420px" }}>
            <div className="encabezado-modal">
              <h3>Confirmar Eliminación</h3>
              <button className="cerrar-modal" onClick={() => setIsDeleteModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <p style={{ color: "var(--color-texto-atenuado)", fontSize: "0.9rem" }}>
              ¿Estás seguro de que deseas eliminar la motocicleta{" "}
              <strong style={{ color: "#fff" }}>{selectedMoto.model}</strong> (VIN: {selectedMoto.vin})?
            </p>
            <div className="acciones-modal">
              <button className="boton-secundario" onClick={() => setIsDeleteModalOpen(false)}>
                Cancelar
              </button>
              <button className="boton-peligro" onClick={handleDeleteMoto}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICACIÓN */}
      {toastMessage && (
        <div className="notificacion-flotante">
          <Check size={18} color="#34d399" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
