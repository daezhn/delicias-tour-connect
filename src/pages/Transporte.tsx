import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocale } from "@/hooks/use-locale";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowUpRight,
  Bus,
  Car,
  Clock,
  Fuel,
  Info,
  MapPin,
  Navigation2,
  Phone,
  Plane
} from "lucide-react";
import { Link } from "react-router-dom";

const arrivalModes = [
  {
    id: "plane",
    icon: Plane,
    title: { es: "Ruta aérea + traslado", en: "Air route + transfer" },
    summary: {
      es: "Desde el Aeropuerto Internacional de Chihuahua (CUU) llegas a Delicias en 65 minutos por la Carretera 45.",
      en: "Land at Chihuahua International Airport (CUU) and reach Delicias in 65 minutes via Highway 45."
    },
    highlights: {
      es: [
        "Vuelos diarios CDMX, Monterrey y Dallas",
        "Shuttles privados bajo reserva",
        "Renta de autos dentro del aeropuerto"
      ],
      en: [
        "Daily flights from CDMX, Monterrey and Dallas",
        "Private shuttles on request",
        "On-site car rentals"
      ]
    }
  },
  {
    id: "bus",
    icon: Bus,
    title: { es: "Autobuses regionales", en: "Regional buses" },
    summary: {
      es: "La Central Camionera de Delicias recibe corridas cada hora desde Chihuahua capital, Parral y Ciudad Juárez.",
      en: "Delicias bus terminal receives hourly departures from Chihuahua City, Parral and Ciudad Juárez."
    },
    highlights: {
      es: [
        "Ómnibus, Noreste, Transportes Chihuahuenses",
        "Boletaje en línea y taquilla",
        "Tarifa promedio $280 MXN"
      ],
      en: [
        "Ómnibus, Noreste, Transportes Chihuahuenses",
        "Tickets online or on-site",
        "Average fare $280 MXN"
      ]
    }
  },
  {
    id: "car",
    icon: Car,
    title: { es: "Roadtrip y auto propio", en: "Roadtrip & driving" },
    summary: {
      es: "Conecta por la Carretera Federal 45 y empalma con la ruta a Saucillo para vistas del Valle de Conchos.",
      en: "Drive along Federal Highway 45 and branch through Saucillo for scenic views of the Conchos Valley."
    },
    highlights: {
      es: [
        "Peajes moderados y estaciones 24/7",
        "Gasolineras con cafetería en km 90",
        "Zona urbana bien señalizada"
      ],
      en: [
        "Moderate tolls and 24/7 stations",
        "Fuel stops with cafés near km 90",
        "Well signed urban grid"
      ]
    }
  }
] as const;

const corridors = [
  {
    route: { es: "Chihuahua → Delicias", en: "Chihuahua → Delicias" },
    distance: "81 km",
    time: "1h 10 min",
    description: {
      es: "Carretera 45 en excelente estado, con miradores hacia los campos nogalero.",
      en: "Highway 45 in great condition, featuring viewpoints over the pecan fields."
    },
    tips: {
      es: ["Salir antes de las 8am para evitar tráfico", "Parada recomendada en Laderas Café (km 52)"],
      en: ["Depart before 8 am to skip traffic", "Suggested break at Laderas Café (km 52)"]
    }
  },
  {
    route: { es: "Parral → Delicias", en: "Parral → Delicias" },
    distance: "198 km",
    time: "2h 40 min",
    description: {
      es: "Trayecto semidesértico con curvas suaves; ideal para roadtrips fotográficos.",
      en: "Semi-desert landscapes with gentle curves; perfect for photo-friendly roadtrips."
    },
    tips: {
      es: ["Revisar combustible en Valle de Zaragoza", "Clima fresco al amanecer, lleva chamarra"],
      en: ["Top up fuel in Valle de Zaragoza", "Cool sunrise temps, pack a light jacket"]
    }
  },
  {
    route: { es: "Ciudad Juárez → Delicias", en: "Ciudad Juárez → Delicias" },
    distance: "293 km",
    time: "3h 50 min",
    description: {
      es: "Autopista de cuota con servicios completos y vista al desierto de Samalayuca.",
      en: "Toll highway with full services and vistas of the Samalayuca desert."
    },
    tips: {
      es: ["Pago con tarjeta o efectivo en peaje Sacramento", "Descansa en Villa Ahumada para probar asaderos"],
      en: ["Pay tolls with card or cash at Sacramento booth", "Stop in Villa Ahumada for local asadero bread"]
    }
  }
] as const;

const busLines = [
  {
    line: "Ómnibus de México",
    schedule: { es: "Cada 60 min · 05:30 - 22:00", en: "Every 60 min · 5:30 am - 10:00 pm" },
    perks: { es: "Wi-Fi, asientos reclinables, lockers", en: "Wi-Fi, reclining seats, lockers" }
  },
  {
    line: "Transportes Chihuahuenses",
    schedule: { es: "Express matutino · 06:00, 08:00, 10:00", en: "Morning express · 6:00, 8:00, 10:00" },
    perks: { es: "Línea directa a aeropuerto CUU", en: "Direct line to CUU airport" }
  },
  {
    line: "Noreste",
    schedule: { es: "Rutas Parral / Camargo · 07:00 - 21:00", en: "Parral / Camargo routes · 7:00 am - 9:00 pm" },
    perks: { es: "Enlaces a cuencas vitivinícolas", en: "Connections to wine valley towns" }
  }
] as const;

const mobilityTips = [
  {
    title: { es: "Apps y taxis seguros", en: "Apps & taxis" },
    body: {
      es: "Uber y taxis locales  operan en Delicias con puntos preferentes afuera de la Central Camionera y Plaza Carranza.",
      en: "Uber and taxis operate in Delicias with preferred pick-ups at the bus terminal and Plaza Carranza."
    },
    details: [
      { es: "Tarifa promedio Ciudad → Presa Las Vírgenes: $160 MXN", en: "Average fare city center → Las Vírgenes Dam: $160 MXN" },
      { es: "Radio Taxi Delicias: (639) 472-2222", en: "Radio Taxi Delicias: +52 639 472 2222" }
    ]
  },
  {
    title: { es: "Renta de auto local", en: "Local car rentals" },
    body: {
      es: "Agencias independientes ofrecen sedanes y pick-ups para campos agrícolas; solicita GPS con mapas offline.",
      en: "Independent agencies provide sedans and pick-ups for farm visits; request GPS with offline maps."
    },
    details: [
      { es: "Comunicate con nosotros para más informes", en: "Contact us for more information" },
      { es: "Combustible Magna promedio: $23.1 MXN / lt", en: "Average fuel price: $23.1 MXN per liter" }
    ]
  },
  {
    title: { es: "Consejos de clima y ruta", en: "Weather & route tips" },
    body: {
      es: "Veranos soleados y noches frescas; usa bloqueador y lleva chamarra ligera para trayectos desde la presa.",
      en: "Sunny summers with cool nights; wear sunscreen and carry a light jacket when driving back from the dam."
    },
    details: [
      { es: "Temporada de lluvia: julio-agosto (tormentas breves)", en: "Rainy season: July-August (brief storms)" },
      { es: "Descarga mapas offline en caso de baja señal", en: "Download offline maps in low-signal stretches" }
    ]
  }
] as const;

const Transporte = () => {
  const { locale } = useLocale();

  const hero = {
    heading: locale === "es" ? "Transporte en Delicias" : "Transportation in Delicias",
    subheading:
      locale === "es"
        ? "Guía con rutas aéreas, autobuses y roadtrips para planear tu llegada sin contratiempos."
        : "Guide with air routes, buses and roadtrip intel so you can arrive smoothly.",
    badge: locale === "es" ? "Planea tu viaje" : "Plan your trip",
    cta: locale === "es" ? "Descargar PDF" : "Download PDF"
  };

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="relative overflow-hidden bg-[#0c2c68] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/hero-delicias-3.jpg"
              alt="Traslados a Delicias"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c68]/90 via-[#163d8b]/80 to-[#f6b043]/70" />
          </div>
          <div className="relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24">
              <Badge className="self-start bg-white/20 text-white">{hero.badge}</Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.heading}</h1>
              <p className="text-lg text-white/80 md:max-w-3xl">{hero.subheading}</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild variant="secondary" className="bg-white/20 text-white hover:bg-white/40">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {locale === "es" ? "Volver al inicio" : "Back home"}
                  </Link>
                </Button>
                <Button variant="default" className="bg-white text-secondary hover:bg-white/90">
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                  {hero.cta}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-4 text-center md:text-left">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Cómo llegar" : "How to get here"}
              </p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                {locale === "es" ? "Conexiones principales" : "Main connections"}
              </h2>
              <p className="text-muted-foreground md:max-w-3xl">
                {locale === "es"
                  ? "Delicias se conecta por aire a través de Chihuahua capital, tiene corridas de autobús cada hora y carreteras seguras para manejar por tu cuenta."
                  : "Reach Delicias by landing in Chihuahua City, riding frequent regional buses or driving on safe desert highways."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {arrivalModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <Card key={mode.id} className="h-full border border-black/5 shadow-sm">
                    <CardContent className="space-y-4 p-6">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{mode.title[locale]}</h3>
                        <p className="text-sm text-muted-foreground">{mode.summary[locale]}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-foreground">
                        {mode.highlights[locale].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-[6px] h-2 w-2 rounded-full bg-secondary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f5fbfd] py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-4 text-center">
              <p className="font-tourism text-2xl text-primary/80">
                {locale === "es" ? "Roadtrips recomendados" : "Suggested roadtrips"}
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                {locale === "es" ? "Distancias y tiempos" : "Distances and times"}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {corridors.map((corridor) => (
                <Card
                  key={corridor.route.es}
                  className="relative overflow-hidden border border-primary/10 bg-white shadow-[0_25px_55px_rgba(12,44,104,0.07)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />
                  <CardContent className="space-y-4 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-primary/70">
                          {locale === "es" ? "Ruta" : "Route"}
                        </p>
                        <h3 className="text-xl font-semibold">{corridor.route[locale]}</h3>
                      </div>
                      <MapPin className="h-8 w-8 text-secondary" />
                    </div>
                    <div className="flex gap-6 text-sm font-semibold">
                      <span className="inline-flex items-center gap-2 text-primary">
                        <Navigation2 className="h-4 w-4" />
                        {corridor.distance}
                      </span>
                      <span className="inline-flex items-center gap-2 text-secondary">
                        <Clock className="h-4 w-4" />
                        {corridor.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{corridor.description[locale]}</p>
                    <div className="rounded-2xl bg-primary/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                        {locale === "es" ? "Tips" : "Tips"}
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-foreground">
                        {corridor.tips[locale].map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              <Card className="border border-black/5 shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-secondary/70">
                        {locale === "es" ? "Central camionera" : "Bus terminal"}
                      </p>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {locale === "es" ? "Autobuses hacia Delicias" : "Bus lines heading to Delicias"}
                      </h3>
                    </div>
                    <Bus className="h-10 w-10 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {locale === "es"
                      ? "Compra boletos en línea o directamente en la Central Camionera de Chihuahua. Llegarás a Av. Sexta Norte y Calle 3ra, a pasos de cafés y taxis."
                      : "Purchase tickets online or at the Chihuahua bus station. You will arrive at 6th Ave North & 3rd Street, steps away from cafés and taxis."}
                  </p>
                  <div className="space-y-4">
                    {busLines.map((line) => (
                      <div
                        key={line.line}
                        className="rounded-2xl border border-muted/40 p-4 shadow-[0_6px_18px_rgba(15,23,42,0.04)]"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-lg font-semibold">{line.line}</h4>
                          <span className="text-xs uppercase tracking-[0.35em] text-primary">
                            {locale === "es" ? "Horarios" : "Schedule"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{line.schedule[locale]}</p>
                        <p className="text-sm text-foreground">{line.perks[locale]}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-primary/10 bg-[#0c2c68] text-white shadow-[0_25px_55px_rgba(12,44,104,0.25)]">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5" />
                    <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                      {locale === "es" ? "Servicios" : "Services"}
                    </p>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    {locale === "es" ? "Dentro de la terminal" : "Inside the terminal"}
                  </h3>
                  <ul className="space-y-3 text-sm text-white/90">
                    <li className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-secondary" />
                      <span>
                        {locale === "es"
                          ? "Taquillas físicas y kiosco digital con venta anticipada."
                          : "Traditional ticket booths plus self-service kiosks for advance sales."}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Fuel className="mt-0.5 h-5 w-5 text-secondary" />
                      <span>
                        {locale === "es"
                          ? "Gasolinera y cajeros a 100 m sobre Av. Sexta."
                          : "Fuel station and ATMs 100 m away on 6th Avenue."}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone className="mt-0.5 h-5 w-5 text-secondary" />
                      <span>
                        {locale === "es"
                          ? "Módulo de información turística IDEA: (639) 474-0045."
                          : "IDEA tourist desk hotline: +52 639 474 0045."}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#fff7ef] py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Muévete a tu ritmo" : "Move at your own pace"}
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                {locale === "es" ? "Servicios locales de movilidad" : "Local mobility services"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {mobilityTips.map((tip) => (
                <Card key={tip.title.es} className="border border-black/5 shadow-sm">
                  <CardContent className="space-y-3 p-6">
                    <h3 className="text-xl font-semibold text-foreground">{tip.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{tip.body[locale]}</p>
                    <ul className="space-y-2 text-sm text-foreground">
                      {tip.details.map((detail) => (
                        <li key={detail.es} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                          <span>{detail[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0c2c68] py-16 text-white">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 text-center">
            <p className="font-tourism text-2xl text-white/70">
              {locale === "es" ? "Coordinación IDEA Delicias" : "IDEA Delicias coordination"}
            </p>
            <h2 className="text-3xl font-bold leading-tight">
              {locale === "es" ? "¿Necesitas traslados personalizados?" : "Need custom transfers?"}
            </h2>
            <p className="text-white/80">
              {locale === "es"
                ? "Enviamos cotizaciones para grupos, productores y medios que visiten Delicias. Escríbenos con tu itinerario."
                : "We prepare quotes for groups, producers and media visiting Delicias. Send us your itinerary."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:movilidad@visitdelicias.mx"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary shadow-lg"
              >
                movilidad@visitdelicias.mx
              </a>
              <a
                href="https://wa.me/526394720000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
              >
                +52 639 472 0000
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Transporte;
