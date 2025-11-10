import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroHighlights = [
  {
    es: "MUDECH y el Museo de Paleontología resguardan colecciones únicas del desierto chihuahuense.",
    en: "MUDECH and the Paleontology Museum safeguard singular collections from the Chihuahuan Desert."
  },
  {
    es: "Plaza Benito Juárez vibra con murales, danza y música al aire libre todo el año.",
    en: "Benito Juárez plaza hums with murals, dance and open-air music all year long."
  },
  {
    es: "Residencias creativas conectan artesanos de ixtle, fotógrafos y músicos con el paisaje algodonero.",
    en: "Creative residencies connect ixtle artisans, photographers and musicians with the cotton landscape."
  }
] as const;

const culturalEvents = [
  {
    image: "/images/museo.jpg",
    eyebrow: { es: "Residencia abierta", en: "Open residency" },
    title: { es: "Residencia MUDECH: Escultura y paisaje", en: "MUDECH residency: Sculpture & landscape" },
    description: {
      es: "Curadores locales acompañan procesos de escultura con yeso, fibras de sotol y pigmentos del desierto.",
      en: "Local curators guide sculpture processes with plaster, sotol fibers and pigments from the desert."
    },
    date: { es: "14-16 noviembre · 10:00-18:00 h", en: "Nov 14-16 · 10 a.m.–6 p.m." },
    venue: "Museo del Desierto Chihuahuense (MUDECH)",
    link: "https://maps.google.com/?q=Museo+del+Desierto+Chihuahuense"
  },
  {
    image: "/images/event-1.jpg",
    eyebrow: { es: "Jam urbano", en: "Urban jam" },
    title: { es: "Jam de muralismo y lettering", en: "Mural & lettering jam" },
    description: {
      es: "El colectivo Ruta 33000 pinta narrativas algodoneras mientras DJs locales musicalizan el atardecer.",
      en: "Ruta 33000 collective paints cotton stories while local DJs soundtrack the sunset."
    },
    date: { es: "Jueves de noviembre · 19:30 h", en: "November Thursdays · 7:30 p.m." },
    venue: "Corredor del Reloj Público",
    link: "https://maps.google.com/?q=Reloj+Publico+Delicias"
  },
  {
    image: "/images/teatro.jpg",
    eyebrow: { es: "Cine foro", en: "Film forum" },
    title: { es: "Noche fósil & cinema", en: "Fossil & cinema night" },
    description: {
      es: "Recorrido nocturno entre dinosaurios seguido de documentales producidos en Chihuahua.",
      en: "Night tour among dinosaurs followed by documentaries produced in Chihuahua."
    },
    date: { es: "23 noviembre · 20:00 h", en: "Nov 23 · 8:00 p.m." },
    venue: "Museo de Paleontología de Delicias",
    link: "https://maps.google.com/?q=Museo+de+Paleontologia+de+Delicias"
  }
] as const;

const creativeItinerary = [
  {
    time: "09:30",
    label: { es: "Murales y desayuno creativo", en: "Murals & creative breakfast" },
    detail: {
      es: "Camina entre el Reloj Público y la plaza Benito Juárez para ubicar murales y piezas de cerámica urbana mientras visitas cafeterías de autor.",
      en: "Walk between the clock tower and Benito Juárez plaza to spot murals and ceramic pieces while visiting signature coffee shops."
    }
  },
  {
    time: "11:30",
    label: { es: "MUDECH sin prisa", en: "Slow visit at MUDECH" },
    detail: {
      es: "Cuatro salas permanentes, sala multimedia y una terraza con vista al valle algodonero para entender el ecosistema del desierto.",
      en: "Four permanent rooms, a multimedia hall and a terrace overlooking the cotton valley to understand the desert ecosystem."
    }
  },
  {
    time: "15:00",
    label: { es: "Laboratorio paleontológico", en: "Paleontology lab" },
    detail: {
      es: "Taller familiar para limpiar réplicas de fósiles y conocer las especies cretácicas halladas en Delicias.",
      en: "Family-friendly lab to clean fossil replicas and learn about the Cretaceous species discovered in Delicias."
    }
  },
  {
    time: "19:00",
    label: { es: "Atardecer sonoro", en: "Soundtracked sunset" },
    detail: {
      es: "Bandas de jazz, ballet folklórico y narradores orales ocupan la explanada de la plaza los fines de semana.",
      en: "Jazz bands, folk ballet and storytellers take over the plaza esplanade every weekend."
    }
  }
] as const;

const culturalSpaces = [
  {
    name: "Museo del Desierto Chihuahuense",
    description: {
      es: "Recorre su sala paleontológica, los jardines xerófilos y la colección multimedia sobre la cuenca del Río Conchos.",
      en: "Tour the paleontological hall, xeric gardens and multimedia collection about the Río Conchos basin."
    },
    detail: {
      es: "Entradas desde $60 MXN · martes a domingo",
      en: "Tickets from $60 MXN · Tuesday to Sunday"
    }
  },
  {
    name: "Museo de Paleontología de Delicias",
    description: {
      es: "Alberga el primer hadrosaurio montado con piezas originales en el país y talleres interactivos para todas las edades.",
      en: "Hosts the first hadrosaur mounted with original pieces in Mexico plus interactive workshops for all ages."
    },
    detail: {
      es: "Visitas guiadas previa reservación",
      en: "Guided visits with prior reservation"
    }
  },
  {
    name: "Plaza Benito Juárez & Reloj Público",
    description: {
      es: "Galería a cielo abierto de murales, corredores fotográficos y presentaciones gratuitas al caer la tarde.",
      en: "Open-air gallery with murals, photo corridors and free performances at dusk."
    },
    detail: {
      es: "Programación semanal · acceso libre",
      en: "Weekly programming · open access"
    }
  }
] as const;

const editorialStories = [
  {
    image: "/images/flyer1.jpg",
    category: { es: "Relato del desierto", en: "Desert story" },
    title: {
      es: "Artesanías de ixtle que narran la vida algodonera",
      en: "Ixtle crafts that recount the cotton lifestyle"
    },
    description: {
      es: "Familias de Colonia Revolución recuperan tintes naturales para crear textiles contemporáneos.",
      en: "Families in Colonia Revolución revive natural dyes to create contemporary textiles."
    },
    link: "https://www.facebook.com/municipiodedelicias"
  },
  {
    image: "/images/event-3.jpg",
    category: { es: "Entrevista", en: "Interview" },
    title: {
      es: "5 artistas delicienses que intervienen el desierto",
      en: "5 Delicias artists who intervene the desert"
    },
    description: {
      es: "Desde esculturas con calcio fósil hasta videoarte que dialoga con la presa Las Vírgenes.",
      en: "From fossil-calcium sculptures to video art in dialogue with Las Vírgenes dam."
    },
    link: "https://www.instagram.com/explore/locations/225678326/delicias-chihuahua/"
  },
  {
    image: "/images/flyer2.jpg",
    category: { es: "Publicación destacada", en: "Featured post" },
    title: {
      es: "Rutas literarias del ferrocarril a los clubes de lectura",
      en: "Literary routes from the railway to book clubs"
    },
    description: {
      es: "Mapea cafés-librerías y archivos comunitarios instalados en antiguas casas de adobe.",
      en: "Maps café-bookshops and community archives housed in old adobe homes."
    },
    link: "https://maps.google.com/?q=Plaza+Benito+Juarez+Delicias"
  }
] as const;

const ExperienciasArteCultura = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Arte y cultura en Delicias" : "Art & culture in Delicias";
  const heroCopy =
    locale === "es"
      ? "Explora el alma creativa de Delicias: museos especializados, corredores de murales y eventos que mezclan ciencia, música y tradición algodonera."
      : "Explore Delicias’ creative soul: specialized museums, mural corridors and events blending science, music and cotton heritage.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c2c68]/5 via-[#fffdf7] to-[#f6b043]/15 text-foreground">
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
                {locale === "es" ? "Sumérgete en el arte del desierto" : "Dive into desert artistry"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
              <p className="text-lg text-white/85">{heroCopy}</p>
              <ul className="space-y-3 text-sm text-white/85">
                {heroHighlights.map((item) => (
                  <li key={item.es} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-white" />
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://maps.google.com/?q=Arte+y+cultura+Delicias+Chihuahua"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0c2c68] shadow-[0_15px_35px_rgba(4,18,42,0.3)] transition hover:bg-white/90"
              >
                {locale === "es" ? "Mapa cultural" : "Cultural map"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                <img
                  src="/images/museo.jpg"
                  alt={locale === "es" ? "Escultura en el MUDECH" : "Sculpture at MUDECH"}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <img
                    src="/images/event-2.jpg"
                    alt={locale === "es" ? "Presentación cultural en Delicias" : "Cultural performance in Delicias"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="overflow-hidden rounded-[32px] border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <img
                    src="/images/teatro.jpg"
                    alt={locale === "es" ? "Teatro y eventos" : "Theatre and events"}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white to-[#fef7ef] py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Agenda creativa" : "Creative agenda"}
              </p>
              <p className="font-tourism text-4xl text-secondary/90">
                {locale === "es" ? "Eventos destacados" : "Highlighted events"}
              </p>
              <p className="text-sm text-muted-foreground">
                {locale === "es"
                  ? "Programación curada con testimonios de recintos culturales y colectivos locales."
                  : "Programming curated alongside cultural venues and local collectives."}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {culturalEvents.map((event) => (
                <article
                  key={event.title.es}
                  className="flex h-full flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_55px_rgba(4,18,42,0.12)]"
                >
                  <img
                    src={event.image}
                    alt={event.title[locale]}
                    className="h-60 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-secondary/70">
                      {event.eyebrow[locale]}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground">{event.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{event.description[locale]}</p>
                    <div className="space-y-1 text-sm text-foreground/70">
                      <p className="font-semibold text-secondary">{event.date[locale]}</p>
                      <p>{event.venue}</p>
                    </div>
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary"
                    >
                      {locale === "es" ? "Ver ubicación" : "See location"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#fef7ef] via-white to-[#f6b043]/15 py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-6">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/70">
                  {locale === "es" ? "Plan sugerido" : "Suggested plan"}
                </p>
                <h2 className="text-3xl font-black text-foreground">
                  {locale === "es" ? "Itinerario cultural de un día" : "One-day cultural itinerary"}
                </h2>
                <ol className="space-y-6">
                  {creativeItinerary.map((stop) => (
                    <li key={stop.time} className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_15px_35px_rgba(4,18,42,0.08)]">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xl font-semibold">{stop.label[locale]}</h3>
                        <span className="text-sm font-mono text-secondary/80">{stop.time} h</span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{stop.detail[locale]}</p>
                    </li>
                  ))}
                </ol>
                <a
                  href="https://maps.google.com/?q=Museos+en+Delicias+Chihuahua"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary"
                >
                  {locale === "es" ? "Descargar guía" : "Download guide"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/60">
                  {locale === "es" ? "Espacios imperdibles" : "Must-see venues"}
                </p>
                <div className="space-y-4">
                  {culturalSpaces.map((space) => (
                    <article
                      key={space.name}
                      className="rounded-[28px] border border-secondary/20 bg-white/90 p-6 shadow-[0_20px_45px_rgba(4,18,42,0.1)] backdrop-blur"
                    >
                      <h3 className="text-2xl font-semibold text-secondary">{space.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{space.description[locale]}</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/60">
                        {space.detail[locale]}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                {locale === "es" ? "Sumérgete en el arte" : "Dive into art"}
              </p>
              <h2 className="text-3xl font-black">
                {locale === "es" ? "Publicaciones destacadas" : "Featured publications"}
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
