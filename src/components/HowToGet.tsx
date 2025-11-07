import { Car, Plane, Bus, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { PremiumBadge } from "@/components/PremiumBadge";
import { MiniMap } from "@/components/MiniMap";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

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
    details: "Desde Chihuahua: 1 hora | Desde Cd. Juárez: 5 horas"
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
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.howToGet;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Reveal variant="fade-up" className="text-center mb-12 space-y-4">
          <PremiumBadge icon={<MapPin className="h-3 w-3" />} label={copy.badgeLabel ?? ""} className="mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {copy.title}
          </h2>
          {copy.intro && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.intro}
            </p>
          )}
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {transportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Reveal key={option.title} delay={index * 120}>
                <Card className="text-center border border-transparent bg-gradient-to-b from-white to-muted/40 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                  <CardHeader>
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow shadow-primary/30 transition-transform duration-500 hover:scale-105">
                      <Icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{option.details}</p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade-up" delay={280} className="mt-16">
          <div className="relative mx-auto max-w-5xl">
            <MiniMap />
            <div className="pointer-events-none absolute inset-x-0 -bottom-6 mx-auto h-16 w-3/4 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
