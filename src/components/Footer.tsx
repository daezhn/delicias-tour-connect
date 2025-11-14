import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { locale } = useLocale();
  const translations = getTranslations(locale);
  const copy = translations.footer;
  const navCopy = translations.nav;

  return (
    <footer id="contacto" className="relative bg-foreground text-white py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">IDEA Delicias</h3>
                <p className="text-xs text-white/70">{copy.motto}</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              {copy.aboutDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{copy.quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/#inicio" className="hover:text-primary transition-colors">{navCopy.inicio}</Link></li>
              <li><Link to="/#atractivos" className="hover:text-primary transition-colors">{navCopy.atractivos}</Link></li>
              <li><Link to="/#actividades" className="hover:text-primary transition-colors">{navCopy.actividades}</Link></li>
              <li><Link to="/#eventos" className="hover:text-primary transition-colors">{navCopy.eventos}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{copy.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-primary" />
                <span>Delicias, Chihuahua, México</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>(639) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>turismo@delicias.gob.mx</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4">{copy.followTitle}</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
          <p>© 2025 IDEA Delicias. {copy.rights}</p>
          <p className="mt-2">{copy.govt}</p>
        </div>
      </div>
    </footer>
  );
};
