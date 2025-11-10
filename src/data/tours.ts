export const tourCategories = [
  "histórico",
  "gastronómico",
  "cultural",
  "natural",
];

export const tours = [
  {
    id: "tour-historico",
    title: {
      es: "Ruta Histórica del Centro",
      en: "Historic Downtown Route",
    },
    category: "histórico",
    durationHours: 3,
    price: 320,
    description: {
      es: "Conoce los edificios emblemáticos, la Torre del Reloj y el Museo del Desierto con un guía local.",
      en: "Discover iconic buildings, the Clock Tower and the Desert Museum with a local guide.",
    },
    includes: ["Guía certificado", "Entrada a museos", "Bebida local"],
    itinerary: [
      "Encuentro en Plaza Principal",
      "Visita guiada a la Torre del Reloj",
      "Museo del Desierto",
      "Café tradicional en el mercado",
    ],
    gallery: ["/images/torre-reloj.jpg", "/images/museo.jpg"],
    location: { lat: 28.1903, lng: -105.4711 },
  rating: 4.7,
    testimonials: [
      { name: "Laura", comment: "El guía conoce cada detalle. Recomendado." },
      { name: "Marcus", comment: "Perfecto para la primera visita a Delicias." },
    ],
    nextDates: ["2025-11-08", "2025-11-12", "2025-11-19"],
  },
  {
    id: "tour-gastro",
    title: {
      es: "Sabores de Delicias",
      en: "Flavors of Delicias",
    },
    category: "gastronómico",
    durationHours: 4,
    price: 450,
    description: {
      es: "Recorrido por restaurantes y productores locales con degustaciones exclusivas.",
      en: "Tour through restaurants and local producers with exclusive tastings.",
    },
    includes: ["Transporte local", "Degustaciones", "Recetario digital"],
    itinerary: [
      "Mercado Municipal",
      "Productores de queso y nuez",
      "Comida en restaurante emblemático",
      "Maridaje de postres",
    ],
    gallery: ["/images/restaurant-1.jpg", "/images/restaurant-3.jpg"],
    location: { lat: 28.2001, lng: -105.4604 },
  rating: 4.8,
    testimonials: [{ name: "Daniel", comment: "Probé platillos que no conocía. Gran experiencia." }],
    nextDates: ["2025-11-10", "2025-11-13", "2025-11-20"],
  },
  {
    id: "tour-naturaleza",
    title: {
      es: "Aventura Natural",
      en: "Nature Adventure",
    },
    category: "natural",
    durationHours: 6,
    price: 520,
    description: {
      es: "Explora la presa Las Vírgenes y los paisajes del desierto con actividades al aire libre.",
      en: "Explore Las Vírgenes dam and desert landscapes with outdoor activities.",
    },
    includes: ["Transporte", "Guía", "Snack saludable"],
    itinerary: [
      "Traslado a la presa Las Vírgenes",
      "Mirador y sesión fotográfica",
      "Sendero interpretativo",
      "Picnic al atardecer",
    ],
    gallery: ["/images/hero-delicias-3.jpg", "/images/parque-central.jpg"],
    location: { lat: 28.362, lng: -105.5603 },
  rating: 4.9,
    testimonials: [{ name: "Sofía", comment: "Los paisajes son increíbles, super relajante." }],
    nextDates: ["2025-11-09", "2025-11-16", "2025-11-23"],
  },
];
