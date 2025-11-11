import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const heroHighlights = [
  {
    es: "Cafés de autor que dialogan con la tradición Deliciense.",
    en: "Signature cafés in dialogue with Deliciense heritage."
  },
  {
    es: "Cocina de humo en restaurantes familiares.",
    en: "Smoke driven cuisine in family-run restaurants."
  },
  {
    es: "Mercados nocturnos con elotes, pan y mixología local.",
    en: "Night markets loaded with street corn, pastries and local mixology."
  }
] as const;

const tastingMenu = [
  {
    course: { es: "Entrada", en: "Starter" },
    dish: { es: "Tostadas", en: "Tostadas" },
    spot: "Casa Nuez",
    description: {
      es: "Laminitas crujientes con emulsión cítrica para abrir apetito.",
      en: "Crisp sheets with citrus emulsion to wake up your palate."
    },
    image: "/images/restaurant-1.jpg"
  },
  {
    course: { es: "Plato fuerte", en: "Main" },
    dish: { es: "Lechón", en: "Suckling pig" },
    spot: "Cuarto de Humo",
    description: {
      es: "Corte jugoso.",
      en: "Juicy cut."
    },
    image: "/images/restaurant-2.jpg"
  },
  {
    course: { es: "Postre", en: "Dessert" },
    dish: { es: "Cheesecake", en: "Candy cheesecake" },
    spot: "Atelier Dulce",
    description: {
      es: "Base de galleta con queso de rancho y nube rosa.",
      en: "Cookie base, farmhouse cheese and fluffy pink cloud."
    },
    image: "/images/restaurant-3.jpg"
  }
] as const;

const marketStops = [
  {
    title: { es: "Mercado Juárez", en: "Juárez Market" },
    description: {
      es: "Vhiles secos y panadería tradicional desde las 7 am.",
      en: "Dried chiles and traditional bread from 7 a.m."
    },
    tip: { es: "Pide jugo de betabel y zanahoria recién hecho.", en: "Order the fresh beet-carrot juice." }
  },
  {
    title: { es: "Elotes nocturnos", en: "Night corn" },
    description: {
      es: "Carritos con esquites y salsas de la casa, abre a las 7 pm.",
      en: "Carts with esquites and house sauces, open 7 p.m."
    },
    tip: { es: "Combina con chiltepín y topping de nuez garapiñada.", en: "Add chiltepín and candied pecan topping." }
  },
  {
    title: { es: "Cafés de autor", en: "Signature cafés" },
    description: {
      es: "Espacios con cold brew de nuez, pan de masa madre y playlists lo-fi.",
      en: "Spaces serving pecan cold brew, sourdough and lo-fi playlists."
    },
    tip: { es: "Pregunta por la degustación de cafetos chihuahuenses.", en: "Ask for the Chihuahua coffee flight." }
  }
] as const;

const mapaGourmet = [
  {
    name: { es: "Ruta desayunos creativos", en: "Creative breakfast route" },
    link: "https://maps.google.com/?q=cafeterias+delicias+chihuahua",
    description: {
      es: "Cafés con pan artesano, bowls y jugos cold pressed.",
      en: "Coffee shops with artisan bread, bowls and cold-pressed juices."
    }
  },
  {
    name: { es: "Asadores & parrillas", en: "Grills & smokehouses" },
    link: "https://maps.google.com/?q=parrilla+delicias+chihuahua",
    description: {
      es: "Cortes norteños, vegetales a la brasa y mixología ahumada.",
      en: "Northern cuts, grilled veggies and smoky cocktails."
    }
  },
  {
    name: { es: "Antojitos nocturnos", en: "Late-night bites" },
    link: "https://maps.google.com/?q=antojitos+delicias",
    description: {
      es: "Hot dogs estilo Delicias, elotes, churros y puestos móviles.",
      en: "Delicias-style hot dogs, street corn, churros and food trucks."
    }
  }
] as const;

const ExperienciasQueComer = () => {
  const { locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const menuImages = [
    {
      image: "/images/comerbien.png",
      label: { es: "Comer y pasarlo bien", en: "Eat & enjoy" }
    },
    {
      image: "/images/comidarapida.png",
      label: { es: "Comida rápida", en: "Quick bites" }
    },
    {
      image: "/images/exigentes.png",
      label: { es: "Paladares exigentes", en: "Fine dining" }
    },
    {
      image: "/images/snack.png",
      label: { es: "Snacks & cafés", en: "Snacks & cafés" }
    }
  ] as const;
  const heroTitle = locale === "es" ? "Cocina del desierto" : "Desert cuisine";
  const heroCopy =
    locale === "es"
      ? "Delicias combina sabores algodoneros, humo norteño y cafés creativos. Traza tu propio menú con esta guía."
      : "Delicias blends cotton heritage, northern smoke and creative cafés. Craft your tasting journey with this guide.";
  const heroScript =
    locale === "es" ? "Sabores que nacen del sol y el algodón." : "Flavors born from sun & cotton.";

  return (
    <div className="min-h-screen bg-[#fff8ef] text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="relative isolate overflow-hidden px-4 py-20 sm:px-8 lg:px-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,203,178,0.6),_transparent)]" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <a
                href="/experiencias/que-hacer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]"
              >
                <ArrowUpRight className="h-4 w-4 rotate-180" />
                {locale === "es" ? "Regresar" : "Back"}
              </a>
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Guía gastronómica" : "Gastronomy guide"}
              </p>
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">{heroTitle}</h1>
              <p className="font-script text-3xl italic text-secondary/80">{heroScript}</p>
              <p className="max-w-xl text-sm text-foreground/70">{heroCopy}</p>
              <div className="space-y-3">
                {heroHighlights.map((item) => (
                  <div key={item.es} className="flex items-start gap-3 text-sm text-foreground/70">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-secondary" />
                    <p>{item[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="/images/restaurant-4.jpg"
                alt=""
                className="h-60 w-full rounded-[32px] border border-white object-cover shadow-[0_20px_55px_rgba(133,78,50,0.3)]"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-4">
                <img
                  src="/images/restaurant-1.jpg"
                  alt=""
                  className="h-28 w-full rounded-[24px] object-cover shadow-[0_15px_45px_rgba(133,78,50,0.2)]"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/images/restaurant-2.jpg"
                  alt=""
                  className="h-28 w-full rounded-[24px] object-cover shadow-[0_15px_45px_rgba(133,78,50,0.2)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-6 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Directorio visual" : "Visual directory"}
              </p>
              <h2 className="text-3xl font-black text-secondary">
                {locale === "es" ? "Menús y guías impresas" : "Menus & print guides"}
              </h2>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Haz zoom sobre cada menú para planear tu ruta gastronómica."
                  : "Zoom each menu to plan your gastronomic route."}
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {menuImages.map((menu) => (
                <button
                  key={menu.image}
                  type="button"
                  onClick={() => setSelectedImage(menu.image)}
                  className="group overflow-hidden rounded-[32px] border border-foreground/10 bg-[#fff7ef] p-4 text-center shadow-[0_15px_35px_rgba(133,78,50,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(133,78,50,0.18)]"
                >
                  <img
                    src={menu.image}
                    alt={menu.label[locale]}
                    loading="lazy"
                    decoding="async"
                    className="h-60 w-full rounded-[20px] object-cover"
                  />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.35em] text-secondary">
                    {menu.label[locale]}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-foreground/5 bg-[#fff2e3] py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Menú de degustación" : "Tasting menu"}
              </p>
              <h2 className="text-3xl font-black text-secondary">
                {locale === "es" ? "Sabores imprescindibles" : "Must-taste flavors"}
              </h2>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Seleccionamos un amuse, fondo y postre para que armes tu itinerario foodie."
                  : "We curated an amuse, main and dessert so you can script your foodie itinerary."}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {tastingMenu.map((item) => (
                <article
                  key={item.dish.es}
                  className="space-y-4 rounded-[32px] border border-secondary/10 bg-white p-5 shadow-[0_20px_45px_rgba(133,78,50,0.15)]"
                >
                  <img
                    src={item.image}
                    alt={item.dish[locale]}
                    className="h-48 w-full rounded-[24px] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="text-[11px] uppercase tracking-[0.45em] text-secondary/70">{item.course[locale]}</p>
                  <h3 className="text-2xl font-semibold text-secondary">{item.dish[locale]}</h3>
                  <p className="text-sm text-foreground/70">{item.description[locale]}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">{item.spot}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl grid gap-10 px-4 lg:grid-cols-[1fr,0.9fr]">
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.5em] text-secondary/70">
                {locale === "es" ? "Mercados & cafés" : "Markets & cafés"}
              </p>
              <h2 className="text-3xl font-black text-secondary">
                {locale === "es" ? "Ruta de compras y antojos" : "Grocery & cravings route"}
              </h2>
              <p className="font-script text-2xl italic text-secondary/70">
                {locale === "es" ? "Compra, prueba, repite." : "Shop, taste, repeat."}
              </p>
              <p className="text-sm text-foreground/70">
                {locale === "es"
                  ? "Desde ingredientes frescos hasta antojitos nocturnos, arma tu despensa viajera y tu cena improvisada."
                  : "From fresh ingredients to late-night bites, fill your traveler pantry and improvise dinner."}
              </p>
            </div>
            <div className="space-y-5">
              {marketStops.map((stop) => (
                <article
                  key={stop.title.es}
                  className="rounded-[28px] border border-foreground/10 bg-[#fff7ef] p-5 shadow-[0_15px_35px_rgba(133,78,50,0.12)]"
                >
                  <h3 className="text-2xl font-semibold text-secondary">{stop.title[locale]}</h3>
                  <p className="mt-2 text-sm text-foreground/70">{stop.description[locale]}</p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/50">
                    {stop.tip[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-20 text-white">
          <div className="mx-auto max-w-5xl space-y-8 px-4">
            <div className="text-center space-y-2">
              <p className="text-[11px] uppercase tracking-[0.5em] text-white/70">
                {locale === "es" ? "Mapas gourmet" : "Gourmet maps"}
              </p>
              <h2 className="text-3xl font-black">
                {locale === "es" ? "Encuentra tu mesa" : "Find your table"}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {mapaGourmet.map((entry) => (
                <article
                  key={entry.name.es}
                  className="flex flex-col rounded-[28px] border border-white/20 bg-white/10 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.25)] backdrop-blur"
                >
                  <h3 className="text-2xl font-semibold">{entry.name[locale]}</h3>
                  <p className="mt-3 text-sm text-white/85">{entry.description[locale]}</p>
                  <a
                    href={entry.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em]"
                  >
                    {locale === "es" ? "Abrir mapa" : "Open map"}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
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
              alt="Menú gastronómico"
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
