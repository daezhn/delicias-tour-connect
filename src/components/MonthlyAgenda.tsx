import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const agendaItems = [
  {
    date: "15 Nov",
    title: "Festival de la Cosecha",
    location: "Plaza Principal",
    description: "Celebración anual de los productos locales"
  },
  {
    date: "22 Nov",
    title: "Noche de Tradiciones",
    location: "Centro Cultural",
    description: "Música y danza folklórica regional"
  },
  {
    date: "28 Nov",
    title: "Feria Gastronómica",
    location: "Parque Central",
    description: "Lo mejor de la cocina chihuahuense"
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
