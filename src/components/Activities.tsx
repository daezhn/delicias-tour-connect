import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Music, Mountain, Camera, ShoppingBag, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

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
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Actividades <span className="text-primary">Regionales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vive experiencias únicas y descubre todo lo que puedes hacer en Delicias
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Reveal key={activity.title} delay={index * 120} className="h-full">
                <Card 
                  className="group relative h-full overflow-hidden border border-transparent bg-gradient-to-br from-white to-muted/50 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
                >
                  <CardContent className="relative z-10 p-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg shadow-primary/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {activity.description}
                    </p>
                  </CardContent>
                  <div className="absolute -right-10 -bottom-10 h-36 w-36 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:-right-4 group-hover:-bottom-4 group-hover:bg-primary/20" />
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
