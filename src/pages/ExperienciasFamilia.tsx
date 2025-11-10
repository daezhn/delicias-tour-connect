import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroShots = ["/images/parque-central.jpg", "/images/hero-delicias-2.jpg", "/images/Galería/5.jpg"] as const;

const parqueVidaHighlights = [
  {
    title: { es: "Inversión que inspira", en: "Investment that inspires" },
    copy: {
      es: "Más de 50 MDP impulsados por FECHAC y el Ayuntamiento para ofrecer un espacio seguro en Las Palmas.",
      en: "Over 50 million pesos led by FECHAC and the city to deliver a safe space in Las Palmas."
    }
  },
  {
    title: { es: "Activación para todos", en: "Activities for everyone" },
    copy: {
      es: "Juegos infantiles, canchas de básquet, cancha de fútbol sintético y zonas de ejercicio al aire libre.",
      en: "Playgrounds, basketball courts, synthetic soccer field and outdoor workout areas."
    }
  },
  {
    title: { es: "Aprender haciendo", en: "Learning by doing" },
    copy: {
      es: "Teatro al aire libre, viveros y edificios para capacitación laboral de jóvenes y adultos.",
      en: "Open-air theatre, nurseries and training buildings for youth and adults."
    }
  }
] as const;

const familyPlans = [
  {
    image: "/images/parque-central.jpg",
    title: { es: "Picnic y lago en Parque Fundadores", en: "Picnic & lake at Parque Fundadores" },
    schedule: { es: "Mañanas frescas · 8:00-11:00 h", en: "Cool mornings · 8–11 a.m." },
    description: {
      es: "El parque clásico de Delicias con lago central, tren infantil y zonas sombreadas para tirolesas pequeñas y juegos de destreza.",
      en: "Delicias’ classic park with a central lake, kiddie train and shaded lawn perfect for mini zip-lines and skill games."
    },
    tip: {
      es: "Lleva semillas para alimentar patos y renta bicicletas familiares en la entrada sur.",
      en: "Bring seeds to feed ducks and rent family bikes at the south gate."
    }
  },
  {
    image: "/images/hero-delicias.jpg",
    title: { es: "Circuito Parque Central y Presa Las Vírgenes", en: "Central Park & Las Vírgenes circuit" },
    schedule: { es: "Mediodía · 12:00-15:00 h", en: "Midday · 12–3 p.m." },
    description: {
      es: "Áreas verdes frente al estadio, fuentes danzantes y juegos de agua ideales para niñas y niños pequeños.",
      en: "Green lawns by the stadium, dancing fountains and splash pads ideal for younger kids."
    },
    tip: {
      es: "Finaliza con helados artesanales rumbo a la presa para disfrutar atardeceres seguros.",
      en: "Wrap up with craft ice cream en route to the dam for safe sunset views."
    }
  },
  {
    image: "/images/museo.jpg",
    title: { es: "Museos interactivos", en: "Interactive museums" },
    schedule: { es: "Tardes · 16:00-19:00 h", en: "Afternoons · 4–7 p.m." },
    description: {
      es: "El MUDECH y el Museo de Paleontología ofrecen talleres con fósiles, laboratorios y salas multimedia que fascinan a curiosos de todas las edades.",
      en: "MUDECH and the Paleontology Museum run fossil workshops, labs and multimedia halls that wow curious minds."
    },
    tip: {
      es: "Reserva visitas guiadas familiares para acceder a laboratorios táctiles.",
      en: "Book family-guided tours to access the tactile labs."
    }
  }
] as const;

const kidFriendlyAgenda = [
  {
    title: { es: "Tardes deportivas en Parque Vida", en: "Sports afternoons at Parque Vida" },
    detail: {
      es: "Fútbol rápido sobre pasto sintético y clínicas de básquet gratuitas con entrenadores juveniles.",
      en: "Pick-up soccer on synthetic turf plus free basketball clinics led by youth coaches."
    },
    day: { es: "Martes & jueves", en: "Tues & Thu" },
    hour: "18:00 h",
    link: "https://maps.google.com/?q=Parque+Vida+Delicias"
  },
  {
    title: { es: "Cine bajo las estrellas", en: "Movies under the stars" },
    detail: {
      es: "Domingos familiares en la plaza Benito Juárez con películas PG y food trucks locales.",
      en: "Family Sundays at Benito Juárez plaza with PG movies and local food trucks."
    },
    day: { es: "Domingo", en: "Sunday" },
    hour: "20:00 h",
    link: "https://maps.google.com/?q=Plaza+Benito+Juarez+Delicias"
  },
  {
    title: { es: "Laboratorio mini paleontólogos", en: "Mini paleontologist lab" },
    detail: {
      es: "Sesiones de limpieza de fósiles, realidad aumentada y narraciones sobre el desierto chihuahuense.",
      en: "Fossil cleaning sessions, augmented reality and storytelling about the Chihuahuan desert."
    },
    day: { es: "Sábados", en: "Saturdays" },
    hour: "12:00 h",
    link: "https://maps.google.com/?q=Museo+de+Paleontologia+de+Delicias"
  }
] as const;

const playgroundTips = [
  {
    label: { es: "Parque Vida", en: "Parque Vida" },
    items: {
      es: ["Skate loop y pump track", "Huerto comunitario monitorizado", "Zona pet friendly"],
      en: ["Skate loop & pump track", "Monitored community garden", "Pet-friendly zone"]
    }
  },
  {
    label: { es: "Parque Fundadores", en: "Parque Fundadores" },
    items: {
      es: ["Kiosco cultural con música los viernes", "Lanchitas en el lago", "Área de fogatas urbanas"],
      en: ["Cultural gazebo with Friday music", "Mini boats on the lake", "Urban fire-pit zone"]
    }
  },
  {
    label: { es: "Corredor Infantil Benito Juárez", en: "Benito Juárez kids corridor" },
    items: {
      es: ["Murales para colorear con tizas", "Mercadito de productores locales", "Biblioteca móvil"],
      en: ["Chalk-friendly murals", "Local makers market", "Mobile library"]
    }
  }
] as const;

const ExperienciasFamilia = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Diversión en familia" : "Family fun in Delicias";
  const heroCopy =
    locale === "es"
      ? "Planea días completos con juegos al aire libre, ciencia interactiva y sabores locales. Delicias se disfruta en clan."
      : "Plan full days of outdoor play, interactive science and local flavors. Delicias is best enjoyed in clan.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7ef] via-white to-[#f6b043]/20 text-foreground">
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
                {locale === "es" ? "Momentos para toda la tribu" : "Moments for the whole tribe"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl">{heroTitle}</h1>
              <p className="text-lg text-white/85">{heroCopy}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {heroShots.slice(0, 2).map((shot) => (
                  <div
                    key={shot}
                    className="overflow-hidden rounded-[28px] border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
                  >
                    <img src={shot} alt="" className="h-48 w-full object-cover" loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
              <a
                href="https://maps.google.com/?q=Parque+Vida+Delicias"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0c2c68] shadow-[0_15px_35px_rgba(4,18,42,0.3)] transition hover:bg-white/90"
              >
                {locale === "es" ? "Ver mapa familiar" : "Open family map"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-hidden rounded-[34px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
              <img
                src={heroShots[2]}
                alt={locale === "es" ? "Familias disfrutando Delicias" : "Families enjoying Delicias"}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.4em] text-secondary/70">
                  {locale === "es" ? "Nuevo imperdible" : "Brand-new must-see"}
                </p>
                <h2 className="text-3xl font-black text-foreground">
                  {locale === "es" ? "Parque Vida, el parque más nuevo de Delicias" : "Parque Vida, Delicias’ newest park"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {locale === "es"
                    ? "Inaugurado en marzo 2025 dentro del fraccionamiento Las Palmas, el Parque Vida nació gracias a FECHAC y el municipio para fortalecer el tejido social con infraestructura moderna."
                    : "Inaugurated in March 2025 inside Las Palmas, Parque Vida was created by FECHAC and the municipality to strengthen community ties with modern infrastructure."}
                </p>
                <div className="space-y-4">
                  {parqueVidaHighlights.map((item) => (
                    <article key={item.title.es} className="rounded-[26px] border border-black/5 bg-[#fef7ef] p-5">
                      <h3 className="text-xl font-semibold text-secondary">{item.title[locale]}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.copy[locale]}</p>
                    </article>
                  ))}
                </div>
                <a
                  href="https://encortodigital.com/general/inauguran-parque-vida-en-delicias/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-secondary"
                >
                  {locale === "es" ? "Conoce la noticia completa" : "Read the full story"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col gap-6 rounded-[32px] border border-black/5 bg-gradient-to-br from-white via-[#fef7ef] to-[#f6b043]/20 p-6 shadow-[0_25px_55px_rgba(4,18,42,0.08)]">
                <h3 className="text-2xl font-semibold text-secondary">
                  {locale === "es" ? "Checklist para tu visita" : "Checklist for your visit"}
                </h3>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li>
                    <strong className="font-semibold text-secondary">
                      {locale === "es" ? "Horario sugerido:" : "Suggested hours:"}
                    </strong>{" "}
                    {locale === "es" ? "7:00-11:00 h y 17:00-21:00 h." : "7–11 a.m. and 5–9 p.m."}
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      {locale === "es" ? "Qué llevar:" : "Bring this:"}
                    </strong>{" "}
                    {locale === "es"
                      ? "Patines, snacks ligeros y tu termo (hay estaciones de agua)."
                      : "Skates, light snacks and your reusable bottle (water stations on site)."}
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      {locale === "es" ? "Servicios disponibles:" : "Available services:"}
                    </strong>{" "}
                    {locale === "es"
                      ? "Estacionamiento vigilado, baños inclusivos y puntos de carga solar."
                      : "Guarded parking, inclusive restrooms and solar charging hubs."}
                  </li>
                  <li>
                    <strong className="font-semibold text-secondary">
                      {locale === "es" ? "Tip local:" : "Local tip:"}
                    </strong>{" "}
                    {locale === "es"
                      ? "Pregunta por las capacitaciones gratuitas en los edificios de formación."
                      : "Ask about the free training sessions held inside the learning buildings."}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#fef7ef] via-white to-[#f6b043]/15 py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Rutas juguetonas" : "Playful routes"}
              </p>
              <p className="font-tourism text-4xl text-secondary/90">
                {locale === "es" ? "Itinerario familiar de un día" : "One-day family itinerary"}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {familyPlans.map((plan) => (
                <article
                  key={plan.title.es}
                  className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_55px_rgba(4,18,42,0.08)]"
                >
                  <img src={plan.image} alt={plan.title[locale]} className="h-60 w-full object-cover" loading="lazy" decoding="async" />
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/70">
                      {plan.schedule[locale]}
                    </span>
                    <h3 className="text-2xl font-semibold text-foreground">{plan.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description[locale]}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
                      {locale === "es" ? "Tip:" : "Tip:"} {plan.tip[locale]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Agenda infantil" : "Kids agenda"}
              </p>
              <h2 className="text-3xl font-black text-foreground">
                {locale === "es" ? "Actividades gratuitas" : "Free activities"}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {kidFriendlyAgenda.map((event) => (
                <article
                  key={event.title.es}
                  className="flex flex-col rounded-[32px] border border-black/5 bg-[#fef7ef] p-6 shadow-[0_20px_45px_rgba(4,18,42,0.08)]"
                >
                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary/70">
                      {event.day[locale]} · {event.hour}
                    </p>
                    <h3 className="text-2xl font-semibold text-secondary">{event.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{event.detail[locale]}</p>
                  </div>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-secondary"
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
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                {locale === "es" ? "Checklist de parques" : "Parks checklist"}
              </p>
              <h2 className="text-3xl font-black">{locale === "es" ? "Espacios favoritos" : "Favorite spaces"}</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {playgroundTips.map((space) => (
                <article
                  key={space.label.es}
                  className="rounded-[32px] border border-white/20 bg-white/10 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur"
                >
                  <h3 className="text-2xl font-semibold">{space.label[locale]}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/90">
                    {space.items[locale].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white" />
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
