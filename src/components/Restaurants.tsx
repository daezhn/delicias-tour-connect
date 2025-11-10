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
  const script = locale === "es" ? "Sabores para cada antojo" : "Flavors for every craving";

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-3">
          <p className="font-script text-2xl text-secondary/80">{script}</p>
          <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">{copy.title}</p>
          {copy.intro && <p className="max-w-xl text-sm text-muted-foreground">{copy.intro}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {foodCategories.map((category) => (
            <Card
              key={category.title}
              className="overflow-hidden border border-black/5 bg-white shadow-[0_15px_35px_rgba(4,18,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_25px_45px_rgba(4,18,42,0.12)] cursor-pointer"
              onClick={() => setSelectedImage(category.image)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/70">{category.description}</p>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
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
