import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const NAV_LINKS = ["inicio", "atractivos", "actividades", "eventos", "contacto"] as const;

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const navCopy = getTranslations(locale).nav;
  const ctaLabel = locale === "es" ? "Planear visita" : "Plan trip";
  const topMessage =
    locale === "es"
      ? "Delicias, capital del desierto · Turismo & Cultura"
      : "Delicias, desert capital · Tourism & Culture";

  const links = NAV_LINKS.map((key) => ({ label: navCopy[key], href: `#${key}` }));

  const toggleLocale = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="hidden md:block bg-[#04122a] text-center text-[11px] uppercase tracking-[0.5em] text-white/75">
        <div className="mx-auto max-w-6xl py-2">{topMessage}</div>
      </div>
      <div className="border-b border-black/5 bg-white/95 shadow-[0_15px_45px_rgba(6,69,173,0.08)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="flex items-center gap-3 py-4">
            <img src="/images/Logo_IDEA.png" alt="IDEA Delicias" className="h-14 w-auto" />
            <div className="hidden sm:flex flex-col text-[11px] uppercase tracking-[0.45em] text-foreground/70">
              <span>{locale === "es" ? "Visit Delicias" : "Visit Delicias"}</span>
              <span className="text-[10px] tracking-[0.55em] text-foreground/40">
                Chihuahua · México
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/70 transition hover:text-secondary"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-foreground transition hover:border-secondary hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary/40"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
              {locale === "es" ? "ES" : "EN"}
            </button>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-[0_10px_30px_rgba(0,174,192,0.35)] transition hover:bg-primary/90"
            >
              {ctaLabel}
            </a>
          </div>

          <button
            className="rounded-full border border-black/10 p-2 text-foreground lg:hidden"
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
                  className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground hover:bg-black/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
