import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { MotionReveal } from "@/components/MotionReveal";

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
          <MotionReveal delay={0}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/images/IDEAICON.png" alt="IDEA Delicias" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-bold text-lg">IDEA Delicias</h3>
                <p className="text-xs text-white/70">{copy.motto}</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Instituto de Desarrollo Económico y Agropecuario Delicias
            </p>
          </MotionReveal>

          {/* Quick Links */}
          <MotionReveal delay={0.1}>
            <h4 className="font-bold text-lg mb-4">{copy.quickLinksTitle}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/#inicio" className="hover:text-primary transition-colors">{navCopy.inicio}</Link></li>
              <li><Link to="/#atractivos" className="hover:text-primary transition-colors">{navCopy.atractivos}</Link></li>
              <li><Link to="/#actividades" className="hover:text-primary transition-colors">{navCopy.actividades}</Link></li>
              <li><Link to="/#eventos" className="hover:text-primary transition-colors">{navCopy.eventos}</Link></li>
              <li><Link to="/privacidad" className="hover:text-primary transition-colors">{copy.privacy}</Link></li>
            </ul>
          </MotionReveal>

          {/* Contact */}
          <MotionReveal delay={0.2}>
            <h4 className="font-bold text-lg mb-4">{copy.contactTitle}</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-primary" />
                <span>Delicias, Chihuahua, México</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>639 171 3086</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contacto@ideadelicias.com</span>
              </li>
            </ul>
          </MotionReveal>

          {/* Social Media */}
          <MotionReveal delay={0.3}>
            <h4 className="font-bold text-lg mb-4">{copy.followTitle}</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/IDEADelicias"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </MotionReveal>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70 space-y-1">
          <p>© 2025 Instituto de Desarrollo Económico y Agropecuario Delicias. {copy.rights}</p>
          <Link to="/privacidad" className="text-white/70 underline-offset-4 hover:text-primary hover:underline">
            {copy.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};
