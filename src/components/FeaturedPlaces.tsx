import { Link } from "react-router-dom";
import { attractions } from "@/data/attractions";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const featuredIds = [1, 4, 6, 5];
const featuredPlaces = featuredIds
  .map((id) => attractions.find((place) => place.id === id))
  .filter((place): place is NonNullable<typeof place> => Boolean(place));

export const FeaturedPlaces = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.featuredPlaces;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-script text-2xl text-secondary/80">
          {locale === "es" ? "Postales de la capital deliciosa" : "Postcards from Delicias"}
        </p>
        <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
          {copy.title} · {copy.highlight}
        </p>
        {copy.intro && <p className="text-sm text-muted-foreground max-w-xl">{copy.intro}</p>}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuredPlaces.map((place, index) => (
          <Reveal key={place.id} variant="fade-up" delay={index * 80}>
            <Link
              to={`/Atractivos#atractivo-${place.id}`}
              className={`relative block overflow-hidden rounded-[28px] border border-black/5 bg-black ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/70">Delicias · Chihuahua</p>
                <p className="text-xl font-semibold text-white">{place.name}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal variant="fade-up" delay={200}>
        <Link
          to="/Atractivos#inicio"
          className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary transition hover:bg-primary hover:text-white"
        >
          {copy.button}
        </Link>
      </Reveal>
    </div>
  );
};
