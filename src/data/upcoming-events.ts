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
    label: "Miércoles 5 de noviembre",
    image: "/images/noviembre/miercoles5.jpg",
    alt: "Cartel de eventos para el miércoles 5 de noviembre",
    date: "2025-11-05"
  },
  {
    id: 2,
    label: "Jueves 6 de noviembre",
    image: "/images/noviembre/jueves6.jpg",
    alt: "Cartel de eventos para el jueves 6 de noviembre",
    date: "2025-11-06"
  },
  {
    id: 3,
    label: "Viernes 7 de noviembre",
    image: "/images/noviembre/viernes7.jpg",
    alt: "Cartel de eventos para el viernes 7 de noviembre",
    date: "2025-11-07"
  },
  {
    id: 4,
    label: "Sábado 8 de noviembre",
    image: "/images/event-1.jpg",
    alt: "Cartel de eventos para el sábado 8 de noviembre",
    date: "2025-11-08"
  },
  {
    id: 5,
    label: "Domingo 9 de noviembre",
    image: "/images/event-2.jpg",
    alt: "Cartel de eventos para el domingo 9 de noviembre",
    date: "2025-11-09"
  },
  {
    id: 6,
    label: "Lunes 10 de noviembre",
    image: "/images/event-3.jpg",
    alt: "Cartel de eventos para el lunes 10 de noviembre",
    date: "2025-11-10"
  }
];
