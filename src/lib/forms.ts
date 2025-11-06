import { z } from "zod";

export const newsletterSchema = z.object({
  name: z
    .string()
    .min(2, "Nombre muy corto")
    .max(60, "Nombre muy largo")
    .regex(/^[a-zA-ZÀ-ÿ' ]+$/, "Solo letras y espacios"),
  email: z.string().email("Correo inválido"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar recibir comunicaciones" }),
  }),
});

export type NewsletterPayload = z.infer<typeof newsletterSchema>;

export const sanitizeText = (input: string) => input.replace(/[<>]/g, "").trim();
