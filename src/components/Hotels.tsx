import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Wifi, Coffee, Car } from "lucide-react";

const hotels = [
  {
    name: "Hotel Plaza Delicias",
    image: "/images/hotel-1.jpg",
    rating: 4.5,
    amenities: ["Wi-Fi", "Desayuno", "Estacionamiento"],
    description: "Hotel céntrico con todas las comodidades"
  },
  {
    name: "Hotel Real del Norte",
    image: "/images/hotel-2.jpg",
    rating: 4.3,
    amenities: ["Wi-Fi", "Restaurante", "Estacionamiento"],
    description: "Confort y hospitalidad en el corazón de la ciudad"
  },
  {
    name: "Hotel Jardín",
    image: "/images/hotel-3.jpg",
    rating: 4.7,
    amenities: ["Wi-Fi", "Alberca", "Desayuno"],
    description: "Ambiente tranquilo rodeado de naturaleza"
  },
  {
    name: "Hotel Los Viñedos",
    image: "/images/hotel-4.jpg",
    rating: 4.4,
    amenities: ["Wi-Fi", "Bar", "Estacionamiento"],
    description: "Elegancia y confort para tu estadía"
  }
];

const amenityIcons: Record<string, any> = {
  "Wi-Fi": Wifi,
  "Desayuno": Coffee,
  "Estacionamiento": Car,
  "Restaurante": Coffee,
  "Alberca": Star,
  "Bar": Coffee
};

export const Hotels = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Dónde Hospedarse
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hoteles confortables para una estadía inolvidable en Delicias
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{hotel.name}</CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold">{hotel.rating}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{hotel.description}</p>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, idx) => {
                    const Icon = amenityIcons[amenity] || Star;
                    return (
                      <div key={idx} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon className="w-3 h-3" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
