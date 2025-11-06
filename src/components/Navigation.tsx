import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Atractivos", href: "#atractivos" },
    { label: "Actividades", href: "#actividades" },
    { label: "Eventos", href: "#eventos" },
    { label: "Contacto", href: "#contacto" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground">IDEA Delicias</span>
              <span className="text-xs text-muted-foreground">Turismo y Cultura</span>
            </div>
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
            <Button className="ml-4 bg-primary hover:bg-primary/90">
              Planifica tu Visita
            </Button>
          </div>

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
            <div className="px-4 pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                Planifica tu Visita
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
