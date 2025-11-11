import { useMemo } from "react";
import { useLocale } from "@/hooks/use-locale";

// Single static hero background containing embedded text per client request
const HERO_IMAGE_DESKTOP = "/images/HEROBUENO.jpg"; // provided asset in public/images
const HERO_IMAGE_MOBILE = "/images/relojnoche.jpg"; // mobile-only crop centered on the clock tower

const quickLinks = [
  { href: "#eventos", image: "/images/event-2.jpg", label: { es: "Agenda", en: "Agenda" }, hint: { es: "Festivales y ferias", en: "Festivals & fairs" } },
  { href: "/tours", image: "/images/tours/cavall7.jpg", label: { es: "Tours", en: "Tours" }, hint: { es: "Desierto · ríos · ciudad", en: "Desert · rivers · city" } },
  { href: "#hoteles", image: "/images/hotel-4.jpg", label: { es: "Hoteles", en: "Hotels" }, hint: { es: "Boutique & comfort", en: "Boutique & comfort" } },
  { href: "#restaurantes", image: "/images/restaurant-1.jpg", label: { es: "Gastronomía", en: "Food" }, hint: { es: "Sabores locales", en: "Local flavors" } }
] as const;

// Stats removed for cleaner tourist-first visual hero

export const Hero = () => {
  const { locale } = useLocale();

  const heroLinks = useMemo(() => {
    const localizedBase = quickLinks.map((tile) => ({
      ...tile,
      label: tile.label[locale] ?? tile.label.es,
      hint: tile.hint[locale] ?? tile.hint.es
    }));

    const prioritizedOrder = ["#eventos", "/tours", "#restaurantes", "#hoteles"];

    const orderedBase = prioritizedOrder
      .map((href) => localizedBase.find((tile) => tile.href === href))
      .filter((tile): tile is (typeof localizedBase)[number] => Boolean(tile));

    const leftovers = localizedBase.filter((tile) => !prioritizedOrder.includes(tile.href));

    const additionalTiles = [
      {
        href: "#atractivos",
        image: "/images/hero-delicias-3.jpg",
        label: locale === "es" ? "Atractivos" : "Highlights",
        hint: locale === "es" ? "Rutas fotogénicas" : "Scenic routes"
      },
      {
        href: "#actividades",
        image: "/images/hero-delicias-1.jpg",
        label: locale === "es" ? "Actividades" : "Activities",
        hint: locale === "es" ? "Experiencias al aire libre" : "Outdoor escapes"
      },
      {
        href: "#stay-dine",
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

  return (
    <section className="relative isolate min-h-[94vh] overflow-hidden bg-black text-white">
      <picture>
        <source srcSet={HERO_IMAGE_MOBILE} media="(max-width: 640px)" />
        <img
          src={HERO_IMAGE_DESKTOP}
          alt={locale === "es" ? "Aquí todo es Delicioso" : "Everything is Delicious"}
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="absolute inset-x-0 top-6 z-10 flex justify-center sm:hidden">
        <div className="rounded-full border border-white/40 bg-black/40 px-5 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.35em] text-white backdrop-blur">
          {locale === "es" ? "Presiona un ícono para ir a su categoría" : "Press an icon to visit its category"}
        </div>
      </div>
      {/* Zig-zag dual-column diamond layout near the hero clock */}
      <div className="absolute inset-x-0 top-32 z-10 flex justify-between px-6 sm:hidden">
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
                className="group relative h-24 w-24 overflow-hidden rounded-[30px] border border-white/65 bg-white/10 shadow-[0_25px_55px_rgba(0,0,0,0.65)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white"
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
      <div className="absolute right-6 top-16 z-10 hidden gap-8 sm:flex sm:right-12 sm:top-24 sm:gap-10">
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
                  className="group relative h-28 w-28 overflow-hidden rounded-[36px] border border-white/60 bg-white/5 shadow-[0_30px_65px_rgba(0,0,0,0.6)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/90 sm:h-32 sm:w-32"
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
    </section>
  );
};
