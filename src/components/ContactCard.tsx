import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
      consent: formData.get("consent") === "on",
    };
    const result = newsletterSchema.safeParse(payload);
    if (!result.success) {
      setMessage(result.error.issues[0].message);
      return;
    }
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setMessage(locale === "es" ? "Gracias, pronto te contactaremos." : "Thanks, we'll be in touch.");
    }, 1200);
  };

  return (
    <section className="py-16 bg-muted/40" id="contacto">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="space-y-6 p-6">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                {locale === "es" ? "Contacto" : "Contact"}
              </p>
              <h2 className="text-3xl font-bold text-foreground">
                {locale === "es" ? "¿Tienes dudas?" : "Need help?"}
              </h2>
              <p className="text-muted-foreground">
                {locale === "es"
                  ? "Déjanos tus datos y un asesor del Instituto se pondrá en contacto."
                  : "Leave us your info and our tourism team will get in touch."}
              </p>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <Input name="name" placeholder={locale === "es" ? "Nombre completo" : "Full name"} required />
                <Input name="email" type="email" placeholder="Email" required />
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" name="consent" className="rounded border-input text-primary focus-visible:ring-primary" />
                {locale === "es"
                  ? "Acepto recibir información sobre tours y eventos"
                  : "I agree to receive info about tours and events"}
              </label>
              <Button type="submit" disabled={pending}>
                {pending ? (locale === "es" ? "Enviando..." : "Sending...") : locale === "es" ? "Enviar" : "Send"}
              </Button>
              {message && <p className="text-sm text-primary">{message}</p>}
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
