import { Utensils, Music, Mountain, Camera, ShoppingBag, Users } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { getTranslations } from "@/lib/i18n";

const activities = [
  {
    icon: Utensils,
    title: "Gastronomía local",
    description: "Saborea platillos tradicionales y cocina contemporánea."
  },
  {
    icon: Music,
    title: "Eventos culturales",
    description: "Festivales, conciertos y celebraciones durante todo el año."
  },
  {
    icon: Mountain,
    title: "Ecoturismo",
    description: "Rutas al desierto, presas y paisajes únicos."
  },
  {
    icon: Camera,
    title: "Recorridos fotográficos",
    description: "Tours guiados para capturar amaneceres y arquitectura."
  },
  {
    icon: ShoppingBag,
    title: "Artesanías y diseño",
    description: "Mercados creativos y piezas hechas en Delicias."
  },
  {
    icon: Users,
    title: "Plan familiar",
    description: "Actividades para todas las edades y temporadas."
  }
];

export const Activities = () => {
  const { locale } = useLocale();
  const copy = getTranslations(locale).sections.activities;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="font-script text-2xl text-secondary/80">
          {locale === "es" ? "Actividades que te mueven" : "Activities that move you"}
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight">
          {copy.title} <span className="text-primary">{copy.highlight}</span>
        </h2>
        {copy.intro && <p className="text-sm text-muted-foreground max-w-2xl">{copy.intro}</p>}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <article
              key={activity.title}
              className="flex items-start gap-4 rounded-[24px] border border-black/5 bg-white/95 p-4 shadow-[0_15px_30px_rgba(4,18,42,0.08)] hover:shadow-[0_20px_40px_rgba(4,18,42,0.12)] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
