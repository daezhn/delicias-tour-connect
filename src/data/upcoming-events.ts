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
    label: "Encendido del Árbol Navideño",
    image: "/images/encendidoarbol.webp",
    alt: "Próximamente más detalles",
    date: "2025-12-07"
  },
  {
    id: 2,
    label: "Temporada Navideña",
    image: "/images/navidenas.jpg",
    alt: "Próximamente más detalles",
    date: "2025-12-15"
  },
  {
    id: 3,
    label: "Carrera San Silvestre",
    image: "/images/sansilvestre.jpg",
    alt: "Próximamente más detalles",
    date: "2025-12-31"
  }
];
