import { useLocale } from "@/hooks/use-locale";

const experiences = [
  {
    id: "todo",
    href: "/experiencias/que-hacer",
    image: "/images/Galería/3.jpg",
    title: { es: "Qué hacer en Delicias", en: "Things to do" },
    size: "row-span-2"
  },
  {
    id: "nightlife",
    href: "/experiencias/vida-nocturna",
    image: "/images/Galería/12.jpg",
    title: { es: "Vida nocturna", en: "Nightlife" },
    size: "col-span-2"
  },
  {
    id: "art",
    href: "/experiencias/arte-cultura",
    image: "/images/Galería/5.jpg",
    title: { es: "Arte y cultura", en: "Art & culture" },
    size: ""
  },
  {
    id: "family",
    href: "/experiencias/familia",
    image: "/images/Galería/7.jpg",
    title: { es: "Diversión en familia", en: "Family fun" },
    size: ""
  },
  {
    id: "sports",
    href: "/experiencias/deportes",
    image: "/images/Galería/14.jpg",
    title: { es: "Deportes", en: "Sports" },
    size: ""
  },
  {
    id: "dine",
    href: "/experiencias/que-comer",
    image: "/images/restaurant-3.jpg",
    title: { es: "¿Qué comer?", en: "Where to eat" },
    size: ""
  }
] as const;

export const ExperiencesCollage = () => {
  const { locale } = useLocale();
  const script = locale === "es" ? "Experiencias a tu ritmo" : "Experiences your way";

  return (
    <section className="bg-gradient-to-br from-[#0c2c68] via-[#163d8b] to-[#f6b043] py-20 text-white">
      <div className="space-y-16 px-4 sm:px-8 lg:px-16">
        <div className="space-y-3 text-center">
          <p className="font-tourism text-[clamp(2.5rem,6vw,3.8rem)] text-white drop-shadow">
            {script}
          </p>
          <div className="mx-auto h-1 w-24 rounded-full bg-white/60" />
        </div>
        <div className="grid auto-rows-[260px] gap-4 sm:auto-rows-[350px] lg:auto-rows-[420px] sm:grid-cols-6">
          {experiences.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              className={`group relative block overflow-hidden rounded-[36px] border border-black/5 shadow-[0_35px_70px_rgba(4,18,42,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                index === 0 ? "sm:col-span-3 sm:row-span-3" : ""
              } ${index === 1 ? "sm:col-span-3 sm:row-span-2" : ""} ${index === 2 ? "sm:col-span-3 sm:row-span-1" : ""} ${
                index === 3 ? "sm:col-span-3 sm:row-span-1" : ""
              } ${
                index === 4 ? "sm:col-span-3 sm:row-span-1" : ""
              } ${
                index === 5 ? "sm:col-span-6 sm:row-span-1" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title[locale]}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-end p-5">
                <p className="text-2xl font-semibold text-white drop-shadow">{item.title[locale]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
