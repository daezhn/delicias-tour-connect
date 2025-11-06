import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Recomendaciones
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consejos útiles para disfrutar al máximo tu visita a Delicias
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Tips para tu Visita</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendations.map((recommendation, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
