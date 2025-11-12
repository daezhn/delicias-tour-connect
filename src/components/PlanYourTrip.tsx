import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { preloadRoute } from "@/lib/route-preloader";

const planTiles = [
  {
    id: "transport",
    href: "/transporte",
    image: "/images/plan/plan-transport.svg",
    title: { es: "Transporte", en: "Transport" },
    summary: {
      es: "Rutas aéreas, carretera federal y tips para llegar en bus o auto.",
      en: "Flight routes, highway info and tips for arriving by bus or car."
    }
  },
  {
    id: "stay",
    href: "/hospedaje",
    image: "/images/plan/plan-stay.svg",
    title: { es: "Hospedaje", en: "Stays" },
    summary: {
      es: "Hoteles boutique, casas creativas y experiencias con alberca.",
      en: "Boutique hotels, creative homes and stays with pools."
    }
  },
  {
    id: "tours",
    href: "/tours",
    image: "/images/plan/plan-tours.svg",
    title: { es: "Tours & experiencias", en: "Tours & experiences" },
    summary: {
      es: "Descubre rutas guiadas, safaris al desierto y escapadas nocturnas.",
      en: "Discover guided routes, desert safaris and night escapes."
    }
  },
  {
    id: "climate",
    href: "/clima-tips",
    image: "/images/plan/plan-clima.svg",
    title: { es: "Clima & tips", en: "Climate & Tips" },
    summary: {
      es: "Consejos de temporada, qué empacar y mejores meses para visitar.",
      en: "Seasonal advice, what to pack and best months to visit."
    }
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
    <section id="plan-trip" className={compact ? "bg-transparent py-10" : "bg-white py-20"}>
      <div className={`mx-auto ${compact ? "" : "max-w-6xl"} px-4`}>
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
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

type PlanTileProps = {
  tile: PlanTileData;
  locale: "es" | "en";
  onPrefetch: (href: string) => void;
  isImageLoaded: boolean;
  onImageLoaded: (tileId: string) => void;
};

const PlanTile = ({ tile, locale, onPrefetch, isImageLoaded, onImageLoaded }: PlanTileProps) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
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
    transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
    "--mouse-x": `${glow.x}%`,
    "--mouse-y": `${glow.y}%`
  };

  return (
    <Link
      to={tile.href}
      className="tilt-card group relative block overflow-hidden rounded-[34px] border border-black/5 shadow-[0_25px_55px_rgba(4,18,42,0.12)] transition duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      style={cardStyle}
      onPointerEnter={() => onPrefetch(tile.href)}
      onFocus={() => onPrefetch(tile.href)}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="relative h-64 w-full">
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
        <div>
          <p className="text-xl font-semibold tracking-wide">{tile.title[locale]}</p>
          <p className="mt-2 text-sm text-white/90">{tile.summary[locale]}</p>
        </div>
        <span className="glow-pill inline-flex items-center gap-2 self-start rounded-full bg-white/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/90">
          <span>{locale === "es" ? "Ver más" : "Explore"}</span>
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};
