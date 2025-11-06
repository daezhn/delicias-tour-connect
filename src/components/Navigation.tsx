import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const navCopy = getTranslations(locale).nav;

  const menuItems = [
    { label: navCopy.inicio, href: "#inicio" },
    { label: navCopy.atractivos, href: "#atractivos" },
    { label: navCopy.actividades, href: "#actividades" },
    { label: navCopy.eventos, href: "#eventos" },
    { label: navCopy.contacto, href: "#contacto" },
  ];

  const toggleLocale = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/Logo_IDEA.png"
              alt="IDEA Delicias"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLocale}
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-foreground/20 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Change language"
          >
            <Globe className="h-4 w-4" />
            {locale === "es" ? "ES" : "EN"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex items-center justify-between px-4 pb-3">
              <span className="text-sm font-semibold text-muted-foreground">Idioma</span>
              <button
                onClick={toggleLocale}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-3 py-1.5 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
                {locale === "es" ? "ES" : "EN"}
              </button>
            </div>
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
