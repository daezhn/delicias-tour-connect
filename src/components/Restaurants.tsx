import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const foodCategories = [
  {
    title: "Comer y Pasarla Bien",
    image: "/images/comerbien.png",
    description: "Restaurantes para disfrutar en familia y amigos"
  },
  {
    title: "Comida Rápida",
    image: "/images/comidarapida.png",
    description: "Opciones rápidas y deliciosas"
  },
  {
    title: "Para los Exigentes",
    image: "/images/exigentes.png",
    description: "Alta cocina y experiencias gourmet"
  },
  {
    title: "Un Snack",
    image: "/images/snack.png",
    description: "Cafeterías, antojitos y bocadillos"
  }
];

export const Restaurants = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { locale } = useLocale();
  const restaurantsCopy = getTranslations(locale).sections.restaurants;

  return (
    <>
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {restaurantsCopy.title}
            </h2>
            {restaurantsCopy.intro && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {restaurantsCopy.intro}
              </p>
            )}
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
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-white/90">{category.description}</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-center text-sm text-muted-foreground">
                    {restaurantsCopy.cardCta}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="w-[90vw] md:w-auto md:max-w-5xl max-h-[90vh] p-0 border-none bg-transparent shadow-none place-items-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Lista de restaurantes"
              className="block w-full md:w-auto max-h-[85vh] object-contain rounded-lg"
              loading="lazy"
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
