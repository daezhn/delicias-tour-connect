import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { FadeImage } from "@/components/FadeImage";

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
        <Reveal variant="fade-up" className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No te pierdas las festividades y eventos especiales que tenemos preparados
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Reveal key={event.id} variant="fade-up" delay={index * 140}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <FadeImage
                    src={event.image}
                    alt={event.title}
                    containerClassName="h-full w-full"
                    className="group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                    {event.time}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
