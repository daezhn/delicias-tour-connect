import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const heroHighlights = [
  {
    es: "MUDECH conserva historias fósiles y residencias de escultura contemporánea.",
    en: "MUDECH preserves fossil tales and contemporary sculpture residencies."
  },
  {
    es: "Plaza Benito Juárez funciona como escenario vivo.",
    en: "Benito Juárez plaza is a living stage."
  },
  {
    es: "Fotografía y literatura tejen ruta propia entre barrios algodoneros.",
    en: "Photography and literature craft their own route across cotton neighborhoods."
  }
] as const;

const creativeItinerary = [
  {
    time: "09:30",
    label: { es: "Murales & breakfast", en: "Murals & breakfast" },
    detail: {
      es: "Café cerca del reloj.",
      en: "Coffee near the clock."
    }
  },
  {
    time: "11:30",
    label: { es: "MUDECH sin prisa", en: "Slow MUDECH visit" },
    detail: {
      es: "Salas permanentes, multimedia y terraza.",
      en: "Permanent rooms, multimedia hall and a terrace."
    }
  },
  {
    time: "15:00",
    label: { es: "Laboratorio", en: "Lab" },
    detail: {
      es: "Taller con réplicas de fósiles y realidad aumentada para familias.",
      en: "Fossil replica workshop plus AR for families."
    }
  },
  {
    time: "19:00",
    label: { es: "Atardecer sonoro", en: "Soundtracked sunset" },
    detail: {
      es: "Bailables ocupan la plaza los fines de semana.",
      en: "Dances take over the plaza on weekends."
    }
  }
] as const;

const culturalSpaces = [
  {
    name: "Museo del Desierto Chihuahuense",
    description: {
      es: "Sala paleontológica y colección multimedia.",
      en: "Paleontology hall and multimedia collection."
    },
    detail: {
      es: "Entradas desde $60 MXN · martes a domingo",
      en: "Tickets from $60 MXN · Tuesday–Sunday"
    }
  },
  {
    name: "Museo de Paleontología",
    description: {
      es: "Primer hadrosaurio montado con piezas originales en México y laboratorios interactivos.",
      en: "First hadrosaur mounted with original bones in Mexico plus interactive labs."
    },
    detail: {
      es: "Visitas guiadas previa reservación",
      en: "Guided tours with reservation"
    }
  },
  {
    name: "Plaza Benito Juárez",
    description: {
      es: "Escenario comunitario.",
      en: "Community stage."
    },
    detail: {
      es: "Acceso libre · programación semanal",
      en: "Free entry · weekly programming"
    }
  }
] as const;

const editorialStories = [
  {
    image: "/images/flyer1.jpg",
    category: { es: "Relato del desierto", en: "Desert story" },
    title: {
      es: "Artesanías de ixtle que narran la vida algodonera",
      en: "Ixtle crafts retelling cotton life"
    },
    description: {
      es: "Familias recuperan tintes naturales y diseñan textiles contemporáneos.",
      en: "Families revive natural dyes to design contemporary textiles."
    },
    link: "https://www.facebook.com/municipiodedelicias"
  },
  {
    image: "/images/event-3.jpg",
    category: { es: "Entrevista", en: "Interview" },
    title: {
      es: "5 artistas delicienses que intervienen el desierto",
      en: "5 Delicias artists intervening the desert"
    },
    description: {
      es: "Esculturas con calcio fósil y videoarte inspirado en la presa.",
      en: "Fossil-calcium sculptures and video art inspired by the dam."
    },
    link: "https://www.instagram.com/explore/locations/225678326/delicias-chihuahua/"
  },
  {
    image: "/images/flyer2.jpg",
    category: { es: "Publicación destacada", en: "Featured post" },
    title: {
      es: "Rutas literarias: del ferrocarril a los clubes de lectura",
      en: "Literary routes: railway to book clubs"
    },
    description: {
      es: "Mapea cafés-librería y archivos comunitarios en casas de adobe.",
      en: "Map café-bookshops and community archives in adobe homes."
    },
    link: "https://maps.google.com/?q=Plaza+Benito+Juarez+Delicias"
  }
] as const;

const ExperienciasArteCultura = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Arte & Cultura" : "Art & Culture";
  const heroScript =
    locale === "es" ? "Trazo + palabra + memoria" : "Stroke + word + memory";
  const heroCopy =
    locale === "es"
      ? "Descubre museos especializados, corredores de murales y residencias creativas que abrazan el paisaje algodonero."
      : "Discover specialized museums, mural corridors and creative residencies embracing the cotton landscape.";

  const handleBack = useSmartBackNavigation("/experiencias/que-hacer");

  return (
    <div className="min-h-screen bg-[#fff8ef] text-foreground">
      <SEO
        title={locale === "es" ? "Arte y Cultura" : "Art & Culture"}
        description={
          locale === "es"
            ? "Explora museos, murales y la escena cultural creativa de Delicias."
            : "Explore museums, murals and the creative cultural scene of Delicias."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,198,162,0.45),_transparent)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </button>
              <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
                {locale === "es" ? "Cuaderno cultural" : "Cultural journal"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="font-script text-3xl italic text-secondary/80">{heroScript}</p>
              <p className="max-w-xl text-base text-foreground/70">{heroCopy}</p>
              <div className="grid gap-3">
                {heroHighlights.map((item) => (
                  <div key={item.es} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-secondary" />
                    <p className="text-sm text-foreground/75">{item[locale]}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=Arte+y+cultura+Delicias+Chihuahua"
                target="_blank"
                rel="noreferrer"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
              >
                {locale === "es" ? "Mapa cultural" : "Cultural map"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="/images/museo.jpg"
                alt=""
                className="h-64 w-full rounded-[32px] border border-white/60 object-cover shadow-[0_30px_80px_rgba(120,82,55,0.25)]"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-4">
                <img
                  src="/images/event-2.jpg"
                  alt=""
                  className="h-32 w-full rounded-[28px] object-cover shadow-[0_20px_50px_rgba(120,82,55,0.2)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/teatro.jpg"
                  alt=""
                  className="h-32 w-full rounded-[28px] object-cover shadow-[0_20px_50px_rgba(120,82,55,0.2)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Ruta sensorial" : "Sensorial route"}
              </p>
              <h2 className="text-3xl font-black text-secondary">
                {locale === "es" ? "24 horas de inspiración" : "24 hours of inspiration"}
              </h2>
            </div>
            <div className="space-y-6">
              {creativeItinerary.map((stop, index) => (
                <article
                  key={stop.time}
                  className="flex flex-col gap-3 rounded-[28px] border border-secondary/15 bg-[#fff7ef] p-5 shadow-[0_15px_35px_rgba(120,82,55,0.12)] sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="text-3xl font-black">{stop.time}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/70">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{stop.label[locale]}</h3>
                    <p className="text-sm text-foreground/70">{stop.detail[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fdefda] py-20">
          <div className="mx-auto max-w-6xl grid gap-10 px-4 lg:grid-cols-[1fr,0.8fr]">
            <div className="space-y-6">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Atlas cultural" : "Cultural atlas"}
              </p>
              <h2 className="text-3xl font-black text-secondary">
                {locale === "es" ? "Museos y plazas esenciales" : "Essential museums & plazas"}
              </h2>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Encuentra tus paradas claves para entrevistas, fotos o aprendizaje en una misma ruta."
                  : "Pin your key stops for interviews, photo shoots or learning along one route."}
              </p>
              <a
                href="https://maps.google.com/?q=Museos+en+Delicias+Chihuahua"
                target="_blank"
                rel="noreferrer"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
              >
                {locale === "es" ? "Abrir mapa" : "Open map"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {culturalSpaces.map((space) => (
                <article
                  key={space.name}
                  className="rounded-[28px] border border-foreground/10 bg-white p-5 shadow-[0_20px_45px_rgba(120,82,55,0.15)]"
                >
                  <h3 className="text-2xl font-semibold text-secondary">{space.name}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{space.description[locale]}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    {space.detail[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                {locale === "es" ? "Publicaciones destacadas" : "Featured publications"}
              </p>
              <h2 className="text-3xl font-black">
                {locale === "es" ? "Desde el archivo" : "From the archive"}
              </h2>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-4">
              {editorialStories.map((story) => (
                <article
                  key={story.title.es}
                  className="relative h-80 w-[320px] flex-shrink-0 overflow-hidden rounded-[36px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(180deg, rgba(7,20,50,0.25) 0%, rgba(7,20,50,0.8) 100%), url(${story.image})`
                    }}
                  />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-white/75">
                      {story.category[locale]}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight">{story.title[locale]}</h3>
                    <p className="mt-2 text-sm text-white/85">{story.description[locale]}</p>
                    <a
                      href={story.link}
                      target="_blank"
                rel="noreferrer"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em]"
                    >
                      {locale === "es" ? "Leer historia" : "Read story"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
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

export default ExperienciasArteCultura;
