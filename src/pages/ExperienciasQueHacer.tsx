import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const heroImages = [
  "/images/Galería/8.jpg",
  "/images/Galería/11.jpg",
  "/images/Galería/18.jpg"
];

const mustDo = [
  {
    image: "/images/Galería/6.jpg",
    title: {
      es: "Ruta del desierto y Presa Las Vírgenes",
      en: "Desert route & Las Vírgenes Dam"
    },
    description: {
      es: "Explora el paisaje semidesértico, sube al mirador de la presa y disfruta atardeceres que tiñen de dorado la sierra.",
      en: "Explore the semi-desert landscape, climb to the dam overlook and enjoy golden sunsets over the mountains."
    }
  },
  {
    image: "/images/Galería/9.jpg",
    title: {
      es: "Centro histórico y Vida nocturna",
      en: "Historic center & nightlife"
    },
    description: {
      es: "Descubre murales, cafés de autor y bares con música en vivo en torno al reloj monumental y la plaza Benito Juárez.",
      en: "Find murals, signature coffee shops and live-music bars around the clock tower and Benito Juárez plaza."
    }
  },
  {
    image: "/images/Galería/15.jpg",
    title: {
      es: "Museo del Mezquite & corredores artísticos",
      en: "Mesquite Museum & art corridors"
    },
    description: {
      es: "Sumérgete en colecciones que narran la historia algodonera y recorre los corredores culturales con galerías emergentes.",
      en: "Dive into collections that tell the cotton history and wander through cultural corridors filled with emerging galleries."
    }
  }
] as const;

const experiencesLinks = [
  { href: "/experiencias/vida-nocturna", label: { es: "Vida nocturna", en: "Nightlife" } },
  { href: "/experiencias/arte-cultura", label: { es: "Arte & cultura", en: "Art & culture" } },
  { href: "/tours", label: { es: "Tours y itinerarios", en: "Tours & itineraries" } },
  { href: "/experiencias/familia", label: { es: "Familia", en: "Family fun" } },
  { href: "/experiencias/deportes", label: { es: "Deportes", en: "Sports" } }
] as const;

const ExperienciasQueHacer = () => {
  const { locale } = useLocale();
  const heroTitle = locale === "es" ? "Qué hacer en Delicias" : "Things to do in Delicias";
  const heroCopy =
    locale === "es"
      ? "Delicias mezcla tradición algodonera, gastronomía creativa y escenarios desérticos perfectos para escapadas inolvidables. Inspírate con estas rutas y arma tu itinerario."
      : "Delicias blends cotton heritage, creative gastronomy and desert scenery perfect for unforgettable escapes. Get inspired and craft your own itinerary.";

  return (
    <div className="min-h-screen bg-[#fffdf7] text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="px-4 py-20 sm:px-8 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-5">
              <p className="font-tourism text-3xl text-secondary/80">
                {locale === "es" ? "El corazón del norte de México" : "The heart of northern Mexico"}
              </p>
              <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">{heroTitle}</h1>
              <p className="text-lg text-muted-foreground">{heroCopy}</p>
              <div className="flex flex-wrap gap-3">
                {experiencesLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-secondary hover:bg-secondary/10"
                  >
                    {link.label[locale]}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroImages.map((src, idx) => (
                <div
                  key={src}
                  className={`overflow-hidden rounded-[28px] border border-black/5 shadow-[0_25px_55px_rgba(4,18,42,0.12)] ${
                    idx === 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl space-y-12 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Explora" : "Explore"}
              </p>
              <p className="font-tourism text-4xl text-secondary/90">
                {locale === "es" ? "Lugares imperdibles" : "Must-see places"}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {mustDo.map((place) => (
                <article
                  key={place.title.es}
                  className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_55px_rgba(4,18,42,0.12)]"
                >
                  <img
                    src={place.image}
                    alt={place.title[locale]}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <h3 className="text-2xl font-semibold text-foreground">{place.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{place.description[locale]}</p>
                    <a
                      href="/tours"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary"
                    >
                      {locale === "es" ? "Continuar" : "Continue"}
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

export default ExperienciasQueHacer;
