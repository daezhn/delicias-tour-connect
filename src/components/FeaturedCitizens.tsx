import { useLocale } from "@/hooks/use-locale";

export const FeaturedCitizens = () => {
  const { locale } = useLocale();

  const heading = locale === "es" ? "Delicienses destacados" : "Featured locals";
  const description =
    locale === "es"
      ? "Conoce historias inspiradoras de quienes ponen el nombre de Delicias en alto."
      : "Discover inspiring stories from locals who elevate Delicias.";
  const cta = locale === "es" ? "Leer historias" : "Read stories";

  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[280px] md:h-[320px]">
        <img
          src="/images/Galería/11.webp"
          alt="Panorámica de Delicias Chihuahua"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <p className="text-[11px] uppercase tracking-[0.6em] text-white/80">
            {locale === "es" ? "Historias locales" : "Local stories"}
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{heading}</h2>
          <p className="mt-3 max-w-2xl text-base text-white/80">{description}</p>
          <a
            href="/personas-destacadas"
            className="group relative mt-6 inline-flex items-center overflow-hidden rounded-full bg-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_12px_35px_rgba(246,176,67,0.35)] transition-all duration-300 hover:bg-secondary/90 hover:shadow-[0_16px_45px_rgba(246,176,67,0.45)] active:scale-95"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative z-10">{cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
