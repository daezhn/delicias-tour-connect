/**
 * Base de conocimiento COMPLETA para el Asistente IDEA
 * Última actualización: Noviembre 2025
 * 
 * Este archivo contiene TODA la información del sitio web para que el chatbot
 * pueda responder cualquier pregunta sobre Delicias.
 */

export const knowledgeBase = {
  // ============================================
  // INFORMACIÓN GENERAL DE DELICIAS
  // ============================================
  general: {
    nombre: "Delicias",
    estado: "Chihuahua",
    pais: "México",
    apodo: "La Perla del Conchos",
    fundacion: "1933",
    descripcion: "Ciudad conocida por su producción agrícola, especialmente algodón, nuez y chile. Es la tercera ciudad más grande de Chihuahua.",
    gentilicio: "Deliciense",
    ubicacion: "Norte de México, a 81 km de la capital Chihuahua",
    productos: ["Algodón", "Nuez", "Chile", "Manzana"],
  },

  // ============================================
  // CLIMA POR TEMPORADA
  // ============================================
  clima: {
    tipo: "Semidesértico",
    mejorEpoca: "Primavera (marzo-mayo) y otoño (septiembre-noviembre)",
    primavera: {
      meses: "Marzo - Mayo",
      temperaturas: "18° - 30°C",
      descripcion: "Campos de nogales en flor y brisas templadas. Ideal para ciclismo y terrazas al atardecer.",
      actividades: ["Visitar huertos en Saucillo", "Picnic en Presa Las Vírgenes", "Mercados artesanales"]
    },
    verano: {
      meses: "Junio - Agosto", 
      temperaturas: "24° - 38°C",
      descripcion: "Días soleados para rutas acuáticas y escapadas nocturnas con aire fresco del valle.",
      actividades: ["Kayak al amanecer", "Cenas tardías en terrazas", "Roadtrips nocturnos"]
    },
    otono: {
      meses: "Septiembre - Noviembre",
      temperaturas: "14° - 28°C",
      descripcion: "Cosecha de nuez y clima fresco para festivales culinarios y recorridos históricos.",
      actividades: ["Tour de nueces", "Festival gastronómico", "Rutas del centro"]
    },
    invierno: {
      meses: "Diciembre - Febrero",
      temperaturas: "6° - 22°C",
      descripcion: "Mañanas frías y tardes soleadas. Empaca capas ligeras para roadtrips y observación estelar.",
      actividades: ["Ruta del café local", "Miradores nocturnos", "Museos y galerías"]
    },
    queLlevar: [
      "Capas inteligentes: playeras transpirables + chamarra ligera",
      "Protección solar: bloqueador SPF 50, sombrero y lentes",
      "Botella de agua reutilizable",
      "Power bank y mapas offline para roadtrips"
    ]
  },

  // ============================================
  // ATRACTIVOS TURÍSTICOS COMPLETOS
  // ============================================
  atractivos: [
    {
      nombre: "Plaza Benito Juárez",
      categoria: "Plaza",
      ubicacion: "Zona Centro",
      descripcion: "Corazón histórico de la ciudad con jardines, monumentos y eventos cívicos. Punto de encuentro principal.",
      destacados: ["Eventos cívicos", "Murales", "Food trucks", "Fotografías emblemáticas"],
    },
    {
      nombre: "Torre del Reloj",
      categoria: "Monumento",
      ubicacion: "Centro histórico",
      descripcion: "Monumento emblemático de Delicias, punto de referencia para murales, cafés de autor y recorridos.",
      destacados: ["Fotografía", "Murales cercanos", "Cafés de autor"],
    },
    {
      nombre: "Parque Ciudad Infantil",
      categoria: "Parque",
      ubicacion: "Av. 2a Sur y Calle 11",
      descripcion: "Espacio interactivo para niños con áreas temáticas, juegos y talleres.",
      destacados: ["Juegos infantiles", "Talleres guiados", "Área familiar"],
    },
    {
      nombre: "Parque El Colibrí",
      categoria: "Parque",
      ubicacion: "Col. del Empleado",
      descripcion: "Zona de descanso con fuentes, vegetación y espacios de convivencia.",
      destacados: ["Áreas verdes", "Ambiente relajante", "Fuentes"],
    },
    {
      nombre: "Parque Fundadores",
      categoria: "Parque",
      ubicacion: "Av. 1a Oriente",
      descripcion: "Parque con esculturas y murales que narran la historia de Delicias. Tiene kiosco musical, lago con lanchitas y área de fogatas.",
      destacados: ["Esculturas históricas", "Kiosco musical", "Lago con lanchitas", "Áreas de picnic", "Fogatas urbanas"],
    },
    {
      nombre: "Parque Vida",
      categoria: "Parque",
      ubicacion: "Col. Las Palmas",
      descripcion: "El parque más nuevo de Delicias. Construido por FECHAC y el municipio como punto seguro de convivencia. Tiene skate loop, pump track, canchas deportivas y es pet friendly.",
      destacados: ["Skate loop y pump track", "Huerto comunitario", "Zona pet friendly", "Canchas de fútbol sintético", "Básquet techado", "Gimnasio al aire libre", "Food trucks"],
      horario: "Tardes deportivas: Martes y Jueves 18:00 h",
    },
    {
      nombre: "MUDECH (Museo del Desierto Chihuahuense)",
      categoria: "Museo",
      ubicacion: "Carretera Delicias-Chihuahua Km 5",
      horario: "Martes a domingo, 10:00-18:00",
      descripcion: "Exhibiciones sobre biodiversidad, geología e historia natural del desierto. Tiene salas inmersivas, residencias de escultura contemporánea y terrazas con vista.",
      destacados: ["Recorridos guiados", "Actividades interactivas", "Laboratorios", "Terrazas con vista algodonera"],
    },
    {
      nombre: "Museo de Paleontología",
      categoria: "Museo",
      ubicacion: "Centro Cultural Delicias",
      descripcion: "Colección de fósiles del pasado prehistórico de Chihuahua. Tiene laboratorios de fósiles, actividad de mini paleontólogos los sábados a las 12:00.",
      destacados: ["Fósiles originales", "Laboratorio de fósiles", "Actividades escolares", "Sesiones de limpieza de fósiles"],
    },
    {
      nombre: "Museo de Sitio",
      categoria: "Museo",
      ubicacion: "Zona Centro",
      descripcion: "Piezas arqueológicas y orígenes agrícolas de la región.",
      destacados: ["Piezas arqueológicas", "Visitas guiadas", "Historia agrícola"],
    },
    {
      nombre: "Museo de los Derechos Humanos",
      categoria: "Museo",
      ubicacion: "Col. Revolución",
      descripcion: "Cultura de paz y derechos humanos con exposiciones educativas.",
      destacados: ["Exposiciones temáticas", "Programas educativos"],
    },
    {
      nombre: "Teatro de la Ciudad",
      categoria: "Teatro",
      ubicacion: "Calle Quinta Norte #205",
      descripcion: "Recinto cultural con obras de teatro, conciertos y actividades artísticas. Arquitectura moderna.",
      destacados: ["Cartelera cultural", "Obras de teatro", "Conciertos", "Arquitectura moderna"],
    },
    {
      nombre: "Trolebús El Encanto",
      categoria: "Tour guiado",
      ubicacion: "Salida desde Plaza Benito Juárez",
      horario: "Viernes a domingo, horarios vespertinos",
      descripcion: "Recorrido narrado por los principales puntos de interés histórico y cultural de Delicias.",
      destacados: ["Recorridos temáticos", "Guías especializados", "Historia de la ciudad"],
    },
    {
      nombre: "Presa Las Vírgenes",
      categoria: "Naturaleza",
      descripcion: "Miradores con mesas de picnic, senderos interpretativos, kayak, SUP, pesca responsable. Ideal para atardeceres y fotografía.",
      destacados: ["Miradores", "Kayak", "SUP", "Senderos", "Picnic al atardecer", "Sesiones fotográficas"],
    },
    {
      nombre: "La Rosetilla",
      categoria: "Agroturismo",
      ubicacion: "12 km al norte de Delicias",
      descripcion: "Zona frutícola reconocida por producción de manzana y tradiciones ganaderas.",
      destacados: ["Productos locales", "Rutas agroturísticas", "Manzanas"],
    },
    {
      nombre: "Gran Estadio Delicias",
      categoria: "Deportes",
      ubicacion: "Calzada del Charro y 8a Oriente",
      descripcion: "Casa de los Algodoneros. Béisbol local con partidos, torneos y museo del equipo. Tours guiados disponibles.",
      destacados: ["Temporada estatal", "Ambiente familiar", "Tours guiados", "Museo del equipo"],
    },
    {
      nombre: "Polideportivo Bicentenario",
      categoria: "Deportes",
      descripcion: "Centro deportivo con múltiples instalaciones y actividades familiares.",
      destacados: ["Múltiples disciplinas", "Actividades familiares"],
    },
    {
      nombre: "Ciclopista",
      categoria: "Deportes",
      descripcion: "Ruta para ciclismo entre huertas y drenes con categorías recreativas y competitivas.",
      destacados: ["Ciclismo", "Ruta escénica", "Carreras"],
    },
  ],

  // ============================================
  // TOURS DISPONIBLES
  // ============================================
  tours: [
    {
      nombre: "Ruta Histórica del Centro",
      duracion: "3 horas",
      precio: "$320 MXN",
      categoria: "histórico",
      descripcion: "Conoce los edificios emblemáticos, la Torre del Reloj y museos con guía local.",
      incluye: ["Guía certificado", "Entrada a museos", "Bebida local"],
      itinerario: ["Encuentro en Plaza Principal", "Torre del Reloj", "Museo del Desierto", "Café tradicional en el mercado"],
    },
    {
      nombre: "Sabores de Delicias",
      duracion: "4 horas",
      precio: "$450 MXN",
      categoria: "gastronómico",
      descripcion: "Recorrido por restaurantes y productores locales con degustaciones exclusivas.",
      incluye: ["Transporte local", "Degustaciones", "Recetario digital"],
      itinerario: ["Mercado Municipal", "Productores de queso y nuez", "Restaurante emblemático", "Maridaje de postres"],
    },
    {
      nombre: "Aventura Natural",
      duracion: "6 horas",
      precio: "$520 MXN",
      categoria: "natural",
      descripcion: "Explora la Presa Las Vírgenes y paisajes del desierto con actividades al aire libre.",
      incluye: ["Transporte", "Guía", "Snack saludable"],
      itinerario: ["Traslado a la presa Las Vírgenes", "Mirador y sesión fotográfica", "Sendero interpretativo", "Picnic al atardecer"],
    },
  ],

  // ============================================
  // TRANSPORTE - CÓMO LLEGAR
  // ============================================
  transporte: {
    comoLlegar: [
      {
        modo: "Avión",
        descripcion: "Desde el Aeropuerto Internacional de Chihuahua (CUU) llegas a Delicias en 65 minutos por la Carretera 45.",
        detalles: "Vuelos diarios desde distintas ciudades nacionales e internacionales."
      },
      {
        modo: "Autobús",
        descripcion: "La Central Camionera de Delicias recibe corridas cada hora desde Chihuahua capital, Parral y Ciudad Juárez.",
        detalles: "Tarifa promedio $280 MXN. Líneas: Ómnibus de México, Transportes Chihuahuenses.",
        servicios: "Wi-Fi, asientos reclinables, boletaje en línea"
      },
      {
        modo: "Auto propio",
        descripcion: "Conecta por la Carretera Federal 45. Gasolineras con cafetería en el camino.",
        detalles: "Zona urbana bien señalizada."
      }
    ],
    rutas: [
      { origen: "Chihuahua", distancia: "81 km", tiempo: "1h 10 min", tip: "Salir antes de las 8am para evitar tráfico" },
      { origen: "Parral", distancia: "198 km", tiempo: "2h 40 min", tip: "Clima fresco al amanecer, lleva chamarra" },
      { origen: "Ciudad Juárez", distancia: "293 km", tiempo: "3h 50 min", tip: "Autopista de cuota con servicios. Descansa en Villa Ahumada." }
    ],
    movilidadLocal: [
      { tipo: "Uber", descripcion: "Opera en Delicias desde 2025. Puntos preferentes: Central Camionera y Plaza Carranza." },
      { tipo: "Radio Taxis", descripcion: "Taxis locales con servicio por teléfono." },
      { tipo: "Caminar", descripcion: "El centro es muy caminable, la mayoría de atractivos están cerca." }
    ]
  },

  // ============================================
  // HOSPEDAJE
  // ============================================
  hospedaje: {
    tipos: [
      {
        tipo: "Hoteles boutique",
        zona: "Centro histórico",
        descripcion: "Casas restauradas cerca de Plaza Carranza con rooftop y coctelería de autor.",
        servicios: ["Desayuno local", "Check-in 24/7", "Rooftop"]
      },
      {
        tipo: "Escapadas con alberca",
        zona: "Zona norte",
        descripcion: "Complejos con jardines, asadores y habitaciones familiares hasta para 6 huéspedes.",
        servicios: ["Kids friendly", "Spa vespertino", "Alberca"]
      },
      {
        tipo: "Estancias creativas",
        zona: "Valle agrícola",
        descripcion: "Casas de adobe y lofts entre nogaleras para retiros creativos y sesiones culinarias.",
        servicios: ["Huerto propio", "Ambiente tranquilo"]
      }
    ],
    amenidades: [
      "Habitaciones amplias (38 m² promedio)",
      "Wi-Fi de fibra óptica",
      "Café de la región con métodos artesanales",
      "Concierge local para reservar experiencias",
      "Jacuzzis, temazcales y albercas climatizadas",
      "Terrazas con vista al Valle de Conchos"
    ]
  },

  // ============================================
  // GASTRONOMÍA - QUÉ COMER
  // ============================================
  gastronomia: {
    platillosTipicos: [
      "Carne asada estilo norteño",
      "Burritos de machaca",
      "Queso menonita",
      "Chile colorado",
      "Gorditas de harina",
      "Caldo de res",
      "Tostadas",
      "Lechón al horno"
    ],
    productos: ["Nuez de la región", "Queso de rancho", "Chile seco", "Manzana de La Rosetilla"],
    experiencias: [
      {
        nombre: "Mercado Juárez",
        descripcion: "Chiles secos y panadería tradicional desde las 7 am. Pide jugo de betabel y zanahoria.",
      },
      {
        nombre: "Elotes nocturnos",
        descripcion: "Carritos con esquites y salsas de la casa. Abren a las 7 pm. Combina con chiltepín y nuez garapiñada.",
      },
      {
        nombre: "Cafés de autor",
        descripcion: "Cold brew de nuez, pan de masa madre y playlists lo-fi. Pregunta por la degustación de cafetos chihuahuenses.",
      },
      {
        nombre: "Asadores y parrillas",
        descripcion: "Cortes norteños, vegetales a la brasa y mixología ahumada.",
      },
      {
        nombre: "Food trucks",
        descripcion: "Hot dogs estilo Delicias, tacos, churros. En el centro y Plaza Benito Juárez por las noches.",
      }
    ],
    menuDegustacion: [
      { curso: "Entrada", platillo: "Tostadas", lugar: "Casa Nuez" },
      { curso: "Plato fuerte", platillo: "Lechón", lugar: "Cuarto de Humo" },
      { curso: "Postre", platillo: "Cheesecake de nuez", lugar: "Atelier Dulce" }
    ]
  },

  // ============================================
  // VIDA NOCTURNA
  // ============================================
  vidaNocturna: {
    descripcion: "Terrazas cálidas, cantinas reinventadas y antros con DJs. La noche de Delicias vibra en neón.",
    lugares: [
      {
        tipo: "Bares de autor",
        descripcion: "Barras íntimas con mixología creativa de sotol y playlists cuidadas.",
        ejemplos: ["La Última Bar", "Cervecería 19"]
      },
      {
        tipo: "Antros",
        descripcion: "Salas con mapping, line ups de electrónica y reggaetón, barras hasta la madrugada.",
        ejemplos: ["Las Delicias"]
      },
      {
        tipo: "Food trucks nocturnos",
        descripcion: "Tacos, burritos y antojitos frente a las plazas principales después del club.",
      }
    ],
    timeline: [
      { hora: "19:00", actividad: "Golden hour en Plaza Benito Juárez - música a cielo abierto" },
      { hora: "22:00", actividad: "Club hopping - DJs, pantallas y coctelería" },
      { hora: "03:00", actividad: "Food trucks nocturnos - tacos y burritos para cerrar" }
    ],
    tips: [
      "Dress code: smart casual, suma accesorios metálicos",
      "Usa Uber o apps locales para moverte seguro",
      "Algunos speakeasies piden contraseña por Instagram"
    ]
  },

  // ============================================
  // ACTIVIDADES FAMILIARES
  // ============================================
  familia: {
    descripcion: "Parques nuevos, museos interactivos y plazas. Delicias abraza a niños y mascotas.",
    lugares: [
      "Parque Vida - skate, canchas, pet friendly",
      "Parque Fundadores - kiosco, lago con lanchitas",
      "Parque Ciudad Infantil - juegos y talleres",
      "MUDECH - exhibiciones interactivas",
      "Museo de Paleontología - mini paleontólogos"
    ],
    actividadesSemanales: [
      { actividad: "Tardes deportivas Parque Vida", horario: "Martes y Jueves 18:00 h", descripcion: "Fútbol rápido y básquet con instructores juveniles" },
      { actividad: "Mini paleontólogos", horario: "Sábado 12:00 h", descripcion: "Limpieza de fósiles y narrativa del desierto" },
      { actividad: "Comida al aire libre", horario: "Domingo 20:00 h", descripcion: "Food trucks en Plaza Benito Juárez" }
    ],
    planDia: [
      { hora: "09:00", actividad: "Desayuno", lugar: "Café frente al reloj y fotos en Plaza Benito Juárez" },
      { hora: "12:00", actividad: "Parque Fundadores", lugar: "Caminata, áreas verdes y juegos infantiles" },
      { hora: "16:00", actividad: "Museos", lugar: "MUDECH + Museo de Paleontología" },
      { hora: "19:30", actividad: "Parque Vida", lugar: "Skate loop, canchas y food trucks" }
    ]
  },

  // ============================================
  // DEPORTES
  // ============================================
  deportes: {
    lugares: [
      { nombre: "Gran Estadio Delicias", descripcion: "Casa de los Algodoneros, tours guiados, museo del equipo" },
      { nombre: "Polideportivo Bicentenario", descripcion: "Centro deportivo multidisciplinario" },
      { nombre: "Parque Vida", descripcion: "Fútbol sintético, básquet techado, skate y gimnasio al aire libre" },
      { nombre: "Presa Las Vírgenes", descripcion: "Kayak, SUP, pesca responsable y miradores" },
      { nombre: "Ciclopista", descripcion: "Ruta entre huertas y drenes" }
    ],
    eventos: [
      { nombre: "Carrera San Silvestre Delicias", fecha: "31 de diciembre 16:00 h", descripcion: "Tradición de fin de año con ruta céntrica y medalla coleccionable" },
      { nombre: "Ciclismo dominical", descripcion: "Rutas matutinas entre huertas con categorías recreativas y competitivas" },
      { nombre: "Sesiones Parque Vida", descripcion: "Cancha sintética, básquet y funcional gratuito en Las Palmas" }
    ]
  },

  // ============================================
  // ARTE Y CULTURA
  // ============================================
  arteCultura: {
    descripcion: "MUDECH conserva historias fósiles y residencias de escultura contemporánea. Plaza Benito Juárez funciona como escenario vivo.",
    lugares: [
      "MUDECH - arte contemporáneo y fósiles",
      "Museo de Paleontología - ciencia y prehistoria", 
      "Teatro de la Ciudad - obras y conciertos",
      "Plaza Benito Juárez - murales y eventos",
      "Torre del Reloj - fotografía y murales"
    ],
    rutas: [
      "Centro creativo: murales, concept stores y cafés de autor alrededor del reloj",
      "Ruta del Vino: vinícolas locales, catas de vinos premiados (Vinos Santa Clara)"
    ]
  },

  // ============================================
  // PLANES SUGERIDOS
  // ============================================
  planesSugeridos: {
    diaCompleto: [
      { hora: "09:00", bloque: "Murales + desayuno", detalle: "Caminata frente al reloj y recorrido por Plaza Benito Juárez" },
      { hora: "12:30", bloque: "Museos y ciencia", detalle: "MUDECH y Museo de Paleontología, reserva guía para laboratorios" },
      { hora: "17:00", bloque: "Presa Las Vírgenes", detalle: "Caminata ligera, kayak o sesión fotográfica en el mirador" },
      { hora: "21:00", bloque: "Noches del centro", detalle: "Mixología local, música en vivo y food trucks" }
    ],
    experiencias: [
      { nombre: "Desierto & Presa", descripcion: "Miradores en Presa Las Vírgenes, senderos interpretativos y picnic al atardecer" },
      { nombre: "Centro creativo", descripcion: "Murales, concept stores y cafés de autor alrededor del reloj" },
      { nombre: "Museos táctiles", descripcion: "MUDECH y Museo de Paleontología con laboratorios de fósiles" },
      { nombre: "Ruta del Vino", descripcion: "Visita vinícolas locales y catas de vinos premiados" }
    ]
  },

  // ============================================
  // SECCIONES DEL SITIO WEB
  // ============================================
  seccionesSitio: {
    inicio: { ruta: "/", descripcion: "Página principal" },
    atractivos: { ruta: "/Atractivos", descripcion: "Todos los lugares turísticos" },
    tours: { ruta: "/tours", descripcion: "Explorar y reservar tours" },
    hospedaje: { ruta: "/hospedaje", descripcion: "Hoteles y alojamiento" },
    transporte: { ruta: "/transporte", descripcion: "Cómo llegar y moverse" },
    clima: { ruta: "/clima-tips", descripcion: "Clima y consejos de viaje" },
    queHacer: { ruta: "/experiencias/que-hacer", descripcion: "Actividades y aventuras" },
    queComer: { ruta: "/experiencias/que-comer", descripcion: "Gastronomía local" },
    vidaNocturna: { ruta: "/experiencias/vida-nocturna", descripcion: "Bares, antros y nightlife" },
    arteCultura: { ruta: "/experiencias/arte-cultura", descripcion: "Museos y cultura" },
    familia: { ruta: "/experiencias/familia", descripcion: "Actividades familiares" },
    deportes: { ruta: "/experiencias/deportes", descripcion: "Deportes y recreación" },
    personasDestacadas: { ruta: "/personas-destacadas", descripcion: "Ciudadanos destacados" },
  },

  // ============================================
  // DATOS CURIOSOS
  // ============================================
  datosCuriosos: [
    "Delicias es conocida como 'La Perla del Conchos' por estar junto al río Conchos.",
    "La ciudad fue fundada en 1933.",
    "Es uno de los principales productores de algodón y nuez en México.",
    "El equipo de béisbol local se llama 'Los Algodoneros'.",
    "El clima semidesértico permite la producción de chile de excelente calidad.",
    "El Parque Vida es el más nuevo de la ciudad, construido por FECHAC y el municipio.",
  ],
};

/**
 * Genera el contexto de conocimiento como string para el prompt del chatbot
 */
export function generateKnowledgeContext(): string {
  const kb = knowledgeBase;
  
  let context = `## INFORMACIÓN DE DELICIAS:\n`;
  context += `${kb.general.descripcion} Ubicación: ${kb.general.ubicacion}. Apodo: "${kb.general.apodo}". Fundada en ${kb.general.fundacion}.\n`;
  context += `Clima: ${kb.clima.tipo}. Mejor época: ${kb.clima.mejorEpoca}.\n\n`;
  
  context += `## ATRACTIVOS TURÍSTICOS:\n`;
  kb.atractivos.forEach(a => {
    context += `• ${a.nombre} (${a.categoria})${a.ubicacion ? ` - ${a.ubicacion}` : ""}${a.horario ? ` - ${a.horario}` : ""}: ${a.descripcion}\n`;
  });
  
  context += `\n## TOURS:\n`;
  kb.tours.forEach(t => {
    context += `• ${t.nombre}: ${t.duracion}, ${t.precio}. ${t.descripcion} Incluye: ${t.incluye.join(", ")}.\n`;
  });

  context += `\n## TRANSPORTE:\n`;
  context += `Cómo llegar:\n`;
  kb.transporte.comoLlegar.forEach(t => {
    context += `• ${t.modo}: ${t.descripcion}\n`;
  });
  context += `Rutas:\n`;
  kb.transporte.rutas.forEach(r => {
    context += `• ${r.origen} → Delicias: ${r.distancia}, ${r.tiempo}\n`;
  });
  context += `Movilidad local: ${kb.transporte.movilidadLocal.map(m => m.tipo).join(", ")}.\n`;

  context += `\n## HOSPEDAJE:\n`;
  kb.hospedaje.tipos.forEach(h => {
    context += `• ${h.tipo} (${h.zona}): ${h.descripcion}\n`;
  });

  context += `\n## GASTRONOMÍA:\n`;
  context += `Platillos típicos: ${kb.gastronomia.platillosTipicos.join(", ")}.\n`;
  context += `Experiencias: ${kb.gastronomia.experiencias.map(e => e.nombre).join(", ")}.\n`;

  context += `\n## VIDA NOCTURNA:\n`;
  context += `${kb.vidaNocturna.descripcion}\n`;
  context += `Lugares: ${kb.vidaNocturna.lugares.map(l => l.tipo).join(", ")}.\n`;

  context += `\n## FAMILIA:\n`;
  context += `${kb.familia.descripcion}\n`;
  context += `Lugares: ${kb.familia.lugares.join(", ")}.\n`;

  context += `\n## DEPORTES:\n`;
  context += `Lugares: ${kb.deportes.lugares.map(l => l.nombre).join(", ")}.\n`;

  context += `\n## CLIMA POR TEMPORADA:\n`;
  context += `• Primavera (${kb.clima.primavera.meses}): ${kb.clima.primavera.temperaturas} - ${kb.clima.primavera.descripcion}\n`;
  context += `• Verano (${kb.clima.verano.meses}): ${kb.clima.verano.temperaturas} - ${kb.clima.verano.descripcion}\n`;
  context += `• Otoño (${kb.clima.otono.meses}): ${kb.clima.otono.temperaturas} - ${kb.clima.otono.descripcion}\n`;
  context += `• Invierno (${kb.clima.invierno.meses}): ${kb.clima.invierno.temperaturas} - ${kb.clima.invierno.descripcion}\n`;

  context += `\n## PLAN SUGERIDO PARA UN DÍA:\n`;
  kb.planesSugeridos.diaCompleto.forEach(p => {
    context += `• ${p.hora} - ${p.bloque}: ${p.detalle}\n`;
  });
  
  context += `\n## SECCIONES DEL SITIO:\n`;
  Object.entries(kb.seccionesSitio).forEach(([, value]) => {
    context += `• ${value.ruta} - ${value.descripcion}\n`;
  });

  context += `\n## DATOS CURIOSOS:\n`;
  kb.datosCuriosos.forEach(d => {
    context += `• ${d}\n`;
  });
  
  return context;
}
