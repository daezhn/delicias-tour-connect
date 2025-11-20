import { useEffect, useMemo, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import {
  ArrowLeft,
  ArrowUpRight,
  CloudRain,
  Droplet,
  MapPin,
  Sun,
  Thermometer,
  Wind
} from "lucide-react";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";

interface ForecastDay {
  date: string;
  max: number;
  min: number;
  rain: number;
  code: number;
}

const weatherCodeMap: Record<
  number,
  { icon: keyof typeof iconMap; description: { es: string; en: string } }
> = {
  0: { icon: "Sun", description: { es: "Despejado", en: "Clear sky" } },
  1: { icon: "Sun", description: { es: "Mayormente soleado", en: "Mostly sunny" } },
  2: { icon: "Sun", description: { es: "Parcialmente nublado", en: "Partly cloudy" } },
  3: { icon: "CloudRain", description: { es: "Nublado", en: "Cloudy" } },
  45: { icon: "CloudRain", description: { es: "Neblina", en: "Foggy" } },
  48: { icon: "CloudRain", description: { es: "Neblina helada", en: "Freezing fog" } },
  51: { icon: "Droplet", description: { es: "Llovizna ligera", en: "Light drizzle" } },
  55: { icon: "Droplet", description: { es: "Llovizna intensa", en: "Heavy drizzle" } },
  61: { icon: "CloudRain", description: { es: "Chubascos leves", en: "Light showers" } },
  63: { icon: "CloudRain", description: { es: "Chubascos moderados", en: "Moderate showers" } },
  65: { icon: "CloudRain", description: { es: "Chubascos fuertes", en: "Heavy showers" } },
  71: { icon: "CloudRain", description: { es: "Nieve ligera", en: "Light snow" } },
  80: { icon: "CloudRain", description: { es: "Chaparrones dispersos", en: "Scattered showers" } },
  95: { icon: "CloudRain", description: { es: "Tormenta", en: "Thunderstorm" } },
  99: { icon: "CloudRain", description: { es: "Tormenta severa", en: "Severe thunderstorm" } }
};

const iconMap = {
  Sun,
  CloudRain,
  Droplet
};

const seasons = [
  {
    id: "spring",
    months: "Mar - May",
    title: { es: "Primavera dorada", en: "Golden spring" },
    temps: "18° - 30°C",
    copy: {
      es: "Campos de nogales en flor y brisas templadas: ideal para ciclismo y terrazas al atardecer.",
      en: "Blooming pecan fields and warm breezes: great for cycling tours and rooftop sunsets."
    },
    suggestions: {
      es: ["Visita huertos en Saucillo", "Picnic en Presa Las Vírgenes", "Mercados artesanales"],
      en: ["Visit orchards in Saucillo", "Picnic at Las Vírgenes Dam", "Artisan markets"]
    }
  },
  {
    id: "summer",
    months: "Jun - Ago",
    title: { es: "Verano con chapuzón", en: "Splashy summer" },
    temps: "24° - 38°C",
    copy: {
      es: "Días soleados para rutas acuáticas y escapadas nocturnas con aire fresco del valle.",
      en: "Sunny days perfect for water routes and evening escapes cooled by valley breezes."
    },
    suggestions: {
      es: ["Kayak al amanecer", "Cenas tardías en terrazas", "Roadtrips nocturnos"],
      en: ["Sunrise kayaking", "Late terrace dinners", "Night roadtrips"]
    }
  },
  {
    id: "fall",
    months: "Sep - Nov",
    title: { es: "Otoño gastronómico", en: "Gastronomic fall" },
    temps: "14° - 28°C",
    copy: {
      es: "Cosecha de nuez y clima fresco para festivales culinarios y recorridos históricos.",
      en: "Pecan harvest and crisp weather ideal for culinary festivals and historic walks."
    },
    suggestions: {
      es: ["Tour de nueces", "Festival gastronómico", "Rutas del centro"],
      en: ["Pecan tours", "Food festivals", "Downtown walks"]
    }
  },
  {
    id: "winter",
    months: "Dic - Feb",
    title: { es: "Invierno despejado", en: "Bright winter" },
    temps: "6° - 22°C",
    copy: {
      es: "Mañanas frías y tardes soleadas; empaca capas ligeras para roadtrips y observación estelar.",
      en: "Chilly mornings and sunny afternoons; pack light layers for roadtrips and stargazing."
    },
    suggestions: {
      es: ["Ruta del café local", "Miradores nocturnos", "Museos y galerías"],
      en: ["Local coffee trail", "Night viewpoints", "Museums and galleries"]
    }
  }
] as const;

const packingList = [
  {
    title: { es: "Capas inteligentes", en: "Smart layers" },
    detail: {
      es: "Playeras transpirables + chamarra ligera para cambios entre mañana y tarde.",
      en: "Breathable tees + light jacket to bridge the morning-evening shift."
    }
  },
  {
    title: { es: "Protección solar", en: "Sun protection" },
    detail: {
      es: "Bloqueador SPF 50, sombrero y lentes para rutas desérticas.",
      en: "SPF 50, hat and shades for desert outings."
    }
  },
  {
    title: { es: "Hidratación", en: "Hydration" },
    detail: {
      es: "Botella reutilizable con filtro y electrolitos portátiles.",
      en: "Reusable bottle with filter plus portable electrolytes."
    }
  },
  {
    title: { es: "Tech roadtrip", en: "Roadtrip tech" },
    detail: {
      es: "Power bank, mapas offline y cámara para cielos nocturnos.",
      en: "Power bank, offline maps and camera for night skies."
    }
  }
] as const;

const ClimaTips = () => {
  const { locale } = useLocale();
  const [forecast, setForecast] = useState<ForecastDay[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchWeather = async () => {
      try {
        const url =
          "https://api.open-meteo.com/v1/forecast?latitude=28.1903&longitude=-105.4711&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&timezone=auto&forecast_days=7";
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Weather request failed");
        const data = await response.json();
        const days: ForecastDay[] = data.daily.time.map((time: string, index: number) => ({
          date: time,
          max: data.daily.temperature_2m_max[index],
          min: data.daily.temperature_2m_min[index],
          rain: data.daily.precipitation_probability_max[index],
          code: data.daily.weathercode[index]
        }));
        setForecast(days);
        setError(null);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        setError(locale === "es" ? "No pudimos cargar el clima." : "Unable to load weather.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
    return () => controller.abort();
  }, [locale]);

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(locale === "es" ? "es-MX" : "en-US", {
        weekday: "short",
        day: "numeric",
        month: "short"
      }),
    [locale]
  );

  const hero = {
    heading: locale === "es" ? "Clima y tips de Delicias" : "Delicias weather & tips",
    subheading:
      locale === "es"
        ? "Pronóstico en tiempo real, temporadas y recomendaciones para empacar sin sorpresas."
        : "Live forecast, seasonal notes and packing guidance so you arrive prepared.",
    badge: locale === "es" ? "Planea tu viaje" : "Plan your trip"
  };

  const Icon = (code: number) => {
    const fallback = { icon: "Sun", description: { es: "Soleado", en: "Sunny" } };
    const entry = weatherCodeMap[code] ?? fallback;
    const Component = iconMap[entry.icon];
    return (
      <div className="flex items-center gap-2">
        <Component className="h-6 w-6 text-secondary" />
        <span className="text-sm text-muted-foreground">{entry.description[locale]}</span>
      </div>
    );
  };

  const handleBack = useSmartBackNavigation();

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <SEO
        title={locale === "es" ? "Clima y Tips de Viaje" : "Weather & Travel Tips"}
        description={
          locale === "es"
            ? "Consulta el pronóstico de 7 días y recomendaciones de equipaje para tu visita a Delicias."
            : "Check the 7-day forecast and packing recommendations for your visit to Delicias."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative overflow-hidden bg-[#0c2c68] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/hero-delicias-2.jpg"
              alt="Clima en Delicias Chihuahua"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c68]/90 via-[#163d8b]/80 to-[#f6b043]/70" />
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
                    href="https://www.google.com/maps/place/Delicias,+Chihuahua"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    {locale === "es" ? "Ver ubicación" : "View on map"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-tourism text-2xl text-secondary/80">
                  {locale === "es" ? "Pronóstico 7 días" : "7-day forecast"}
                </p>
                <h2 className="text-3xl font-bold">
                  {locale === "es" ? "Así amanece Delicias" : "This week in Delicias"}
                </h2>
              </div>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-secondary/40 text-secondary hover:bg-secondary/5"
              >
                <a
                  href="https://www.meteored.mx/clima-en_Delicias-America+Norte-Mexico-Chihuahua-MMCS-1-26626.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  {locale === "es" ? "Ver más detalles" : "See more details"}
                </a>
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {(forecast ?? Array.from({ length: 4 })).map((day, index) => (
                <Card
                  key={day ? day.date : index}
                  className="border border-black/5 shadow-[0_15px_35px_rgba(12,44,104,0.08)]"
                >
                  <CardContent className="space-y-4 p-6">
                    {day ? (
                      <>
                        <div>
                          <p className="text-xs uppercase tracking-[0.4em] text-secondary/70">
                            {formatter.format(new Date(day.date))}
                          </p>
                          <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-3xl font-semibold text-secondary">{Math.round(day.max)}°</span>
                            <span className="text-muted-foreground">/ {Math.round(day.min)}°</span>
                          </div>
                        </div>
                        {Icon(day.code)}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CloudRain className="h-4 w-4 text-primary" />
                          {locale === "es" ? "Prob. lluvia" : "Rain chance"} {Math.round(day.rain)}%
                        </div>
                      </>
                    ) : (
                      <div className="space-y-3">
                        <div className="h-4 w-24 animate-pulse rounded-full bg-muted" />
                        <div className="h-6 w-16 animate-pulse rounded-full bg-muted" />
                        <div className="h-4 w-32 animate-pulse rounded-full bg-muted" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            {loading && !forecast && (
              <p className="text-sm text-muted-foreground">
                {locale === "es" ? "Cargando pronóstico..." : "Loading forecast..."}
              </p>
            )}
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </section>

        <section className="bg-[#f5fbfd] py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center">
              <p className="font-tourism text-2xl text-primary/80">
                {locale === "es" ? "Guía por temporada" : "Seasonal playbook"}
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                {locale === "es" ? "¿Cuándo visitar Delicias?" : "When to visit Delicias?"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {seasons.map((season) => (
                <Card key={season.id} className="border border-primary/20 bg-white">
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.4em] text-primary/70">{season.months}</p>
                      <span className="inline-flex items-center gap-2 text-sm text-secondary">
                        <Thermometer className="h-4 w-4" />
                        {season.temps}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{season.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{season.copy[locale]}</p>
                    <ul className="space-y-1 text-sm text-foreground">
                      {season.suggestions[locale].map((tip) => (
                        <li key={tip} className="flex items-center gap-2">
                          <Sun className="h-4 w-4 text-secondary" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Checklist de viaje" : "Travel checklist"}
              </p>
              <h2 className="text-3xl font-bold">
                {locale === "es" ? "Qué empacar para Delicias" : "What to pack for Delicias"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {packingList.map((item) => (
                <Card key={item.title.es} className="border border-black/5 shadow-sm">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <Wind className="h-5 w-5 text-secondary" />
                      <p className="text-lg font-semibold text-foreground">{item.title[locale]}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.detail[locale]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default ClimaTips;
