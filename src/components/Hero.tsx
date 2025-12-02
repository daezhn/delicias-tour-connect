import { useEffect, useMemo, useState } from "react";
import { useLocale } from "@/hooks/use-locale";
import { quickLinks } from "@/data/hero-links";
import { HeroTile } from "@/components/HeroTile";
import { MotionReveal } from "@/components/MotionReveal";
import { Snowfall } from "@/components/Snowfall";

// Single static hero background containing embedded text per client request
const HERO_IMAGE_DESKTOP = "/images/HEROBUENO.webp"; // provided asset in public/images
const HERO_IMAGE_MOBILE = "/images/relojnoche.webp"; // mobile-only crop centered on the clock tower

// Stats removed for cleaner tourist-first visual hero

export const Hero = () => {
  const { locale } = useLocale();
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const scrollCopy = locale === "es" ? "Desplázate" : "Scroll";

  const heroLinks = useMemo(() => {
    const localizedBase = quickLinks.map((tile) => {
      const label = tile.label[locale] ?? tile.label.es;
      const hint = tile.hint[locale] ?? tile.hint.es;
      const shortLabel =
        tile.shortLabel?.[locale] ?? tile.shortLabel?.es ?? (label?.split(" ")[0] ?? label);

      return {
        ...tile,
        label,
        hint,
        shortLabel
      };
    });

    const prioritizedOrder = [
      "/#eventos",
      "/tours",
      "/experiencias/que-comer",
      "/Atractivos",
      "/hospedaje",
      "/experiencias/que-hacer",
      "/Transporte",
      "/#contacto"
    ];

    const orderedBase = prioritizedOrder
      .map((href) => localizedBase.find((tile) => tile.href === href))
      .filter((tile): tile is (typeof localizedBase)[number] => Boolean(tile));

    const leftovers = localizedBase.filter((tile) => !prioritizedOrder.includes(tile.href));

    return [...orderedBase, ...leftovers];
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

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    const handleScroll = () => {
      setHideScrollCue((prev) => prev || window.scrollY > 40);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const heroTransformParts: string[] = [];
  if (isDesktop) heroTransformParts.push("scaleY(1.1)");
  if (!heroLoaded) heroTransformParts.push("scale(1.05)");
  const heroImageStyles = {
    transform: heroTransformParts.join(" ") || undefined,
    filter: heroLoaded ? "blur(0px)" : "blur(18px)",
    opacity: heroLoaded ? 1 : 0,
    transition: "opacity 500ms ease, filter 600ms ease, transform 800ms ease"
  } as const;

  return (
    <section className="relative isolate min-h-screen supports-[height:100svh]:min-h-[103svh] sm:min-h-[110vh] overflow-hidden bg-black text-white">
      <Snowfall />
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 bg-gradient-to-b from-[#0f0501] via-[#12051a] to-[#03050a] transition-opacity duration-700 ${heroLoaded ? "opacity-0" : "opacity-100"
            }`}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_70%_10%,rgba(255,255,255,0.06),transparent_50%)] blur-3xl transition-opacity duration-700 ${heroLoaded ? "opacity-0" : "opacity-100"
            }`}
          aria-hidden="true"
        />
        <picture className="block h-full w-full">
          <source srcSet={HERO_IMAGE_MOBILE} media="(max-width: 640px)" />
          <img
            src={HERO_IMAGE_DESKTOP}
            alt={locale === "es" ? "Aquí todo es Delicioso" : "Everything is Delicious"}
            className="h-full w-full object-cover object-[center_85%] sm:object-[center_88%] lg:object-cover lg:object-center xl:object-cover xl:object-center"
            style={heroImageStyles}
            loading="eager"
            decoding="async"
            onLoad={() => setHeroLoaded(true)}
          />
        </picture>
        <div
          className="absolute inset-0 opacity-60 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 40%), radial-gradient(circle at 80% 0, rgba(160,160,160,0.35), transparent 45%)"
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
      <div
        className="absolute right-4 z-20 hidden sm:block sm:right-6"
        style={{ top: "calc(var(--nav-offset, 72px) + 20px)" }}
      >
        <MotionReveal variant="fade-down" delay={0.5}>
          <img
            src="/images/Logoideablanco.webp"
            alt="Idea Delicias"
            className="h-12 w-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.45)] lg:h-14"
            loading="lazy"
            decoding="async"
          />
        </MotionReveal>
      </div>
      <div
        className="pointer-events-none absolute right-1 flex items-center gap-3 sm:hidden"
        style={{ top: "calc(var(--nav-offset, 72px) - 32px)" }}
      >
        <MotionReveal variant="fade-left" delay={0.2}>
          <img
            src="/images/recurso.webp"
            alt={locale === "es" ? "Sello turístico de Delicias" : "Delicias tourism seal"}
            className="h-36 w-36 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.35)]"
            loading="lazy"
            decoding="async"
          />
        </MotionReveal>
        <MotionReveal variant="fade-down" delay={0.4}>
          <img
            src="/images/Logoideablanco.webp"
            alt="Idea Delicias"
            className="h-10 w-auto object-contain drop-shadow-[0_12px_25px_rgba(0,0,0,0.25)]"
            loading="lazy"
            decoding="async"
          />
        </MotionReveal>
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center sm:hidden">
        <MotionReveal variant="fade-up" delay={1}>
          <div className="rounded-full border border-white/30 bg-black/45 px-4 py-1.5 text-center text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur">
            {locale === "es" ? "Presiona un ícono para ir a su categoría" : "Press an icon to visit its category"}
          </div>
        </MotionReveal>
      </div>
      {/* Zig-zag dual-column diamond layout near the hero clock */}
      <div className="absolute inset-x-0 top-40 z-10 flex justify-between px-6 sm:hidden">
        {mobileColumns.map((column, columnIndex) => {
          const alignment = columnIndex === 1 ? "items-end text-right" : "items-start text-left";
          return (
            <div
              key={`mobile-column-${columnIndex}`}
              className={`flex flex-col gap-6 ${columnIndex === 1 ? "mt-10 items-end" : "items-start"}`}
            >
              {column.map((tile, idx) => (
                <div
                  key={`${tile.href}-${tile.label}-mobile`}
                  className={`flex flex-col ${alignment}`}
                >
                  <HeroTile
                    href={tile.href}
                    label={tile.label}
                    shortLabel={tile.shortLabel}
                    image={tile.image}
                    Icon={tile.Icon}
                    priority={columnIndex === 0 && idx === 0}
                    className="h-[4.5rem] w-[4.5rem] rounded-[24px]"
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="absolute right-4 top-20 z-10 hidden gap-6 sm:flex sm:right-10 sm:top-32 sm:gap-8">
        {([0, 1] as const).map((columnIndex) => {
          const items = heroLinks.filter((_, idx) => idx % 2 === columnIndex);
          if (!items.length) {
            return null;
          }

          return (
            <div
              key={`column-${columnIndex}`}
              className={`flex flex-col gap-12 sm:gap-14 ${columnIndex === 1 ? "mt-24 sm:mt-32" : ""
                }`}
            >
              {items.map((tile, idx) => (
                <HeroTile
                  key={`${tile.href}-${tile.label}`}
                  href={tile.href}
                  label={tile.label}
                  shortLabel={tile.shortLabel}
                  image={tile.image}
                  Icon={tile.Icon}
                  priority={columnIndex === 0 && idx === 0}
                  className="h-24 w-24 rounded-[32px] sm:h-28 sm:w-28"
                />
              ))}
            </div>
          );
        })}
      </div>
      {/* Desktop-only scroll cue */}
      <div
        className={`pointer-events-none absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 transition-all duration-500 sm:block ${hideScrollCue ? "translate-y-4 opacity-0" : "opacity-100"
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
