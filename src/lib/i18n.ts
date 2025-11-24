export type Locale = "es" | "en";

type SectionCopy = {
  title: string;
  highlight?: string;
  intro?: string;
  badgeLabel?: string;
  button?: string;
  cardTitle?: string;
  cardCta?: string;
  description?: string;
};

interface Translations {
  nav: Record<"inicio" | "atractivos" | "actividades" | "eventos" | "contacto", string>;
  hero: {
    label: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    explore: string;
    events: string;
  };
  sections: {
    events: SectionCopy;
    hotels: SectionCopy;
    restaurants: SectionCopy;
    featuredPlaces: SectionCopy;
    activities: SectionCopy;
    howToGet: SectionCopy;
    recommendations: SectionCopy;
    featuredCarousel: SectionCopy;
  };
  buttons: {
    mapHotels: string;
  };
  footer: {
    aboutDescription: string;
    motto: string;
    quickLinksTitle: string;
    contactTitle: string;
    followTitle: string;
    rights: string;
    govt: string;
    privacy: string;
  };
}

const translations: Record<Locale, Translations> = {
  es: {
    nav: {
      inicio: "Inicio",
      atractivos: "Atractivos",
      actividades: "Actividades",
      eventos: "Eventos",
      contacto: "Contacto",
    },
    hero: {
      label: "Turismo en Delicias",
      titleLead: "Aquí todo es",
      titleHighlight: "Delicioso",
      description: "Descubre la belleza y el encanto de Delicias, Chihuahua",
      explore: "Explorar Destinos",
      events: "Ver Eventos",
    },
    sections: {
      events: {
        title: "Próximos",
        highlight: "Eventos",
        intro: "No te pierdas las festividades y eventos especiales que tenemos preparados",
      },
      hotels: {
        title: "Dónde Hospedarse",
        intro: "Hoteles confortables en Delicias y la región",
        button: "Ver hoteles en el mapa",
      },
      restaurants: {
        title: "¿Qué Voy a Comer?",
        intro: "Explora las opciones gastronómicas de Delicias por categoría",
        cardCta: "Haz clic para ver la lista completa",
      },
      featuredPlaces: {
        title: "Atractivos",
        highlight: "Destacados",
        intro: "Descubre los lugares más emblemáticos y experiencias únicas que Delicias tiene para ofrecerte",
        button: "Ver Todos los Atractivos",
      },
      activities: {
        title: "Actividades",
        highlight: "Regionales",
        intro: "Vive experiencias únicas y descubre todo lo que puedes hacer en Delicias",
      },
      howToGet: {
        badgeLabel: "Cómo llegar",
        title: "¿Cómo Llegar a Delicias?",
        intro: "Todas las rutas te llevan a descubrir nuestra hermosa ciudad",
      },
      recommendations: {
        badgeLabel: "Tips",
        title: "Recomendaciones",
        intro: "Consejos útiles para disfrutar al máximo tu visita a Delicias",
        cardTitle: "Tips para tu Visita",
      },
      featuredCarousel: {
        title: "Descubre Delicias",
        description: "Vive la experiencia turística a través de un recorrido visual por la ciudad y sus alrededores.",
      },
    },
    buttons: {
      mapHotels: "Ver hoteles en el mapa",
    },
    footer: {
      aboutDescription: "Instituto de Desarrollo y Atención al Turismo de Delicias, Chihuahua",
      motto: "Turismo y Cultura",
      quickLinksTitle: "Enlaces Rápidos",
      contactTitle: "Contacto",
      followTitle: "Síguenos",
      rights: "Todos los derechos reservados.",
      govt: "Instituto de Desarrollo y Atención al Turismo - Gobierno Municipal de Delicias",
      privacy: "Aviso de privacidad",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      atractivos: "Highlights",
      actividades: "Activities",
      eventos: "Events",
      contacto: "Contact",
    },
    hero: {
      label: "Tourism in Delicias",
      titleLead: "Everything is",
      titleHighlight: "Delicious",
      description: "Discover the beauty and charm of Delicias, Chihuahua",
      explore: "Explore Destinations",
      events: "See Events",
    },
    sections: {
      events: {
        title: "Upcoming",
        highlight: "Events",
        intro: "Don’t miss the festivities and special events we have prepared",
      },
      hotels: {
        title: "Where to Stay",
        intro: "Comfortable hotels in Delicias and the surrounding region",
        button: "See hotels on the map",
      },
      restaurants: {
        title: "What Will I Eat?",
        intro: "Explore Delicias’s dining options by category",
        cardCta: "Tap to view the full list",
      },
      featuredPlaces: {
        title: "City",
        highlight: "Highlights",
        intro: "Discover the most iconic places and unique experiences Delicias has to offer",
        button: "View All Highlights",
      },
      activities: {
        title: "Regional",
        highlight: "Activities",
        intro: "Enjoy memorable experiences and discover everything you can do in Delicias",
      },
      howToGet: {
        badgeLabel: "How to get here",
        title: "How to Get to Delicias?",
        intro: "Every route leads you to discover our beautiful city",
      },
      recommendations: {
        badgeLabel: "Tips",
        title: "Recommendations",
        intro: "Helpful advice to make the most of your visit to Delicias",
        cardTitle: "Tips for Your Visit",
      },
      featuredCarousel: {
        title: "Discover Delicias",
        description: "Experience tourism through a visual journey across the city and its surroundings.",
      },
    },
    buttons: {
      mapHotels: "See hotels on the map",
    },
    footer: {
      aboutDescription: "Development and Tourism Institute of Delicias, Chihuahua",
      motto: "Tourism & Culture",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact",
      followTitle: "Follow us",
      rights: "All rights reserved.",
      govt: "Tourism Development Institute - City of Delicias",
      privacy: "Privacy policy",
    },
  },
};

export const defaultLocale: Locale = "es";

export const getTranslations = (locale: Locale): Translations => translations[locale] ?? translations[defaultLocale];
