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
    <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#04122a] text-white">
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,192,0.35),transparent_45%),rgba(4,18,42,0.85)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6">
            <Reveal variant="fade-down" className="font-script text-3xl text-white/80">
              {script}
            </Reveal>
            <Reveal variant="fade-down" delay={80} className="text-[12px] uppercase tracking-[0.6em] text-white/60">
              {heroCopy.label}
            </Reveal>
            <Reveal
              as="h1"
              variant="fade-up"
              className="font-script text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl"
            >
              <span className="font-sans text-[clamp(48px,6vw,70px)] font-bold tracking-tight">
                {heroCopy.titleLead}{" "}
                <span
                  className="text-primary"
                  style={{
                    background: "var(--gradient-sunset)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {heroCopy.titleHighlight}
                </span>
              </span>
            </Reveal>
            <Reveal variant="fade-up" delay={120}>
              <p className="max-w-xl text-lg text-white/85 sm:text-xl">{heroCopy.description}</p>
            </Reveal>
            <Reveal variant="fade-up" delay={200}>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-full bg-primary px-8 py-6 text-sm uppercase tracking-[0.4em] shadow-[0_20px_45px_rgba(0,174,192,0.35)] hover:bg-primary/90"
                >
                  <a href="#eventos">{heroCopy.events}</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/40 bg-white/10 px-8 py-6 text-sm uppercase tracking-[0.4em] text-white hover:bg-white/20"
                >
                  <a href="#atractivos">{heroCopy.explore}</a>
                </Button>
              </div>
            </Reveal>
            <Reveal variant="fade-up" delay={280}>
              <div className="flex flex-wrap gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-[140px]">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="fade-left" className="rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xl p-6">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                {locale === "es" ? "Explora hoy" : "Explore today"}
              </p>
              <h3 className="text-3xl font-bold">
                {locale === "es" ? "Aquí todo es delicioso" : "Everything tastes better here"}
              </h3>
              <p className="text-sm text-white/85">
                {locale === "es"
                  ? "Curamos experiencias de día y de noche para que planifiques tu visita desde Chihuahua capital."
                  : "We curate day & night experiences so you can plan your stay straight from Chihuahua capital."}
              </p>
              <div className="space-y-4">
                {links.slice(0, 3).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10"
                  >
                    <img
                      src={link.image}
                      alt=""
                      className="h-14 w-14 rounded-xl object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-white/60">{link.hint}</p>
                      <p className="text-lg font-semibold">{link.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((tile, index) => (
            <Reveal key={tile.href} variant="fade-up" delay={index * 60}>
              <a
                href={tile.href}
                className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5"
              >
                <img
                  src={tile.image}
                  alt=""
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/65">{tile.hint}</p>
                  <p className="text-2xl font-bold text-white">{tile.label}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
