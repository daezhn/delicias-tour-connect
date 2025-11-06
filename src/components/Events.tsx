import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    id: 1,
    title: "Festival de la Cosecha",
    date: "15 de Octubre, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Plaza Principal",
    image: "/images/event-1.jpg",
    description: "Celebración anual que honra la tradición agrícola de Delicias"
  },
  {
    id: 2,
    title: "Noche de Museos",
    date: "28 de Octubre, 2025",
    time: "6:00 PM - 11:00 PM",
    location: "Museos de Delicias",
    image: "/images/event-2.jpg",
    description: "Recorrido nocturno gratuito por los museos y espacios culturales"
  },
  {
    id: 3,
    title: "Feria Regional",
    date: "5-15 de Noviembre, 2025",
    time: "Todo el día",
    location: "Centro de Exposiciones",
    image: "/images/event-3.jpg",
    description: "La feria más importante de la región con atracciones para toda la familia"
  }
];

export const Events = () => {
  return (
    <section id="eventos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No te pierdas las festividades y eventos especiales que tenemos preparados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.id} 
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {event.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
