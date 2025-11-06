import { useEffect, useState } from "react";
import { Locale } from "@/lib/i18n";

const tickerES = [
  { title: "Festival de la Cosecha", time: "10:00", location: "Centro de Convenciones" },
  { title: "Entre tumbas", time: "12:30", location: "Panteon Municipal" },
];

const tickerEN = [
  { title: "Harvest Festival", time: "10:00", location: "Main Plaza" },
  { title: "Gastronomy Route", time: "12:30", location: "Municipal Market" },
  { title: "Cultural Tour", time: "3:00 PM", location: "Desert Museum" },
];

export const getTickerEvents = (locale: Locale) => {
  if (locale === "en") {
    return { events: tickerEN, temp: "28°C", condition: "Sunny" };
  }
  return { events: tickerES, temp: "28°C", condition: "Soleado" };
};

export const useClock = (interval = 10_000) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), interval);
    return () => clearInterval(id);
  }, [interval]);
  return now;
};
