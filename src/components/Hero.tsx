import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations, type Locale } from "@/lib/i18n";

const heroBackgrounds = [
  { src: "/images/hero-delicias.jpg", alt: "Vista panorámica de Delicias" },
  { src: "/images/hero-delicias-2.jpg", alt: "Atardecer en Delicias" },
  { src: "/images/hero-delicias-3.jpg", alt: "Centro histórico de Delicias" }
] as const;

const quickLinks = [
  { href: "#eventos", image: "/images/event-2.jpg", label: { es: "Agenda", en: "Agenda" }, hint: { es: "Festivales y ferias", en: "Festivals & fairs" } },
  { href: "#tours", image: "/images/tours/cavall7.jpg", label: { es: "Tours", en: "Tours" }, hint: { es: "Desierto · ríos · ciudad", en: "Desert · rivers · city" } },
  { href: "#hoteles", image: "/images/hotel-4.jpg", label: { es: "Hoteles", en: "Hotels" }, hint: { es: "Boutique & comfort", en: "Boutique & comfort" } },
  { href: "#restaurantes", image: "/images/restaurant-1.jpg", label: { es: "Gastronomía", en: "Food" }, hint: { es: "Sabores locales", en: "Local flavors" } }
] as const;

const heroStats: Record<Locale, Array<{ label: string; value: string }>> = {
  es: [
    { label: "Experiencias guiadas", value: "25+" },
    { label: "Eventos al año", value: "40+" },
    { label: "Km desde Chihuahua", value: "85" }
  ],
  en: [
    { label: "Curated experiences", value: "25+" },
    { label: "Yearly events", value: "40+" },
    { label: "Km from Chihuahua", value: "85" }
  ]
};

export const Hero = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale);
  const heroCopy = copy.hero;
  const script = locale === "es" ? "Capital del desierto chihuahuense" : "Desert capital of Chihuahua";
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActiveImage((prev) => (prev + 1) % heroBackgrounds.length),
      8000
    );
    return () => clearInterval(timer);
  }, []);

  const links = useMemo(
    () =>
      quickLinks.map((tile) => ({
        ...tile,
        label: tile.label[locale] ?? tile.label.es,
        hint: tile.hint[locale] ?? tile.hint.es
      })),
    [locale]
  );

  const stats = heroStats[locale] ?? heroStats.es;

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#04122a] text-white">
      {heroBackgrounds.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "1500ms" }}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(0,174,192,0.35),transparent_55%),rgba(4,18,42,0.82)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 lg:pt-40">
        <div className="space-y-6">
          <Reveal variant="fade-down" className="font-script text-3xl text-white/85">
            {script}
          </Reveal>
          <Reveal as="h1" variant="fade-up" className="text-[clamp(42px,6vw,72px)] font-extrabold tracking-tight">
            {heroCopy.titleLead}{" "}
            <span
              className="text-primary"
              style={{
                background: "var(--gradient-sunset)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {heroCopy.titleHighlight}
            </span>
          </Reveal>
          <Reveal variant="fade-up" delay={120}>
            <p className="max-w-xl text-base text-white/90 sm:text-lg">{heroCopy.description}</p>
          </Reveal>
          <Reveal variant="fade-up" delay={200}>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide">
                <a href="#eventos">{heroCopy.events}</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/40 bg-white/10 px-6 py-3 text-sm tracking-wide text-white hover:bg-white/20">
                <a href="#atractivos">{heroCopy.explore}</a>
              </Button>
            </div>
          </Reveal>
          <Reveal variant="fade-up" delay={260}>
            <div className="flex flex-wrap gap-6 rounded-3xl border border-white/15/0 bg-white/0 p-0">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-[120px]">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs tracking-wide text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Image-only quick tiles pinned over the hero */}
      <div className="pointer-events-auto absolute inset-x-4 bottom-8 z-10 mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:inset-x-6 sm:grid-cols-4">
        {links.map((tile, index) => (
          <a
            key={tile.href}
            href={tile.href}
            aria-label={tile.label}
            className="group relative block overflow-hidden rounded-2xl border border-white/20 backdrop-blur-[2px]"
          >
            <img
              src={tile.image}
              alt=""
              className="h-28 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-36"
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="sr-only">{tile.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
