import { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const modalCopy = {
  es: {
    badge: "Evento Especial",
    title: "¡Vive el Gran Desfile de la Revolución Mexicana! 🇲🇽",
    description: "Acompáñanos este 20 de Noviembre en las calles de Delicias.",
    body: "El desfile comenzará a las 9:00 A.M. partiendo de la Plaza Benito Juárez, pasando por el Mercado Juárez y finalizando en la Plaza del Santuario.",
    primaryCta: "Ver Mapa del Recorrido",
    footer: "Evento organizado por el Gobierno Municipal de Delicias. ¡Sigamos Construyendo!",
    dismiss: "Cerrar"
  },
  en: {
    badge: "Special Event",
    title: "Experience the Mexican Revolution Parade! 🇲🇽",
    description: "Join us this November 20th on the streets of Delicias.",
    body: "The parade starts at 9:00 A.M. from Plaza Benito Juárez, passing through Mercado Juárez and ending at Plaza del Santuario.",
    primaryCta: "View Route Map",
    footer: "Event organized by the Municipal Government of Delicias. Let's Keep Building!",
    dismiss: "Close"
  }
} as const;

export const WelcomeModal = () => {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const copy = modalCopy[locale] ?? modalCopy.es;
  const storageKey = "welcome-modal-revolution-parade-2024";

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
    <>
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="max-w-2xl overflow-hidden rounded-[32px] border-none bg-white/95 p-0 text-left text-foreground shadow-[0_30px_120px_rgba(9,16,29,0.35)] backdrop-blur md:w-full">
          <div className="relative h-48 w-full overflow-hidden bg-gray-100 sm:h-64">
            <img 
              src="/images/POPUP/desfile.png" 
              alt="Desfile de la Revolución" 
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-white/90 shadow-sm">{copy.badge}</p>
              <DialogTitle className="text-2xl font-bold leading-tight text-white shadow-sm drop-shadow-md sm:text-3xl">
                <span className="text-[#f6b043]">{copy.title}</span>
              </DialogTitle>
            </div>
          </div>

          <div className="px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
            <DialogHeader className="mb-4 space-y-2 text-left">
              <DialogDescription className="text-lg font-medium text-foreground">
                {copy.description}
              </DialogDescription>
              <p className="text-base text-muted-foreground">
                {copy.body}
              </p>
            </DialogHeader>

            <div className="mb-6 rounded-xl bg-gradient-to-r from-[#006847]/10 via-white to-[#CE1126]/10 p-4 text-sm text-secondary border border-gray-100">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f6b043]/20 text-[#f6b043]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="text-foreground/80 italic">{copy.footer}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="flex-1 bg-[#006847] text-white transition hover:bg-[#006847]/90"
                onClick={() => {
                  handleOpenChange(false);
                  setShowMap(true);
                }}
              >
                {copy.primaryCta}
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-gray-200 text-secondary hover:bg-gray-50"
                onClick={() => handleOpenChange(false)}
              >
                {copy.dismiss}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showMap} onOpenChange={setShowMap}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="relative h-[85vh] w-full overflow-hidden rounded-3xl bg-white/95 backdrop-blur">
            <img 
              src="/images/POPUP/desfile.png" 
              alt="Mapa del Desfile" 
              className="h-full w-full object-contain p-2"
            />
            <button 
              onClick={() => setShowMap(false)} 
              className="absolute right-4 top-4 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70 focus:outline-none"
              aria-label={copy.dismiss}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
