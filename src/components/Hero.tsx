import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/hooks/use-locale";

// Single static hero background containing embedded text per client request
const HERO_IMAGE_DESKTOP = "/images/HEROBUENO.jpg"; // provided asset in public/images
const HERO_IMAGE_MOBILE = "/images/relojnoche.jpg"; // mobile-only crop centered on the clock tower

const quickLinks = [
  { href: "/#eventos", image: "/images/event-2.jpg", label: { es: "Agenda", en: "Agenda" }, hint: { es: "Festivales y ferias", en: "Festivals & fairs" } },
  { href: "/tours", image: "/images/tours/cavall7.jpg", label: { es: "Tours", en: "Tours" }, hint: { es: "Desierto · ríos · ciudad", en: "Desert · rivers · city" } },
  { href: "/hospedaje", image: "/images/hotel-4.jpg", label: { es: "Hoteles", en: "Hotels" }, hint: { es: "Boutique & comfort", en: "Boutique & comfort" } },
  { href: "/experiencias/que-comer", image: "/images/restaurant-1.jpg", label: { es: "Gastronomía", en: "Food" }, hint: { es: "Sabores locales", en: "Local flavors" } }
] as const;

// Stats removed for cleaner tourist-first visual hero

export const Hero = () => {
  const { locale } = useLocale();
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const scrollCopy = locale === "es" ? "Desplázate" : "Scroll";

  const heroLinks = useMemo(() => {
    const localizedBase = quickLinks.map((tile) => ({
      ...tile,
      label: tile.label[locale] ?? tile.label.es,
      hint: tile.hint[locale] ?? tile.hint.es
    }));

    const prioritizedOrder = ["/#eventos", "/tours", "/experiencias/que-comer", "/hospedaje"];

    const orderedBase = prioritizedOrder
      .map((href) => localizedBase.find((tile) => tile.href === href))
      .filter((tile): tile is (typeof localizedBase)[number] => Boolean(tile));

    const leftovers = localizedBase.filter((tile) => !prioritizedOrder.includes(tile.href));

    const additionalTiles = [
      {
        href: "/Atractivos",
        image: "/images/hero-delicias-3.jpg",
        label: locale === "es" ? "Atractivos" : "Highlights",
        hint: locale === "es" ? "Rutas fotogénicas" : "Scenic routes"
      },
      {
        href: "/experiencias/que-hacer",
        image: "/images/hero-delicias-1.jpg",
        label: locale === "es" ? "Actividades" : "Activities",
        hint: locale === "es" ? "Experiencias al aire libre" : "Outdoor escapes"
      },
      {
        href: "/#plan-trip",
        image: "/images/hotel-5.jpg",
        label: locale === "es" ? "Stay & Dine" : "Stay & Dine",
        hint: locale === "es" ? "Sabores y hospedaje" : "Taste & stay"
      }
    ];

    return [...orderedBase, ...leftovers, ...additionalTiles];
  }, [locale]);

  const mobileColumns = useMemo(() => {
    const left: typeof heroLinks = [];
    const right: typeof heroLinks = [];
    heroLinks.forEach((tile, index) => {
      if (index % 2 === 0) {
        left.push(tile);
      } else {
        right.push(tile);
      }
    });
    return [left, right];
  }, [heroLinks]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setHideScrollCue((prev) => prev || window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative isolate min-h-[110dvh] sm:min-h-[100vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source srcSet={HERO_IMAGE_MOBILE} media="(max-width: 640px)" />
          <img
            src={HERO_IMAGE_DESKTOP}
            alt={locale === "es" ? "Aquí todo es Delicioso" : "Everything is Delicious"}
            className="h-full w-full object-cover object-[center_85%] sm:object-[center_88%] lg:object-[center_120%] xl:object-[center_132%] scale-[1.08] sm:scale-[1.08] lg:scale-[1.06] xl:scale-[1.04] transition-transform duration-700 lg:translate-y-5 xl:translate-y-8"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div
          className="absolute inset-0 opacity-60 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 0, rgba(246,176,67,0.35), transparent 45%)"
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 45%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 180px 180px, 180px 180px"
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-6 h-40 w-40 rounded-full bg-[#f6b043]/40 blur-[90px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#85d0ff]/30 blur-[120px]" aria-hidden="true" />
        </div>
      </div>
      <div className="absolute inset-x-0 top-6 z-10 flex justify-center sm:hidden">
        <div className="rounded-full border border-white/40 bg-black/40 px-5 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur">
          {locale === "es" ? "Presiona un ícono para ir a su categoría" : "Press an icon to visit its category"}
        </div>
      </div>
      {/* Zig-zag dual-column diamond layout near the hero clock */}
      <div className="absolute inset-x-0 top-48 z-10 flex justify-between px-6 sm:hidden">
        {mobileColumns.map((column, columnIndex) => (
          <div
            key={`mobile-column-${columnIndex}`}
            className={`flex flex-col gap-8 ${columnIndex === 1 ? "mt-10 items-end" : "items-start"}`}
          >
            {column.map((tile, idx) => (
              <a
                key={`${tile.href}-${tile.label}-mobile`}
                href={tile.href}
                aria-label={tile.label}
                className="group relative h-20 w-20 overflow-hidden rounded-[26px] border border-white/65 bg-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white"
                style={{ transform: "rotate(45deg)" }}
              >
                <img
                  src={tile.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-700"
                  loading={columnIndex === 0 && idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  style={{ transform: "rotate(-45deg) scale(1.25)" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/45 opacity-85 transition group-hover:opacity-100"
                  style={{ transform: "rotate(-45deg)" }}
                />
                <span className="sr-only">{tile.label}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute right-4 top-28 z-10 hidden gap-6 sm:flex sm:right-10 sm:top-40 sm:gap-8">
        {([0, 1] as const).map((columnIndex) => {
          const items = heroLinks.filter((_, idx) => idx % 2 === columnIndex);
          if (!items.length) {
            return null;
          }

          return (
            <div
              key={`column-${columnIndex}`}
              className={`flex flex-col gap-12 sm:gap-14 ${
                columnIndex === 1 ? "mt-24 sm:mt-32" : ""
              }`}
            >
              {items.map((tile, idx) => (
                <a
                  key={`${tile.href}-${tile.label}`}
                  href={tile.href}
                  aria-label={tile.label}
                  className="group relative h-24 w-24 overflow-hidden rounded-[32px] border border-white/60 bg-white/5 shadow-[0_28px_60px_rgba(0,0,0,0.5)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/90 sm:h-28 sm:w-28"
                  style={{ transform: "rotate(45deg)" }}
                >
                  <img
                    src={tile.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700"
                    loading={columnIndex === 0 && idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    style={{ transform: "rotate(-45deg) scale(1.25)" }}
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/45 opacity-80 transition group-hover:opacity-100"
                    style={{ transform: "rotate(-45deg)" }}
                  />
                  <span className="sr-only">{tile.label}</span>
                </a>
              ))}
            </div>
          );
        })}
      </div>
      <div
        className={`pointer-events-none absolute bottom-[12vh] sm:bottom-10 lg:bottom-12 left-1/2 z-20 -translate-x-1/2 transition-all duration-500 ${
          hideScrollCue ? "translate-y-4 opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center gap-3 text-white/80">
          <div className="h-14 w-8 rounded-full border border-white/50 p-1">
            <span className="block h-2 w-2 rounded-full bg-white animate-scroll-wheel" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em]">{scrollCopy}</p>
        </div>
      </div>
    </section>
  );
};
