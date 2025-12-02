import { ArrowUpRight, MousePointerClick } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const experiences = [
  {
    id: "todo",
    href: "/experiencias/que-hacer",
    image: "/images/experiencias/que hacer.webp",
    title: { es: "Qué hacer en Delicias", en: "Things to do" },
    layout: "sm:col-span-3 sm:row-span-3"
  },
  {
    id: "nightlife",
    href: "/experiencias/vida-nocturna",
    image: "/images/Galería/12.webp",
    title: { es: "Vida nocturna", en: "Nightlife" },
    layout: "sm:col-span-3 sm:row-span-2"
  },
  {
    id: "art",
    href: "/experiencias/arte-cultura",
    image: "/images/Galería/5.webp",
    title: { es: "Arte y cultura", en: "Art & culture" },
    layout: "sm:col-span-3 sm:row-span-1"
  },
  {
    id: "family",
    href: "/experiencias/familia",
    image: "/images/experiencias/familia.webp",
    title: { es: "Diversión en familia", en: "Family fun" },
    layout: "sm:col-span-3 sm:row-span-1"
  },
  {
    id: "dine",
    href: "/experiencias/que-comer",
    image: "/images/restaurant-3.webp",
    title: { es: "¿Qué comer?", en: "Where to eat" },
    layout: "sm:col-span-3 sm:row-span-1"
  }
] as const;

export const ExperiencesCollage = () => {
  const { locale } = useLocale();
  const heading = locale === "es" ? "Experiencias a tu ritmo" : "Experiences your way";
  const eyebrow = locale === "es" ? "Elige tu mood" : "Pick your mood";
  const intro =
    locale === "es"
      ? "De día o de noche, con amigos o en familia: arma el plan perfecto saltando directo a la categoría que necesitas."
      : "Day or night, with friends or family: jump straight into the vibe you want and plan the perfect outing.";
  const clickCue = locale === "es" ? "Haz clic en una categoría" : "Tap any category";

  return (
    <section className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] py-20 text-white">
      <div className="space-y-16 px-4 sm:px-8 lg:px-16">
        <div className="space-y-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.6em] text-white/70">{eyebrow}</p>
          <p className="font-tourism text-[clamp(2.5rem,6vw,3.8rem)] text-transparent drop-shadow-lg bg-gradient-to-r from-[#fef1d6] via-white to-[#f6b043] bg-clip-text">
            {heading}
          </p>
          <p className="mx-auto max-w-2xl text-sm text-white/80">{intro}</p>
          <div className="mx-auto h-1 w-24 rounded-full bg-white/30" />
          <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.45em] text-white/80 backdrop-blur">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <MousePointerClick className="h-4 w-4 animate-pulse" />
            </span>
            {clickCue}
          </div>
        </div>
        <div className="grid auto-rows-[260px] gap-4 sm:auto-rows-[350px] lg:auto-rows-[420px] sm:grid-cols-6">
          {experiences.map((item) => (
            <SpotlightCard
              key={item.id}
              className={`group relative block overflow-hidden rounded-[36px] border border-white/10 shadow-[0_35px_70px_rgba(4,18,42,0.15)] transition-all duration-500 hover:shadow-[0_45px_90px_rgba(4,18,42,0.25)] hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${item.layout ?? ""}`}
            >
              <a href={item.href} className="block h-full w-full">
                <img
                  src={item.image}
                  alt={item.title[locale]}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="pointer-events-none absolute right-4 top-4 h-14 w-14 glow-orb-ring" aria-hidden="true" />
                <span className="pointer-events-none absolute right-4 top-4 z-10 inline-flex h-12 w-12 items-center justify-center glow-orb ring-1 ring-white/60 shadow-xl transition group-hover:scale-105" aria-hidden="true">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
                <div className="absolute inset-0 flex items-end p-5">
                  <p className="text-2xl font-semibold text-white drop-shadow">{item.title[locale]}</p>
                </div>
              </a>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
