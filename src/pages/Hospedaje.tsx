import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Bed,
  Coffee,
  ConciergeBell,
  SunMedium,
  Waves,
  Wifi
} from "lucide-react";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { SEO } from "@/components/SEO";

const highlightTiles = [
  {
    id: "boutique",
    image: "/images/hoteles/1.jpg",
    eyebrow: { es: "Centro histórico", en: "Historic core" },
    title: { es: "Hoteles boutique", en: "Boutique stays" },
    description: {
      es: "Casas restauradas en torno a la Plaza Carranza con rooftop y coctelería de autor.",
      en: "Restored townhomes around Plaza Carranza offering rooftops and signature cocktails."
    },
    badges: {
      es: ["Desayuno local", "Check-in 24/7"],
      en: ["Local breakfast", "24/7 check-in"]
    }
  },
  {
    id: "pool",
    image: "/images/comfort.jpg",
    eyebrow: { es: "Zona norte", en: "North district" },
    title: { es: "Escapadas con alberca", en: "Pool escapes" },
    description: {
      es: "Complejos con jardines, asadores y habitaciones familiares hasta para 6 huéspedes.",
      en: "Garden lodges with grills, pools and family suites for up to six guests."
    },
    badges: {
      es: ["Kids friendly", "Spa vespertino"],
      en: ["Kids friendly", "Sunset spa"]
    }
  },
  {
    id: "creative",
    image: "/images/hoteles/5.jpg",
    eyebrow: { es: "Valle agrícola", en: "Agricultural valley" },
    title: { es: "Estancias creativas", en: "Creative lodgings" },
    description: {
      es: "Casas de adobe y lofts entre nogaleras para retiros creativos y sesiones culinarias.",
      en: "Adobe homes and lofts near pecan groves, ideal for creative retreats and culinary sessions."
    },
    badges: {
      es: ["Huerto propio"],
      en: ["On-site garden"]
    }
  }
] as const;

const amenityBlocks = [
  {
    icon: Bed,
    title: { es: "Habitaciones amplias", en: "Spacious rooms" },
    copy: {
      es: "Suites con 38 m² promedio, colchones premium y blackout para descansar después de los tours.",
      en: "Suites average 38 m² with premium mattresses and blackout curtains to rest after excursions."
    }
  },
  {
    icon: Wifi,
    title: { es: "Wi-Fi estable", en: "Reliable Wi-Fi" },
    copy: {
      es: "Cobertura de fibra óptica en zonas comunes e interiores, ideal para nómadas digitales.",
      en: "Fiber coverage in lobbies and rooms so digital nomads can stay connected."
    }
  },
  {
    icon: Coffee,
    title: { es: "Café de la región", en: "Regional coffee" },
    copy: {
      es: "Barras con métodos artesanales, cold brew y pan dulce horneado cada mañana.",
      en: "Bars serving slow brew methods, cold brew and freshly baked pastries each morning."
    }
  },
  {
    icon: ConciergeBell,
    title: { es: "Concierge local", en: "Local concierge" },
    copy: {
      es: "Agenda experiencias privadas en Presa Las Vírgenes, rutas gastronómicas y traslados.",
      en: "Book private Las Vírgenes escapes, tasting tours and transfers with a single message."
    }
  },
  {
    icon: Waves,
    title: { es: "Wellness & alberca", en: "Wellness & pool" },
    copy: {
      es: "Jacuzzis exteriores, temazcales pop-up y carriles de nado climatados todo el año.",
      en: "Outdoor jacuzzis, pop-up temazcal sessions and year-round heated swim lanes."
    }
  },
  {
    icon: SunMedium,
    title: { es: "Terrazas doradas", en: "Golden terraces" },
    copy: {
      es: "Atardeceres sobre el Valle de Conchos con mixología de sotol y música en vivo los fines.",
      en: "Sunsets over Conchos Valley paired with sotol cocktails and live sets on weekends."
    }
  }
] as const;

const Hospedaje = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation();

  const hero = {
    heading: locale === "es" ? "Hospedaje en Delicias" : "Stays in Delicias",
    subheading:
      locale === "es"
        ? "Hoteles boutique, estancias familiares y retiros creativos inspirados en el valle nogalero."
        : "Boutique hotels, family stays and creative retreats inspired by the pecan valley.",
    badge: locale === "es" ? "Planea tu viaje" : "Plan your trip",
    cta: locale === "es" ? "Ver disponibilidad" : "Check availability"
  };

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <SEO
        title={locale === "es" ? "Hospedaje" : "Lodging"}
        description={
          locale === "es"
            ? "Encuentra hoteles, moteles y estancias en Delicias para tu viaje de placer o negocios."
            : "Find hotels, motels and stays in Delicias for your leisure or business trip."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative overflow-hidden bg-[#1a2451] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/hoteles/3.jpg"
              alt="Habitaciones de hotel en Delicias"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c68]/90 via-[#163d8b]/80 to-[#f6b043]/75" />
          </div>
          <div className="relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24">
              <Badge className="self-start bg-white/20 text-white">{hero.badge}</Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.heading}</h1>
              <p className="text-lg text-white/80 md:max-w-3xl">{hero.subheading}</p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/40"
                  onClick={handleBack}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {locale === "es" ? "Volver al inicio" : "Back home"}
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="bg-white text-secondary hover:bg-white/90"
                >
                  <a
                    href="https://www.booking.com/searchresults.es.html?ss=Delicias%2C+Chihuahua%2C+M%C3%A9xico&ssne=Buenavista&ssne_untouched=Buenavista&efdco=1&label=mkt123sc-c9834c4e-4625-4c14-af98-7eccb3d6dec5&sid=0fd0cc83e7eefaf56662edf84b96e6d7&aid=304142&lang=es&sb=1&src_elem=sb&src=index&dest_id=-1677823&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=es&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=721978d2f6f9040c&ac_meta=GhA3MjE5NzhkMmY2ZjkwNDBjIAAoATICZXM6CGRlbGljaWFzQABKAFAA&group_adults=2&no_rooms=1&group_children=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    {hero.cta}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="default"
                  className="relative overflow-hidden bg-gradient-to-r from-[#FF385C] to-[#BD1E59] px-8 py-6 text-lg font-bold text-white shadow-[0_8px_20px_rgba(255,56,92,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_25px_rgba(255,56,92,0.5)] active:scale-95"
                >
                  <a
                    href="https://www.airbnb.mx/s/Delicias--Chihuahua--México/homes"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <ArrowUpRight className="h-5 w-5 animate-pulse" />
                    <span className="relative z-10">Airbnb</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-3 text-center md:text-left">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Colección destacada" : "Featured collection"}
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {locale === "es" ? "Encuentra tu estilo de descanso" : "Match your travel style"}
              </h2>
              <p className="text-muted-foreground md:max-w-3xl">
                {locale === "es"
                  ? "Seleccionamos hospedajes que celebran la creatividad gastronómica y el paisaje del Valle de Conchos."
                  : "A handpicked line-up of stays that blend culinary creativity with Conchos Valley scenery."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {highlightTiles.map((tile) => (
                <Card key={tile.id} className="overflow-hidden border border-black/5 shadow-sm">
                  <img src={tile.image} alt={tile.title[locale]} className="h-56 w-full object-cover" />
                  <CardContent className="space-y-4 p-6">
                    <p className="text-xs uppercase tracking-[0.4em] text-secondary/80">
                      {tile.eyebrow[locale]}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">{tile.title[locale]}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff7ef] py-16">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
            <p className="font-tourism text-2xl text-secondary/80">
              {locale === "es" ? "Mapa de hospedaje" : "Lodging map"}
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              {locale === "es"
                ? "Consulta todas las opciones sin preferencias"
                : "Browse every option with no preference"}
            </h2>
            <p className="text-muted-foreground">
              {locale === "es"
                ? "Como dependencia pública promovemos el acceso parejo. Usa el mapa colaborativo para ubicar hoteles, hostales y estancias sin sesgos comerciales."
                : "As a public office we promote equal access. Use this collaborative map to locate hotels, hostels and stays without commercial bias."}
            </p>
            <div>
              <a
                href="https://www.google.com/maps/search/hoteles+en+delicias+chihuahua/@28.2122512,-105.4975832,14z/data=!3m1!4b1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-secondary px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_40px_rgba(246,176,67,0.35)] transition hover:bg-secondary/90"
              >
                {locale === "es" ? "Abrir mapa" : "Open map"}
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-3 text-center">
              <p className="font-tourism text-2xl text-primary/80">
                {locale === "es" ? "Servicios clave" : "Key services"}
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                {locale === "es" ? "Amenidades que elevan tu estadía" : "Amenities that elevate your stay"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {amenityBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <Card key={block.title.es} className="border border-black/5 shadow-sm">
                    <CardContent className="space-y-3 p-6">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {block.title[locale]}
                      </h3>
                      <p className="text-sm text-muted-foreground">{block.copy[locale]}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Hospedaje;
