import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
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
  const { locale, setLocale } = useLocale();
  const navCopy = getTranslations(locale).nav;
  const ctaLabel = locale === "es" ? "Planear visita" : "Plan trip";

  const links = NAV_LINKS.map((key) => ({ label: navCopy[key], href: NAV_TARGETS[key] }));

  const toggleLocale = () => setLocale(locale === "es" ? "en" : "es");
  const [solidBg, setSolidBg] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const heroTrigger = Math.max(window.innerHeight * 0.65, 200);
    const onScroll = () => setSolidBg(window.scrollY > heroTrigger);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const desktopGradient =
  "bg-gradient-to-r from-[#0f1a2b]/95 via-[#1c2f4d]/90 to-[#f47a3c]/90 shadow-[0_10px_30px_rgba(4,18,42,0.25)]";
const mobileGradient =
  "bg-gradient-to-r from-white via-[#ffe3cf] to-[#f47a3c] shadow-[0_10px_30px_rgba(244,122,60,0.25)]";
  const wrapperBg = isMobile ? mobileGradient : solidBg ? desktopGradient : "bg-transparent shadow-none";
  const wrapperBlur = !isMobile || solidBg ? "backdrop-blur" : "";

  const primaryTextClass = "text-white/90 hover:text-white";
  const buttonBorderClass = "border-white/35 text-white hover:border-white/70 hover:text-white";
  const buttonFocusClass = "focus-visible:outline-white/40";
  const badgeClass = isMobile ? "border-black/10 text-black/80" : "border-white/60 text-white/90";
  const hamburgerClass = "border-white/35 text-white";

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className={`border-b border-transparent py-1 sm:py-1.5 lg:py-3 ${wrapperBlur} ${wrapperBg}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/#inicio" className="flex items-center gap-2 py-1.5 sm:py-2 lg:py-3">
            <span className={`rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.5em] backdrop-blur ${badgeClass}`}>
              Delicias
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium tracking-wide transition ${primaryTextClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonBorderClass} ${buttonFocusClass}`}
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              {locale === "es" ? "ES" : "EN"}
            </button>
            <MagneticButton>
              <a
                href="/tours"
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[0_10px_25px_rgba(0,174,192,0.35)] transition hover:bg-primary/90"
              >
                {locale === "es" ? "Explorar" : "Explore"}
              </a>
            </MagneticButton>
          </div>

          <button
            className={`rounded-full border p-1.5 lg:hidden ${hamburgerClass}`}
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/5 bg-white/95 px-4 py-4 lg:hidden">
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
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-base font-medium tracking-wide text-foreground hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <MagneticButton className="w-full">
                <a
                  href="/tours"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex w-full items-center justify-center rounded-2xl bg-primary px-4 py-3 text-base font-semibold tracking-wide text-white"
                >
                  {locale === "es" ? "Explorar" : "Explore"}
                </a>
              </MagneticButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
