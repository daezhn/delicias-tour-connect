import { CalendarDays, Compass, Utensils, Mountain, Hotel, Activity, Car, MessageSquare } from "lucide-react";

export const quickLinks = [
  {
    href: "/#eventos",
    image: "/images/contenedoresheromain/agenda.webp",
    label: { es: "Agenda", en: "Agenda" },
    hint: { es: "Festivales y ferias", en: "Festivals & fairs" },
    shortLabel: { es: "Agenda", en: "Agenda" },
    Icon: CalendarDays
  },
  {
    href: "/tours",
    image: "/images/contenedoresheromain/cavall7.webp",
    label: { es: "Tours guiados", en: "Guided tours" },
    hint: { es: "Desierto · presa · ciudad", en: "Desert · dam · city" },
    shortLabel: { es: "Tours", en: "Tours" },
    Icon: Compass
  },
  {
    href: "/experiencias/que-comer",
    image: "/images/contenedoresheromain/sabores.webp",
    label: { es: "Gastronomía", en: "Food & cafés" },
    hint: { es: "Sabores locales", en: "Local flavors" },
    shortLabel: { es: "Sabores", en: "Food" },
    Icon: Utensils
  },
  {
    href: "/Atractivos",
    image: "/images/contenedoresheromain/atractivos.webp",
    label: { es: "Atractivos", en: "Highlights" },
    hint: { es: "Miradores y rutas", en: "Landmarks & routes" },
    shortLabel: { es: "Atractivos", en: "Sights" },
    Icon: Mountain
  },
  {
    href: "/hospedaje",
    image: "/images/contenedoresheromain/hotel.webp",
    label: { es: "Hospedaje nocturno", en: "Stay & nights" },
    hint: { es: "Hoteles y glamping", en: "Hotels & glamping" },
    shortLabel: { es: "Hotel", en: "Stay" },
    Icon: Hotel
  },
  {
    href: "/experiencias/que-hacer",
    image: "/images/contenedoresheromain/reloj.webp",
    label: { es: "Actividades", en: "Activities" },
    hint: { es: "Aire libre y cultura", en: "Outdoor & culture" },
    shortLabel: { es: "Qué hacer", en: "Go" },
    Icon: Activity
  },
  {
    href: "/Transporte",
    image: "/images/contenedoresheromain/ruta.webp",
    label: { es: "Roadtrips", en: "Roadtrips" },
    hint: { es: "Rutas y tips", en: "Routes & tips" },
    shortLabel: { es: "Ruta", en: "Road" },
    Icon: Car
  },
  {
    href: "/#contacto",
    image: "/images/contenedoresheromain/contacto.webp",
    label: { es: "Plan personalizado", en: "Plan with us" },
    hint: { es: "Contacta a IDEA", en: "Talk to IDEA" },
    shortLabel: { es: "Contacto", en: "Plan" },
    Icon: MessageSquare
  }
] as const;

