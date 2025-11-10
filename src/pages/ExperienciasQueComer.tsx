import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const heroImages = ["/images/comerbien.png", "/images/exigentes.png"];

const foodieStories = [
  {
    image: "/images/Galería/4.jpg",
    title: {
      es: "Los 5 mejores pasteles de Delicias",
      en: "Top 5 cakes in Delicias"
    },
    description: {
      es: "Conoce las reposterías consentidas para celebrar con sabores algodoneros y toques de sotol.",
      en: "Discover the favorite bakeries to celebrate with cotton-inspired flavors and sotol twists."
    },
    href: "https://www.google.com/maps/search/pasteleria/@28.1953149,-105.4812411,7890m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    image: "/images/Galería/19.jpg",
    title: {
      es: "Los 5 mejores hot dogs de Delicias",
      en: "Top 5 hot dogs in Delicias"
    },
    description: {
      es: "Explora los puestos nocturnos y toppings creativos que solo Delicias sabe ofrecer.",
      en: "Explore the late-night stands and creative toppings only Delicias locals know."
    },
    href: "https://www.google.com/maps/search/hot+dog/@28.1953119,-105.4813269,7890m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    image: "/images/Galería/10.jpg",
    title: {
      es: "Los 5 mejores elotes de Delicias",
      en: "Top 5 street corn spots"
    },
    description: {
      es: "Sumérgete en el sabor callejero: esquites, elotes y snacks con salsas de la casa.",
      en: "Dive into street flavor: esquites, corn cups and snacks with house-made sauces."
    },
    href: "https://www.google.com/maps/search/elotes/@28.1953119,-105.4813269,7890m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MTEwOS4wIKXMDSoASAFQAw%3D%3D"
  }
] as const;

const EXPERIENCES = [
  {
    href: "/experiencias/que-comer/comerbien",
    image: "/images/comerbien.png",
    title: { es: "Comer y pasarlo bien", en: "Eat & enjoy" }
  },
  {
    href: "/experiencias/que-comer/comidarapida",
    image: "/images/comidarapida.png",
    title: { es: "Comida rápida", en: "Quick bites" }
  },
  {
    href: "/experiencias/que-comer/exigentes",
    image: "/images/exigentes.png",
    title: { es: "Para paladares exigentes", en: "Fine dining" }
  },
  {
    href: "/experiencias/que-comer/snack",
    image: "/images/snack.png",
    title: { es: "Snacks & cafés", en: "Snacks & cafés" }
  }
] as const;

const ExperienciasQueComer = () => {
  const { locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heading =
    locale === "es" ? "Cafés y restaurantes en Delicias" : "Cafés & Restaurants in Delicias";
  const heroCopy =
    locale === "es"
      ? "Desde cafeterías artesanales hasta alta cocina, Delicias fusiona tradición algodonera con propuestas contemporáneas. Inspírate y reserva."
      : "From artisan cafés to fine dining, Delicias blends cotton heritage with contemporary proposals. Get inspired and book.";

  return (
    <div className="min-h-screen bg-[#fff7ef] text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="bg-[#f4e3d2] px-4 py-20 sm:px-8 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-5">
              <a
                href="/experiencias/que-hacer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary/20 px-4 py-2 text-sm font-semibold text-secondary transition hover:bg-secondary/10"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </a>
              <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">{heading}</h1>
              <p className="text-lg text-muted-foreground">{heroCopy}</p>
            </div>
            <div className="flex gap-4">
              {heroImages.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-64 flex-1 rounded-[28px] object-cover shadow-[0_30px_70px_rgba(4,18,42,0.15)]"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <p className="text-center font-tourism text-3xl text-secondary/80">
              {locale === "es" ? "Somos el corazón del norte" : "We are the heart of the north"}
            </p>
            <p className="text-center text-muted-foreground">
              {locale === "es"
                ? "Deleita tu paladar con sabores del norte: cafeterías creativas, cocina regional y propuestas de autor."
                : "Delight your palate with northern flavors: creative cafés, regional cuisine and signature menus."}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {EXPERIENCES.map((item) => (
                <div
                  key={item.href}
                  className="group cursor-pointer overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_20px_45px_rgba(4,18,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(4,18,42,0.12)]"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <img
                    src={item.image}
                    alt={item.title[locale]}
                    className="h-52 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="p-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
                    {item.title[locale]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-white via-[#fef7ef] to-[#f6b043]/25 py-20">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-2 text-center">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Explora" : "Explore"}
              </p>
              <p className="font-tourism text-4xl text-secondary/90">
                {locale === "es" ? "Recomendaciones locales" : "Local recommendations"}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {foodieStories.map((story) => (
                <article
                  key={story.title.es}
                  className="flex flex-col overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-[0_25px_55px_rgba(4,18,42,0.12)]"
                >
                  <img
                    src={story.image}
                    alt={story.title[locale]}
                    className="h-64 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <h3 className="text-2xl font-semibold text-foreground">{story.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{story.description[locale]}</p>
                    <a
                      href={story.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary"
                    >
                      {locale === "es" ? "Ver mapa" : "Open map"}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Directorio gastronómico"
              className="max-h-[80vh] w-full rounded-[32px] object-contain"
              loading="lazy"
              decoding="async"
            />
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default ExperienciasQueComer;
