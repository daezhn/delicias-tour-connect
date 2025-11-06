import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const restaurants = [
  {
    name: "El Mesón de Delicias",
    image: "/images/restaurant-1.jpg",
    cuisine: "Cocina Regional",
    description: "Platillos tradicionales chihuahuenses"
  },
  {
    name: "La Casona del Chef",
    image: "/images/restaurant-2.jpg",
    cuisine: "Cocina Contemporánea",
    description: "Fusión de sabores locales e internacionales"
  },
  {
    name: "Tacos Don Beto",
    image: "/images/restaurant-3.jpg",
    cuisine: "Antojitos Mexicanos",
    description: "Los mejores tacos y quesadillas de la ciudad"
  },
  {
    name: "Asadero El Ranchero",
    image: "/images/restaurant-4.jpg",
    cuisine: "Cortes y Parrilla",
    description: "Carnes selectas al carbón estilo norteño"
  }
];

export const Restaurants = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ¿Qué Voy a Comer?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre los sabores auténticos de Delicias en estos restaurantes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {restaurant.cuisine}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{restaurant.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{restaurant.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
