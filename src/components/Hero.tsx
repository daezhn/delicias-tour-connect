import { useMemo } from "react";
import { useLocale } from "@/hooks/use-locale";

// Single static hero background containing embedded text per client request
const HERO_IMAGE = "/images/herook.png"; // provided asset in public/images

const quickLinks = [
  { href: "#eventos", image: "/images/event-2.jpg", label: { es: "Agenda", en: "Agenda" }, hint: { es: "Festivales y ferias", en: "Festivals & fairs" } },
  { href: "#tours", image: "/images/tours/cavall7.jpg", label: { es: "Tours", en: "Tours" }, hint: { es: "Desierto · ríos · ciudad", en: "Desert · rivers · city" } },
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

    const prioritizedOrder = ["#eventos", "#tours", "#restaurantes", "#hoteles"];

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

  return (
    <section className="relative isolate min-h-[86vh] overflow-hidden bg-black text-white">
      <img
        src={HERO_IMAGE}
        alt={locale === "es" ? "Aquí todo es Delicioso" : "Everything is Delicious"}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      {/* Zig-zag dual-column diamond layout near the hero clock */}
      <div className="absolute right-4 top-12 flex gap-6 sm:right-10 sm:top-20 sm:gap-8">
        {([0, 1] as const).map((columnIndex) => {
          const items = heroLinks.filter((_, idx) => idx % 2 === columnIndex);
          if (!items.length) {
            return null;
          }

          return (
            <div
              key={`column-${columnIndex}`}
              className={`flex flex-col gap-10 sm:gap-12 ${
                columnIndex === 1 ? "mt-20 sm:mt-28" : ""
              }`}
            >
              {items.map((tile, idx) => (
                <a
                  key={`${tile.href}-${tile.label}`}
                  href={tile.href}
                  aria-label={tile.label}
                  className="group relative h-24 w-24 overflow-hidden rounded-[30px] border border-white/35 shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition hover:-translate-y-1 hover:border-white/70 hover:shadow-[0_30px_65px_rgba(0,0,0,0.65)] sm:h-28 sm:w-28"
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
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/35 opacity-80 transition group-hover:opacity-100"
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
