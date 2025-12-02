import { useMemo } from "react";
import { useLocale } from "@/hooks/use-locale";
import { SEO } from "@/components/SEO";

const HERO_IMAGE_DESKTOP = "/images/HEROBUENO.webp";
const HERO_IMAGE_MOBILE = "/images/relojnoche.webp";

const quickLinks = [
  { href: "/#eventos", image: "/images/event-2.webp", label: { es: "Agenda", en: "Agenda" } },
  { href: "/tours", image: "/images/tours/cavall7.webp", label: { es: "Tours", en: "Tours" } },
  { href: "/hospedaje", image: "/images/hotel-4.webp", label: { es: "Hoteles", en: "Hotels" } },
  { href: "/experiencias/que-comer", image: "/images/restaurant-1.webp", label: { es: "Gastronomía", en: "Food" } }
] as const;

const additionalTiles = [
  {
    href: "/Atractivos",
    image: "/images/hero-delicias-3.webp",
    label: { es: "Atractivos", en: "Highlights" }
  },
  {
    href: "/experiencias/que-hacer",
    image: "/images/hero-delicias-1.webp",
    label: { es: "Actividades", en: "Activities" }
  },
  {
    href: "/#plan-trip",
    image: "/images/hotel-5.webp",
    label: { es: "Stay & Dine", en: "Stay & Dine" }
  }
] as const;

const PantallaTouch = () => {
  const { locale } = useLocale();

  const heroLinks = useMemo(() => {
    const localizedBase = quickLinks.map((tile) => ({
      ...tile,
      label: tile.label[locale] ?? tile.label.es
    }));

    const orderedBase = ["/#eventos", "/tours", "/experiencias/que-comer", "/hospedaje"]
      .map((href) => localizedBase.find((tile) => tile.href === href))
      .filter((tile): tile is (typeof localizedBase)[number] => Boolean(tile));

    const leftovers = localizedBase.filter((tile) => !orderedBase.includes(tile));

    const localizedAdditional = additionalTiles.map((tile) => ({
      ...tile,
      label: tile.label[locale] ?? tile.label.es
    }));

    return [...orderedBase, ...leftovers, ...localizedAdditional];
  }, [locale]);

  const columns = useMemo(() => {
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

  const instruction =
    locale === "es"
      ? "Toca un rombo para abrir la sección"
      : "Tap a diamond to open a section";

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title={locale === "es" ? "Quiosco Interactivo" : "Interactive Kiosk"}
        description={
          locale === "es"
            ? "Explora Delicias a través de nuestro quiosco interactivo táctil."
            : "Explore Delicias through our interactive touch kiosk."
        }
      />
      <main className="relative isolate min-h-screen overflow-hidden">
        <picture className="absolute inset-0 h-full w-full">
          <source srcSet={HERO_IMAGE_MOBILE} media="(max-width: 640px)" />
          <img
            src={HERO_IMAGE_DESKTOP}
            alt={locale === "es" ? "Aquí todo es Delicioso" : "Everything is Delicious"}
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div
          className="absolute inset-0 opacity-70 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 0, rgba(246,176,67,0.35), transparent 45%)"
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0.08) 0%, transparent 45%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 180px 180px, 180px 180px"
          }}
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-6 h-40 w-40 rounded-full bg-[#f6b043]/35 blur-[90px]" aria-hidden="true" />
          <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#85d0ff]/25 blur-[120px]" aria-hidden="true" />
        </div>
        <div className="absolute inset-x-0 top-12 z-10 flex justify-center px-6">
          <div className="rounded-full border border-white/40 bg-black/45 px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.4em] text-white backdrop-blur md:text-sm">
            {instruction}
          </div>
        </div>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-10 pt-32">
          <div className="flex w-full max-w-[520px] justify-between gap-4 sm:max-w-[620px] lg:max-w-[780px]">
            {columns.map((column, columnIndex) => (
              <div
                key={`touch-column-${columnIndex}`}
                className={`flex flex-col gap-8 sm:gap-10 ${columnIndex === 1 ? "mt-20 items-end" : "items-start"}`}
              >
                {column.map((tile, idx) => (
                  <a
                    key={`${tile.href}-${tile.label}-touch`}
                    href={tile.href}
                    className="group relative h-28 w-28 overflow-hidden rounded-[34px] border border-white/60 bg-white/10 shadow-[0_25px_55px_rgba(0,0,0,0.65)] backdrop-blur-sm transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white touch-manipulation sm:h-32 sm:w-32 lg:h-36 lg:w-36"
                    style={{ transform: "rotate(45deg)" }}
                  >
                    <img
                      src={tile.image}
                      alt={tile.label}
                      className="h-full w-full object-cover transition duration-700"
                      loading={columnIndex === 0 && idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                      style={{ transform: "rotate(-45deg) scale(1.25)" }}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/25 via-transparent to-black/45 opacity-80 transition group-hover:opacity-100"
                      style={{ transform: "rotate(-45deg)" }}
                    />
                    <span className="absolute inset-x-0 bottom-4 block text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white sm:text-xs">
                      {tile.label}
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PantallaTouch;
