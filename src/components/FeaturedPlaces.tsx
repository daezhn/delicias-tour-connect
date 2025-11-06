import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const places = [
  {
    id: 1,
    name: "Torre del Reloj",
    category: "Patrimonio Histórico",
    image: "/images/torre-reloj.jpg",
    description: "Icónico símbolo de Delicias, punto de encuentro y corazón de la ciudad."
  },
  {
    id: 2,
    name: "Parque Central",
    category: "Espacios Recreativos",
    image: "/images/parque-central.jpg",
    description: "Espacio verde ideal para pasear, disfrutar en familia y eventos culturales."
  },
  {
    id: 3,
    name: "Museo del Desierto Chihuahuense",
    category: "Cultura",
    image: "/images/museo.jpg",
    description: "Descubre la historia y biodiversidad única del desierto chihuahuense."
  },
  {
    id: 4,
    name: "Teatro de la Ciudad",
    category: "Arte y Cultura",
    image: "/images/teatro.jpg",
    description: "Disfruta de presentaciones artísticas, obras de teatro y eventos culturales."
  }
];

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
          {places.map((place, index) => (
            <Card 
              key={place.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {place.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {place.name}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {place.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary"
                >
                  Ver más
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 border-primary text-primary hover:bg-primary hover:text-white">
            Ver Todos los Atractivos
          </Button>
        </div>
      </div>
    </section>
  );
};
