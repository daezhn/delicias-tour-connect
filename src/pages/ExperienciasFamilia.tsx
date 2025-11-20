import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { SEO } from "@/components/SEO";

const heroAlbums = [
  { image: "/images/Familia/fundadores.jpg", caption: { es: "Parque fundadores", en: "Parque Fundadores" } },
  { image: "/images/Familia/ciclopista.jpg", caption: { es: "Bici en la ciclopista", en: "Cycling in the bike path" } },
  { image: "/images/Familia/parquevida.jpg", caption: { es: "Parque Vida", en: "Parque Vida" } }
] as const;

const parqueVidaHighlights = [
  {
    title: { es: "Inversión que inspira", en: "Investment that inspires" },
    copy: {
      es: "Más de 50 MDP entre FECHAC y el municipio para un parque seguro en Las Palmas.",
      en: "Over 50M MXN from FECHAC and the city to build a safe park in Las Palmas."
    }
  },
  {
    title: { es: "Activación para todos", en: "Play for everyone" },
    copy: {
      es: "Playgrounds, básquet techado, cancha sintética y pista de skate en un solo circuito.",
      en: "Playgrounds, covered basketball, synthetic pitch and skate loop in one circuit."
    }
  },
  {
    title: { es: "Aprender haciendo", en: "Learning by doing" },
    copy: {
      es: "Teatro al aire libre, viveros y edificios para capacitación laboral de jóvenes y adultos.",
      en: "Open-air theatre, nurseries and buildings for youth + adult training."
    }
  }
] as const;

const colorItinerary = [
  {
    time: "09:00",
    title: { es: "Desayuno", en: "Breakfast" },
    detail: {
      es: "Café frente al reloj y recorrido fotográfico por Plaza Benito Juárez.",
      en: "Coffee near the clock plus photo walk around Benito Juárez plaza."
    }
  },
  {
    time: "12:00",
    title: { es: "Parque Fundadores", en: "Parque Fundadores" },
    detail: {
      es: "Caminata disfrutando el clima y áreas verdes con zona de juegos infantiles.",
      en: "Walking enjoying the weather and green areas with a kids play zone."
    }
  },
  {
    time: "16:00",
    title: { es: "Museos táctiles", en: "Tactile museums" },
    detail: {
      es: "MUDECH + Museo de Paleontología con laboratorios de fósiles y realidad aumentada.",
      en: "MUDECH + Paleontology Museum with fossil labs and augmented reality."
    }
  },
  {
    time: "19:30",
    title: { es: "Parque Vida", en: "Parque Vida" },
    detail: {
      es: "Skate loop, canchas y food trucks para cerrar el día.",
      en: "Skate loop, lit courts and food trucks to end the day."
    }
  }
] as const;

const kidAgenda = [
  {
    title: { es: "Tardes deportivas Parque Vida", en: "Parque Vida sports afternoons" },
    info: { es: "Martes & jueves · 18:00 h", en: "Tue & Thu · 6:00 p.m." },
    detail: {
      es: "Clínicas de fútbol rápido y básquet con instructores juveniles.",
      en: "Quick soccer and basketball clinics led by youth coaches."
    },
    link: "https://maps.google.com/?q=Parque+Vida+Delicias"
  },
  {
    title: { es: "Comida al aire libre", en: "Outdoor dining" },
    info: { es: "Domingo · 20:00 h", en: "Sunday · 8:00 p.m." },
    detail: {
      es: "Food trucks locales.",
      en: "Local food trucks."
    },
    link: "https://maps.google.com/?q=Plaza+Benito+Juarez+Delicias"
  },
  {
    title: { es: "Mini paleontólogos", en: "Mini paleontologists" },
    info: { es: "Sábado · 12:00 h", en: "Saturday · 12:00 p.m." },
    detail: {
      es: "Sesiones de limpieza de fósiles y narrativa del desierto chihuahuense.",
      en: "Fossil cleaning sessions and storytelling about the Chihuahuan desert."
    },
    link: "https://maps.google.com/?q=Museo+de+Paleontologia+de+Delicias"
  }
] as const;

const playgroundTips = [
  {
    label: { es: "Parque Vida", en: "Parque Vida" },
    items: {
      es: ["Skate loop y pump track", "Huerto comunitario monitoreado", "Zona pet friendly"],
      en: ["Skate loop & pump track", "Monitored community garden", "Pet-friendly zone"]
    }
  },
  {
    label: { es: "Parque Fundadores", en: "Parque Fundadores" },
    items: {
      es: ["Kiosco musical", "Lago con lanchitas", "Área de fogatas urbanas"],
      en: ["Music kiosk", "Lake with small boats", "Urban fire pits"]
    }
  },
  {
    label: { es: "Plaza Benito Juárez", en: "Plaza Benito Juárez" },
    items: {
      es: ["Bastidores para pintar, comida de food trucks y vendedores locales"],
      en: ["Easel for painting, food trucks and local vendors"]
    }
  }
] as const;

const ExperienciasFamilia = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Diversión en familia" : "Family fun";
  const heroScript = locale === "es" ? "Tiempo de calidad bajo el sol del desierto." : "Quality time under the desert sun.";
  const heroCopy =
    locale === "es"
      ? "Planea un día con parques nuevos, museos  y plazas. Delicias abraza a niñas, niños y acompañantes peludos."
      : "Plan a day across new parks, museums and plazas. Delicias embraces kids, teens and furry companions.";

  const handleBack = useSmartBackNavigation("/experiencias/que-hacer");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7ef] via-white to-[#f6f0ff] text-foreground">
      <SEO
        title={locale === "es" ? "Experiencias Familiares" : "Family Experiences"}
        description={
          locale === "es"
            ? "Parques, museos interactivos y actividades para disfrutar con niños en Delicias."
            : "Parks, interactive museums and activities to enjoy with kids in Delicias."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,193,0.55),transparent)]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(255,255,255,0.4) 0%, transparent 60%), linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 220px 220px, 220px 220px"
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 right-4 h-64 w-64 rounded-full bg-secondary/20 blur-[120px]" aria-hidden="true" />
            <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-[#f6b043]/30 blur-[120px]" aria-hidden="true" />
          </div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-6 rounded-[34px] border border-white/50 bg-white/80 p-8 shadow-[0_35px_85px_rgba(203,137,92,0.3)] backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
                >
                  <ArrowUpRight className="h-4 w-4 rotate-180" />
                  {locale === "es" ? "Regresar" : "Back"}
                </button>
                <span className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.4em] text-secondary">
                  {locale === "es" ? "Nuevo parque" : "New park"}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Agenda familiar" : "Family agenda"}</p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="font-script text-3xl italic text-secondary/80">{heroScript}</p>
              <p className="max-w-xl text-sm text-foreground/70">{heroCopy}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroAlbums.map((album, index) => (
                <div
                  key={album.image}
                  className="group space-y-2 rounded-[32px] border border-white/60 bg-white/70 p-3 shadow-[0_30px_60px_rgba(203,137,92,0.2)] backdrop-blur"
                >
                  <div className="relative overflow-hidden rounded-[28px]">
                    <img
                      src={album.image}
                      alt={album.caption[locale]}
                      className="h-48 w-full object-cover transition duration-700 group-hover:scale-105 animate-float-y"
                      loading="lazy"
                      decoding="async"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">{album.caption[locale]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-8 right-6 hidden rounded-[28px] border border-white/50 bg-white/75 px-6 py-4 text-xs uppercase tracking-[0.4em] text-secondary shadow-[0_25px_65px_rgba(203,137,92,0.25)] backdrop-blur lg:block">
            {locale === "es" ? "Plan sugerido · 4 paradas" : "Suggested plan · 4 stops"}
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl grid gap-10 px-4 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Parque Vida" : "Parque Vida"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "El parque más nuevo de Delicias" : "Delicias’ newest park"}</h2>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Ubicado en Las Palmas, nació gracias a FECHAC y el municipio como punto seguro de convivencia."
                  : "Located in Las Palmas, built thanks to FECHAC and the city as a safe gathering point."}
              </p>
              <a
                href="https://encortodigital.com/general/inauguran-parque-vida-en-delicias/"
                target="_blank"
                rel="noreferrer"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
              >
                {locale === "es" ? "Leer nota" : "Read article"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4">
              {parqueVidaHighlights.map((highlight) => (
                <article key={highlight.title.es} className="rounded-[28px] border border-foreground/10 bg-[#fff7ef] p-5 shadow-[0_15px_35px_rgba(203,137,92,0.15)]">
                  <h3 className="text-xl font-semibold text-secondary">{highlight.title[locale]}</h3>
                  <p className="text-sm text-foreground/70">{highlight.copy[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fef2f0] py-20">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Itinerario familiar" : "Family itinerary"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "24 horas de diversión" : "24 hours of fun"}</h2>
            </div>
            <div className="space-y-5">
              {colorItinerary.map((stop, index) => (
                <article key={stop.time} className="flex flex-col gap-3 rounded-[28px] border border-secondary/10 bg-white p-5 shadow-[0_15px_35px_rgba(203,137,92,0.12)] sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="text-3xl font-black">{stop.time}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/70">#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{stop.title[locale]}</h3>
                    <p className="text-sm text-foreground/70">{stop.detail[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Agenda kids" : "Kids agenda"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "Planifica la tarde perfecta" : "Plan the perfect afternoon"}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {kidAgenda.map((event) => (
                <article key={event.title.es} className="flex flex-col rounded-[28px] border border-foreground/10 bg-[#fff7ef] p-5 shadow-[0_15px_35px_rgba(203,137,92,0.12)]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/70">{event.info[locale]}</p>
                  <h3 className="text-2xl font-semibold text-secondary">{event.title[locale]}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{event.detail[locale]}</p>
                  <a
                    href={event.link}
                    target="_blank"
                rel="noreferrer"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
                  >
                    {locale === "es" ? "Ver ubicación" : "See location"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-5xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">{locale === "es" ? "Checklist de parques" : "Playground checklist"}</p>
              <h2 className="text-3xl font-black">{locale === "es" ? "Espacios favoritos" : "Favorite spaces"}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {playgroundTips.map((space) => (
                <article key={space.label.es} className="rounded-[28px] border border-white/20 bg-white/10 p-5 shadow-[0_20px_
45px_rgba(0,0,0,0.25)] backdrop-blur">
                  <h3 className="text-2xl font-semibold">{space.label[locale]}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-white/85">
                    {space.items[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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

export default ExperienciasFamilia;
