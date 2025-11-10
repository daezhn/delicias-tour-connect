import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLocale } from "@/hooks/use-locale";

const SUBDOMAINS = [
  {
    id: "sabores",
    url: "delicias.travel/sabores",
    href: "#restaurantes",
    image: "/images/restaurant-3.jpg",
    accent: "from-[#d64089]/80 to-[#ed9533]/80",
    title: {
      es: "Sabores del Desierto",
      en: "Desert Flavors"
    },
    script: {
      es: "guía foodie",
      en: "foodie guide"
    },
    description: {
      es: "Rutas gastronómicas, cafeterías boutique y mercados para probar Delicias bocado a bocado.",
      en: "Gastronomic routes, boutique cafés and markets to taste Delicias bite by bite."
    }
  },
  {
    id: "hospedaje",
    url: "delicias.travel/stay",
    href: "#hoteles",
    image: "/images/hotel-4.jpg",
    accent: "from-[#00aec0]/80 to-[#0645ad]/70",
    title: {
      es: "Estadías Boutique",
      en: "Boutique Stays"
    },
    script: {
      es: "check-in & chill",
      en: "check-in & chill"
    },
    description: {
      es: "Hoteles, casas creativas y estancias con alberca a un clic para planear tu escape.",
      en: "Hotels, creative homes and pool villas one click away to plan your escape."
    }
  },
  {
    id: "experiencias",
    url: "delicias.travel/experiencias",
    href: "/tours",
    image: "/images/torre-reloj.jpg",
    accent: "from-[#b7c95b]/80 to-[#00aec0]/80",
    title: {
      es: "Experiencias Vibrantes",
      en: "Vibrant Experiences"
    },
    script: {
      es: "agenda viva",
      en: "city pulse"
    },
    description: {
      es: "Tours al amanecer, escapadas al río y festivales que suceden de día y de noche.",
      en: "Sunrise tours, river escapes and festivals happening day and night."
    }
  },
  {
    id: "eventos",
    url: "delicias.travel/eventos",
    href: "#eventos",
    image: "/images/event-3.jpg",
    accent: "from-[#ed9533]/80 to-[#d64089]/70",
    title: {
      es: "Agenda de Eventos",
      en: "Events Agenda"
    },
    script: {
      es: "line up oficial",
      en: "official line up"
    },
    description: {
      es: "Carteles, conciertos y ferias temporales curados por IDEA Delicias.",
      en: "Lineups, concerts and seasonal fairs curated by IDEA Delicias."
    }
  }
];

export const CitySubdomains = () => {
  const { locale } = useLocale();

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl space-y-10 px-4">
        <Reveal variant="fade-up" className="space-y-3 text-center">
          <p className="font-script text-2xl text-secondary/80">
            {locale === "es" ? "Puertas digitales a cada experiencia" : "Digital doors to every vibe"}
          </p>
          <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">Delicias.travel</p>
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            {locale === "es"
              ? "Elige un subdominio y salta directo al bloque de la página principal para planear hoteles, gastronomía, tours o eventos."
              : "Pick a subdomain and jump straight into the main page block to plan stays, food, tours or events."}
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {SUBDOMAINS.map((domain, index) => (
            <Reveal key={domain.id} variant="fade-up" delay={index * 80}>
              <a
                href={domain.href}
                className="group relative block overflow-hidden rounded-[30px] border border-black/5 bg-white p-6 shadow-[0_20px_45px_rgba(4,18,42,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <div className="absolute inset-0 opacity-15 transition duration-500 group-hover:opacity-30">
                  <img
                    src={domain.image}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="relative z-10 flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-foreground/70">
                    {domain.url}
                    <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <p className="font-script text-lg text-secondary/80">{domain.script[locale]}</p>
                  <h3 className="text-2xl font-bold text-foreground">{domain.title[locale]}</h3>
                  <p className="text-sm text-foreground/80">{domain.description[locale]}</p>
                  <div
                    className={`mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r ${domain.accent} px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white`}
                  >
                    <span>{locale === "es" ? "Entrar" : "Enter"}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <span className="sr-only">{domain.title[locale]}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
