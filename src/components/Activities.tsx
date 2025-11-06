import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Music, Mountain, Camera, ShoppingBag, Users } from "lucide-react";

const activities = [
  {
    icon: Utensils,
    title: "Gastronomía Local",
    description: "Saborea los platillos tradicionales y la deliciosa comida regional"
  },
  {
    icon: Music,
    title: "Eventos Culturales",
    description: "Disfruta festivales, conciertos y celebraciones durante todo el año"
  },
  {
    icon: Mountain,
    title: "Ecoturismo",
    description: "Explora la naturaleza y paisajes únicos del desierto chihuahuense"
  },
  {
    icon: Camera,
    title: "Recorridos Fotográficos",
    description: "Captura momentos inolvidables en los lugares más pintorescos"
  },
  {
    icon: ShoppingBag,
    title: "Artesanías",
    description: "Encuentra productos locales y artesanías únicas de la región"
  },
  {
    icon: Users,
    title: "Turismo Familiar",
    description: "Actividades diseñadas para disfrutar con toda la familia"
  }
];

export const Activities = () => {
  return (
    <section id="actividades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Actividades <span className="text-primary">Regionales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vive experiencias únicas y descubre todo lo que puedes hacer en Delicias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card 
                key={index} 
                className="group border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
