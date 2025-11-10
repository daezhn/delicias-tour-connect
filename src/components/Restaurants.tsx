import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
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
  const copy = getTranslations(locale).sections.restaurants;
  const script = locale === "es" ? "Sabores que exploran" : "Flavors that explore";

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-2">
          <p className="font-script text-2xl text-secondary/80">{script}</p>
          <h2 className="text-3xl font-extrabold tracking-tight">{copy.title}</h2>
          {copy.intro && <p className="max-w-xl text-sm text-muted-foreground">{copy.intro}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {foodCategories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden border border-black/5 bg-white/95 shadow-[0_15px_30px_rgba(4,18,42,0.08)] transition hover:shadow-[0_25px_45px_rgba(4,18,42,0.14)] cursor-pointer"
              onClick={() => setSelectedImage(category.image)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-xs tracking-wide text-white/70">{category.description}</p>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-xs tracking-wide text-muted-foreground">
                  {copy.cardCta}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="w-[90vw] max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Lista gastronómica"
              className="max-h-[80vh] w-full rounded-3xl object-contain"
              loading="lazy"
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
