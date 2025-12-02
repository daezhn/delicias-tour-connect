export interface Tour {
  id: string;
  title: {
    es: string;
    en: string;
  };
  category: string;
  durationHours: number;
  price: number;
  priceNote?: {
    es: string;
    en: string;
  };
  minPeople?: number;
  description: {
    es: string;
    en: string;
  };
  includes: string[];
  itinerary: string[];
  gallery: string[];
  location: {
    lat: number;
    lng: number;
  };
  mapUrl?: string;
  rating: number;
  testimonials: {
    name: string;
    comment: string;
  }[];
  nextDates: string[];
  contactWhatsApp?: string;
}

export const tourCategories = [
  "gastronómico",
  "enoturismo",
];

export const tours: Tour[] = [
  {
    id: "cavall-recorrido",
    title: {
      es: "Paquete #1 - Solo Recorrido",
      en: "Package #1 - Tour Only",
    },
    category: "enoturismo",
    durationHours: 1,
    price: 500,
    priceNote: {
      es: "Por persona",
      en: "Per person",
    },
    minPeople: 2,
    description: {
      es: "Recorrido guiado por las instalaciones y los viñedos. Hay oportunidad de tomarse fotos.",
      en: "Guided tour through facilities and vineyards. Photo opportunities available.",
    },
    includes: [
      "Recorrido guiado por instalaciones y viñedos",
      "Oportunidad de tomarse fotos",
    ],
    itinerary: [],
    gallery: ["/images/cavall.jpg"],
    location: { lat: 28.2340, lng: -105.4980 },
    mapUrl: "https://maps.app.goo.gl/kakaPB4FaHoRvgtr9?g_st=ic",
    rating: 0,
    testimonials: [],
    nextDates: [],
    contactWhatsApp: "6391191229",
  },
  {
    id: "cavall-cata-recorrido",
    title: {
      es: "Paquete #2 - Cata + Recorrido",
      en: "Package #2 - Tasting + Tour",
    },
    category: "enoturismo",
    durationHours: 1.5,
    price: 1500,
    priceNote: {
      es: "Por persona",
      en: "Per person",
    },
    minPeople: 4,
    description: {
      es: "La visita comienza a la 1:30pm. Empezamos en la cava con una plática donde se da una explicación del proceso del vino y el maridaje. Se catan 3 de nuestras etiquetas: Cavall V (blanco), Cavall 3 y Cavall 5. La degustación se acompaña con una tablita de quesos para cada persona. Continuamos con el recorrido guiado por las instalaciones y los viñedos, hay oportunidad de tomarse fotos. Duración aproximada 1:30hr.",
      en: "Visit starts at 1:30pm. We begin in the cellar with a talk explaining the wine process and pairing. Tasting of 3 labels: Cavall V (white), Cavall 3 and Cavall 5, accompanied by a cheese board per person. Continues with guided tour of facilities and vineyards, photo opportunities available. Duration approx. 1:30hr.",
    },
    includes: [
      "Plática sobre proceso del vino y maridaje",
      "Cata de 3 etiquetas: Cavall V (blanco), Cavall 3, Cavall 5",
      "Tablita de quesos por persona",
      "Recorrido guiado por instalaciones y viñedos",
      "Oportunidad de tomarse fotos",
    ],
    itinerary: [],
    gallery: ["/images/cavall.jpg"],
    location: { lat: 28.2340, lng: -105.4980 },
    mapUrl: "https://maps.app.goo.gl/kakaPB4FaHoRvgtr9?g_st=ic",
    rating: 0,
    testimonials: [],
    nextDates: [],
    contactWhatsApp: "6391191229",
  },
  {
    id: "cavall-cata-recorrido-comida",
    title: {
      es: "Paquete #3 - Cata + Recorrido + Comida",
      en: "Package #3 - Tasting + Tour + Meal",
    },
    category: "enoturismo",
    durationHours: 5,
    price: 2500,
    priceNote: {
      es: "Por persona",
      en: "Per person",
    },
    minPeople: 4,
    description: {
      es: "La visita comienza a la 1:30pm. Empezamos en la cava con plática sobre el proceso del vino y maridaje. Cata de 3 etiquetas: Cavall V (blanco), Cavall 3 y Cavall 5 con tablita de quesos. Recorrido guiado por el viñedo visitando todas las instalaciones. Se finaliza con comida de 3 tiempos: Crema de vegetales, Filete mignon en salsa de champiñones con puré de papa artesanal y espárragos envueltos en tocino, y Volcán de chocolate. La comida se acompaña con 2 copas de Cavall 3 por persona. Duración aproximada 5 hrs.",
      en: "Visit starts at 1:30pm. Wine process and pairing talk in the cellar. Tasting of 3 labels with cheese board. Guided tour through vineyards and facilities. Ends with 3-course meal: Vegetable cream soup, Filet mignon in mushroom sauce with artisan mashed potatoes and bacon-wrapped asparagus, and Chocolate lava cake. Meal includes 2 glasses of Cavall 3 per person. Duration approx. 5 hrs.",
    },
    includes: [
      "Plática sobre proceso del vino y maridaje",
      "Cata de 3 etiquetas: Cavall V (blanco), Cavall 3, Cavall 5",
      "Tablita de quesos por persona",
      "Recorrido guiado por viñedo e instalaciones",
      "Oportunidad de tomarse fotos",
      "Comida de 3 tiempos: Crema de vegetales, Filete mignon con puré y espárragos, Volcán de chocolate",
      "2 copas de Cavall 3 por persona",
    ],
    itinerary: [],
    gallery: ["/images/cavall.jpg"],
    location: { lat: 28.2340, lng: -105.4980 },
    mapUrl: "https://maps.app.goo.gl/kakaPB4FaHoRvgtr9?g_st=ic",
    rating: 0,
    testimonials: [],
    nextDates: [],
    contactWhatsApp: "6391191229",
  },
  {
    id: "cavall-cata-privada",
    title: {
      es: "Paquete #4 - Catas Privadas",
      en: "Package #4 - Private Tastings",
    },
    category: "enoturismo",
    durationHours: 0,
    price: 0,
    priceNote: {
      es: "Precio varía según número de personas",
      en: "Price varies by group size",
    },
    description: {
      es: "Paquetes especiales para CATAS PRIVADAS, eliges la hora, menú y fecha que prefieras, sujeto a disponibilidad. La cata privada será solo para ti y tu grupo. El precio varía dependiendo el número de personas.",
      en: "Special packages for PRIVATE TASTINGS. Choose your preferred time, menu and date, subject to availability. The private tasting will be exclusively for you and your group. Price varies by group size.",
    },
    includes: [
      "Cata privada exclusiva para tu grupo",
      "Eliges hora, menú y fecha (sujeto a disponibilidad)",
    ],
    itinerary: [],
    gallery: ["/images/cavall.jpg"],
    location: { lat: 28.2340, lng: -105.4980 },
    mapUrl: "https://maps.app.goo.gl/kakaPB4FaHoRvgtr9?g_st=ic",
    rating: 0,
    testimonials: [],
    nextDates: [],
    contactWhatsApp: "6391191229",
  },
];

// Notas importantes para todos los paquetes CAVALL:
// - En caso de requerir factura se agrega el IVA
// - Se ofrecen vinos a precio especial de bodega
// - Se requiere reservación previa
// - WhatsApp para reservar: 6391191229
