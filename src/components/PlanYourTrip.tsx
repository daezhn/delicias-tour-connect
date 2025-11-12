import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { usePointerPrecision } from "@/hooks/use-pointer-precision";
import { preloadRoute } from "@/lib/route-preloader";
import { Reveal } from "@/components/Reveal";

const planTiles = [
  {
    id: "transport",
    href: "/transporte",
    image: "/images/plan/plan-transport.svg",
    title: { es: "Transporte", en: "Transport" },
    summary: {
      es: "Rutas aéreas, carretera federal y tips para llegar en bus o auto.",
      en: "Flight routes, highway info and tips for arriving by bus or car."
    },
    tag: { es: "Moverte", en: "Getting around" },
    accent: "from-[#f6b043] via-[#fbd38d] to-[#f6b043]"
  },
  {
    id: "stay",
    href: "/hospedaje",
    image: "/images/plan/plan-stay.svg",
    title: { es: "Hospedaje", en: "Stays" },
    summary: {
      es: "Hoteles boutique, casas creativas y experiencias con alberca.",
      en: "Boutique hotels, creative homes and stays with pools."
    },
    tag: { es: "Descansar", en: "Stays" },
    accent: "from-[#f78da7] via-[#fbb9c8] to-[#f78da7]"
  },
  {
    id: "tours",
    href: "/tours",
    image: "/images/plan/plan-tours.svg",
    title: { es: "Tours & experiencias", en: "Tours & experiences" },
    summary: {
      es: "Descubre rutas guiadas, safaris al desierto y escapadas nocturnas.",
      en: "Discover guided routes, desert safaris and night escapes."
    },
    tag: { es: "Explorar", en: "Go explore" },
    accent: "from-[#8fd3fe] via-[#93f9b9] to-[#8fd3fe]"
  },
  {
    id: "climate",
    href: "/clima-tips",
    image: "/images/plan/plan-clima.svg",
    title: { es: "Clima & tips", en: "Climate & Tips" },
    summary: {
      es: "Consejos de temporada, qué empacar y mejores meses para visitar.",
      en: "Seasonal advice, what to pack and best months to visit."
    },
    tag: { es: "Temporada", en: "Season" },
    accent: "from-[#b693f8] via-[#dec0ff] to-[#b693f8]"
  }
] as const;

interface PlanYourTripProps {
  compact?: boolean;
  showHeading?: boolean;
}

type PlanTileData = (typeof planTiles)[number];
type CSSVarStyle = CSSProperties & { "--mouse-x"?: string; "--mouse-y"?: string };

const tiltRange = 8;

export const PlanYourTrip = ({ compact = false, showHeading = true }: PlanYourTripProps) => {
  const { locale } = useLocale();
  const { isFine } = usePointerPrecision();
  const [loadedTiles, setLoadedTiles] = useState<Record<string, boolean>>({});
  const script = locale === "es" ? "El corazón de Chihuahua" : "The heart of Chihuahua";
  const heading = locale === "es" ? "Planea tu viaje a Delicias" : "Plan your trip to Delicias";
  const description =
    locale === "es"
      ? "Aquí reunimos transporte, hospedaje, itinerarios y clima para que armes la ruta ideal con un solo scroll."
      : "Transport, stays, itineraries and climate guidance gathered in one scroll so you can craft the perfect route.";

  const markTileAsLoaded = (tileId: string) => {
    setLoadedTiles((prev) => (prev[tileId] ? prev : { ...prev, [tileId]: true }));
  };

  const handlePrefetch = (href: string) => {
    preloadRoute(href);
  };

  return (
    <Reveal
      as="section"
      id="plan-trip"
      className={`relative overflow-hidden ${compact ? "bg-transparent py-10" : "bg-gradient-to-br from-[#fff8ed] via-white to-[#f4f6ff] py-20"}`}
      variant="fade-up"
    >
      {!compact && (
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(255,255,255,0.25) 0%, transparent 45%), radial-gradient(circle at 20% 20%, rgba(246,176,67,0.2), transparent 40%), radial-gradient(circle at 80% 0, rgba(143,211,254,0.2), transparent 45%)"
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
              backgroundSize: "220px 220px"
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute right-10 top-16 hidden rounded-[40px] border border-white/40 bg-white/30 px-6 py-4 text-xs font-semibold uppercase tracking-[0.4em] text-secondary shadow-[0_20px_55px_rgba(0,0,0,0.08)] backdrop-blur lg:flex">
            <Sparkles className="mr-2 h-4 w-4" />
            {locale === "es" ? "Plan maestro" : "Master plan"}
          </div>
        </>
      )}
      <div className={`relative mx-auto ${compact ? "" : "max-w-6xl"} px-4`}>
        <div className={compact ? "grid gap-6" : "grid gap-10 lg:grid-cols-[0.9fr,1.1fr]"}>
          {!compact && showHeading && (
            <div className="space-y-4">
              <p className="font-tourism text-3xl text-secondary/80">{script}</p>
              <h2 className="text-4xl font-bold leading-tight text-foreground">{heading}</h2>
              <p className="text-muted-foreground">{description}</p>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-secondary to-primary" />
            </div>
          )}

          <div className={`${compact ? "" : "grid gap-6 sm:grid-cols-2"}`}>
            {planTiles.map((tile) => (
              <PlanTile
                key={tile.id}
                tile={tile}
                locale={locale}
                onPrefetch={handlePrefetch}
                isImageLoaded={Boolean(loadedTiles[tile.id])}
                onImageLoaded={markTileAsLoaded}
                enableTilt={isFine}
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

type PlanTileProps = {
  tile: PlanTileData;
  locale: "es" | "en";
  onPrefetch: (href: string) => void;
  isImageLoaded: boolean;
  onImageLoaded: (tileId: string) => void;
  enableTilt: boolean;
};

const PlanTile = ({ tile, locale, onPrefetch, isImageLoaded, onImageLoaded, enableTilt }: PlanTileProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (!enableTilt) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;
    setTilt({
      x: (relativeX - 0.5) * tiltRange,
      y: (0.5 - relativeY) * tiltRange
    });
    setGlow({
      x: relativeX * 100,
      y: relativeY * 100
    });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  const cardStyle: CSSVarStyle = {
    transform: enableTilt ? `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` : undefined,
    "--mouse-x": `${glow.x}%`,
    "--mouse-y": `${glow.y}%`
  };

  return (
    <Link
      to={tile.href}
      className="tilt-card group relative block overflow-hidden rounded-[34px] border border-white/10 shadow-[0_25px_55px_rgba(4,18,42,0.12)] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      style={cardStyle}
      onPointerEnter={() => onPrefetch(tile.href)}
      onFocus={() => onPrefetch(tile.href)}
      onPointerMove={enableTilt ? handlePointerMove : undefined}
      onPointerLeave={enableTilt ? resetTilt : undefined}
    >
      <div className="relative h-48 w-full">
        <div className={`absolute inset-0 bg-[#04122a] transition-opacity duration-500 ${isImageLoaded ? "opacity-0" : "opacity-100"}`} />
        <img
          src={tile.image}
          alt={tile.title[locale]}
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          decoding="async"
          onLoad={() => onImageLoaded(tile.id)}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={
            {
              background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.15), transparent 55%)"
            } as CSSProperties
          }
        />
      </div>
      <div className="flex flex-col gap-3 border-t border-white/30 bg-white/90 p-5 text-foreground backdrop-blur-sm">
        <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-secondary/20 via-secondary/10 to-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.45em] text-secondary">
          {tile.tag[locale]}
        </span>
        <div>
          <p className="text-xl font-semibold tracking-wide text-foreground">{tile.title[locale]}</p>
          <p className="mt-1 text-sm text-muted-foreground">{tile.summary[locale]}</p>
        </div>
        <span className="glow-pill relative inline-flex items-center gap-2 self-start overflow-hidden rounded-full bg-secondary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-secondary transition duration-300 group-hover:-translate-y-0.5">
          <span>{locale === "es" ? "Ver más" : "Explore"}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          <span className="pointer-events-none absolute inset-0 bg-white/60 opacity-0 blur-lg transition duration-300 group-hover:opacity-60" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};
