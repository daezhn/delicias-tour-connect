import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calender, Calendar, Gift, Info } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

const promos = [
  {
    id: "promo-1",
    title: { es: "Finde gastronómico", en: "Gastronomy weekend" },
    description: { es: "10% de descuento en tours culinarios", en: "10% off on culinary tours" },
    code: "SABOR10",
  },
  {
    id: "promo-2",
    title: { es: "Ruta cultural", en: "Cultural route" },
    description: { es: "2x1 en tours históricos", en: "2x1 on historic tours" },
    code: "CULTURA2",
  },
];

export const TourShowcase = () => {
  const { locale } = useLocale();

  return (
    <section className="py-16 bg-muted/10" id="planificador">
      <div className="container mx-auto px-4 grid gap-8 lg:grid-cols-[2fr,1fr]">
        <Card className="shadow-lg">
          <CardContent>
            <h3 className="text-2xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              {locale === "es" ? "Calendario de tours" : "Tour calendar"}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {locale === "es"
                ? "Aquí se mostrará un calendario con la disponibilidad actualizada de cada tour."
                : "A calendar with live availability per tour will be displayed here."}
            </p>
            <div className="rounded-2xl border border-dashed border-primary/40 p-6 text-center text-muted-foreground">
              {locale === "es" ? "Calendario interactivo próximamente" : "Interactive calendar coming soon"}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardContent>
              <h4 className="font-semibold flex items-center gap-2 text-foreground mb-2">
                <Gift className="h-4 w-4 text-primary" />
                {locale === "es" ? "Promociones activas" : "Active promotions"}
              </h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {promos.map((promo) => (
                  <li key={promo.id} className="rounded-xl bg-muted/50 p-3">
                    <p className="font-semibold text-foreground">{promo.title[locale]}</p>
                    <p>{promo.description[locale]}</p>
                    <p className="text-primary mt-1 text-xs uppercase tracking-[0.4em]">{promo.code}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" />
                {locale === "es" ? "Próximamente" : "Coming soon"}
              </h4>
              <p className="text-sm text-muted-foreground">
                {locale === "es"
                  ? "Habrá integración con un sistema de reservas y pagos para completar tu planificación sin salir del sitio."
                  : "A booking and payment integration will be added so you can finish planning without leaving the site."}
              </p>
              <Button className="w-full" variant="secondary">
                {locale === "es" ? "Saber más" : "Learn more"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
