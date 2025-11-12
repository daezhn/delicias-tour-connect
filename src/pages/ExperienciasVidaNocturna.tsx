import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { ArrowUpRight } from "lucide-react";

const neonVenues = [
  {
    image: "/vidanocturna/coctel.png",
    label: { es: "Bares de autor", en: "Signature bars" },
    title: { es: "Cócteles", en: "Cocktails" },
    detail: {
      es: "Barras íntimas con mixología creativa, bitters caseros y playlists cuidadas para antes del club.",
      en: "Intimate bars pouring creative sotol mixes, house bitters and curated playlists to start the night."
    }
  },
  {
    image: "/vidanocturna/djantro.png",
    label: { es: "Antros inmersivos", en: "Immersive clubs" },
    title: { es: "Pantallas y DJ sets", en: "Screens & DJ sets" },
    detail: {
      es: "Salas con mapping, line ups de electrónica y reggaetón y barras abiertas hasta la madrugada.",
      en: "Mapped rooms with electronic/reggaeton lineups and bars running until late."
    }
  },
  {
    image: "/vidanocturna/sazon.png",
    label: { es: "Cantinas boutique", en: "Boutique cantinas" },
    title: { es: "Sazón clásico", en: "Classic flavor" },
    detail: {
      es: "Recetas centenarias, maridajes con sotol y tríos en vivo en espacios íntimos.",
      en: "Centenary recipes, sotol pairings and live trios in intimate rooms."
    }
  },
  {
    image: "/vidanocturna/tacos.png",
    label: { es: "Afterhours criollo", en: "Criollo afterhours" },
    title: { es: "Tacos nocturnos", en: "Late-night tacos" },
    detail: {
      es: "Foodtrucks frente a los clubs con trompos y salsas de nuez.",
      en: "Food trucks outside clubs with trompo and pecan salsas."
    }
  }
] as const;

const nightTimeline = [
  {
    time: "19:00",
    title: { es: "Golden hour en Plaza Benito Juárez", en: "Golden hour at Benito Juárez Plaza" },
    description: {
      es: "Arranca con música a cielo abierto.",
      en: "Begin with open-air music."
    }
  },
  {
    time: "22:00",
    title: { es: "Club hopping", en: "Club hopping " },
    description: {
      es: "Line ups de DJs, pantallas y coctelería.",
      en: "DJ lineups, screens and cocktails."
    }
  },
  {
    time: "01:30",
    title: { es: "After", en: "After" },
    description: {
      es: "Cantinas con jam sessions íntimas y maridajes dulces.",
      en: "Cantinas hosting intimate jam sessions and sweet pairings."
    }
  },
  {
    time: "03:00",
    title: { es: "Food trucks nocturnos", en: "Late-night food trucks" },
    description: {
      es: "Tacos, burritos para cerrar la noche.",
      en: "Tacos, burritos to wrap the night."
    }
  }
] as const;

const afterTips = [
  {
    heading: { es: "Dress code brillante", en: "Glow-ready dress code" },
    copy: {
      es: "Muchas terrazas piden smart casual; suma accesorios metálicos para resaltar con la iluminación LED.",
      en: "Rooftops lean smart casual; add metallic accessories so LEDs make you pop."
    }
  },
  {
    heading: { es: "Ruta responsable", en: "Safe route" },
    copy: {
      es: "Pide transporte por apps locales y aprovecha el corredor peatonal entre Sexta y la plaza central.",
      en: "Use local ride-hailing and walk the pedestrian corridor between 6th Ave and the plaza."
    }
  },
  {
    heading: { es: "Reservas en barra", en: "Bar reservations" },
    copy: {
      es: "Algunos speakeasies solo aceptan mesas con contraseña vía Instagram, revisa historias el mismo día.",
      en: "Several speakeasies require IG password messages day-of; watch their stories."
    }
  }
] as const;

const ExperienciasVidaNocturna = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation("/experiencias/que-hacer");
  const heroHeading =
    locale === "es" ? "La noche de Delicias vibra en neón" : "Delicias by night glows in neon";
  const heroCopy =
    locale === "es"
      ? "Terrazas cálidas y cantinas que reinventan la experiencia. Planea tu after perfecto."
      : "Warm rooftops and cantinas reinventing the experience. Build your perfect after.";
  const heroScript =
    locale === "es" ? "Tragos, beats y neón." : "Drinks, beats & neon.";

  return (
    <div className="min-h-screen bg-[#050917] text-white">
      <Navigation />
      <main className="page-offset">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-10 lg:px-20">
          <div className="absolute inset-0">
            <img
              src="/images/Galería/17.jpg"
              alt=""
              className="h-full w-full object-cover opacity-40"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#040b1f] via-[#0c0526]/90 to-[#ff5ea8]/30" />
          </div>
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </button>
              <p className="text-sm uppercase tracking-[0.6em] text-white/70">
                {locale === "es" ? "Night flow" : "Night flow"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{heroHeading}</h1>
              <p className="font-script text-3xl italic text-[#ffb4d9]">{heroScript}</p>
              <p className="max-w-xl text-base text-white/80">{heroCopy}</p>
              <div className="flex flex-wrap gap-3">
                {["DJs", "Drinks", "Rooftops", "After"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/bares+y+antros+en+delicias+chihuahua"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#050917] shadow-[0_25px_45px_rgba(0,0,0,0.35)] transition hover:bg-white/90"
                >
                  {locale === "es" ? "Mapa nocturno" : "Night map"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/explore/locations/225678326/delicias-chihuahua/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em]"
                >
                  Instagram
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[32px] border border-white/15 bg-black/20 p-6 shadow-[0_35px_75px_rgba(0,0,0,0.45)] backdrop-blur">
                <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">
                  {locale === "es" ? "Line up del fin de semana" : "Weekend line-up"}
                </p>
                <ul className="mt-4 space-y-3 text-sm text-white/80">
                  <li>· La ultima bar · 20:00 h</li>
                  <li>· Cerveceria 19 · 22:30 h</li>
                  <li>· Las Delicias · 00:15 h</li>
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <img
                  src="/images/Galería/10.jpg"
                  alt=""
                  className="h-48 w-full rounded-[28px] object-cover shadow-[0_25px_55px_rgba(0,0,0,0.4)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/Galería/1.jpg"
                  alt=""
                  className="h-48 w-full rounded-[28px] object-cover shadow-[0_25px_55px_rgba(0,0,0,0.4)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/5 bg-[#090f24] py-16">
          <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-8">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-white/50">
                  {locale === "es" ? "Guía luminosa" : "Neon guide"}
                </p>
                <h2 className="text-3xl font-black">{locale === "es" ? "Dónde encender la noche" : "Where to light up the night"}</h2>
                <p className="font-script text-2xl italic text-[#ffb4d9]/90">
                  {locale === "es" ? "Busca el glow perfecto" : "Find your perfect glow"}
                </p>
              </div>
              <div className="hidden text-xs uppercase tracking-[0.35em] text-white/70 sm:block">
                {locale === "es" ? "Desliza" : "Swipe"}
              </div>
            </div>
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
              {neonVenues.map((venue) => (
                <article
                  key={venue.title.es}
                  className="flex w-72 snap-center flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <img
                    src={venue.image}
                    alt={venue.title[locale]}
                    className="h-40 w-full rounded-[24px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-white/60">{venue.label[locale]}</p>
                  <h3 className="text-2xl font-semibold text-white">{venue.title[locale]}</h3>
                  <p className="mt-2 text-sm text-white/80">{venue.detail[locale]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#070b1d] to-[#12051d] py-20">
          <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-8">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/50">
                {locale === "es" ? "Itinerario nocturno" : "Night itinerary"}
              </p>
              <h2 className="text-3xl font-black">
                {locale === "es" ? "Ruta sugerida hasta el amanecer" : "Suggested route until sunrise"}
              </h2>
            </div>
            <div className="space-y-6">
              {nightTimeline.map((stop, index) => (
                <article
                  key={stop.time}
                  className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-[#ff5ea8]">{stop.time}</span>
                    <h3 className="text-2xl font-semibold">{stop.title[locale]}</h3>
                  </div>
                  <p className="text-sm text-white/75">{stop.description[locale]}</p>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/50">
                    <span>#{String(index + 1).padStart(2, "0")}</span>
                    <span>·</span>
                    <span>{locale === "es" ? "Sugerencia" : "Suggested"}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#050917] py-20">
          <div className="mx-auto max-w-5xl space-y-10 px-4 sm:px-8">
            <div className="text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/50">
                {locale === "es" ? "After care" : "After care"}
              </p>
              <h2 className="text-3xl font-black">
                {locale === "es" ? "Tip del local" : "Local tip"}
              </h2>
              <p className="font-script text-2xl italic text-[#ffb4d9]/90">
                {locale === "es" ? "Respira, hidrata, repite." : "Breathe, hydrate, repeat."}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {afterTips.map((tip) => (
                <article
                  key={tip.heading.es}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.3)] backdrop-blur"
                >
                  <h3 className="text-xl font-semibold text-white">{tip.heading[locale]}</h3>
                  <p className="mt-3 text-sm text-white/75">{tip.copy[locale]}</p>
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

export default ExperienciasVidaNocturna;
