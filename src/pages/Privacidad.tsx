import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useLocale } from "@/hooks/use-locale";
import { ShieldCheck, Lock, Cookie, Mail, Server, Clock, FileText } from "lucide-react";

const policyCopy = {
  es: {
    title: "Aviso de privacidad",
    description:
      "Cómo recabamos, usamos y protegemos la información de las personas que usan Delicias Tour Connect.",
    updated: "Vigente desde: 24 noviembre 2025",
    intro: [
      "Este sitio y PWA es operado por el Instituto de Desarrollo Económico y Agropecuario de Delicias.",
      "Recabamos la mínima información necesaria para atender consultas y mejorar la experiencia."
    ],
    blocks: [
      {
        icon: ShieldCheck,
        title: "Responsable del tratamiento",
        body:
          "Instituto de Desarrollo Económico y Agropecuario de Delicias (IDEA Delicias), con domicilio en Delicias, Chihuahua. Correo de contacto: contacto@ideadelicias.com."
      },
      {
        icon: FileText,
        title: "Datos que podemos recopilar",
        items: [
          "Nombre y correo electrónico que envías en formularios de contacto.",
          "Preferencias de idioma y estado de modales guardados en tu dispositivo (localStorage/sessionStorage).",
          "Estado de la barra lateral guardado en una cookie funcional.",
          "Registros técnicos estándar del servidor (logs de Vercel) para seguridad y mantenimiento. No usamos trackers de terceros ni publicidad."
        ]
      },
      {
        icon: Lock,
        title: "Para qué usamos la información",
        items: [
          "Responder tus solicitudes y enviar la información que pediste.",
          "Enviar comunicaciones sobre eventos o tours solo si diste consentimiento en el formulario.",
          "Mejorar la estabilidad y seguridad del sitio (diagnóstico técnico)."
        ]
      },
      {
        icon: Clock,
        title: "Conservación",
        body:
          "Los datos de contacto se conservan únicamente durante el seguimiento a tu solicitud. Los registros técnicos se depuran según las políticas de Vercel. Puedes solicitar la eliminación en cualquier momento."
      },
      {
        icon: Server,
        title: "Con quién compartimos",
        body:
          "No vendemos ni cedemos tus datos. Solo se comparten con nuestros proveedores tecnológicos necesarios para operar el sitio (por ejemplo, Vercel como hosting), bajo acuerdos de protección de datos."
      },
      {
        icon: Cookie,
        title: "Cookies y almacenamiento local",
        items: [
          "Idioma preferido: guardado en tu dispositivo para recordar tu selección.",
          "Estado de modales y navegación: guardados en sessionStorage/localStorage para no mostrar popups repetidos.",
          "Estado de la barra lateral: cookie funcional para mantener la interfaz.",
          "No usamos cookies de publicidad ni herramientas de analítica que rastreen individualmente."
        ]
      }
    ],
    rightsTitle: "Tus derechos",
    rights: [
      "Acceder, corregir o eliminar la información que hayas proporcionado.",
      "Retirar tu consentimiento en cualquier momento.",
      "Limitar el uso de tus datos para finalidades específicas."
    ],
    contactTitle: "¿Tienes dudas o quieres ejercer tus derechos?",
    contactBody:
      "Escríbenos y responderemos a la brevedad. Incluye los datos que deseas revisar o eliminar.",
    contactCta: "Enviar correo"
  },
  en: {
    title: "Privacy Policy",
    description:
      "How we collect, use, and protect information from people using Delicias Tour Connect.",
    updated: "Effective: Nov 24, 2025",
    intro: [
      "This site and PWA are operated by the Delicias Economic Development and Agriculture Institute.",
      "We collect the minimum information needed to respond to inquiries and improve the experience."
    ],
    blocks: [
      {
        icon: ShieldCheck,
        title: "Data controller",
        body:
          "Delicias Economic Development and Agriculture Institute (IDEA Delicias), Delicias, Chihuahua. Contact email: contacto@ideadelicias.com."
      },
      {
        icon: FileText,
        title: "Data we may collect",
        items: [
          "Name and email you send through contact forms.",
          "Language preference and modal states saved on your device (localStorage/sessionStorage).",
          "Sidebar state saved in a functional cookie.",
          "Standard server logs (Vercel) for security and maintenance. We do not use third-party trackers or advertising."
        ]
      },
      {
        icon: Lock,
        title: "How we use it",
        items: [
          "To answer your requests and send the information you asked for.",
          "To send event or tour updates only if you consented in the form.",
          "To improve stability and security of the site (technical diagnostics)."
        ]
      },
      {
        icon: Clock,
        title: "Retention",
        body:
          "Contact details are kept only while we handle your request. Technical logs are rotated according to Vercel policies. You can request deletion at any time."
      },
      {
        icon: Server,
        title: "Who we share with",
        body:
          "We do not sell or rent your data. We only share it with the technology providers needed to operate the site (e.g., Vercel hosting), under data protection agreements."
      },
      {
        icon: Cookie,
        title: "Cookies & local storage",
        items: [
          "Preferred language: stored on your device to remember your selection.",
          "Modal and navigation states: stored in sessionStorage/localStorage to avoid repeated popups.",
          "Sidebar state: functional cookie to keep the UI consistent.",
          "No advertising cookies or analytics that track individuals."
        ]
      }
    ],
    rightsTitle: "Your rights",
    rights: [
      "Access, correct, or delete the information you provided.",
      "Withdraw consent at any time.",
      "Restrict the use of your data for specific purposes."
    ],
    contactTitle: "Need help or want to exercise your rights?",
    contactBody:
      "Write to us and we will reply shortly. Include the details you want to review or delete.",
    contactCta: "Email us"
  }
};

const Privacidad = () => {
  const { locale } = useLocale();
  const copy = policyCopy[locale];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEO
        title={copy.title}
        description={copy.description}
        canonical="https://www.visitadelicias.com/privacidad"
      />
      <Navigation />
      <main className="page-offset">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-900/40" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-100">
                  {copy.updated}
                </span>
                <h1 className="text-4xl font-black leading-tight sm:text-5xl">{copy.title}</h1>
                <p className="max-w-2xl text-lg text-white/80">{copy.description}</p>
                <div className="space-y-2 text-sm text-white/70">
                  {copy.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_65px_rgba(0,0,0,0.35)] lg:w-[360px]">
                <div className="flex items-center gap-3">
                  <Lock className="h-10 w-10 text-emerald-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      IDEA Delicias
                    </p>
                    <p className="text-lg font-semibold">contacto@ideadelicias.com</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  {locale === "es"
                    ? "Usamos la información solo para contactarte y mejorar la experiencia. No hay publicidad ni perfiles."
                    : "We use your info only to contact you and improve the experience. No ads or profiling."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white text-foreground">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-6 lg:grid-cols-2">
              {copy.blocks.map((block) => {
                const Icon = block.icon;
                return (
                  <article
                    key={block.title}
                    className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 shadow-[0_16px_36px_rgba(4,18,42,0.06)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h2 className="text-xl font-semibold">{block.title}</h2>
                    </div>
                    {"items" in block && block.items ? (
                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        {block.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-sm text-slate-700">{block.body}</p>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
              <article className="rounded-3xl border border-slate-100 bg-emerald-900 px-6 py-8 text-white shadow-[0_16px_36px_rgba(4,18,42,0.1)]">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6" />
                  <h2 className="text-xl font-semibold">{copy.rightsTitle}</h2>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-emerald-50/90">
                  {copy.rights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-100 bg-white px-6 py-8 shadow-[0_16px_36px_rgba(4,18,42,0.06)]">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-emerald-700" />
                  <h2 className="text-xl font-semibold text-foreground">{copy.contactTitle}</h2>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{copy.contactBody}</p>
                <a
                  href="mailto:contacto@ideadelicias.com"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] transition hover:bg-emerald-700"
                >
                  {copy.contactCta}
                  <Mail className="h-4 w-4" />
                </a>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
