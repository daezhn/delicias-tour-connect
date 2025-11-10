import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { newsletterSchema, sanitizeText } from "@/lib/forms";
import { useLocale } from "@/hooks/use-locale";
import { useState } from "react";

export const ContactCard = () => {
  const { locale } = useLocale();
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: sanitizeText(formData.get("name") as string),
      email: formData.get("email") as string,
      consent: formData.get("consent") === "on"
    };
    const result = newsletterSchema.safeParse(payload);
    if (!result.success) {
      setMessage(result.error.issues[0].message);
      return;
    }
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setMessage(locale === "es" ? "Gracias, pronto te contactaremos." : "Thanks! We'll be in touch.");
    }, 1200);
  };

  return (
    <Card className="rounded-[32px] border border-black/5 shadow-[0_20px_45px_rgba(4,18,42,0.08)]">
      <CardContent className="space-y-5 p-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.5em] text-foreground/60">
            {locale === "es" ? "Contacto" : "Contact"}
          </p>
          <h2 className="text-2xl font-bold text-foreground">
            {locale === "es" ? "¿Tienes dudas?" : "Need help?"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {locale === "es"
              ? "Déjanos tus datos y un asesor del Instituto responderá en menos de 24h."
              : "Leave your info and our tourism team will reply within 24h."}
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <Input name="name" placeholder={locale === "es" ? "Nombre completo" : "Full name"} required />
            <Input name="email" type="email" placeholder="Email" required />
          </div>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              name="consent"
              className="rounded border-input text-primary focus-visible:ring-primary"
            />
            {locale === "es"
              ? "Acepto recibir información sobre tours y eventos"
              : "I’d like to receive info about tours and events"}
          </label>
          <Button type="submit" disabled={pending} className="rounded-full px-6 py-3 text-[11px] uppercase tracking-[0.4em]">
            {pending ? (locale === "es" ? "Enviando..." : "Sending...") : locale === "es" ? "Enviar" : "Send"}
          </Button>
          {message && <p className="text-sm text-primary">{message}</p>}
        </form>
      </CardContent>
    </Card>
  );
};
