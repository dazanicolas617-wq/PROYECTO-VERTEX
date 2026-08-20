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
    category: "Cruiser",
    price: 18990000,
    stock: 10,
    status: "ACTIVO",
    image: Moto1
  },
  {
    id: 2,
    model: "HNTR 350",
    vin: "VX350H102B",
    category: "Roadster",
    price: 17990000,
    stock: 6,
    status: "ACTIVO",
    image: Moto2
  },
  {
    id: 3,
    model: "Classic 350",
    vin: "VX350C103C",
    category: "Clásica",
    price: 18990000,
    stock: 4,
    status: "STOCK BAJO",
    image: Moto3
  },
  {
    id: 4,
    model: "Super Meteor 650",
    vin: "VX650S104D",
    category: "Cruiser",
    price: 32990000,
    stock: 8,
    status: "ACTIVO",
    image: Moto4
  },
  {
    id: 5,
    model: "Interceptor 650",
    vin: "VX650I105E",
    category: "Roadster",
    price: 31990000,
    stock: 5,
    status: "ACTIVO",
    image: Moto5
  },
  {
    id: 6,
    model: "Shotgun 650",
    vin: "VX650G106F",
    category: "Custom",
    price: 32990000,
    stock: 3,
    status: "STOCK BAJO",
    image: Moto6
  },
  {
    id: 7,
    model: "GRR 450",
    vin: "VX450G107G",
    category: "Adventure",
    price: 23990000,
    stock: 7,
    status: "ACTIVO",
    image: Moto7
  },
  {
    id: 8,
    model: "New Himalayan 450",
    vin: "VX450H108H",
    category: "Adventure",
    price: 25990000,
    stock: 12,
    status: "ACTIVO",
    image: Moto8
  },
  {
    id: 9,
    model: "Bear 650",
    vin: "VX650B109I",
    category: "Scrambler",
    price: 29990000,
    stock: 9,
    status: "ACTIVO",
    image: Moto9
  },
  {
    id: 10,
    model: "Scram 411",
    vin: "VX411S110J",
    category: "Scrambler",
    price: 21990000,
    stock: 14,
    status: "ACTIVO",
    image: Moto10
  },
  {
    id: 11,
    model: "Himalayan 411",
    vin: "VX411H111K",
    category: "Adventure",
    price: 22990000,
    stock: 2,
    status: "STOCK BAJO",
    image: Moto11
  },
  {
    id: 12,
    model: "KTM Adventure 390",
    vin: "VX390K112L",
    category: "Adventure",
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
   AGENDA DE PRUEBAS DE MANEJO
===================================================== */
export const INITIAL_AGENDA = [
  {
    id: 1,
    time: "09:00 AM",
    rider: "Lucas Vance",
    type: "VIP",
    model: "New Himalayan 450",
    advisor: "Marcus Thorne",
    status: "CONFIRMADO",
    statusText: "CONFIRMADO"
  },
  {
    id: 2,
    time: "10:30 AM",
    rider: "Diana Prince",
    type: "REGULAR",
    model: "Super Meteor 650",
    advisor: "Elena Rostova",
    status: "EN PROCESO",
    statusText: "EN PROCESO"
  },
  {
    id: 3,
    time: "01:00 PM",
    rider: "Arthur Pendelton",
    type: "NUEVO",
    model: "Classic 350",
    advisor: "Marcus Thorne",
    status: "CANCELADO",
    statusText: "CANCELADO"
  },
  {
    id: 4,
    time: "02:30 PM",
    rider: "Gwen Stacy",
    type: "VIP",
    model: "HNTR 350",
    advisor: "Elena Rostova",
    status: "CONFIRMADO",
    statusText: "CONFIRMADO"
  },
  {
    id: 5,
    time: "04:00 PM",
    rider: "Bruce Wayne",
    type: "VIP",
    model: "Continental GT 650",
    advisor: "Marcus Thorne",
    status: "CONFIRMADO",
    statusText: "CONFIRMADO"
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
