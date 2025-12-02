import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { useSmartBackNavigation } from "@/hooks/use-smart-back-navigation";
import { SEO } from "@/components/SEO";
import { ArrowLeft, ArrowUpRight, Sparkles, Star, Users } from "lucide-react";

const featuredCitizens = [
  {
    id: "baeza",
    name: "Fernando Baeza Meléndez",
    field: { es: "Gobierno y diplomacia", en: "Government & diplomacy" },
    description: {
      es: "Gobernador de Chihuahua (1986-1992) y posteriormente embajador de México en Costa Rica. Desde Delicias impulsó programas de infraestructura hídrica y apertura económica.",
      en: "Served as governor of Chihuahua (1986-1992) and later as Mexico's ambassador to Costa Rica. From Delicias he championed irrigation infrastructure and pro-trade agendas."
    },
    highlights: [
      { es: "PRI, generación 86", en: "PRI, class of ’86" },
      { es: "Impulsor de obra hidráulica", en: "Waterworks advocate" }
    ],
    image: "/images/personasdestacadas/fernandobaeza.webp"
  },
  {
    id: "chavez",
    name: "Jesús “El Matador” Chávez",
    field: { es: "Boxeo profesional", en: "Professional boxing" },
    description: {
      es: "Dos veces campeón mundial: WBC superpluma (2003-2004) e IBF ligero (2005-2007). Su historia inspira por la resiliencia con la que volvió al ring tras su deportación.",
      en: "Two-time world champion: WBC super featherweight (2003-2004) and IBF lightweight (2005-2007). His path back to the ring after deportation is a local emblem of resilience."
    },
    highlights: [
      { es: "Récord 44-8", en: "Record 44-8" },
      { es: "Miembro Salón de la Fama de Texas", en: "Texas Hall of Fame" }
    ],
    image: "/images/personasdestacadas/jesuschavez.webp"
  },
  {
    id: "gardea",
    name: "Jesús Gardea Rocha",
    field: { es: "Literatura", en: "Literature" },
    description: {
      es: "Narrador ganador del Premio Xavier Villaurrutia 1980 por “Septiembre y los otros días”. Su prosa captura el desierto y la vida cotidiana de Delicias.",
      en: "Fiction writer awarded the 1980 Xavier Villaurrutia Prize for “Septiembre y los otros días.” His prose portrays Delicias’ desert light and everyday characters."
    },
    highlights: [
      { es: "Sistema Nacional de Creadores", en: "National Creators System" },
      { es: "Crónica del desierto", en: "Desert chronicler" }
    ],
    image: "/images/personasdestacadas/jesusgardea.webp"
  },
  {
    id: "maverick",
    name: "Ed Maverick",
    field: { es: "Música alternativa", en: "Alt music" },
    description: {
      es: "Cantautor surgido de redes sociales. “Fuentes de Ortiz” obtuvo certificación diamante y en 2021 ganó el Latin Grammy a Mejor Canción Alternativa junto a C. Tangana por “Hong Kong”.",
      en: "Singer-songwriter who broke out via social media. “Fuentes de Ortiz” went diamond in Mexico and he won the 2021 Latin Grammy for Best Alternative Song with C. Tangana’s “Hong Kong”."
    },
    highlights: [
      { es: "Latin Grammy 2021", en: "Latin Grammy 2021" },
      { es: "Mix Pa’ Llorar en tu Cuarto", en: "Mix Pa’ Llorar en tu Cuarto" }
    ],
    image: "/images/personasdestacadas/edmaverick.webp"
  },
  {
    id: "roel",
    name: "Gabriela Roel",
    field: { es: "Cine y televisión", en: "Film & TV" },
    description: {
      es: "Actriz formada en la UACH y la UNAM. Debutó en cine con “La casa que arde de noche” y ha protagonizado proyectos como “Pobre juventud” y “Mirada de mujer”.",
      en: "Actress trained at UACH and UNAM. Debuted on film with “La casa que arde de noche” and has led productions such as “Pobre juventud” and “Mirada de mujer”."
    },
    highlights: [
      { es: "40 años de trayectoria", en: "40-year career" },
      { es: "Teatro · Cine · TV", en: "Stage · Film · TV" }
    ],
    image: "/images/personasdestacadas/gabrielaroel.webp"
  },
  {
    id: "mijares",
    name: "Rodolfo Mijares",
    field: { es: "Atletismo", en: "Athletics" },
    description: {
      es: "Decatleta olímpico en Roma 1960 y campeón del pentatlón en los Juegos Centroamericanos y del Caribe 1959. Figura clave en la historia del atletismo chihuahuense.",
      en: "Decathlete at the 1960 Rome Olympics and pentathlon champion at the 1959 Central American and Caribbean Games. Pioneer of Chihuahua’s track legacy."
    },
    highlights: [
      { es: "Juegos Olímpicos 1960", en: "1960 Olympics" },
      { es: "Oro CAC 1959", en: "CAC gold 1959" }
    ],
    image: "/images/personasdestacadas/rodolfomijares.webp"
  }
] as const;

const talentNetwork = [
  {
    id: "barraza",
    name: "Jahir Barraza",
    role: { es: "Delantero", en: "Forward" },
    copy: {
      es: "Formado en Atlas, campeón del Ascenso MX 2015 con Necaxa y con experiencia en Finlandia y la USL.",
      en: "Atlas academy product, 2015 Ascenso MX champion with Necaxa and overseas stints in Finland and the USL."
    }
  },
  {
    id: "moreno",
    name: "René Paul Moreno",
    role: { es: "Mediocampista creativo", en: "Creative midfielder" },
    copy: {
      es: "Figura del Puebla FC en los años 80, recordado por su visión y liderazgo en la Primera División.",
      en: "Key Puebla FC playmaker in the 1980s, remembered for his vision and top-flight leadership."
    }
  },
  {
    id: "rojas",
    name: "Jorge A. Rojas",
    role: { es: "Misionero y educador", en: "Missionary & educator" },
    copy: {
      es: "Fundador de iniciativas comunitarias que llevaron educación bilingüe a comunidades rurales del centro-sur de Chihuahua.",
      en: "Founded community initiatives that delivered bilingual education to rural communities across central-southern Chihuahua."
    }
  }
] as const;

const milestones = [
  {
    year: "1959-1960",
    title: { es: "Atletismo internacional", en: "International athletics" },
    detail: {
      es: "Rodolfo Mijares sube al podio en los Juegos Centroamericanos y compite en los Olímpicos de Roma.",
      en: "Rodolfo Mijares earns regional gold and represents Mexico at the Rome Olympics."
    }
  },
  {
    year: "1980",
    title: { es: "Literatura del desierto", en: "Desert literature" },
    detail: {
      es: "Jesús Gardea gana el Premio Xavier Villaurrutia con relatos ambientados en Delicias.",
      en: "Jesús Gardea wins the Xavier Villaurrutia Prize with stories set in Delicias."
    }
  },
  {
    year: "1986-1992",
    title: { es: "Gestión estatal", en: "State leadership" },
    detail: {
      es: "Fernando Baeza gobierna Chihuahua e impulsa proyectos agrícolas y carreteros para la región centro-sur.",
      en: "Fernando Baeza governs Chihuahua, backing roadway and irrigation projects for the central-south region."
    }
  },
  {
    year: "2003-2007",
    title: { es: "Títulos mundiales de box", en: "World boxing titles" },
    detail: {
      es: "Jesús Chávez conquista los cinturones WBC superpluma e IBF ligero.",
      en: "Jesús Chávez captures the WBC super featherweight and IBF lightweight belts."
    }
  },
  {
    year: "2018-2021",
    title: { es: "Explosión musical", en: "Music breakout" },
    detail: {
      es: "Ed Maverick lanza su álbum debut y se lleva un Latin Grammy junto a C. Tangana.",
      en: "Ed Maverick releases his debut album and wins a Latin Grammy with C. Tangana."
    }
  }
] as const;

const DeliciensesDestacados = () => {
  const { locale } = useLocale();
  const handleBack = useSmartBackNavigation();
  const [hideScrollCue, setHideScrollCue] = useState(false);
  const [timelineReady, setTimelineReady] = useState(false);
  const timelineSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setHideScrollCue((prev) => prev || window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = timelineSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const hero = {
    heading: locale === "es" ? "Delicienses destacados" : "Featured people of Delicias",
    subheading:
      locale === "es"
        ? "Historias reales de arte, gobierno, deporte y música que nacen en el Valle de Conchos."
        : "Real stories in arts, public service, sports and music born in the Conchos Valley.",
    badge: locale === "es" ? "Orgullo local" : "Local pride",
    cta: locale === "es" ? "Compartir una historia" : "Share a story",
    scrollCopy: locale === "es" ? "Desplázate" : "Scroll"
  };

  const submissionsCopy =
    locale === "es" ? "+128 semblanzas recibidas en 2024" : "+128 stories submitted in 2024";

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <SEO
        title={locale === "es" ? "Personas Destacadas" : "Featured People"}
        description={
          locale === "es"
            ? "Conoce a los delicienses que han hecho historia en la política, el deporte y las artes."
            : "Meet the people from Delicias who have made history in politics, sports and the arts."
        }
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative overflow-hidden bg-[#0c2c68] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/Galería/11.webp"
              alt="Panorámica de Delicias Chihuahua"
              className="h-full w-full object-cover opacity-50 animate-hero-pan"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c68]/90 via-[#163d8b]/80 to-[#f6b043]/75 mix-blend-multiply" />
            <div
              className="absolute inset-0 opacity-60 mix-blend-soft-light"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 45%), radial-gradient(circle at 80% 0, rgba(246,176,67,0.25), transparent 40%)"
              }}
            />
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 right-[-30%] w-2/3 bg-gradient-to-l from-[#f6b043]/40 via-transparent to-transparent blur-3xl animate-gradient-drift" />
                <div className="absolute -bottom-16 left-5 h-60 w-60 rounded-full bg-[#f6b043]/35 blur-[120px]" />
              </div>
          </div>
          <div className="relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 text-center md:text-left">
              <Badge className="self-center bg-white/20 text-white backdrop-blur-sm md:self-start">
                {hero.badge}
              </Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.heading}</h1>
              <p className="text-lg text-white/80 md:max-w-3xl">{hero.subheading}</p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Button
                  variant="secondary"
                  className="bg-white/20 text-white hover:bg-white/40"
                  onClick={handleBack}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {locale === "es" ? "Volver al inicio" : "Back home"}
                </Button>
                <Button asChild className="bg-white text-secondary hover:bg-white/90">
                  <a href="mailto:historias@visitdelicias.mx">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    {hero.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transition-all duration-500 ${
              hideScrollCue ? "translate-y-4 opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex flex-col items-center gap-3 text-white/80">
              <div className="h-14 w-8 rounded-full border border-white/50 p-1">
                <span className="block h-2 w-2 rounded-full bg-white animate-scroll-wheel" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em]">{hero.scrollCopy}</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-4 text-center md:text-left">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Historias que inspiran" : "Stories that inspire"}
              </p>
              <h2 className="text-3xl font-bold md:text-4xl">
                {locale === "es" ? "Talento que nace en Delicias" : "Talent born in Delicias"}
              </h2>
              <p className="text-muted-foreground md:max-w-3xl">
                {locale === "es"
                  ? "Recopilamos biografías de delicienses que han destacado en la política, los escenarios y las canchas. Los datos provienen de fuentes públicas como Wikipedia y archivos de prensa."
                  : "We gather bios of people from Delicias who shine in politics, the arts and sports, using public sources such as Wikipedia and press archives."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredCitizens.map((person, index) => (
                <Card
                  key={person.id}
                  className="group relative overflow-hidden border border-black/5 bg-white/90 shadow-[0_25px_55px_rgba(12,44,104,0.08)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_35px_75px_rgba(12,44,104,0.18)] animate-fade-in"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                      {person.field[locale]}
                    </span>
                  </div>
                  <CardContent className="space-y-4 p-6">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-semibold text-foreground">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">{person.description[locale]}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {person.highlights.map((item) => (
                        <span
                          key={item.es}
                          className="relative overflow-hidden rounded-full border border-secondary/30 bg-gradient-to-r from-secondary/10 via-white/5 to-secondary/20 bg-[length:200%_100%] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary transition duration-500 group-hover:animate-chip-shine"
                        >
                          {item[locale]}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section ref={timelineSectionRef} className="bg-[#f5fbfd] py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="text-center">
              <p className="font-tourism text-2xl text-primary/80">
                {locale === "es" ? "Cronología del orgullo" : "Pride timeline"}
              </p>
              <h2 className="text-3xl font-bold">
                {locale === "es" ? "Momentos clave desde 1959" : "Key moments since 1959"}
              </h2>
            </div>
            <div className="relative mx-auto max-w-4xl pl-8 sm:pl-12">
              <div className="absolute left-4 top-4 bottom-4 w-px overflow-hidden bg-primary/15 sm:left-5">
                <div
                  className={`w-full bg-gradient-to-b from-[#f6b043] via-[#f5d3a1] to-[#0c2c68] ${
                    timelineReady ? "origin-top animate-timeline-grow" : "h-0"
                  }`}
                />
              </div>
              <div className="space-y-10">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className={`relative rounded-2xl border border-primary/10 bg-white/90 p-6 pl-10 shadow-[0_20px_45px_rgba(12,44,104,0.06)] backdrop-blur-sm transition duration-500 ${
                      timelineReady ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 120}ms` }}
                  >
                    <span
                      className={`absolute left-[-18px] top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-[#f6b043] shadow-[0_0_0_6px_rgba(246,176,67,0.25)] sm:block ${
                        timelineReady ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      } transition duration-500`}
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-3 text-secondary">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <Star className={`h-5 w-5 ${timelineReady ? "animate-star-pop" : "opacity-0"}`} />
                      </div>
                      <p className="text-sm font-semibold uppercase tracking-[0.35em]">{item.year}</p>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail[locale]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl space-y-10 px-4">
            <div className="space-y-4 text-center">
              <p className="font-tourism text-2xl text-secondary/80">
                {locale === "es" ? "Red de talento actual" : "Current talent network"}
              </p>
              <h2 className="text-3xl font-bold">
                {locale === "es" ? "Nuevas generaciones" : "New generations"}
              </h2>
              <p className="text-muted-foreground md:mx-auto md:max-w-3xl">
                {locale === "es"
                  ? "Seguimos el paso de delicienses que hoy suman victorias en canchas, foros y organizaciones civiles."
                  : "We follow locals who keep delivering wins on the field, stage and civic space."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {talentNetwork.map((person, index) => (
                <Card
                  key={person.id}
                  className="group border border-black/5 bg-white/90 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-secondary/60 hover:shadow-[0_25px_45px_rgba(246,176,67,0.25)] animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <Users className="h-5 w-5" />
                        <span className="absolute inset-0 rounded-full border border-secondary/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{person.name}</h3>
                        <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                          {person.role[locale]}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{person.copy[locale]}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#fff7ef] py-16">
          <div className="mx-auto max-w-5xl space-y-8 px-4 text-center">
            <p className="font-tourism text-2xl text-secondary/80">
              {locale === "es" ? "Suma tu voz" : "Add your voice"}
            </p>
            <h2 className="text-3xl font-bold">
              {locale === "es"
                ? "¿Conoces a alguien que deba aparecer aquí?"
                : "Know someone who should be featured?"}
            </h2>
            <p className="text-muted-foreground">
              {locale === "es"
                ? "Envíanos semblanzas, enlaces o archivos para integrar nuevas historias al archivo ciudadano."
                : "Send us bios, links or press clippings to expand this civic archive."}
            </p>
            <div className="mx-auto w-fit rounded-full border border-secondary/30 bg-secondary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
              {submissionsCopy}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:historias@visitdelicias.mx"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#f6b043] via-[#fbd38d] to-[#f6b043] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_45px_rgba(246,176,67,0.35)] transition duration-500 hover:-translate-y-1"
              >
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" aria-hidden="true" />
                <span className="absolute inset-y-0 left-[-30%] w-1/2 bg-white/60 opacity-0 mix-blend-screen blur-md group-hover:animate-cta-shine" aria-hidden="true" />
                <Sparkles className="h-4 w-4" />
                historias@visitdelicias.mx
              </a>
              <a
                href="https://wa.me/526394720000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-secondary transition duration-500 hover:-translate-y-1 hover:bg-secondary/10"
              >
                {locale === "es" ? "WhatsApp oficial" : "WhatsApp line"}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeliciensesDestacados;
