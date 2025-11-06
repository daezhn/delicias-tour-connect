export interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  location?: string;
  schedule?: string;
  highlights?: string[];
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Torre del Reloj",
    category: "Patrimonio historico",
    image: "/images/torre-reloj.jpg",
    description:
      "Icono de Delicias con vistas privilegiadas al centro de la ciudad.",
    location: "Zona Centro",
    highlights: ["Vista panoramica", "Escenarios fotograficos"],
  },
  {
    id: 2,
    name: "Parque Central",
    category: "Espacios recreativos",
    image: "/images/parque-central.jpg",
    description:
      "Pulmon verde de la ciudad con actividades familiares, areas de descanso y eventos culturales.",
    location: "Av. Del Parque y 3a Sur",
    highlights: ["Eventos al aire libre", "Ambiente familiar"],
  },
  {
    id: 3,
    name: "Museo del Desierto Chihuahuense",
    category: "Cultura y ciencia",
    image: "/images/museo.jpg",
    description:
      "Exhibiciones interactivas sobre biodiversidad, geologia e historia de la region desertica.",
    location: "Carretera Delicias-Chihuahua Km 5",
    schedule: "Martes a domingo, 10:00-18:00",
    highlights: ["Recorridos guiados", "Actividades educativas"],
  },
  {
    id: 4,
    name: "Teatro de la Ciudad",
    category: "Arte y espectaculos",
    image: "/images/teatro.jpg",
    description:
      "Recinto cultural con presentaciones teatrales, musicales y festivales locales.",
    location: "Av. Rio Conchos 1200",
    highlights: ["Cartelera cultural", "Arquitectura moderna"],
  },
  {
    id: 5,
    name: "Presa Las Virgenes",
    category: "Naturaleza y aventura",
    image: "/images/hero-delicias-3.jpg",
    description:
      "Embalse emblematico para paseos, pesca recreativa y miradores naturales.",
    location: "15 km al norte de Delicias",
    highlights: ["Miradores", "Observacion de aves"],
  },
  {
    id: 6,
    name: "Hacienda San Bartolo",
    category: "Historia y tradicion",
    image: "/images/hero-delicias-2.jpg",
    description:
      "Antigua hacienda algodonera que relata el desarrollo agricola de la region.",
    location: "Camino a Meoqui",
    highlights: ["Arquitectura original", "Visitas guiadas"],
  },
  {
    id: 7,
    name: "Ruta del Conchos",
    category: "Turismo regional",
    image: "/images/hero-delicias.jpg",
    description:
      "Recorridos por comunidades y atractivos cercanos a lo largo del Rio Conchos.",
    highlights: ["Experiencias gastronomicas", "Artesanias locales"],
  },
  {
    id: 8,
    name: "Zona Gastronomica Norte",
    category: "Gastronomia",
    image: "/images/restaurant-1.jpg",
    description:
      "Corredor culinario con restaurantes, cafes y propuestas de cocina regional contemporanea.",
    location: "Av. 6a Norte",
    highlights: ["Cocina regional", "Ambiente nocturno"],
  },
  {
    id: 9,
    name: "Plaza Benito Juarez",
    category: "Cultura y comunidad",
    image: "/images/hero-delicias-1.jpg",
    description:
      "Plaza civica con monumentos, fuentes y actividades comunitarias durante todo el ano.",
    location: "Centro historico",
    highlights: ["Eventos civicos", "Mercados temporales"],
  },
  {
    id: 10,
    name: "Galeria de Arte Municipal",
    category: "Arte y cultura",
    image: "/images/restaurant-3.jpg",
    description:
      "Espacio dedicado a artistas locales con exposiciones temporales y talleres.",
    location: "Calle Quinta Oriente 302",
    schedule: "Martes a sabado, 11:00-19:00",
    highlights: ["Exposiciones temporales", "Talleres creativos"],
  },
];
