import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";

const heroShots = ["/images/quehacer/hero1.jpg", "/images/Galería/11.jpg", "/images/Galería/18.jpg"] as const;

const travelRoutes = [
  {
    image: "/images/quehacer/presa.png",
    title: { es: "Desierto & Presa", en: "Desert & dam" },
    description: {
      es: "Miradores en la Presa Las Vírgenes, senderos interpretativos y picnic naranja al atardecer.",
      en: "Las Vírgenes overlooks, interpretive trails and orange sunsets with a picnic."
    },
    cta: "https://maps.google.com/?q=Presa+Las+Virgenes"
  },
  {
    image: "/images/quehacer/reloj.jpg",
    title: { es: "Centro creativo", en: "Creative downtown" },
    description: {
      es: "Murales, concept stores y cafés de autor alrededor del reloj monumental.",
      en: "Murals, concept stores and signature cafés around the clock tower."
    },
    cta: "/experiencias/arte-cultura"
  },
  {
    image: "/images/quehacer/museo.jpg",
    title: { es: "Museos táctiles", en: "Tactile museums" },
    description: {
      es: "MUDECH y Museo de Paleontología con laboratorios de fósiles y terrazas con vista.",
      en: "MUDECH + Paleontology Museum with fossil labs and terraces."
    },
    cta: "/experiencias/arte-cultura"
  }
] as const;

const dayPlanner = [
  {
    time: "09:00",
    block: { es: "Murales + desayuno", en: "Murals + breakfast" },
    detail: {
      es: "Caminata frente al reloj y recorrido por Plaza Benito Juárez para ubicar nuevas intervenciones.",
      en: "Walking near the clock tower plus walk around Benito Juárez plaza to spot new murals."
    }
  },
  {
    time: "12:30",
    block: { es: "Museos y ciencia", en: "Museums & science" },
    detail: {
      es: "Visita MUDECH y cruza al Museo de Paleontología; reserva guía para acceder a laboratorios.",
      en: "Tour MUDECH then cross to the Paleontology Museum; book a guide to access labs."
    }
  },
  {
    time: "17:00",
    block: { es: "Presa Las Vírgenes", en: "Las Vírgenes dam" },
    detail: {
      es: "Caminata ligera, paseo en kayak o sesión fotográfica en el mirador.",
      en: "Light hike, kayak loop or photo session on the overlook."
    }
  },
  {
    time: "21:00",
    block: { es: "Noches del centro", en: "Downtown nights" },
    detail: {
      es: "Mixología local, música en vivo y food trucks alrededor del centro.",
      en: "Local mixology, live music and food trucks around downtown."
    }
  }
] as const;

const atlasStops = [
  {
    name: { es: "Presa Las Vírgenes", en: "Las Vírgenes Dam" },
    detail: {
      es: "Miradores con mesas picnic.",
      en: "Lookouts with picnic tables."
    }
  },
  {
    name: { es: "Plaza Benito Juárez", en: "Benito Juárez plaza" },
    detail: {
      es: "Muralismo.",
      en: "Murals."
    }
  },
  {
    name: { es: "MUDECH + Museo de Paleontología", en: "MUDECH + Paleontology Museum" },
    detail: {
      es: "Salas inmersivas, fósiles y terrazas con vista algodonera.",
      en: "Immersive halls, fossils and cotton-valley terraces."
    }
  }
] as const;

const ExperienciasQueHacer = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation();
  const heroTitle = locale === "es" ? "Qué hacer en Delicias" : "Things to do in Delicias";
  const heroScript = locale === "es" ? "Algodón, desierto y ciudad creativa." : "Cotton, desert & creative city.";
  const heroCopy =
    locale === "es"
      ? "Este cuaderno de viaje mezcla rutas desérticas, museos táctiles y plazas creativas. Inspírate y arma tu itinerario."
      : "This travel log blends desert routes, tactile museums and creative plazas. Get inspired and build your itinerary.";

  return (
    <div className="min-h-screen bg-[#f7fbff] text-foreground">
      <SEO
        title={locale === "es" ? "Qué Hacer" : "Things to Do"}
        description={
          locale === "es"
            ? "Desierto, museos y ciudad creativa. Descubre las mejores actividades y lugares para visitar en Delicias."
            : "Desert, museums and creative city. Discover the best activities and places to visit in Delicias."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,122,208,0.15),transparent)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-5">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Inicio" : "Home"}
              </button>
              <p className="text-[11px] uppercase tracking-[0.5em] text-slate-500">{locale === "es" ? "Cuaderno de viaje" : "Travel log"}</p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="font-script text-3xl italic text-secondary/80">{heroScript}</p>
              <p className="max-w-xl text-sm text-foreground/70">{heroCopy}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroShots.map((shot) => (
                <img key={shot} src={shot} alt="" className="h-56 w-full rounded-[30px] object-cover shadow-[0_30px_70px_rgba(6,27,51,0.2)]" loading="lazy" decoding="async" />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-foreground/5 bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Cuaderno de rutas" : "Routes notebook"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "Tres escapes esenciales" : "Three essential escapes"}</h2>
            </div>
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
              {travelRoutes.map((route) => (
                <article key={route.title.es} className="flex w-80 snap-center flex-col overflow-hidden rounded-[32px] border border-foreground/10 bg-[#f4f9ff] shadow-[0_20px_45px_rgba(6,27,51,0.12)]">
                  <img src={route.image} alt={route.title[locale]} className="h-48 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="flex flex-1 flex-col space-y-3 p-5">
                    <h3 className="text-2xl font-semibold text-secondary">{route.title[locale]}</h3>
                    <p className="text-sm text-foreground/70">{route.description[locale]}</p>
                    <a href={route.cta} className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                      {locale === "es" ? "Ver ruta" : "View route"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f0f7ff] py-20">
          <div className="mx-auto max-w-5xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Itinerario 24h" : "24h itinerary"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "Plan sugerido" : "Suggested plan"}</h2>
            </div>
            <div className="space-y-5">
              {dayPlanner.map((stop, index) => (
                <article key={stop.time} className="flex flex-col gap-3 rounded-[28px] border border-secondary/10 bg-white p-5 shadow-[0_15px_35px_rgba(6,27,51,0.1)] sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex items-center gap-3 text-secondary">
                    <span className="text-3xl font-black">{stop.time}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary/70">#{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{stop.block[locale]}</h3>
                    <p className="text-sm text-foreground/70">{stop.detail[locale]}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl grid gap-10 px-4 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-5">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">{locale === "es" ? "Atlas de paradas" : "Stops atlas"}</p>
              <h2 className="text-3xl font-black text-secondary">{locale === "es" ? "Mapa esencial" : "Essential map"}</h2>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Guarda tus paradas favoritas y combínalas con tours guiados o road trips por la región centro de Chihuahua."
                  : "Save your favorite stops and combine them with guided tours or road trips across central Chihuahua."}
              </p>
              <a
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary"
              >
                {locale === "es" ? "Ver tours sugeridos" : "See suggested tours"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {atlasStops.map((stop) => (
                <article key={stop.name.es} className="rounded-[28px] border border-foreground/10 bg-[#f7fbff] p-5 shadow-[0_15px_35px_rgba(6,27,51,0.08)]">
                  <h3 className="text-2xl font-semibold text-secondary">{stop.name[locale]}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{stop.detail[locale]}</p>
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

export default ExperienciasQueHacer;
