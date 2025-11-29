export interface Hotel {
  id: number;
  nombre: string;
  descripcion: string;
  descripcionEn?: string;
  rangoPrecio: string;
  numHabitaciones: number;
  accesibilidad: string;
  tiposHabitacion: string | null;
  habitacionesEspeciales: string | null;
  salonEventos: boolean;
  capacidadSalon: string | null;
  direccion: string;
  telefono: string;
  web: string;
  imagen?: string;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    nombre: "HOTEL CASA GRANDE",
    descripcion: "Mejor opción para familias o viajeros de negocio. Ubicación en pleno centro, cerca del Museo de Paleontología y el Reloj Público. Cuenta con alberca al aire libre, alberca infantil y restaurante Los Nogales.",
    descripcionEn: "Best option for families or business travelers. Downtown location, near the Paleontology Museum and Public Clock. Features outdoor pool, children's pool and Los Nogales restaurant.",
    rangoPrecio: "$1,395 - $1,575 MXN",
    numHabitaciones: 88,
    accesibilidad: "Sí (1 habitación más amplia)",
    tiposHabitacion: "28 Sencilla, 56 Doble, 2 Jr suite, 1 Suite",
    habitacionesEspeciales: "1 Suite",
    salonEventos: true,
    capacidadSalon: "10 a 250 personas (4 salones)",
    direccion: "Ave. 6a ote. 601, centro. C.P 33000",
    telefono: "639 474 04 04",
    web: "https://www.facebook.com/p/Hotel-Casa-Grande-Delicias-100063469662128/",
    imagen: "/images/hoteles/1.jpg"
  },
  {
    id: 2,
    nombre: "HOTEL AMERICAN INN",
    descripcion: "Enfocada en hacer de los viajes de negocios experiencias placenteras. Franquicia de prestigio con instalaciones de primer nivel.",
    descripcionEn: "Focused on making business travel pleasant. Prestigious franchise with first-class facilities.",
    rangoPrecio: "$1,160 - $1,213 MXN",
    numHabitaciones: 60,
    accesibilidad: "Sí (1 habitación)",
    tiposHabitacion: "35 Sencillas, 23 Dobles, 2 Junior suite, 2 Master suite",
    habitacionesEspeciales: "2 Junior Suite, 2 Master Suite",
    salonEventos: true,
    capacidadSalon: "30 personas (3 salones)",
    direccion: "Prol Ave. Rio Florido #1001 col centro sector oriente c.p. 33000",
    telefono: "639 470 80 90",
    web: "https://www.americaninn.com.mx/",
    imagen: "/images/HOTELE/americaninn.png"
  },
  {
    id: 3,
    nombre: "HOTEL LOS CEDROS",
    descripcion: "Instalaciones confortables y prácticas con diseño sobrio. Ambiente familiar, trato cálido y servicio de calidad a bajo costo.",
    descripcionEn: "Comfortable and practical facilities with sober design. Family atmosphere, warm treatment and quality service at low cost.",
    rangoPrecio: "$825 - $895 MXN",
    numHabitaciones: 59,
    accesibilidad: "No",
    tiposHabitacion: "22 Sencillas, 35 Dobles, 2 Master",
    habitacionesEspeciales: "2 Master",
    salonEventos: true,
    capacidadSalon: "70 y 120 personas",
    direccion: "Av. Samuel Guzman n° 201, col Obrera, Cd. Delicias, Chihuahua",
    telefono: "639 195 0352",
    web: "https://www.loscedroshotel.com/destinos/hotel-delicias",
    imagen: "/images/HOTELE/loscedros.png"
  },
  {
    id: 4,
    nombre: "HOTEL BAEZA",
    descripcion: "Habitaciones totalmente acondicionadas para confort y descanso. Cuenta con restaurante-bar, recepción 24h, Wifi gratuita y aparcamiento privado.",
    descripcionEn: "Fully equipped rooms for comfort and rest. Features restaurant-bar, 24h reception, free WiFi and private parking.",
    rangoPrecio: "$595 - $935 MXN",
    numHabitaciones: 42,
    accesibilidad: "En proceso (2 habitaciones)",
    tiposHabitacion: "23 Sencillas, 9 Dobles, 2 Triples, 1 Suite",
    habitacionesEspeciales: "1 Suite",
    salonEventos: false,
    capacidadSalon: null,
    direccion: "Calle 2a. Nte. 313, Norte, 33000, Delicias, Chihuahua",
    telefono: "639 472 1000",
    web: "https://www.hotelbaeza.com/",
    imagen: "/images/HOTELE/HOTELBAEZA.png"
  },
  {
    id: 5,
    nombre: "HOTEL OASIS SUITES",
    descripcion: "Magnífica elección para descansar, proximidad a restaurantes y atracciones.",
    descripcionEn: "Magnificent choice for resting, close to restaurants and attractions.",
    rangoPrecio: "$720 - $860 MXN",
    numHabitaciones: 23,
    accesibilidad: "Sí (6 habitaciones)",
    tiposHabitacion: "8 Sencillas (King), 11 Dobles, 3 Suites (Doble), 1 Triple",
    habitacionesEspeciales: "3 Suites, 1 Triple King",
    salonEventos: true,
    capacidadSalon: "30 personas",
    direccion: "2a Norte 309, Delicias 33000 México",
    telefono: "639 472 45 46",
    web: "http://oasissuites.com.mx/",
    imagen: "/images/HOTELE/HOTELOASISSUITES.png"
  },
  {
    id: 6,
    nombre: "HOTEL EL DORADO INN",
    descripcion: "Alojamiento cómodo, estancias amplias y tarifas accesibles. Wi-Fi en todas las habitaciones y atención personalizada.",
    descripcionEn: "Comfortable accommodation, spacious rooms and affordable rates. Wi-Fi in all rooms and personalized service.",
    rangoPrecio: "$550 - $1,100 MXN",
    numHabitaciones: 42,
    accesibilidad: "Sí (4 habitaciones)",
    tiposHabitacion: "35 Estándar, 1 Ejecutiva, 3 Junior Suit",
    habitacionesEspeciales: "3 Junior Suit, 1 Ejecutiva",
    salonEventos: false,
    capacidadSalon: "En proyecto",
    direccion: "Ave. 6a norte #102, Delicias",
    telefono: "639 472 12 08",
    web: "https://www.facebook.com/p/Dorado-Inn-Delicias-100046379665269/",
    imagen: "/images/HOTELE/HOTELELDORADOINNDELICIAS.png"
  },
  {
    id: 7,
    nombre: "HOTEL ONIX",
    descripcion: "Cuenta con recepción 24 horas, salón compartido, WiFi gratuita y elevador.",
    descripcionEn: "Features 24-hour reception, shared lounge, free WiFi and elevator.",
    rangoPrecio: "$750 - $1,000 MXN",
    numHabitaciones: 24,
    accesibilidad: "Sí (Elevador disponible)",
    tiposHabitacion: "3 Dobles, 2 Junior (King), 1 Familiar (King + Sofa)",
    habitacionesEspeciales: "2 Junior, 1 Familiar",
    salonEventos: true,
    capacidadSalon: "50 a 200 personas",
    direccion: "Calle 2a nte. #306",
    telefono: "639 474 21 80",
    web: "https://www.facebook.com/Hotelonixdelicias/",
    imagen: "/images/HOTELE/hotelonixsuites.png"
  },
  {
    id: 8,
    nombre: "HOTEL DOWNTOWN LUXURY",
    descripcion: "Hotel 4 estrellas, equipado que brinda servicios de hospedaje familiar.",
    descripcionEn: "4-star hotel, equipped to provide family accommodation services.",
    rangoPrecio: "$920 - $1,500 MXN",
    numHabitaciones: 41,
    accesibilidad: "No",
    tiposHabitacion: "Sencilla, Dobles, Suite",
    habitacionesEspeciales: "Suite",
    salonEventos: true,
    capacidadSalon: "50 a 200 personas (3 salones)",
    direccion: "Calle 5ta #506, Sector Norte",
    telefono: "639 268 95 30",
    web: "https://www.facebook.com/p/Downtown-Luxury-Suites-61558473443408/",
    imagen: "/images/HOTELE/HOTELDOWNTOWNLUXURY.png"
  },
  {
    id: 9,
    nombre: "HOTEL COMFORT INN",
    descripcion: "Excelente ubicación en arteria principal, cerca de opciones gastronómicas y centro comercial.",
    descripcionEn: "Excellent location on main road, close to dining options and shopping center.",
    rangoPrecio: "$1,200 - $1,500 MXN",
    numHabitaciones: 115,
    accesibilidad: "Sí (1 habitación)",
    tiposHabitacion: "55 Sencillas, 53 Dobles, 6 Suites",
    habitacionesEspeciales: "6 Suites",
    salonEventos: true,
    capacidadSalon: "30 personas",
    direccion: "Ave. Jessica Jurado #4 sector oriente c.p. 33000",
    telefono: "639 139 1200",
    web: "https://www.choicehotels.com/mexico/delicias/comfort-inn-hotels",
    imagen: "/images/HOTELE/HOTELCOMFORTINN.png"
  },
  {
    id: 10,
    nombre: "HOTEL RIO INN",
    descripcion: "Se ubica en la región centro-sur del estado, en un buen punto de la ciudad.",
    descripcionEn: "Located in the central-south region of the state, in a good point of the city.",
    rangoPrecio: "$690 - $990 MXN",
    numHabitaciones: 25,
    accesibilidad: "No",
    tiposHabitacion: null,
    habitacionesEspeciales: null,
    salonEventos: false,
    capacidadSalon: null,
    direccion: "Av. Río Florido Oriente #506",
    telefono: "639 472 02 27",
    web: "https://www.facebook.com/p/RIO-INN-100063969048437/",
    imagen: "/images/HOTELE/HOTELRIOINN.png"
  },
  {
    id: 11,
    nombre: "HOTEL KAVIA",
    descripcion: "Habitaciones remodeladas. Cuenta con alberca (consultar disponibilidad).",
    descripcionEn: "Remodeled rooms. Pool available (check availability).",
    rangoPrecio: "$950 - $1,200 MXN",
    numHabitaciones: 45,
    accesibilidad: "No",
    tiposHabitacion: "22 Estándar, 23 Ejecutivas",
    habitacionesEspeciales: "23 Ejecutivas",
    salonEventos: true,
    capacidadSalon: "30 personas",
    direccion: "AUTOPISTA Delicias-Chihuahua KM 148, Genaro Vazquez, 33130",
    telefono: "639 141 1551",
    web: "https://www.hotelkaviameoqui.com/",
    imagen: "/images/HOTELE/HOTELKAVIA.png"
  }
];
