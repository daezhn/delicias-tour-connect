import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroShots = ["/images/Galería/8.jpg", "/images/hero-delicias-2.jpg", "/images/parque-central.jpg"] as const;

const algodonerosMoments = [
  {
    tag: { es: "Temporada regular", en: "Regular season" },
    title: { es: "Algodoneros pentacampeones", en: "Five-time champions" },
    description: {
      es: "Rachas históricas 2019-2023 con estadio lleno, mascots y fireworks cada serie en casa.",
      en: "Historic 2019-2023 streak with packed stands, mascots and fireworks at every home series."
    },
    detail: { es: "Gran Estadio Delicias · 4,300 aficionados", en: "Gran Estadio Delicias · 4,300 fans" },
    image: "/images/torre-reloj.jpg"
  },
  {
    tag: { es: "Game day", en: "Game day" },
    title: { es: "Tour por el estadio", en: "Stadium tour" },
    description: {
      es: "Visita dugout, vestidores y la sala de trofeos antes del playball. Reserva en taquilla en días sin juego.",
      en: "Visit the dugout, locker rooms and trophy hall before playball. Reserve at the box office on off days."
    },
    detail: { es: "Reservación previa · 11:00 h", en: "Advance reservation · 11:00 a.m." },
    image: "/images/Galería/11.jpg"
  },
  {
    tag: { es: "Merch oficial", en: "Official merch" },
    title: { es: "Tienda Algodonera", en: "Algodoneros store" },
    description: {
      es: "Jerseys edición limitada, gorras y bats firmados se venden durante la serie local.",
      en: "Limited jerseys, caps and signed bats drop during each home series."
    },
    detail: { es: "Viernes a domingo · 17:00-22:00 h", en: "Friday–Sunday · 5–10 p.m." },
    image: "/images/Galería/18.jpg"
  }
] as const;

const actionCards = [
  {
    image: "/images/Galería/6.jpg",
    title: { es: "Kayak Presa Las Vírgenes", en: "Kayak Las Vírgenes dam" },
    description: {
      es: "Remo al amanecer con guía y parada fotográfica en el mirador superior.",
      en: "Sunrise paddle with a guide plus photo stop at the overlook."
    },
    stats: { es: "Duración 2.5 h", en: "2.5 h session" }
  },
  {
    image: "/images/Galería/8.jpg",
    title: { es: "Gravel district ride", en: "Gravel district ride" },
    description: {
      es: "Rueda entre drenes agrícolas y termina con degustación de nuez y café local.",
      en: "Ride irrigation canals and finish with pecan + local coffee tasting."
    },
    stats: { es: "Nivel intermedio", en: "Intermediate level" }
  },
  {
    image: "/images/parque-central.jpg",
    title: { es: "Circuito Parque Vida", en: "Parque Vida circuit" },
    description: {
      es: "Funcional al aire libre, skate loop y canchas encendidas todas las tardes.",
      en: "Outdoor functional training, skate loop and lit courts every evening."
    },
    stats: { es: "Familiar · gratuito", en: "Family-friendly · free" }
  }
] as const;

const gameDayPlan = [
  {
    time: "11:00",
    block: { es: "Tour Algodonero", en: "Algodonero tour" },
    detail: {
      es: "Ingresa al dugout, visita vestidores y conoce el mural histórico del equipo.",
      en: "Step into the dugout, visit the locker rooms and learn from the team history mural."
    }
  },
  {
    time: "13:30",
    block: { es: "Lunch temático", en: "Themed lunch" },
    detail: {
      es: "Restaurantes alrededor del estadio ofrecen menús con nombres de jugadores.",
      en: "Restaurants near the stadium feature dishes named after players."
    }
  },
  {
    time: "17:00",
    block: { es: "Fan fest", en: "Fan fest" },
    detail: {
      es: "Zona kids, mascots y música en vivo previo al partido.",
      en: "Kids zone, mascots and live music before first pitch."
    }
  },
  {
    time: "19:30",
    block: { es: "Playball", en: "Playball" },
    detail: {
      es: "Algodoneros vs rivales estatales. Fireworks tras la séptima entrada.",
      en: "Algodoneros vs state rivals. Fireworks after the seventh inning."
    }
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
  const heroTitle = locale === "es" ? "Deportes & Algodoneros" : "Sports & Algodoneros";
  const heroCopy =
    locale === "es"
      ? "La ciudad respira pelota caliente: Algodoneros pentacampeones, tours en el Gran Estadio y rutas outdoor para calentar antes del playball."
      : "The city breathes baseball: Algodoneros five-time champs, Gran Estadio tours and outdoor routes to warm up before playball.";

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

        <section className="border-y border-white/10 bg-[#060d1f] py-16">
          <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-8">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-white/60">{locale === "es" ? "Momentos Algodoneros" : "Algodoneros moments"}</p>
                <h2 className="text-3xl font-black">{locale === "es" ? "Todo gira alrededor del béisbol" : "Everything revolves around baseball"}</h2>
              </div>
              <div className="hidden text-xs uppercase tracking-[0.35em] text-white/60 sm:block">{locale === "es" ? "Desliza" : "Swipe"}</div>
            </div>
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
              {algodonerosMoments.map((moment) => (
                <article
                  key={moment.title.es}
                  className="flex w-80 snap-center flex-col overflow-hidden rounded-[36px] border border-white/15 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <img src={moment.image} alt={moment.title[locale]} className="h-44 w-full rounded-[24px] object-cover" loading="lazy" decoding="async" />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/60">{moment.tag[locale]}</p>
                  <h3 className="text-2xl font-semibold text-white">{moment.title[locale]}</h3>
                  <p className="mt-2 text-sm text-white/80">{moment.description[locale]}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{moment.detail[locale]}</p>
                </article>
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
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/70">{locale === "es" ? "Itinerario 24 horas" : "24-hour itinerary"}</p>
                <h2 className="text-3xl font-black text-foreground">{locale === "es" ? "Game day Algodonero" : "Algodonero game day"}</h2>
                <ol className="space-y-6">
                  {gameDayPlan.map((stop) => (
                    <li key={stop.time} className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_15px_35px_rgba(4,18,42,0.08)]">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-semibold">{stop.block[locale]}</h3>
                        <span className="text-sm font-mono text-secondary/80">{stop.time}</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{stop.detail[locale]}</p>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/60">
                  {locale === "es" ? "Agenda deportiva" : "Sports agenda"}
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
