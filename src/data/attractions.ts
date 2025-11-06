export interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  location?: string;
  schedule?: string;
  highlights?: string[];
  imageClass?: string;
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Plaza Benito Juarez",
    category: "Cultura y tradición",
    image: "/atractivos/_benito juarez.png",
    description:
      "Corazón histórico de Delicias con jardines, monumentos y ambiente comunitario durante todo el año.",
    location: "Zona Centro",
    highlights: ["Eventos cívicos", "Fotografías emblemáticas"],
    imageClass: "scale-125",
  },
  {
    id: 2,
    name: "Parque Ciudad Infantil",
    category: "Familia y recreación",
    image: "/atractivos/_ciudad infantil.png",
    description:
      "Espacio interactivo para niñas y niños con áreas temáticas, juegos y actividades educativas.",
    location: "Av. 2a Sur y Calle 11",
    highlights: ["Juegos infantiles", "Talleres guiados"],
    imageClass: "scale-125",
  },
  {
    id: 3,
    name: "Parque el Colibrí",
    category: "Naturaleza urbana",
    image: "/atractivos/_colibri.png",
    description:
      "Zona de descanso con fuentes, vegetación y espacios de convivencia para toda la familia.",
    location: "Col. del Empleado",
    highlights: ["Áreas verdes", "Ambiente relajante"],
    imageClass: "scale-125",
  },
  {
    id: 4,
    name: "Parque Fundadores",
    category: "Historia y cultura",
    image: "/atractivos/_parque fundadores.png",
    description:
      "Parque con esculturas y murales que narran la historia de la fundación de Delicias.",
    location: "Av. 1a Oriente",
    highlights: ["Esculturas históricas", "Áreas de picnic"],
    imageClass: "scale-125",
  },
  {
    id: 5,
    name: "Teatro de la Ciudad",
    category: "Arte y espectáculos",
    image: "/atractivos/_teatro.png",
    description:
      "Recinto cultural con una agenda constante de obras, conciertos y actividades artísticas locales.",
    location: "Calle Quinta Norte #205",
    highlights: ["Cartelera cultural", "Arquitectura moderna"],
  },
  {
    id: 6,
    name: "Museo del Desierto Chihuahuense (MUDECH)",
    category: "Ciencia y educación",
    image: "/atractivos/_mudech.png",
    description:
      "Exhibiciones sobre la biodiversidad, geología e historia natural del desierto chihuahuense.",
    location: "Carretera Delicias-Chihuahua Km 5",
    schedule: "Martes a domingo, 10:00-18:00",
    highlights: ["Recorridos guiados", "Actividades interactivas"],
  },
  {
    id: 7,
    name: "Museo de Sitio",
    category: "Patrimonio histórico",
    image: "/atractivos/_museo de sitio.png",
    description:
      "Espacio museístico que resguarda piezas arqueológicas y narra los orígenes agrícolas de la región.",
    location: "Zona Centro",
    highlights: ["Piezas arqueológicas", "Visitas guiadas"],
  },
  {
    id: 8,
    name: "Museo de Paleontología",
    category: "Ciencia y descubrimiento",
    image: "/atractivos/_paleontologia.png",
    description:
      "Colección paleontológica con fósiles representativos del pasado prehistórico del estado de Chihuahua.",
    location: "Centro Cultural Delicias",
    highlights: ["Fósiles originales", "Actividades escolares"],
  },
  {
    id: 9,
    name: "La Rosetilla",
    category: "Turismo gastronómico",
    image: "/atractivos/_rosetilla.png",
    description:
      "Zona frutícola reconocida por la producción de manzana y tradiciones ganaderas.",
    location: "Ejido La Rosetilla, 12 km al norte",
    highlights: ["Productos locales", "Rutas agroturísticas"],
  },
  {
    id: 10,
    name: "Trolebús El Encanto",
    category: "Experiencias guiadas",
    image: "/atractivos/_trolebus.png",
    description:
      "Recorrido narrado por los principales puntos de interés histórico y cultural de Delicias.",
    location: "Salida desde Plaza Benito Juarez",
    schedule: "Viernes a domingo, horarios vespertinos",
    highlights: ["Recorridos temáticos", "Guías especializados"],
    imageClass: "scale-125",
  },
  {
    id: 11,
    name: "Gran Estadio Delicias",
    category: "Deporte y eventos",
    image: "/atractivos/_estadio.png",
    description:
      "Casa del béisbol en Delicias con partidos, torneos y actividades deportivas comunitarias.",
    location: "Calzada del Charro y 8a Oriente",
    highlights: ["Temporada estatal", "Ambiente familiar"],
    imageClass: "scale-125",
  },
  {
    id: 12,
    name: "Museo de los Derechos Humanos",
    category: "Memoria y cultura",
    image: "/atractivos/_deny.png",
    description:
      "Recinto dedicado a promover la cultura de paz y los derechos humanos a través de exposiciones y actividades educativas.",
    location: "Col. Revolución",
    highlights: ["Exposiciones temáticas", "Programas educativos"],
    imageClass: "scale-125",
  },
];
