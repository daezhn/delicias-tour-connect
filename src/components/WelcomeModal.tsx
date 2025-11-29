import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const modalCopy = {
  es: {
    badge: "Próximo Evento",
    title: "¡Encendido del Árbol Navideño! 🎄",
    description: "Próximamente en Delicias, Chihuahua.",
    body: "Prepárate para dar inicio a la temporada navideña con el tradicional encendido del árbol. Más detalles pronto.",
    primaryCta: "Entendido",
    footer: "Evento organizado por el Gobierno Municipal de Delicias. ¡Sigamos Construyendo!",
    dismiss: "Cerrar"
  },
  en: {
    badge: "Upcoming Event",
    title: "Christmas Tree Lighting! 🎄",
    description: "Coming soon to Delicias, Chihuahua.",
    body: "Get ready to kick off the holiday season with the traditional tree lighting ceremony. More details coming soon.",
    primaryCta: "Got it",
    footer: "Event organized by the Municipal Government of Delicias. Let's Keep Building!",
    dismiss: "Close"
  }
} as const;

export const WelcomeModal = () => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const copy = modalCopy[locale] ?? modalCopy.es;
  const storageKey = "welcome-modal-tree-lighting-2024";

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
            src="/images/encendidoarbol.webp" 
            alt="Encendido del Árbol Navideño" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          {/* Luces decorativas */}
          <div className="absolute top-4 left-4 h-2 w-2 animate-pulse rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]" style={{ animationDelay: '0s' }} />
          <div className="absolute top-8 right-8 h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-6 left-1/4 h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" style={{ animationDelay: '0.6s' }} />
          <div className="absolute top-10 right-1/4 h-2 w-2 animate-pulse rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]" style={{ animationDelay: '0.9s' }} />
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
