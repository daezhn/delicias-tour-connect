import { useState } from "react";
import { restaurants, restaurantCategories } from "@/data/restaurants";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Search } from "lucide-react";
import { MotionReveal } from "@/components/MotionReveal";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

// Helper para generar URL de Google Maps
const getGoogleMapsUrl = (restaurantName: string): string => {
  const query = encodeURIComponent(`${restaurantName}, Delicias, Chihuahua`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

export const Restaurants = () => {
  const [activeCategory, setActiveCategory] = useState("exigentes");
  const [searchTerm, setSearchTerm] = useState("");
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.restaurants;
  const script = locale === "es" ? "Sabores que exploran" : "Flavors that explore";

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesCategory = restaurant.categoria === activeCategory;
    const matchesSearch = restaurant.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && (searchTerm === "" || matchesSearch);
  });

  const currentCategoryInfo = restaurantCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="font-script text-2xl text-secondary/80">{script}</p>
        <h2 className="text-3xl font-extrabold tracking-tight">{copy.title}</h2>
        {copy.intro && <p className="max-w-xl text-sm text-muted-foreground">{copy.intro}</p>}
      </div>

      {/* Buscador */}
      <div className="max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={locale === "es" ? "Buscar restaurante..." : "Search restaurant..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap gap-2">
        {restaurantCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setSearchTerm("");
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category.id
                ? "bg-primary text-white shadow-lg"
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Contador */}
      <p className="text-sm text-muted-foreground">
        {currentCategoryInfo?.icon} {filteredRestaurants.length}{" "}
        {locale === "es" ? "restaurantes en" : "restaurants in"}{" "}
        <strong>{currentCategoryInfo?.label}</strong>
      </p>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {filteredRestaurants.map((restaurant, index) => (
          <MotionReveal
            key={restaurant.id}
            variant="fade-up"
            delay={index * 0.03}
            duration={0.4}
          >
            <Card className="group h-full overflow-hidden border border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              {/* Imagen */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={restaurant.imagen}
                  alt={restaurant.nombre}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-3 text-center">
                <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">
                  {restaurant.nombre}
                </h3>

                {/* Botones */}
                <div className="flex gap-1 justify-center">
                  {restaurant.telefono && (
                    <a
                      href={`tel:${restaurant.telefono.replace(/\s/g, "")}`}
                      className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white transition-colors"
                      title={`${locale === "es" ? "Llamar a" : "Call"} ${restaurant.nombre}`}
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={getGoogleMapsUrl(restaurant.nombre)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    title={`${locale === "es" ? "Ver ubicación de" : "View location of"} ${restaurant.nombre}`}
                  >
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </MotionReveal>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {locale === "es"
              ? `No se encontraron restaurantes con "${searchTerm}"`
              : `No restaurants found matching "${searchTerm}"`}
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => setSearchTerm("")}
          >
            {locale === "es" ? "Limpiar búsqueda" : "Clear search"}
          </Button>
        </div>
      )}
    </div>
  );
};

