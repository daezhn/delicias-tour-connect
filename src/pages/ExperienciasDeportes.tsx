import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroImages = ["/images/Galería/8.jpg", "/images/hero-delicias-2.jpg", "/images/parque-central.jpg"] as const;

const actionCards = [
  {
    image: "/images/parque-central.jpg",
    title: { es: "Ruta amanecer 7K", en: "Sunrise 7K route" },
    description: {
      es: "Corre desde la plaza Benito Juárez hasta el Parque Fundadores y vuelve entre árboles maduros y estaciones de hidratación.",
      en: "Run from Benito Juárez plaza to Parque Fundadores and back through shaded trees and hydration stops."
    },
    stats: { es: "Terreno mixto · 7 km", en: "Mixed terrain · 7 km" }
  },
  {
    image: "/images/hero-delicias-3.jpg",
    title: { es: "SUP & kayak Presa Las Vírgenes", en: "SUP & kayak Las Vírgenes dam" },
    description: {
      es: "Sesiones guiadas al amanecer con miradores y picnic posterior frente al valle algodonero.",
      en: "Guided sunrise sessions with lookouts and a valley picnic afterwards."
    },
    stats: { es: "Duración 2.5 h", en: "2.5 h session" }
  },
  {
    image: "/images/hero-delicias-1.jpg",
    title: { es: "Gravel y ciclismo agro", en: "Gravel & agro cycling" },
    description: {
      es: "Recorre los drenes del distrito de riego y termina en huertos de nogal con degustación de nuez.",
      en: "Ride irrigation roads and finish at pecan orchards with nut tastings."
    },
    stats: { es: "Nivel intermedio", en: "Intermediate level" }
  }
] as const;

const itinerary = [
  {
    time: "06:30",
    label: { es: "Trota entre plazas", en: "Run through plazas" },
    detail: {
      es: "Calienta en el reloj monumental y toma dirección al Parque Fundadores antes de que suba el sol.",
      en: "Warm up at the clock tower and head to Parque Fundadores before the sun is high."
    }
  },
  {
    time: "10:00",
    label: { es: "Kayak en Presa Las Vírgenes", en: "Kayak at Las Vírgenes Dam" },
    detail: {
      es: "Rema en aguas tranquilas y aprovecha el mirador para hacer fotos panorámicas.",
      en: "Paddle calm waters and use the overlook for panoramic shots."
    }
  },
  {
    time: "15:00",
    label: { es: "Tarde de estadio", en: "Stadium afternoon" },
    detail: {
      es: "Visita el Gran Estadio Delicias y consigue mercancía de los Algodoneros, pentacampeones estatales.",
      en: "Tour Gran Estadio Delicias and shop Algodoneros merch, the state five-time champions."
    }
  },
  {
    time: "20:00",
    label: { es: "Nocturno en Parque Vida", en: "Night session at Parque Vida" },
    detail: {
      es: "Canchas iluminadas, pista de skate y clases funcionales gratuitas para cerrar el día.",
      en: "Lit courts, skate track and free functional classes to close the day."
    }
  }
] as const;

const agenda = [
  {
    eyebrow: { es: "Temporada abril-agosto", en: "April–August season" },
    title: { es: "Algodoneros de Delicias", en: "Algodoneros de Delicias" },
    description: {
      es: "Pentacampeones de la Liga Estatal con casa en el Gran Estadio Delicias. Ambiente familiar, food trucks y zona kids.",
      en: "Five-time State League champions playing at Gran Estadio Delicias. Family vibe, food trucks and kids area."
    },
    link: "https://es.wikipedia.org/wiki/Algodoneros_de_Delicias"
  },
  {
    eyebrow: { es: "Junio", en: "June" },
    title: { es: "10K Circuito Nogales", en: "Nogales Circuit 10K" },
    description: {
      es: "Ruta matutina entre huertas y drenes con categorías recreativas y competitivas. Incluye kit con jersey local.",
      en: "Morning route across pecan groves and irrigation canals with recreational and competitive categories. Includes local jersey kit."
    },
    link: "https://maps.google.com/?q=Parque+Fundadores+Delicias"
  },
  {
    eyebrow: { es: "Todo el año", en: "Year-round" },
    title: { es: "Sesiones Parque Vida", en: "Parque Vida sessions" },
    description: {
      es: "Cancha de fútbol sintético, básquet techado y gimnasio al aire libre gratuito en Las Palmas.",
      en: "Synthetic soccer field, covered basketball and free outdoor gym inside Las Palmas."
    },
    link: "https://encortodigital.com/general/inauguran-parque-vida-en-delicias/"
  }
] as const;

const venues = [
  {
    name: "Gran Estadio Delicias",
    detail: {
      es: "Capacidad 4,300 aficionados. Tours guiados y locker room accesible cuando el equipo no juega.",
      en: "Capacity 4,300 fans. Guided tours and locker room access on non-game days."
    }
  },
  {
    name: "Parque Vida",
    detail: {
      es: "Nuevo complejo deportivo en Las Palmas con fútbol, básquet, skate loop y áreas de acondicionamiento.",
      en: "New sports complex in Las Palmas with soccer, basketball, skate loop and conditioning zones."
    }
  },
  {
    name: "Presa Las Vírgenes",
    detail: {
      es: "Embalse icónico para kayak, pesca responsable y miradores con mesas tipo picnic.",
      en: "Iconic reservoir for kayaking, responsible fishing and lookouts with picnic tables."
    }
  }
] as const;

const ExperienciasDeportes = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Deportes & aventura" : "Sports & adventure";
  const heroCopy =
    locale === "es"
      ? "Delicias vibra con béisbol, ciclismo en sus drenes históricos y agua calmada perfecta para remar. Diseña tu día activo con parques nuevos y la energía Algodonera."
      : "Delicias pulses with baseball, cycling along historic canals and calm water ideal for paddling. Design your active day with new parks and Algodoneros energy.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c2c68]/5 via-[#fffdf7] to-[#f6b043]/20 text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] px-4 py-20 text-white sm:px-8 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-6">
              <a
                href="/experiencias/que-hacer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </a>
              <p className="font-tourism text-3xl text-white/80">
                {locale === "es" ? "Capital deportiva del desierto" : "Desert sports capital"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
              <p className="text-lg text-white/85">{heroCopy}</p>
              <ul className="space-y-3 text-sm text-white/80">
                <li>{locale === "es" ? "Béisbol de alto nivel con los Algodoneros en el Gran Estadio." : "Top-tier baseball with the Algodoneros at Gran Estadio."}</li>
                <li>
                  {locale === "es"
                    ? "Kayak y SUP en la presa Las Vírgenes y rutas gravel entre huertos."
                    : "Kayak & SUP at Las Vírgenes dam plus gravel rides through orchards."}
                </li>
                <li>
                  {locale === "es"
                    ? "Parque Vida: canchas iluminadas, skate, gimnasio al aire libre."
                    : "Parque Vida: lit courts, skate track, outdoor gym."}
                </li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                <img
                  src={heroImages[0]}
                  alt={locale === "es" ? "Ciclistas en Delicias" : "Cyclists in Delicias"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <img
                    src={heroImages[1]}
                    alt={locale === "es" ? "Kayak en Las Vírgenes" : "Kayak at Las Vírgenes"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <img
                    src={heroImages[2]}
                    alt={locale === "es" ? "Parques deportivos" : "Sports parks"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Rutas activas" : "Active routes"}
              </p>
              <p className="font-tourism text-4xl text-secondary/90">
                {locale === "es" ? "Planifica tu entrenamiento" : "Plan your training"}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {actionCards.map((card) => (
                <article
                  key={card.title.es}
                  className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-[#fef7ef] shadow-[0_25px_55px_rgba(4,18,42,0.08)]"
                >
                  <img src={card.image} alt={card.title[locale]} className="h-60 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <h3 className="text-2xl font-semibold text-foreground">{card.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{card.description[locale]}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{card.stats[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#fef7ef] via-white to-[#f6b043]/20 py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/70">
                  {locale === "es" ? "Itinerario 24 horas" : "24-hour itinerary"}
                </p>
                <h2 className="text-3xl font-black text-foreground">
                  {locale === "es" ? "Un día deportivo en Delicias" : "A sporty day in Delicias"}
                </h2>
                <ol className="space-y-6">
                  {itinerary.map((stop) => (
                    <li key={stop.time} className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_15px_35px_rgba(4,18,42,0.08)]">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-semibold">{stop.label[locale]}</h3>
                        <span className="text-sm font-mono text-secondary/80">{stop.time} h</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{stop.detail[locale]}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/60">
                  {locale === "es" ? "Agenda Atlética" : "Athletic agenda"}
                </p>
                <div className="space-y-4">
                  {agenda.map((event) => (
                    <article
                      key={event.title.es}
                      className="rounded-[28px] border border-secondary/20 bg-white/90 p-6 shadow-[0_20px_45px_rgba(4,18,42,0.1)] backdrop-blur"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-secondary/70">
                        {event.eyebrow[locale]}
                      </p>
                      <h3 className="text-2xl font-semibold text-secondary">{event.title[locale]}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{event.description[locale]}</p>
                      <a
                        href={event.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-secondary"
                      >
                        {locale === "es" ? "Conoce más" : "Learn more"}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Infraestructura deportiva" : "Sports infrastructure"}
              </p>
              <h2 className="text-3xl font-black text-foreground">
                {locale === "es" ? "Espacios clave" : "Key venues"}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {venues.map((venue) => (
                <article
                  key={venue.name}
                  className="rounded-[32px] border border-black/5 bg-[#fef7ef] p-6 text-center shadow-[0_20px_45px_rgba(4,18,42,0.08)]"
                >
                  <h3 className="text-2xl font-semibold text-secondary">{venue.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{venue.detail[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienciasDeportes;
