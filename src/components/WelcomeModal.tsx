import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const modalCopy = {
  es: {
    badge: "Invierno 2026",
    title: "¡Bienvenidos a Delicias 2026!",
    description: "La ciudad te recibe con los brazos abiertos.",
    body: "Descubre la magia de nuestra ciudad este invierno. Visita museos, parques y disfruta de la gastronomía local.",
    primaryCta: "Comenzar",
    footer: "Gobierno Municipal de Delicias. ¡Sigamos Construyendo!",
    dismiss: "Cerrar"
  },
  en: {
    badge: "Winter 2026",
    title: "Welcome to Delicias 2026!",
    description: "The city welcomes you with open arms.",
    body: "Discover the magic of our city this winter. Visit museums, parks, and enjoy local gastronomoy.",
    primaryCta: "Start",
    footer: "Municipal Government of Delicias. Let's Keep Building!",
    dismiss: "Close"
  }
} as const;

export const WelcomeModal = () => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const copy = modalCopy[locale] ?? modalCopy.es;
  const storageKey = "welcome-modal-winter-2026";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasSeenModal = window.sessionStorage.getItem(storageKey);
    setOpen(!hasSeenModal);
  }, [storageKey]);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    if (!nextOpen && typeof window !== "undefined") {
      window.sessionStorage.setItem(storageKey, "1");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md overflow-hidden rounded-[32px] border-none bg-white/95 p-0 text-left text-foreground shadow-[0_30px_120px_rgba(9,16,29,0.35)] backdrop-blur">
        {/* Header con imagen del evento */}
        <div className="relative h-48 w-full overflow-hidden sm:h-56">
          <img
            src="/images/winter_popup_2026.png"
            alt="Invierno en Delicias"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
          <DialogHeader className="mb-4 space-y-2 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C41E3A]">{copy.badge}</p>
            <DialogTitle className="text-2xl font-bold leading-tight text-foreground">
              {copy.title}
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              {copy.description}
            </DialogDescription>
            <p className="text-sm text-muted-foreground">
              {copy.body}
            </p>
          </DialogHeader>

          <div className="mb-6 rounded-xl bg-gradient-to-r from-[#1E4D2B]/10 via-[#FFD700]/5 to-[#C41E3A]/10 p-4 text-sm border border-[#FFD700]/20">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFD700]/20 text-[#D4AF37]">
                <Sparkles className="h-4 w-4" />
              </span>
              <p className="text-foreground/80 italic">{copy.footer}</p>
            </div>
          </div>

          <Button
            className="w-full bg-[#C41E3A] text-white transition hover:bg-[#A01830]"
            onClick={() => handleOpenChange(false)}
          >
            {copy.primaryCta}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
