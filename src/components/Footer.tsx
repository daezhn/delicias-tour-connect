import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">IDEA Delicias</h3>
                <p className="text-xs text-white/70">Turismo y Cultura</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Instituto de Desarrollo y Atención al Turismo de Delicias, Chihuahua
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#atractivos" className="hover:text-primary transition-colors">Atractivos</a></li>
              <li><a href="#actividades" className="hover:text-primary transition-colors">Actividades</a></li>
              <li><a href="#eventos" className="hover:text-primary transition-colors">Eventos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
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
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
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
          <p>© 2025 IDEA Delicias. Todos los derechos reservados.</p>
          <p className="mt-2">Instituto de Desarrollo y Atención al Turismo - Gobierno Municipal de Delicias</p>
        </div>
      </div>
    </footer>
  );
};
