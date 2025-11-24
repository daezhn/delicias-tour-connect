/**
 * Base de conocimiento para el Asistente IDEA
 * Este archivo contiene toda la información que el chatbot puede usar para responder preguntas.
 * Edita este archivo para actualizar la información del chatbot.
 */

export const knowledgeBase = {
  // Información general de Delicias
  general: {
    nombre: "Delicias",
    estado: "Chihuahua",
    pais: "México",
    descripcion: "Ciudad conocida por su producción agrícola, especialmente algodón, nuez y chile.",
    clima: "Semidesértico: caluroso en verano (hasta 40°C), fresco en invierno (puede bajar a 0°C)",
    mejorEpoca: "Primavera (marzo-mayo) y otoño (septiembre-noviembre)",
    gentilicio: "Deliciense",
  },

  // Atractivos turísticos
  atractivos: [
    {
      nombre: "Plaza Benito Juárez",
      categoria: "Plaza",
      ubicacion: "Zona Centro",
      descripcion: "Corazón histórico de la ciudad con jardines, monumentos y eventos cívicos.",
      destacados: ["Eventos cívicos", "Fotografías emblemáticas", "Punto de encuentro"],
    },
    {
      nombre: "Parque Ciudad Infantil",
      categoria: "Parque",
      ubicacion: "Av. 2a Sur y Calle 11",
      descripcion: "Espacio interactivo para niños con áreas temáticas y juegos.",
      destacados: ["Juegos infantiles", "Talleres", "Área familiar"],
    },
    {
      nombre: "Parque El Colibrí",
      categoria: "Parque",
      ubicacion: "Col. del Empleado",
      descripcion: "Zona de descanso con fuentes y vegetación.",
      destacados: ["Áreas verdes", "Ambiente relajante", "Fuentes"],
    },
    {
      nombre: "Parque Fundadores",
      categoria: "Parque",
      ubicacion: "Av. 1a Oriente",
      descripcion: "Esculturas y murales que narran la historia de Delicias.",
      destacados: ["Esculturas históricas", "Áreas de picnic", "Historia local"],
    },
    {
      nombre: "MUDECH (Museo del Desierto Chihuahuense)",
      categoria: "Museo",
      ubicacion: "Carretera Delicias-Chihuahua Km 5",
      horario: "Martes a domingo, 10:00-18:00",
      descripcion: "Exhibiciones sobre biodiversidad, geología e historia natural del desierto.",
      destacados: ["Recorridos guiados", "Actividades interactivas", "Exposiciones"],
    },
    {
      nombre: "Museo de Paleontología",
      categoria: "Museo",
      ubicacion: "Centro Cultural Delicias",
      descripcion: "Colección de fósiles representativos del pasado prehistórico de Chihuahua.",
      destacados: ["Fósiles originales", "Actividades escolares", "Laboratorio"],
    },
    {
      nombre: "Museo de Sitio",
      categoria: "Museo",
      ubicacion: "Zona Centro",
      descripcion: "Piezas arqueológicas y orígenes agrícolas de la región.",
      destacados: ["Piezas arqueológicas", "Visitas guiadas"],
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
      descripcion: "Recinto cultural con obras, conciertos y actividades artísticas.",
      destacados: ["Cartelera cultural", "Arquitectura moderna"],
    },
    {
      nombre: "Trolebús El Encanto",
      categoria: "Tour",
      ubicacion: "Salida desde Plaza Benito Juárez",
      horario: "Viernes a domingo, horarios vespertinos",
      descripcion: "Recorrido narrado por los principales puntos de interés.",
      destacados: ["Recorridos temáticos", "Guías especializados"],
    },
    {
      nombre: "Presa Las Vírgenes",
      categoria: "Naturaleza",
      descripcion: "Miradores, senderos, kayak y picnic con vistas al atardecer.",
      destacados: ["Miradores", "Kayak", "Senderos", "Picnic"],
    },
    {
      nombre: "La Rosetilla",
      categoria: "Agroturismo",
      ubicacion: "12 km al norte de Delicias",
      descripcion: "Zona frutícola con producción de manzana y tradiciones ganaderas.",
      destacados: ["Productos locales", "Rutas agroturísticas"],
    },
    {
      nombre: "Gran Estadio Delicias",
      categoria: "Deportes",
      ubicacion: "Calzada del Charro y 8a Oriente",
      descripcion: "Casa del béisbol local con partidos y torneos.",
      destacados: ["Temporada estatal", "Ambiente familiar"],
    },
  ],

  // Tours disponibles
  tours: [
    {
      nombre: "Ruta Histórica del Centro",
      duracion: "3 horas",
      precio: "$320 MXN",
      descripcion: "Torre del Reloj, museos y café tradicional con guía local.",
      incluye: ["Guía certificado", "Entrada a museos", "Bebida local"],
      itinerario: ["Plaza Principal", "Torre del Reloj", "Museo del Desierto", "Café en el mercado"],
    },
    {
      nombre: "Sabores de Delicias",
      duracion: "4 horas",
      precio: "$450 MXN",
      descripcion: "Recorrido gastronómico por restaurantes y productores locales.",
      incluye: ["Transporte local", "Degustaciones", "Recetario digital"],
      itinerario: ["Mercado Municipal", "Productores de queso y nuez", "Restaurante emblemático", "Maridaje de postres"],
    },
    {
      nombre: "Aventura Natural",
      duracion: "6 horas",
      precio: "$520 MXN",
      descripcion: "Presa Las Vírgenes y paisajes del desierto con actividades al aire libre.",
      incluye: ["Transporte", "Guía", "Snack saludable"],
      itinerario: ["Traslado a la presa", "Mirador y fotos", "Sendero interpretativo", "Picnic al atardecer"],
    },
  ],

  // Plan del día sugerido
  planDia: [
    { hora: "09:00", actividad: "Murales y desayuno", lugar: "Cerca del reloj y Plaza Benito Juárez" },
    { hora: "12:30", actividad: "Museos", lugar: "MUDECH y Museo de Paleontología" },
    { hora: "17:00", actividad: "Naturaleza", lugar: "Presa Las Vírgenes - caminata, kayak o fotos" },
    { hora: "21:00", actividad: "Vida nocturna", lugar: "Centro - mixología, música en vivo, food trucks" },
  ],

  // Secciones del sitio web
  seccionesSitio: {
    tours: { ruta: "/tours", descripcion: "Explorar y reservar tours" },
    hospedaje: { ruta: "/hospedaje", descripcion: "Hoteles y alojamiento" },
    transporte: { ruta: "/transporte", descripcion: "Cómo llegar y moverse" },
    clima: { ruta: "/clima-tips", descripcion: "Clima y consejos de viaje" },
    queHacer: { ruta: "/experiencias/que-hacer", descripcion: "Actividades y aventuras" },
    queComer: { ruta: "/experiencias/que-comer", descripcion: "Gastronomía local" },
    vidaNocturna: { ruta: "/experiencias/vida-nocturna", descripcion: "Antros, bares y nightlife" },
    arteCultura: { ruta: "/experiencias/arte-cultura", descripcion: "Museos y cultura" },
    familia: { ruta: "/experiencias/familia", descripcion: "Actividades familiares" },
    deportes: { ruta: "/experiencias/deportes", descripcion: "Deportes y recreación" },
  },

  // Gastronomía típica
  gastronomia: [
    "Carne asada estilo norteño",
    "Burritos de machaca",
    "Queso menonita",
    "Nuez de la región",
    "Chile colorado",
    "Gorditas de harina",
    "Caldo de res",
  ],

  // Datos curiosos
  datosCuriosos: [
    "Delicias es conocida como 'La Perla del Conchos' por estar junto al río Conchos.",
    "La ciudad fue fundada en 1933.",
    "Es uno de los principales productores de algodón y nuez en México.",
    "El clima permite la producción de chile de excelente calidad.",
  ],
};

/**
 * Función para generar el contexto de conocimiento como string
 * Se usa para inyectar en el prompt del chatbot
 */
export function generateKnowledgeContext(): string {
  const kb = knowledgeBase;
  
  let context = `## INFORMACIÓN DE DELICIAS:\n`;
  context += `${kb.general.descripcion} Clima: ${kb.general.clima}. Mejor época: ${kb.general.mejorEpoca}.\n\n`;
  
  context += `## ATRACTIVOS TURÍSTICOS:\n`;
  kb.atractivos.forEach(a => {
    context += `• ${a.nombre}${a.ubicacion ? ` (${a.ubicacion})` : ""}${a.horario ? ` - ${a.horario}` : ""}: ${a.descripcion}\n`;
  });
  
  context += `\n## TOURS DISPONIBLES:\n`;
  kb.tours.forEach(t => {
    context += `• ${t.nombre}: ${t.duracion}, ${t.precio}. ${t.descripcion}\n`;
  });
  
  context += `\n## PLAN SUGERIDO PARA UN DÍA:\n`;
  kb.planDia.forEach(p => {
    context += `• ${p.hora} - ${p.actividad}: ${p.lugar}\n`;
  });
  
  context += `\n## GASTRONOMÍA TÍPICA: ${kb.gastronomia.join(", ")}.\n`;
  
  context += `\n## SECCIONES DEL SITIO WEB:\n`;
  Object.values(kb.seccionesSitio).forEach(s => {
    context += `• ${s.ruta} - ${s.descripcion}\n`;
  });
  
  return context;
}
