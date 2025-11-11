import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/use-locale";
import { ArrowLeft, ArrowUpRight, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

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
    image: "/images/Galería/15.jpg"
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
    image: "/images/Galería/4.jpg"
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
    image: "/images/Galería/10.jpg"
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
    image: "/images/Galería/9.jpg"
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
    image: "/images/Galería/6.jpg"
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
    image: "/images/Galería/2.jpg"
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

  const hero = {
    heading: locale === "es" ? "Delicienses destacados" : "Featured people of Delicias",
    subheading:
      locale === "es"
        ? "Historias reales de arte, gobierno, deporte y música que nacen en el Valle de Conchos."
        : "Real stories in arts, public service, sports and music born in the Conchos Valley.",
    badge: locale === "es" ? "Orgullo local" : "Local pride",
    cta: locale === "es" ? "Compartir una historia" : "Share a story"
  };

  return (
    <div className="min-h-screen bg-[#f6ecdf] text-foreground">
      <Navigation />
      <main className="pt-[90px]">
        <section className="relative overflow-hidden bg-[#0c2c68] text-white">
          <div className="absolute inset-0">
            <img
              src="/images/Galería/11.jpg"
              alt="Panorámica de Delicias Chihuahua"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2c68]/90 via-[#163d8b]/80 to-[#f6b043]/75" />
          </div>
          <div className="relative z-10">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-24 text-center md:text-left">
              <Badge className="self-center md:self-start bg-white/20 text-white">{hero.badge}</Badge>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">{hero.heading}</h1>
              <p className="text-lg text-white/80 md:max-w-3xl">{hero.subheading}</p>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Button asChild variant="secondary" className="bg-white/20 text-white hover:bg-white/40">
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {locale === "es" ? "Volver al inicio" : "Back home"}
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-secondary hover:bg-white/90"
                >
                  <a href="mailto:historias@visitdelicias.mx">
                    <ArrowUpRight className="mr-2 h-4 w-4" />
                    {hero.cta}
                  </a>
                </Button>
              </div>
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
              {featuredCitizens.map((person) => (
                <Card
                  key={person.id}
                  className="overflow-hidden border border-black/5 shadow-[0_25px_55px_rgba(12,44,104,0.08)]"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white">
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
                          className="rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary"
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

        <section className="bg-[#f5fbfd] py-16">
          <div className="mx-auto max-w-6xl space-y-8 px-4">
            <div className="text-center">
              <p className="font-tourism text-2xl text-primary/80">
                {locale === "es" ? "Cronología del orgullo" : "Pride timeline"}
              </p>
              <h2 className="text-3xl font-bold">
                {locale === "es" ? "Momentos clave desde 1959" : "Key moments since 1959"}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {milestones.map((item) => (
                <Card
                  key={item.year}
                  className="border border-primary/15 bg-white shadow-[0_20px_45px_rgba(12,44,104,0.06)]"
                >
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3 text-secondary">
                      <Star className="h-5 w-5" />
                      <p className="text-sm font-semibold uppercase tracking-[0.35em]">{item.year}</p>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{item.title[locale]}</h3>
                    <p className="text-sm text-muted-foreground">{item.detail[locale]}</p>
                  </CardContent>
                </Card>
              ))}
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
              <p className="text-muted-foreground md:max-w-3xl md:mx-auto">
                {locale === "es"
                  ? "Seguimos el paso de delicienses que hoy suman victorias en canchas, foros y organizaciones civiles."
                  : "We follow locals who keep delivering wins on the field, stage and civic space."}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {talentNetwork.map((person) => (
                <Card key={person.id} className="border border-black/5 shadow-sm">
                  <CardContent className="space-y-3 p-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-secondary" />
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
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:historias@visitdelicias.mx"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_45px_rgba(246,176,67,0.35)]"
              >
                historias@visitdelicias.mx
              </a>
              <a
                href="https://wa.me/526394720000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-secondary"
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
