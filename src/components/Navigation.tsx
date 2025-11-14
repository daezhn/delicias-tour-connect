import { useCallback, useEffect, useRef, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { MagneticButton } from "@/components/MagneticButton";

const NAV_LINKS = ["inicio", "atractivos", "actividades", "eventos", "contacto"] as const;
const NAV_TARGETS: Record<(typeof NAV_LINKS)[number], string> = {
  inicio: "/#inicio",
  atractivos: "/Atractivos",
  actividades: "/experiencias/que-hacer",
  eventos: "/#eventos",
  contacto: "/#contacto",
};

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale } = useLocale();
  const navCopy = getTranslations(locale).nav;
  const ctaLabel = locale === "es" ? "Planear visita" : "Plan trip";
  const navBarRef = useRef<HTMLDivElement | null>(null);

  const updateNavOffset = useCallback(() => {
    if (typeof document === "undefined") return;
    const navHeight = navBarRef.current?.getBoundingClientRect().height ?? 0;
    if (navHeight > 0) {
      document.documentElement.style.setProperty("--nav-offset", `${Math.round(navHeight)}px`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    updateNavOffset();
    window.addEventListener("resize", updateNavOffset);

    let resizeObserver: ResizeObserver | null = null;

    if (typeof ResizeObserver !== "undefined" && navBarRef.current) {
      resizeObserver = new ResizeObserver(() => updateNavOffset());
      resizeObserver.observe(navBarRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateNavOffset);
      resizeObserver?.disconnect();
    };
  }, [updateNavOffset]);

  useEffect(() => {
    updateNavOffset();
  }, [locale, updateNavOffset]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      // Cambiar cuando se pase el 80% del viewport (aproximadamente cuando termina el hero)
      // En mobile es 103vh, en desktop es 110vh, usamos un cálculo dinámico
      const heroHeight = windowHeight * (window.innerWidth >= 640 ? 1.10 : 1.03);
      setScrolled(scrollY > heroHeight * 0.8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const links = NAV_LINKS.map((key) => ({ label: navCopy[key], href: NAV_TARGETS[key] }));

  const toggleLocale = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div
        ref={navBarRef}
        className={`border-b py-1 sm:py-1.5 lg:py-3 backdrop-blur-md supports-[backdrop-filter]:backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-black/10 bg-white/95 shadow-[0_10px_30px_rgba(4,18,42,0.15)]"
            : "border-transparent bg-gradient-to-r from-[#f6b043]/20 via-[#f79d84]/15 to-black/10 shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/#inicio" className="flex items-center gap-2 py-1.5 sm:py-2 lg:py-3">
            <span
              className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.5em] backdrop-blur transition-colors duration-300 ${
                scrolled
                  ? "border-foreground/20 text-foreground"
                  : "border-white/50 text-white/90"
              }`}
            >
              Delicias
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled
                    ? "text-foreground/80 hover:text-secondary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                scrolled
                  ? "border-black/10 text-foreground hover:border-secondary hover:text-secondary focus-visible:outline-secondary/40"
                  : "border-white/30 text-white/90 hover:border-white/50 hover:text-white focus-visible:outline-white/40"
              }`}
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              {locale === "es" ? "ES" : "EN"}
            </button>
            <MagneticButton>
              <Link
                to="/tours"
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-primary px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_25px_rgba(0,174,192,0.35)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_15px_35px_rgba(0,174,192,0.45)] active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative z-10">{locale === "es" ? "Explorar" : "Explore"}</span>
              </Link>
            </MagneticButton>
          </div>

          <button
            className={`rounded-full border p-1.5 transition-colors duration-300 lg:hidden ${
              scrolled
                ? "border-black/10 text-foreground"
                : "border-white/30 text-white/90"
            }`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white/95 px-4 py-4 shadow-[0_10px_30px_rgba(4,18,42,0.25)] lg:hidden">
          <div className="flex items-center justify-between pb-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-foreground/70">
              {locale === "es" ? "Idioma" : "Language"}
            </span>
            <button
              onClick={toggleLocale}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em]"
            >
              <Globe className="h-4 w-4" />
              {locale === "es" ? "ES" : "EN"}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {links.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-2xl px-4 py-3 text-base font-medium tracking-wide text-foreground hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <MagneticButton className="w-full">
              <Link
                to="/tours"
                onClick={() => setOpen(false)}
                className="group relative mt-1 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl bg-primary px-4 py-3 text-base font-semibold tracking-wide text-white transition-all duration-300 active:scale-95"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative z-10">{locale === "es" ? "Explorar" : "Explore"}</span>
              </Link>
            </MagneticButton>
          </div>
        </div>
      )}
    </nav>
  );
};
