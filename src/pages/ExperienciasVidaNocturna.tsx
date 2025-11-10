import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";

const nightlifeCards = [
  {
    image: "/images/Galería/19.jpg",
    title: { es: "Bares mixología", en: "Mixology bars" },
    description: {
      es: "Coctelería de autor y terrazas con vista al desierto que combinan música y atardeceres.",
      en: "Signature cocktails and rooftop terraces pairing music with desert sunsets."
    }
  },
  {
    image: "/images/Galería/10.jpg",
    title: { es: "Clubs nocturnos", en: "Nightclubs" },
    description: {
      es: "Line ups con DJs regionales, pantallas inmersivas y bloques de reggaetón y electrónica.",
      en: "Regional DJs, immersive screens and blocks of reggaeton plus electronic beats."
    }
  },
  {
    image: "/images/Galería/4.jpg",
    title: { es: "Cantinas boutique", en: "Boutique cantinas" },
    description: {
      es: "Rescatan recetas clásicas con twist moderno, maridajes de sotol y música en vivo.",
      en: "Classic recipes with a modern twist, sotol pairings and live music."
    }
  }
] as const;

const ExperienciasVidaNocturna = () => {
  const { locale } = useLocale();
  const heading = locale === "es" ? "Bares y clubs nocturnos en Delicias" : "Bars & Nightclubs in Delicias";
  const heroCopy =
    locale === "es"
      ? "Delicias prende sus luces al caer el sol: barras creativas, terrazas con DJs y cantinas boutique que celebran la hospitalidad chihuahuense."
      : "Delicias lights up after sunset: creative bars, terrace DJs and boutique cantinas celebrating Chihuahua hospitality.";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0c2c68]/10 via-[#fffdf7] to-[#f6b043]/15 text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="px-4 py-20 sm:px-8 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-6">
              <a
                href="/experiencias/que-hacer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </a>
              <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">{heading}</h1>
              <p className="text-lg text-muted-foreground">{heroCopy}</p>
              <a
                href="https://www.google.com/maps/search/bares+y+antros+en+delicias+chihuahua/@28.195318,-105.4811553,7890m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-[0_15px_35px_rgba(6,69,173,0.25)] transition hover:bg-secondary/90"
              >
                {locale === "es" ? "Explora la vida nocturna" : "Explore the nightlife"}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="flex gap-4">
              <img
                src="/images/Galería/17.jpg"
                alt=""
                className="h-64 flex-1 rounded-[30px] object-cover shadow-[0_30px_70px_rgba(4,18,42,0.15)]"
                loading="lazy"
                decoding="async"
              />
              <img
                src="/images/Galería/1.jpg"
                alt=""
                className="h-64 flex-1 rounded-[30px] object-cover shadow-[0_30px_70px_rgba(4,18,42,0.15)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] py-20 text-white">
          <div className="space-y-8 px-4 text-center sm:px-8 lg:px-20">
            <p className="font-tourism text-4xl">
              {locale === "es" ? "Somos el corazón de la noche" : "We are the heart of the night"}
            </p>
            <p className="text-lg text-white/80">
              {locale === "es"
                ? "Al caer el sol, la diversión apenas comienza."
                : "When the sun goes down, the fun begins."}
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-8 lg:px-20">
            {nightlifeCards.map((card) => (
              <article
                key={card.title.es}
                className="flex flex-col overflow-hidden rounded-[32px] border border-white/40 bg-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur p-6 text-left text-white"
              >
                <div className="grid gap-4 lg:grid-cols-[0.8fr,1.2fr]">
                  <img
                    src={card.image}
                    alt={card.title[locale]}
                    className="h-56 w-full rounded-[28px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="space-y-3">
                    <h2 className="text-3xl font-semibold">{card.title[locale]}</h2>
                    <p className="text-sm text-white/85">{card.description[locale]}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExperienciasVidaNocturna;
