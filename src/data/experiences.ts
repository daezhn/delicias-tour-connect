export const travelRoutes = [
  {
    image: "/images/quehacer/presa.webp",
    title: { es: "Desierto & Presa", en: "Desert & dam" },
    description: {
      es: "Miradores en la Presa Las Vírgenes, senderos interpretativos y picnic naranja al atardecer.",
      en: "Las Vírgenes overlooks, interpretive trails and orange sunsets with a picnic."
    },
    cta: "https://maps.google.com/?q=Presa+Las+Virgenes"
  },
  {
    image: "/images/quehacer/reloj.webp",
    title: { es: "Centro creativo", en: "Creative downtown" },
    description: {
      es: "Murales, concept stores y cafés de autor alrededor del reloj monumental.",
      en: "Murals, concept stores and signature cafés around the clock tower."
    },
    cta: "/experiencias/arte-cultura"
  },
  {
    image: "/images/quehacer/museo.webp",
    title: { es: "Museos táctiles", en: "Tactile museums" },
    description: {
      es: "MUDECH y Museo de Paleontología con laboratorios de fósiles y terrazas con vista.",
      en: "MUDECH + Paleontology Museum with fossil labs and terraces."
    },
    cta: "/experiencias/arte-cultura"
  }
] as const;

export const dayPlanner = [
  {
    time: "09:00",
    block: { es: "Murales + desayuno", en: "Murals + breakfast" },
    detail: {
      es: "Caminata frente al reloj y recorrido por Plaza Benito Juárez para ubicar nuevas intervenciones.",
      en: "Walking near the clock tower plus walk around Benito Juárez plaza to spot new murals."
    }
  },
  {
    time: "12:30",
    block: { es: "Museos y ciencia", en: "Museums & science" },
    detail: {
      es: "Visita MUDECH y cruza al Museo de Paleontología; reserva guía para acceder a laboratorios.",
      en: "Tour MUDECH then cross to the Paleontology Museum; book a guide to access labs."
    }
  },
  {
    time: "17:00",
    block: { es: "Presa Las Vírgenes", en: "Las Vírgenes dam" },
    detail: {
      es: "Caminata ligera, paseo en kayak o sesión fotográfica en el mirador.",
      en: "Light hike, kayak loop or photo session on the overlook."
    }
  },
  {
    time: "21:00",
    block: { es: "Noches del centro", en: "Downtown nights" },
    detail: {
      es: "Mixología local, música en vivo y food trucks alrededor del centro.",
      en: "Local mixology, live music and food trucks around downtown."
    }
  }
] as const;

export const atlasStops = [
  {
    name: { es: "Presa Las Vírgenes", en: "Las Vírgenes Dam" },
    detail: {
      es: "Miradores con mesas picnic.",
      en: "Lookouts with picnic tables."
    }
  },
  {
    name: { es: "Plaza Benito Juárez", en: "Benito Juárez plaza" },
    detail: {
      es: "Muralismo.",
      en: "Murals."
    }
  },
  {
    name: { es: "MUDECH + Museo de Paleontología", en: "MUDECH + Paleontology Museum" },
    detail: {
      es: "Salas inmersivas, fósiles y terrazas con vista algodonera.",
      en: "Immersive halls, fossils and cotton-valley terraces."
    }
  }
] as const;

