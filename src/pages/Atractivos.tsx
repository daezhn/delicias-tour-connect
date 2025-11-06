import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { attractions } from "@/data/attractions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Atractivos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24">
        <section id="inicio" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-delicias.jpg"
              alt="Atractivos turisticos en Delicias"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          </div>
          <div className="relative z-10">
            <div className="container mx-auto px-4 py-20 md:py-28">
              <div className="max-w-3xl space-y-6 text-white">
                <Badge className="bg-primary/80 text-white">Explora Delicias</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Todos los atractivos turisticos de Delicias
                </h1>
                <p className="text-lg md:text-xl text-white/80">
                  Encuentra experiencias culturales, gastronomicas, historicas y naturales para planear
                  tu visita a la region.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    <Link to="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Volver al inicio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="atractivos" className="py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Catalogo de atractivos
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Descubre los puntos imperdibles de Delicias, agrupados por categoria para que armes tu itinerario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {attractions.map((place) => (
                <Card
                  key={place.id}
                  id={`atractivo-${place.id}`}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <Badge className="absolute left-4 top-4 bg-primary/90 text-white">{place.category}</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{place.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{place.description}</p>
                    </div>

                    {place.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{place.location}</span>
                      </div>
                    )}

                    {place.schedule && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{place.schedule}</span>
                      </div>
                    )}

                    {place.highlights && place.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {place.highlights.map((item) => (
                          <Badge key={item} variant="outline" className="border-primary/30 text-primary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Atractivos;
