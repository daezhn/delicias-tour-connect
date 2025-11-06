import { CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { PremiumBadge } from "@/components/PremiumBadge";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const recommendations = [
  "Lleva ropa cómoda y calzado apropiado para caminar",
  "El clima es seco, mantente hidratado durante todo el día",
  "Prueba los productos locales en el mercado municipal",
  "Visita durante la temporada de festivales (septiembre-noviembre)",
  "Contrata tours guiados para conocer la historia local",
  "No olvides tu cámara para capturar los hermosos atardeceres",
  "Respeta las áreas naturales y el patrimonio cultural",
  "Pregunta a los locales por sus lugares favoritos"
];

export const Recommendations = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.recommendations;

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Reveal variant="fade-up" className="text-center mb-12 space-y-4">
          <PremiumBadge icon={<Sparkles className="h-3 w-3" />} label={copy.badgeLabel ?? ""} className="mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {copy.title}
          </h2>
          {copy.intro && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {copy.intro}
            </p>
          )}
        </Reveal>

        <Reveal variant="fade-up" delay={120}>
          <Card className="max-w-4xl mx-auto border border-transparent bg-gradient-to-r from-white to-muted/40 shadow-lg hover:shadow-xl transition">
            <CardHeader>
              <CardTitle className="text-2xl">{copy.cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendations.map((recommendation, index) => (
                  <div key={index} className="flex gap-3 items-start transition-transform duration-300 hover:-translate-y-1">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{recommendation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
