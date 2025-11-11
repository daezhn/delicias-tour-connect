import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroShots = ["/images/Deportes/hero1.JPG", "/images/Deportes/hero2.JPG", "/images/Deportes/hero3.jpg"] as const;

const actionCards = [
  {
    image: "/images/Deportes/presa1.jpg",
    title: { es: "Kayak Presa Las Vírgenes", en: "Kayak Las Vírgenes dam" },
    description: {
      es: "Remo al amanecer con guía y parada fotográfica en el mirador superior.",
      en: "Sunrise paddle with a guide plus photo stop at the overlook."
    },
    stats: { es: "Duración 2.5 h", en: "2.5 h session" }
  },
  {
    image: "/images/Deportes/poli.jpg",
    title: { es: "Polideportivo Bicentenario", en: "Bicentenario Sports Center" },
    description: {
      es: "Visita el polideportivo conociendo su infraestructura y actividades.",
      en: "Visit the sports center exploring its facilities and activities."
    },
    stats: { es: "Familiar ", en: "Family-friendly" }
  },
  {
    image: "/images/Deportes/parquevida.jpg",
    title: { es: "Circuito Parque Vida", en: "Parque Vida circuit" },
    description: {
      es: "Funcional al aire libre, skate loop y canchas encendidas todas las tardes.",
      en: "Outdoor functional training, skate loop and lit courts every evening."
    },
    stats: { es: "Familiar · gratuito", en: "Family-friendly · free" }
  }
] as const;

const agenda = [
  {
    eyebrow: { es: "Temporada abril-agosto", en: "April–August season" },
    title: { es: "Algodoneros de Delicias", en: "Algodoneros de Delicias" },
    description: {
      es: "Pentacampeones de la Liga Estatal con ambiente familiar, food trucks y zona kids.",
      en: "State League five-time champions with family vibe, food trucks and kids zone."
    },
    link: "https://es.wikipedia.org/wiki/Algodoneros_de_Delicias"
  },
  {
    eyebrow: { es: "Junio", en: "June" },
    title: { es: "10K Circuito Nogales", en: "Nogales Circuit 10K" },
    description: {
      es: "Ruta matutina entre huertas y drenes con categorías recreativas y competitivas.",
      en: "Morning route through orchards and canals with fun and competitive categories."
    },
    link: "https://maps.google.com/?q=Parque+Fundadores+Delicias"
  },
  {
    eyebrow: { es: "Todo el año", en: "Year-round" },
    title: { es: "Sesiones Parque Vida", en: "Parque Vida sessions" },
    description: {
      es: "Cancha sintética, básquet techado y funcional gratuito en Las Palmas.",
      en: "Synthetic pitch, covered basketball and free functional training in Las Palmas."
    },
    link: "https://encortodigital.com/general/inauguran-parque-vida-en-delicias/"
  }
] as const;

const sanSilvestreHighlight = {
  date: { es: "31 de diciembre · 16:00 h", en: "December 31 · 4:00 p.m." },
  title: { es: "Carrera San Silvestre Delicias", en: "San Silvestre Delicias" },
  description: {
    es: "Tradición de fin de año con ruta céntrica, categorías familiares y medalla coleccionable. Perfecta para despedir el año corriendo.",
    en: "Year-end tradition with downtown route, family categories and collectible medal. Perfect way to close the year running."
  },
  cta: "https://www.google.com/maps/search/san+silvestre+delicias"
};

const venues = [
  {
    name: { es: "Gran Estadio Delicias", en: "Gran Estadio Delicias" },
    detail: {
      es: "Casa de los Algodoneros · tours guiados · museo del equipo.",
      en: "Home of Algodoneros · guided tours · team museum."
    }
  },
  {
    name: { es: "Parque Vida", en: "Parque Vida" },
    detail: {
      es: "Fútbol sintético, básquet techado, skate y gimnasio al aire libre.",
      en: "Synthetic soccer, covered basketball, skate loop and outdoor gym."
    }
  },
  {
    name: { es: "Presa Las Vírgenes", en: "Las Vírgenes Dam" },
    detail: {
      es: "Kayak, SUP, pesca responsable y miradores con mesas picnic.",
      en: "Kayak, SUP, responsible fishing and lookouts with picnic tables."
    }
  }
] as const;

const ExperienciasDeportes = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Deportes" : "Sports";
  const heroCopy =
    locale === "es"
      ? "La ciudad respira desde temprano: tours en el Gran Estadio, ciclismo, maratones y rutas outdoor."
      : "The city breathes early: Gran Estadio tours, cycling, marathons and outdoor routes to warm up before playball.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030917] via-[#0c1f3d] to-[#f6b043]/20 text-white">
      <Navigation />
      <main className="pt-[90px]">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,25,66,0.65),transparent)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-6">
              <a
                href="/experiencias/que-hacer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </a>
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/60">
                {locale === "es" ? "Diamante del desierto" : "Desert diamond"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
              <p className="text-lg text-white/85">{heroCopy}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroShots.map((shot) => (
                <img key={shot} src={shot} alt="" className="h-60 w-full rounded-[32px] object-cover shadow-[0_30px_70px_rgba(0,0,0,0.35)]" loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fef7ef] py-20 text-foreground">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Rutas activas" : "Active routes"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "Planifica tu entrenamiento" : "Plan your training"}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {actionCards.map((card) => (
                <article key={card.title.es} className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_55px_rgba(4,18,42,0.08)]">
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

        <section className="bg-gradient-to-br from-[#f7fbff] via-white to-[#fef7ef] py-20 text-foreground">
          <div className="mx-auto max-w-5xl space-y-6 px-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/60">
              {locale === "es" ? "Agenda deportiva" : "Sports agenda"}
            </p>
            <div className="grid gap-4 lg:grid-cols-2">
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
        </section>

        <section className="bg-white py-20 text-foreground">
          <div className="mx-auto max-w-5xl grid gap-8 px-4 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Gran fondo invernal" : "Winter highlight"}
              </p>
              <h2 className="text-3xl font-black text-secondary">{sanSilvestreHighlight.title[locale]}</h2>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary/70">{sanSilvestreHighlight.date[locale]}</p>
              <p className="text-sm text-foreground/70">{sanSilvestreHighlight.description[locale]}</p>
              <a
                href={sanSilvestreHighlight.cta}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
              >
                {locale === "es" ? "Ver ruta" : "View route"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="rounded-[32px] border border-black/5 bg-[#fef7ef] p-6 shadow-[0_20px_45px_rgba(4,18,42,0.08)]">
              <h3 className="text-2xl font-semibold text-secondary">
                {locale === "es" ? "Tips para la San Silvestre" : "San Silvestre tips"}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/70">
                <li>· {locale === "es" ? "Entrega de paquetes 30 de diciembre en Plaza Benito Juárez." : "Packet pick-up on Dec 30 at Benito Juárez plaza."}</li>
                <li>· {locale === "es" ? "Categorías 3K familiar, 5K recreativa y 10K competitiva." : "Categories: 3K family, 5K fun run, 10K competitive."}</li>
                <li>· {locale === "es" ? "Medalla coleccionable inspirada en la Presa Las Vírgenes." : "Collectible medal inspired by Las Vírgenes dam."}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-foreground">
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
                  key={venue.name.es}
                  className="rounded-[32px] border border-black/5 bg-[#fef7ef] p-6 text-center shadow-[0_20px_45px_rgba(4,18,42,0.08)]"
                >
                  <h3 className="text-2xl font-semibold text-secondary">{venue.name[locale]}</h3>
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
