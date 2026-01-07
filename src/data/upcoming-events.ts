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
    label: "Festival Día de Reyes",
    image: "/images/EVENTOS_ENERO_2026/festival_kpop.jpg",
    alt: "Tributo Guerreras KPOP · Domingo 11 de Enero · 5:00 P.M. Plaza Benito Juárez",
    date: "2026-01-11"
  },
  {
    id: 2,
    label: "Lucha Libre: En Honor a Warrior 2",
    image: "/images/EVENTOS_ENERO_2026/lucha_warrior.jpg",
    alt: "Sábado 17 de Enero 2026 · Delicias Chihuahua",
    date: "2026-01-17"
  },
  {
    id: 3,
    label: "Circo Americano",
    image: "/images/EVENTOS_ENERO_2026/circo_americano.jpg",
    alt: "Instalados junto a Home Depot · Funciones Lunes a Sábado 6:30 y 8:45 PM, Domingo 4:00, 6:30 y 8:45 PM",
    date: "2026-01-08"
  }
];
