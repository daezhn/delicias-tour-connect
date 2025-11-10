import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

const planTiles = [
  {
    id: "transport",
    href: "#como-llegar",
    image: "/images/torre-reloj.jpg",
    title: { es: "Transporte", en: "Transport" },
    summary: {
      es: "Rutas aéreas, carretera federal y tips para llegar en bus o auto.",
      en: "Flight routes, highway info and tips for arriving by bus or car."
    }
  },
  {
    id: "stay",
    href: "#stay-dine",
    image: "/images/hotel-4.jpg",
    title: { es: "Hospedaje", en: "Stays" },
    summary: {
      es: "Hoteles boutique, casas creativas y experiencias con alberca.",
      en: "Boutique hotels, creative homes and stays with pools."
    }
  },
  {
    id: "tours",
    href: "/tours",
    image: "/images/tours/cavall7.jpg",
    title: { es: "Tours & experiencias", en: "Tours & experiences" },
    summary: {
      es: "Descubre rutas guiadas, safaris al desierto y escapadas nocturnas.",
      en: "Discover guided routes, desert safaris and night escapes."
    }
  },
  {
    id: "climate",
    href: "#actividades",
    image: "/images/hero-delicias-2.jpg",
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

export const PlanYourTrip = ({ compact = false, showHeading = true }: PlanYourTripProps) => {
  const { locale } = useLocale();
  const script = locale === "es" ? "El corazón del norte de México" : "The heart of Northern Mexico";
  const heading = locale === "es" ? "Planea tu viaje a Delicias" : "Plan your trip to Delicias";
  const description =
    locale === "es"
      ? "Aquí reunimos transporte, hospedaje, itinerarios y clima para que armes la ruta ideal con un solo scroll."
      : "Transport, stays, itineraries and climate guidance gathered in one scroll so you can craft the perfect route.";

  return (
    <section className={compact ? "bg-transparent py-10" : "bg-white py-20"}>
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
              <a
                key={tile.id}
                href={tile.href}
                className="group relative block overflow-hidden rounded-[34px] border border-black/5 shadow-[0_25px_55px_rgba(4,18,42,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <img
                  src={tile.image}
                  alt={tile.title[locale]}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <div>
                    <p className="text-xl font-semibold tracking-wide">{tile.title[locale]}</p>
                    <p className="mt-2 text-sm text-white/90">{tile.summary[locale]}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition group-hover:bg-white/30">
                    {locale === "es" ? "Ver más" : "Explore"}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
