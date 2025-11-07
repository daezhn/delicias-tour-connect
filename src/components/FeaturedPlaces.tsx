import { Card } from "@/components/ui/card";
import { attractions } from "@/data/attractions";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
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
    <section id="atractivos" className="py-20">
      <div className="container mx-auto px-4">
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {copy.title} <span className="text-primary">{copy.highlight}</span>
          </h2>
          {copy.intro && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.intro}
            </p>
          )}
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaces.map((place, index) => (
            <Reveal key={place.id} delay={index * 140} className="h-full">
              <Card
                className="group h-full overflow-hidden border-0 bg-gradient-to-br from-[#1f242f] via-[#2c3140] to-[#1b1e26] shadow-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Link
                  to={`/Atractivos#atractivo-${place.id}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative aspect-[3/4] flex items-center justify-center overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className={cn(
                        "max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-110",
                        place.imageClass,
                      )}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal variant="fade-up" delay={200} className="text-center mt-12">
          <Link
            to="/Atractivos#inicio"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-lg font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {copy.button}
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
