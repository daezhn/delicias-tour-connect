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
  }
];
