/* =====================================================
   DATOS INICIALES DE LA APLICACIÓN — VERTEX MOTORS
   Este archivo centraliza toda la información de prueba
   que se usa en el Dashboard y otros módulos:
     - Inventario de motocicletas
     - Cotizaciones de clientes
     - Agenda de pruebas de manejo
     - Noticias del blog
===================================================== */


/* =====================================================
   INVENTARIO DE MOTOCICLETAS
   Cada objeto representa una moto en stock con:
   - id          : Identificador único
   - model       : Nombre del modelo
   - vin         : Número de identificación vehicular
   - category    : Categoría (Aventura, Crucero, Naked, Deportiva)
   - price       : Precio en dólares
   - stock       : Unidades disponibles en bodega
   - status      : Estado ("ACTIVO", "STOCK BAJO", "AGOTADO")
   - image       : URL de la imagen de referencia
===================================================== */

export const INITIAL_INVENTORY = [
  {
    id: 1,
    model: "New Himalayan 450",
    vin: "RM450X24981A",
    category: "Aventura",
    price: 5499.00,
    stock: 12,
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    model: "Classic 350",
    vin: "RC350B11234Z",
    category: "Crucero",
    price: 4699.00,
    stock: 4,
    status: "STOCK BAJO",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    model: "HNTR 350",
    vin: "RH350UB8452Q",
    category: "Naked",
    price: 4299.00,
    stock: 0,
    status: "AGOTADO",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    model: "Super Meteor 650",
    vin: "SM650P33219K",
    category: "Crucero",
    price: 7299.00,
    stock: 8,
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    model: "Scram 411",
    vin: "SC411X99281M",
    category: "Aventura",
    price: 5099.00,
    stock: 15,
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    model: "Interceptor 650",
    vin: "IN650B88231L",
    category: "Crucero",
    price: 6149.00,
    stock: 3,
    status: "STOCK BAJO",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    model: "Continental GT 650",
    vin: "CG650K77109P",
    category: "Deportiva",
    price: 6349.00,
    stock: 7,
    status: "ACTIVO",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    model: "Bullet 350",
    vin: "BL350M55432Q",
    category: "Crucero",
    price: 4499.00,
    stock: 0,
    status: "AGOTADO",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=150&auto=format&fit=crop&q=80"
  }
];


/* =====================================================
   COTIZACIONES DE CLIENTES
   Cada objeto representa una solicitud de cotización con:
   - id           : Código único de la cotización (COT-XXXX)
   - initials     : Iniciales del cliente para el avatar
   - cliente      : Nombre completo del cliente
   - contact      : Correo o teléfono de contacto
   - contactoTipo : "email" o "telefono"
   - modelo       : Modelo de moto cotizado
   - fecha        : Fecha de la solicitud
   - estado       : "PENDIENTE", "SEGUIMIENTO" o "VENDIDO"
   - actionLabel  : Texto del botón de acción en el dashboard
===================================================== */

export const INITIAL_COTIZACIONES = [
  {
    id: "COT-1001",
    initials: "MJ",
    cliente: "Michael Johnson",
    contact: "m.johnson@email.com",
    contactoTipo: "email",
    modelo: "New Himalayan 450",
    fecha: "24 Oct, 2023",
    estado: "PENDIENTE",
    actionLabel: "PROCESAR"
  },
  {
    id: "COT-1002",
    initials: "AR",
    cliente: "Amanda Ripley",
    contact: "+1 (555) 019-2834",
    contactoTipo: "telefono",
    modelo: "Super Meteor 650",
    fecha: "22 Oct, 2023",
    estado: "SEGUIMIENTO",
    actionLabel: "SEGUIMIENTO"
  },
  {
    id: "COT-1003",
    initials: "DB",
    cliente: "David Bowman",
    contact: "d.bowman@email.com",
    contactoTipo: "email",
    modelo: "Classic 350",
    fecha: "18 Oct, 2023",
    estado: "VENDIDO",
    actionLabel: "COMPLETADO"
  },
  {
    id: "COT-1004",
    initials: "CR",
    cliente: "Carlos Ramírez",
    contact: "carlos.ramirez@email.com",
    contactoTipo: "email",
    modelo: "Interceptor 650",
    fecha: "15 Oct, 2023",
    estado: "PENDIENTE",
    actionLabel: "PROCESAR"
  },
  {
    id: "COT-1005",
    initials: "LG",
    cliente: "Laura Gómez",
    contact: "+57 310 888 4433",
    contactoTipo: "telefono",
    modelo: "HNTR 350",
    fecha: "14 Oct, 2023",
    estado: "SEGUIMIENTO",
    actionLabel: "SEGUIMIENTO"
  }
];


/* =====================================================
   AGENDA DE PRUEBAS DE MANEJO
   Cada objeto representa una cita programada con:
   - id         : Identificador de la cita
   - hora       : Hora de inicio de la prueba
   - duracion   : Duración estimada en minutos
   - modelo     : Modelo de moto a probar
   - cliente    : Nombre del cliente
   - asesor     : Asesor asignado a la prueba
   - estado     : Estado de la cita
   - isUpcoming : true si la cita es la más próxima del día
   - fecha      : Fecha completa en texto
   - periodo    : Agrupación temporal ("HOY", "MAÑANA", etc.)
   - image      : URL imagen de la moto
===================================================== */

export const INITIAL_AGENDA = [
  {
    id: 1,
    hora: "09:00 AM",
    duracion: "45 MIN",
    modelo: "New Himalayan 450",
    cliente: "Carlos Mendoza",
    asesor: "Elena Silva",
    estado: "PRÓXIMAMENTE",
    isUpcoming: true,                    // Esta cita es la próxima del día
    fecha: "24 DE OCTUBRE, 2026",
    periodo: "HOY",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    hora: "11:30 AM",
    duracion: "60 MIN",
    modelo: "Super Meteor 650",
    cliente: "Andrea Torres",
    asesor: "Marcos Vega",
    estado: "PENDIENTE DE CONFIRMACIÓN",
    isUpcoming: false,
    fecha: "24 DE OCTUBRE, 2026",
    periodo: "HOY",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    hora: "02:15 PM",
    duracion: "30 MIN",
    modelo: "HNTR 350",
    cliente: "Roberto Gómez",
    asesor: "Elena Silva",
    estado: "CONFIRMADO",
    isUpcoming: false,
    fecha: "24 DE OCTUBRE, 2026",
    periodo: "HOY",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=150&auto=format&fit=crop&q=80"
  }
];


/* =====================================================
   NOTICIAS / BLOG
   Cada objeto representa una noticia con:
   - id           : Identificador de la noticia
   - fechaDisplay : Fecha legible para mostrar en la UI
   - titulo       : Título de la noticia
   - resumen      : Descripción corta del contenido
   - estado       : "PUBLICADO" o "BORRADOR"
   - imagen       : URL de la imagen de portada
===================================================== */

export const INITIAL_NOTICIAS = [
  {
    id: 1,
    fechaDisplay: "15 MAR, 2026",
    titulo: "Nueva Himalayan 450: La Máquina de Aventura Definitiva Llegó",
    resumen: "Vertex Motors se complace en presentar la totalmente nueva Himalayan 450, diseñada para dominar cualquier terreno con su motor Sherpa de 452cc e inyección electrónica.",
    estado: "PUBLICADO",
    imagen: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    fechaDisplay: "10 MAR, 2026",
    titulo: "Vertex Motors Expande su Red de Concesionarios en Latinoamérica",
    resumen: "Con la apertura de 3 nuevas salas de ventas, reafirmamos nuestro compromiso de brindar la mejor experiencia y servicio posventa a todos los apasionados del motociclismo.",
    estado: "PUBLICADO",
    imagen: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    fechaDisplay: "02 MAR, 2026",
    titulo: "Plataforma Eléctrica de Próxima Generación: El Futuro de Vertex",
    resumen: "Avance exclusivo sobre la nueva arquitectura modular eléctrica que transformará la movilidad urbana manteniendo la esencia clásica de nuestros modelos.",
    estado: "BORRADOR",              // Esta noticia aún no está publicada
    imagen: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format&fit=crop&q=80"
  }
];
