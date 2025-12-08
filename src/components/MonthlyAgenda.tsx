import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const agendaItems = [
  {
    date: "11 Dic",
    title: "Carrera de Relevos Guadalupana",
    location: "Iglesia Santuario",
    description: "Tradición atlética con salida desde el Santuario"
  },
  {
    date: "14 Dic",
    title: "Delicias-Con Vol. 4",
    location: "Salón Club Rotario",
    description: "Cosplay, Mario Kart, K-Pop y stands de coleccionables"
  },
  {
    date: "18 Dic",
    title: "GK Festival El Grinch",
    location: "Teatro de la Ciudad Manuel Talavera Trejo",
    description: "Función familiar 7:00 p.m · Boleto $180"
  }
];

export const MonthlyAgenda = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Agenda de este Mes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eventos y actividades que no te puedes perder en Delicias
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {agendaItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                  <Calendar className="w-5 h-5" />
                  {item.date}
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
