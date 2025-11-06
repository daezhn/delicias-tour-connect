import { Card } from "@/components/ui/card";
import { attractions } from "@/data/attractions";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const featuredIds = [1, 4, 6, 5];
const featuredPlaces = featuredIds
  .map((id) => attractions.find((place) => place.id === id))
  .filter((place): place is NonNullable<typeof place> => Boolean(place));

export const FeaturedPlaces = () => {
  return (
    <section id="atractivos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Atractivos <span className="text-primary">Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los lugares más emblemáticos y experiencias únicas que Delicias tiene para ofrecerte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaces.map((place, index) => (
            <Card
              key={place.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/Atractivos#atractivo-${place.id}`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="relative aspect-[3/4] flex items-center justify-center overflow-hidden bg-black">
                  <img
                    src={place.image}
                    alt={place.name}
                    className={cn(
                      "max-h-full max-w-full object-contain transition-transform duration-300",
                      place.imageClass,
                    )}
                  />
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/Atractivos"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-lg font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Ver Todos los Atractivos
          </Link>
        </div>
      </div>
    </section>
  );
};
