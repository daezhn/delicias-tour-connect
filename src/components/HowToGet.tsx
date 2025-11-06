import { Car, Plane, Bus, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const transportOptions = [
  {
    icon: Plane,
    title: "Por Avión",
    description: "Aeropuerto Internacional de Chihuahua",
    details: "A 80 km (1 hora) de Delicias"
  },
  {
    icon: Car,
    title: "En Auto",
    description: "Carretera Federal 45",
    details: "Desde Chihuahua: 1 hora | Desde Cd. Juárez: 3 horas"
  },
  {
    icon: Bus,
    title: "En Autobús",
    description: "Terminal de Autobuses Delicias",
    details: "Conexiones diarias desde principales ciudades"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    description: "Sur del estado de Chihuahua",
    details: "Coordenadas: 28.1897° N, 105.4694° W"
  }
];

export const HowToGet = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ¿Cómo Llegar a Delicias?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas las rutas te llevan a descubrir nuestra hermosa ciudad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{option.details}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
