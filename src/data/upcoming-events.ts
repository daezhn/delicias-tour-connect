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
    image: "/images/EVENTOS_NOVIEMBRE/SALONDELAFAMA.webp",
    alt: "Polideportivo Bicentenario",
    date: "2025-12-04"
  },
  {
    id: 2,
    label: "Eliminatoria Olimpiada Municipal Voleibol",
    image: "/images/EVENTOS_NOVIEMBRE/olimpiadavoleibol.webp",
    alt: "Polideportivo",
    date: "2025-12-05"
  },
  {
    id: 3,
    label: "Torneo Muay Thai",
    image: "/images/EVENTOS_NOVIEMBRE/torneomuaythai.webp",
    alt: "Gimnasio Municipal - Peleas de Campeonato con Peleadores Internacionales",
    date: "2025-12-06"
  },
  {
    id: 4,
    label: "Venta Navideña CANACO",
    image: "/images/EVENTOS_NOVIEMBRE/ventanavideña.webp",
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
    image: "/images/EVENTOS_NOVIEMBRE/carreraderelevos.webp",
    alt: "Iglesia Santuario",
    date: "2025-12-11"
  },
  {
    id: 7,
    label: "Delicias-Con Vol. 4",
    image: "/images/EVENTOS_NOVIEMBRE/deliciascon.jpg",
    alt: "Salón Club Rotario · Cosplay, Mario Kart, invitados y stands",
    date: "2025-12-14"
  },
  {
    id: 8,
    label: "Temporada Navideña",
    image: "/images/navidenas.webp",
    alt: "Próximamente más detalles",
    date: "2025-12-15"
  },
  {
    id: 9,
    label: "GK Festival El Grinch",
    image: "/images/EVENTOS_NOVIEMBRE/gkacademia.jpg",
    alt: "Teatro de la Ciudad Manuel Talavera Trejo · 7:00 p.m · $180",
    date: "2025-12-18"
  },
  {
    id: 10,
    label: "Carrera San Silvestre",
    image: "/images/sansilvestre.webp",
    alt: "Próximamente más detalles",
    date: "2025-12-31"
  }
];
