export interface UpcomingEvent {
  id: number;
  label: string;
  image: string;
  alt: string;
  date: string; // ISO date string
}

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 1,
    label: "Salón de la Fama",
    image: "/images/EVENTOS_NOVIEMBRE/SALONDELAFAMA.jpg",
    alt: "Polideportivo Bicentenario",
    date: "2025-12-04"
  },
  {
    id: 2,
    label: "Eliminatoria Olimpiada Municipal Voleibol",
    image: "/images/EVENTOS_NOVIEMBRE/olimpiadavoleibol.jpg",
    alt: "Polideportivo",
    date: "2025-12-05"
  },
  {
    id: 3,
    label: "Torneo Muay Thai",
    image: "/images/EVENTOS_NOVIEMBRE/torneomuaythai.jpg",
    alt: "Gimnasio Municipal - Peleas de Campeonato con Peleadores Internacionales",
    date: "2025-12-06"
  },
  {
    id: 4,
    label: "Venta Navideña CANACO",
    image: "/images/EVENTOS_NOVIEMBRE/ventanavideña.jpg",
    alt: "Zona Centro",
    date: "2025-12-06"
  },
  {
    id: 5,
    label: "Encendido del Árbol Navideño",
    image: "/images/encendidoarbol.webp",
    alt: "Próximamente más detalles",
    date: "2025-12-07"
  },
  {
    id: 6,
    label: "Carrera de Relevos Guadalupana",
    image: "/images/EVENTOS_NOVIEMBRE/carreraderelevos.jpg",
    alt: "Iglesia Santuario",
    date: "2025-12-11"
  },
  {
    id: 7,
    label: "Temporada Navideña",
    image: "/images/navidenas.jpg",
    alt: "Próximamente más detalles",
    date: "2025-12-15"
  },
  {
    id: 8,
    label: "Carrera San Silvestre",
    image: "/images/sansilvestre.jpg",
    alt: "Próximamente más detalles",
    date: "2025-12-31"
  }
];
