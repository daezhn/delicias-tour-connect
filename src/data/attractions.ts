export interface Attraction {
  id: number;
  name: string;
  nameEn?: string;
  category: string;
  description: string;
  descriptionEn?: string;
  image: string;
  location?: string;
  schedule?: string;
  cost?: string;
  contact?: string;
  web?: string;
  highlights?: string[];
  imageClass?: string;
}

export const attractions: Attraction[] = [
  // MUSEOS - Primera fila según indicación de IDEA
  {
    id: 1,
    name: "Museo de Paleontología",
    nameEn: "Paleontology Museum",
    category: "Ciencia y descubrimiento",
    image: "/atractivos/_paleontologia.png",
    description:
      "En sus recintos se pueden encontrar una colección de caracoles fosilizados, peces, plantas, esqueletos de dinosaurios del Estado de Chihuahua, un mamut, una ballena gris entre otros ejemplares, cada pieza acompañada de una explicación breve y de fácil comprensión; además de una pequeña tienda de recuerdos.",
    descriptionEn:
      "In its enclosures you can find a collection of fossilized snails, fish, plants, dinosaur skeletons from the State of Chihuahua, a mammoth, a gray whale among other specimens, each piece accompanied by a brief and easy explanation; plus a small souvenir shop.",
    location: "Avenida Río Chuviscar Norte #2, Centro, 33000 Delicias, Chih.",
    schedule: "De lunes a viernes de 9:00 a.m. a 12:30 y de 15:00 pm a 18:00 hrs.",
    cost: "Niños $20.00 MXN, Adultos $30.00 MXN",
    contact: "639-474-4068",
    web: "https://www.facebook.com/museopaleontologia",
    highlights: ["Fósiles originales", "Actividades escolares", "Tienda de recuerdos"],
  },
  {
    id: 2,
    name: "Museo del Desierto Chihuahuense (MUDECH)",
    nameEn: "Chihuahuan Desert Museum (MUDECH)",
    category: "Ciencia y educación",
    image: "/atractivos/_mudech.png",
    description:
      "Es un espacio cuya temática aborda específicamente esta región ecogeográfica del estado de Chihuahua. Se exhiben colecciones geológico-paleontológicas destacables del norte del país, especies de plantas y animales del desierto, e información sobre los grupos humanos actuales y antiguos.",
    descriptionEn:
      "Space whose theme specifically addresses this ecogeographic region of the state of Chihuahua. Notable geological-paleontological collections are exhibited, as well as species of plants and animals originating in the Chihuahuan desert, and information on human groups.",
    location: "Septima sur y Ave. Nuestra Gente s/n fracc. Valle Verde, Delicias, Chihuahua.",
    schedule: "Martes a viernes de 9:00 a 16:00 hrs. Sábados y domingos de 11:00 a 18:00 hrs.",
    cost: "General $30.00 MXN. Niños, estudiantes, INAPAM y personas con discapacidad $15.00 MXN",
    contact: "639-125-0452",
    web: "mailto:museodeldesiertochihuahuense@hotmail.com",
    highlights: ["Recorridos guiados", "Actividades interactivas", "Colección paleontológica"],
  },
  {
    id: 3,
    name: "Museo del Sitio 'Huella de nuestros pasos'",
    nameEn: "Site Museum 'Footprints of our steps'",
    category: "Patrimonio histórico",
    image: "/atractivos/_museo de sitio.png",
    description:
      "Este museo conserva y difunde la historia de los fundadores de la ciudad, como referente para las nuevas generaciones. Testimonio de cómo Delicias pasó de ser pionera a ser la tercera ciudad en importancia en el estado en 77 años.",
    descriptionEn:
      "This museum preserves and disseminates the history of the founders of the city. It serves as a reference for new generations about how the city grew from a pioneer settlement to the third most important city in the state.",
    location: "Av. del Parque Nte. 2 esq. Círculo del Reloj Público Centro CP 33000. Delicias, Chihuahua",
    schedule: "En remodelación",
    contact: "(639) 472 38 80",
    web: "https://www.facebook.com/Museo-de-Sitio-Huellas-de-Nuestros-Pasos-605418899593435/",
    highlights: ["Piezas arqueológicas", "Historia local", "Visitas guiadas"],
  },
  {
    id: 4,
    name: "Museo de los Derechos Humanos",
    nameEn: "Human Rights Museum",
    category: "Memoria y cultura",
    image: "/atractivos/_deny.png",
    description:
      "Recinto dedicado a promover la cultura de paz y los derechos humanos a través de exposiciones y actividades educativas.",
    descriptionEn:
      "Venue dedicated to promoting a culture of peace and human rights through exhibitions and educational activities.",
    location: "Col. Revolución",
    highlights: ["Exposiciones temáticas", "Programas educativos"],
    imageClass: "scale-125",
  },
  // OTROS ATRACTIVOS
  {
    id: 5,
    name: "Reloj Público",
    nameEn: "Public Clock",
    category: "Cultura y tradición",
    image: "/atractivos/_benito juarez.png",
    description:
      "Monumento típico situado en el centro del plano original de Delicias. Divide la ciudad en 4 sectores (norte, sur, oriente y poniente). Punto de reunión para el grito de independencia. Inaugurado en 1949.",
    descriptionEn:
      "Typical monument located in the center of the original plan of Delicias. It divides the city into 4 sectors. Main gathering point for the Independence Day celebrations. Inaugurated in 1949.",
    location: "Av. del Parque Nte. Círculo del Reloj Público Centro CP 33000. Delicias, Chihuahua",
    schedule: "Abierto 24 hrs (Monumento público)",
    cost: "Gratis",
    web: "https://share.google/YG8ApCly3XqNBHiXL",
    highlights: ["Eventos cívicos", "Fotografías emblemáticas", "Centro histórico"],
    imageClass: "scale-125",
  },
  {
    id: 6,
    name: "Edificio Hotel del Norte (Histórico)",
    nameEn: "Hotel del Norte Building (Historic)",
    category: "Historia y cultura",
    image: "/atractivos/_parque fundadores.png",
    description:
      "Construida por inmigrantes alemanes hacia 1888, es la edificación más antigua del sitio. Hoy aloja al Hotel del Norte, ambientado a principios del siglo XX con muebles originales. Cuenta con Bar 1888, Pub, discoteca, alberca y aviario.",
    descriptionEn:
      "Built by German immigrants around 1888, considered the oldest building on site. Today it houses Hotel del Norte with early-20th-century décor. Includes Bar 1888, Pub, nightclub, pool, and aviary.",
    location: "Av. Agricultura Nte., Norte, 33000 Delicias",
    web: "https://share.google/0d4RRgxuEkrN5alrt",
    highlights: ["Arquitectura histórica", "Bar 1888", "Alberca y aviario"],
  },
  {
    id: 7,
    name: "Teatro de la Ciudad de Delicias",
    nameEn: "Delicias City Theater",
    category: "Arte y espectáculos",
    image: "/atractivos/_teatro.png",
    description:
      "Diseñado por el arquitecto Miguel Ángel García Dorantes, inaugurado en 1992 y reinaugurado en 2010. Sede de obras de teatro, ópera, música, danza, festivales y conferencias.",
    descriptionEn:
      "Designed by architect Miguel Ángel García Dorantes, inaugurated in 1992 and reopened in 2010. Hosts plays, opera, music, dance, festivals, and conferences.",
    location: "Av. Agricultura y Río Conchos Oriente S/N Col. Zona Centro",
    schedule: "Depende del evento",
    cost: "Depende del evento",
    contact: "639 474 2036",
    web: "https://share.google/GX9kuChruPcJ90Dd8",
    highlights: ["Cartelera cultural", "Arquitectura moderna"],
  },
  {
    id: 8,
    name: "Hacienda de Chihuahua",
    nameEn: "Chihuahua Hacienda",
    category: "Turismo gastronómico",
    image: "/atractivos/_rosetilla.png",
    description:
      "Casa productora del sotol, bebida tradicional de Chihuahua destilada de una planta del mismo nombre. Ofrecen un recorrido para conocer el proceso de fabricación artesanal y degustación.",
    descriptionEn:
      "Producer of Sotol, the traditional drink of Chihuahua. They offer a tour to learn about the artisanal manufacturing process and tasting.",
    highlights: ["Degustación de sotol", "Proceso artesanal", "Productos locales"],
  },
  {
    id: 9,
    name: "Parque Ciudad Infantil",
    nameEn: "Children's City Park",
    category: "Familia y recreación",
    image: "/atractivos/_ciudad infantil.png",
    description:
      "Espacio interactivo para niñas y niños con áreas temáticas, juegos y actividades educativas.",
    descriptionEn:
      "Interactive space for children with themed areas, games and educational activities.",
    location: "Av. 2a Sur y Calle 11",
    highlights: ["Juegos infantiles", "Talleres guiados"],
    imageClass: "scale-125",
  },
  {
    id: 10,
    name: "Parque el Colibrí",
    nameEn: "Hummingbird Park",
    category: "Naturaleza urbana",
    image: "/atractivos/_colibri.png",
    description:
      "Zona de descanso con fuentes, vegetación y espacios de convivencia para toda la familia.",
    descriptionEn:
      "Resting area with fountains, vegetation and gathering spaces for the whole family.",
    location: "Col. del Empleado",
    highlights: ["Áreas verdes", "Ambiente relajante"],
    imageClass: "scale-125",
  },
  {
    id: 11,
    name: "La Rosetilla",
    nameEn: "La Rosetilla",
    category: "Turismo gastronómico",
    image: "/atractivos/_rosetilla.png",
    description:
      "Zona frutícola reconocida por la producción de manzana y tradiciones ganaderas.",
    descriptionEn:
      "Fruit-growing area recognized for apple production and ranching traditions.",
    location: "Ejido La Rosetilla, 12 km al norte",
    highlights: ["Productos locales", "Rutas agroturísticas"],
  },
  {
    id: 12,
    name: "Trolebús El Encanto",
    nameEn: "El Encanto Trolley",
    category: "Experiencias guiadas",
    image: "/atractivos/_trolebus.png",
    description:
      "Recorrido narrado por los principales puntos de interés histórico y cultural de Delicias.",
    descriptionEn:
      "Narrated tour of the main historical and cultural points of interest in Delicias.",
    location: "Salida desde Plaza Benito Juarez",
    schedule: "Viernes a domingo, horarios vespertinos",
    highlights: ["Recorridos temáticos", "Guías especializados"],
    imageClass: "scale-125",
  },
  {
    id: 13,
    name: "Gran Estadio Delicias",
    nameEn: "Delicias Grand Stadium",
    category: "Deporte y eventos",
    image: "/atractivos/_estadio.png",
    description:
      "Casa del béisbol en Delicias con partidos, torneos y actividades deportivas comunitarias.",
    descriptionEn:
      "Home of baseball in Delicias with games, tournaments and community sports activities.",
    location: "Calzada del Charro y 8a Oriente",
    highlights: ["Temporada estatal", "Ambiente familiar"],
    imageClass: "scale-125",
  },
];
