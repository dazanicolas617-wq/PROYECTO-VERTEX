/* =====================================================
   DATOS INICIALES DE LA APLICACIÓN — VERTEX MOTORS
   Este archivo centraliza toda la información de prueba
   que se usa en el Dashboard y otros módulos:
     - Inventario de motocicletas
     - Cotizaciones de clientes
     - Agenda de pruebas de manejo
     - Noticias del blog
===================================================== */

import Moto1 from "../assets/motos/Moto1.jpg";
import Moto2 from "../assets/motos/Moto2.jpg";
import Moto3 from "../assets/motos/Moto3.jpg";
import Moto4 from "../assets/motos/Moto4.jpg";
import Moto5 from "../assets/motos/Moto5.jpg";
import Moto6 from "../assets/motos/Moto6.jpg";
import Moto7 from "../assets/motos/Moto7.jpg";
import Moto8 from "../assets/motos/Moto8.jpg";
import Moto9 from "../assets/motos/Moto9.jpg";
import Moto10 from "../assets/motos/Moto10.jpg";
import Moto11 from "../assets/motos/Moto11.jpg";
import Moto12 from "../assets/motos/Moto12.jpg";

/* =====================================================
   INVENTARIO DE MOTOCICLETAS (12 MODELOS DEL CATÁLOGO)
===================================================== */
export const INITIAL_INVENTORY = [
  {
    id: 1,
    model: "Meteor 350",
    vin: "VX350M101A",
    category: "Clásicas",
    price: 18990000,
    stock: 10,
    status: "ACTIVO",
    image: Moto1
  },
  {
    id: 2,
    model: "HNTR 350",
    vin: "VX350H102B",
    category: "Enduro",
    price: 17990000,
    stock: 6,
    status: "ACTIVO",
    image: Moto2
  },
  {
    id: 3,
    model: "Classic 350",
    vin: "VX350C103C",
    category: "Clásicas",
    price: 18990000,
    stock: 4,
    status: "STOCK BAJO",
    image: Moto3
  },
  {
    id: 4,
    model: "Super Meteor 650",
    vin: "VX650S104D",
    category: "Clásicas",
    price: 32990000,
    stock: 8,
    status: "ACTIVO",
    image: Moto4
  },
  {
    id: 5,
    model: "Interceptor 650",
    vin: "VX650I105E",
    category: "Enduro",
    price: 31990000,
    stock: 5,
    status: "ACTIVO",
    image: Moto5
  },
  {
    id: 6,
    model: "Shotgun 650",
    vin: "VX650G106F",
    category: "Enduro",
    price: 32990000,
    stock: 3,
    status: "STOCK BAJO",
    image: Moto6
  },
  {
    id: 7,
    model: "GRR 450",
    vin: "VX450G107G",
    category: "Doble Propósito",
    price: 23990000,
    stock: 7,
    status: "ACTIVO",
    image: Moto7
  },
  {
    id: 8,
    model: "New Himalayan 450",
    vin: "VX450H108H",
    category: "Doble Propósito",
    price: 25990000,
    stock: 12,
    status: "ACTIVO",
    image: Moto8
  },
  {
    id: 9,
    model: "Bear 650",
    vin: "VX650B109I",
    category: "Doble Propósito",
    price: 29990000,
    stock: 9,
    status: "ACTIVO",
    image: Moto9
  },
  {
    id: 10,
    model: "Scram 411",
    vin: "VX411S110J",
    category: "Doble Propósito",
    price: 21990000,
    stock: 14,
    status: "ACTIVO",
    image: Moto10
  },
  {
    id: 11,
    model: "Himalayan 411",
    vin: "VX411H111K",
    category: "Doble Propósito",
    price: 22990000,
    stock: 2,
    status: "STOCK BAJO",
    image: Moto11
  },
  {
    id: 12,
    model: "KTM Adventure 390",
    vin: "VX390K112L",
    category: "Doble Propósito",
    price: 26990000,
    stock: 0,
    status: "AGOTADO",
    image: Moto12
  }
];

/* =====================================================
   COTIZACIONES DE CLIENTES
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
    fecha: "19 Oct, 2023",
    estado: "VENDIDO",
    actionLabel: "VER"
  },
  {
    id: "COT-1004",
    initials: "EW",
    cliente: "Elena Woods",
    contact: "+1 (555) 012-9988",
    contactoTipo: "telefono",
    modelo: "HNTR 350",
    fecha: "18 Oct, 2023",
    estado: "PENDIENTE",
    actionLabel: "PROCESAR"
  },
  {
    id: "COT-1005",
    initials: "TK",
    cliente: "Thomas Keller",
    contact: "t.keller@email.com",
    contactoTipo: "email",
    modelo: "Scram 411",
    fecha: "15 Oct, 2023",
    estado: "SEGUIMIENTO",
    actionLabel: "SEGUIMIENTO"
  },
  {
    id: "COT-1006",
    initials: "SL",
    cliente: "Sarah Connor",
    contact: "+1 (555) 017-3344",
    contactoTipo: "telefono",
    modelo: "Interceptor 650",
    fecha: "12 Oct, 2023",
    estado: "VENDIDO",
    actionLabel: "VER"
  }
];

/* =====================================================
   MAPA DE IMÁGENES DE MOTOS Y FUNCIÓN DE RESOLUCIÓN
===================================================== */
export const MAPA_IMAGENES_MOTOS = {
  "Meteor 350": Moto1,
  "HNTR 350": Moto2,
  "Classic 350": Moto3,
  "Super Meteor 650": Moto4,
  "Interceptor 650": Moto5,
  "Shotgun 650": Moto6,
  "GRR 450": Moto7,
  "New Himalayan 450": Moto8,
  "Bear 650": Moto9,
  "Scram 411": Moto10,
  "Himalayan 411": Moto11,
  "KTM Adventure 390": Moto12
};

export const obtenerImagenMoto = (nombreModelo) => {
  if (!nombreModelo) return Moto8;
  const normalizado = nombreModelo.toLowerCase().trim();
  if (normalizado.includes("meteor 350")) return Moto1;
  if (normalizado.includes("hntr")) return Moto2;
  if (normalizado.includes("classic")) return Moto3;
  if (normalizado.includes("super meteor")) return Moto4;
  if (normalizado.includes("interceptor")) return Moto5;
  if (normalizado.includes("shotgun")) return Moto6;
  if (normalizado.includes("grr")) return Moto7;
  if (normalizado.includes("new himalayan")) return Moto8;
  if (normalizado.includes("bear")) return Moto9;
  if (normalizado.includes("scram")) return Moto10;
  if (normalizado.includes("himalayan")) return Moto11;
  if (normalizado.includes("ktm") || normalizado.includes("adventure 390")) return Moto12;
  return Moto8;
};

/* =====================================================
   AGENDA DE PRUEBAS DE MANEJO
===================================================== */
export const INITIAL_AGENDA = [
  {
    id: 1,
    hora: "09:00 AM",
    fecha: "Hoy, 24 Oct",
    periodo: "HOY",
    duracion: "45 min",
    cliente: "Lucas Vance",
    tipo: "VIP",
    modelo: "New Himalayan 450",
    asesor: "Marcus Thorne",
    estado: "CONFIRMADO",
    isUpcoming: true,
    image: Moto8
  },
  {
    id: 2,
    hora: "10:30 AM",
    fecha: "Hoy, 24 Oct",
    periodo: "HOY",
    duracion: "45 min",
    cliente: "Diana Prince",
    tipo: "REGULAR",
    modelo: "Super Meteor 650",
    asesor: "Elena Rostova",
    estado: "EN PROCESO",
    isUpcoming: false,
    image: Moto4
  },
  {
    id: 3,
    hora: "01:00 PM",
    fecha: "Hoy, 24 Oct",
    periodo: "HOY",
    duracion: "30 min",
    cliente: "Arthur Pendelton",
    tipo: "NUEVO",
    modelo: "Classic 350",
    asesor: "Marcus Thorne",
    estado: "CANCELADO",
    isUpcoming: false,
    image: Moto3
  },
  {
    id: 4,
    hora: "02:30 PM",
    fecha: "Mañana, 25 Oct",
    periodo: "SEMANA",
    duracion: "45 min",
    cliente: "Gwen Stacy",
    tipo: "VIP",
    modelo: "HNTR 350",
    asesor: "Elena Rostova",
    estado: "CONFIRMADO",
    isUpcoming: false,
    image: Moto2
  },
  {
    id: 5,
    hora: "04:00 PM",
    fecha: "Sáb, 26 Oct",
    periodo: "SEMANA",
    duracion: "45 min",
    cliente: "Bruce Wayne",
    tipo: "VIP",
    modelo: "Interceptor 650",
    asesor: "Marcus Thorne",
    estado: "CONFIRMADO",
    isUpcoming: false,
    image: Moto5
  },
  {
    id: 6,
    hora: "05:30 PM",
    fecha: "Lun, 28 Oct",
    periodo: "MES",
    duracion: "45 min",
    cliente: "Mateo Silva",
    tipo: "VIP",
    modelo: "Meteor 350",
    asesor: "Elena Rostova",
    estado: "CONFIRMADO",
    isUpcoming: false,
    image: Moto1
  },
  {
    id: 7,
    hora: "11:00 AM",
    fecha: "Mié, 30 Oct",
    periodo: "MES",
    duracion: "45 min",
    cliente: "Valeria Gómez",
    tipo: "NUEVO",
    modelo: "Scram 411",
    asesor: "Marcus Thorne",
    estado: "EN PROCESO",
    isUpcoming: false,
    image: Moto10
  },
  {
    id: 8,
    hora: "03:15 PM",
    fecha: "Jue, 31 Oct",
    periodo: "MES",
    duracion: "45 min",
    cliente: "Carlos Mendoza",
    tipo: "VIP",
    modelo: "KTM Adventure 390",
    asesor: "Elena Rostova",
    estado: "CONFIRMADO",
    isUpcoming: false,
    image: Moto12
  }
];

/* =====================================================
   NOTICIAS DEL BLOG
===================================================== */
export const INITIAL_NOTICIAS = [
  {
    id: 1,
    title: "Nueva Colección 2026: Royal Enfield Revela Modelos",
    category: "Lanzamientos",
    author: "Admin Vertex",
    date: "12 Oct, 2023",
    status: "PUBLICADO",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=300&auto=format&fit=crop&q=80",
    content: "La esperada línea 2026 llega con mejoras significativas en chasis, motor y tecnología digital..."
  },
  {
    id: 2,
    title: "Consejos Esenciales para el Mantenimiento de tu Motor",
    category: "Mantenimiento",
    author: "Taller Vertex",
    date: "08 Oct, 2023",
    status: "PUBLICADO",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=300&auto=format&fit=crop&q=80",
    content: "Mantener los fluidos al día y revisar la tensión de la cadena son pasos clave para maximizar la vida útil..."
  },
  {
    id: 3,
    title: "Ruta del Fin de Semana: Explorando los Andes en Dos Ruedas",
    category: "Comunidad",
    author: "Club Riders",
    date: "01 Oct, 2023",
    status: "BORRADOR",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=300&auto=format&fit=crop&q=80",
    content: "Un recorrido épico de más de 450 kilómetros a través de paisajes montañosos y pasos de altura..."
  }
];
