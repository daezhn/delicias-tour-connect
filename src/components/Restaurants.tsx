import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const foodCategories = [
  {
    title: "Comer y Pasarla Bien",
    image: "/images/food-category-1.jpg",
    description: "Restaurantes para disfrutar en familia y amigos"
  },
  {
    title: "Comida Rápida",
    image: "/images/food-category-2.jpg",
    description: "Opciones rápidas y deliciosas"
  },
  {
    title: "Para los Exigentes",
    image: "/images/food-category-3.jpg",
    description: "Alta cocina y experiencias gourmet"
  },
  {
    title: "Un Snack",
    image: "/images/food-category-4.jpg",
    description: "Cafeterías, antojitos y bocadillos"
  }
];

export const Restaurants = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              ¿Qué Voy a Comer?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora las opciones gastronómicas de Delicias por categoría
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodCategories.map((category, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(category.image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-center text-sm text-muted-foreground">
                    Click para ver la lista completa
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Lista de restaurantes"
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
