# Guía de contenido – Delicias Tour Connect

Este documento resume dónde vive cada pieza de contenido (textos, imágenes, videos y datos estructurados) para que puedas actualizar rápidamente la información del sitio principal y de la vista de tótem (`/pantalla`).

---

## 1. Cómo se arma el sitio

| Elemento | Ubicación | Notas |
| --- | --- | --- |
| Página principal | `src/pages/Index.tsx` | Orquesta todas las secciones (Hero, Eventos, Tours, etc.). Cambiar el orden aquí actualiza el flujo del home. |
| Página de atractivos | `src/pages/Atractivos.tsx` | Consume los datos del catálogo (`src/data/attractions.ts`). |
| Pantalla/Tótem | `src/pages/Pantalla.tsx` | Muestra el loop de videos/imágenes + ticker de eventos y clima. |
| Componentes compartidos | `src/components/*` | Cada sección importante del home está en un componente separado. |
| Datos estructurados | `src/data/*.ts` | Arreglos que alimentan listas (tours, atractivos). |
| Recursos estáticos | `public/**/*` | Imágenes, videos y flyers. Se sirven directamente sin importar. |

Para ver cambios en vivo usa `npm run dev`. El build se genera con `npm run build`.

---

## 2. Textos globales e idiomas

- Archivo clave: `src/lib/i18n.ts`.
- Estructura: Un objeto `translations` con dos llaves (`es`, `en`) que contienen los textos para navegación, hero, secciones, botones y pie de página.
- Cómo editar:
  1. Busca la sección deseada (por ejemplo `sections.events`).
  2. Actualiza los campos `title`, `highlight`, `intro`, etc. en ambos idiomas.
  3. Guarda y recarga la página; el `useLocale` toma automáticamente ese texto.
- Cambio de idioma en la interfaz:
  - `src/hooks/use-locale.tsx` mantiene el idioma actual.
  - `src/components/Navigation.tsx` muestra el botón de idioma (icono `Globe`). Si quieres fijar un idioma, establece siempre `defaultLocale` en `src/lib/i18n.ts`.

---

## 3. Páginas principales

### Inicio (`src/pages/Index.tsx`)
Lista las secciones en este orden: `Navigation`, `Hero`, `Events`, `ToursExplorer`, `FeaturedCarousel`, `Hotels`, `Restaurants`, `FeaturedPlaces`, `Activities`, `HowToGet`, `FaqSection`, `ContactCard`, `Recommendations`, `Footer`. Para ocultar una sección basta con eliminar/importar el componente correspondiente aquí.

### Atractivos (`src/pages/Atractivos.tsx`)
- Hero y textos están in-situ dentro del componente.
- Las tarjetas se generan a partir del array `attractions` definido en `src/data/attractions.ts`. Cada entrada incluye `name`, `category`, `description`, `image`, `location`, etc. Cambia ahí los nombres, ubicaciones o la imagen (ruta relativa a `public`).

### Pantalla (`src/pages/Pantalla.tsx`)
- `mediaItems` controla el loop de videos e imágenes. Cada objeto tiene `type`, `src`, `alt` (solo para imágenes) y `duration` en milisegundos.
- Las imágenes se leen de `public/images` y los videos de `public/pantalla`.
- El ticker inferior y la tarjeta de clima se definen en `src/utils/pantalla.ts` (`tickerES`, `tickerEN`, `temp`, `condition`).

---

## 4. Secciones del home y dónde editar

| Sección visible | Archivo | Qué se ajusta ahí |
| --- | --- | --- |
| Navegación | `src/components/Navigation.tsx` | Logo (`/images/Logo_IDEA.png`), enlaces del menú y botón de idioma. Cambia `menuItems` si necesitas nuevas anclas. |
| Hero | `src/components/Hero.tsx` | Imagen principal (`/images/hero-delicias.jpg`) y CTA que apuntan a `#atractivos` y `#eventos`. Textos provienen de `i18n`. |
| Próximos eventos | `src/components/Events.tsx` | Usa el arreglo `novemberEvents` con los flyers de `/public/images/noviembre`. Reemplaza ese array para mostrar nuevos carteles o cambiar las etiquetas. |
| Tours Explorer | `src/components/ToursExplorer.tsx` | Consume `tours` desde `src/data/tours.ts`. Ahí se editan títulos, categorías, fechas, precios, itinerarios, galerías e incluye coordenadas para el mapa. |
| Carrusel destacado | `src/components/FeaturedCarousel.tsx` y `src/components/VideoCarousel.tsx` | Ajusta las rutas de imágenes/videos y textos promocionales dentro de cada componente. |
| Hoteles | `src/components/Hotels.tsx` | El array `hotelImages` controla la galería. La CTA final apunta a Google Maps: actualiza el enlace si cambian las coordenadas. |
| Gastronomía | `src/components/Restaurants.tsx` | La lista `foodCategories` define títulos e imágenes por categoría. Las imágenes se abren en un modal; asegúrate de que existan en `public/images`. |
| Atractivos destacados | `src/components/FeaturedPlaces.tsx` | Revisa los objetos definidos dentro para nombres, descripciones y enlaces. |
| Actividades regionales | `src/components/Activities.tsx` | Similar al anterior; los contenidos están en el mismo archivo. |
| Cómo llegar | `src/components/HowToGet.tsx` | Textos en `i18n`; los puntos de transporte se declaran en el componente. |
| FAQ | `src/components/FaqSection.tsx` | Array interno `faqs` con preguntas y respuestas (solo en español actualmente). |
| Contacto rápido | `src/components/ContactCard.tsx` | Actualiza teléfonos, correos o ubicación directamente en el componente. |
| Recomendaciones | `src/components/Recommendations.tsx` | Ajusta la lista `tips` para editar consejos rápidos. |
| Footer | `src/components/Footer.tsx` | Textos provienen de `i18n.footer`. Los enlaces a redes sociales se definen dentro del componente. |

> Tip: Si una sección usa datos muy repetidos, considera moverlos a `src/data` para centralizar ediciones futuras.

---

## 5. Datos estructurados

- **Atractivos:** `src/data/attractions.ts`
  - Cada objeto es un atractivo. Campos disponibles: `name`, `category`, `description`, `image`, `location`, `schedule`, `highlights`, `imageClass`.
  - Las imágenes se buscan dentro de `public/atractivos`.
- **Tours:** `src/data/tours.ts`
  - Incluye textos en español/inglés (`title`, `description`), categoría, duración (`durationHours`), precio `price`, beneficios (`includes`), itinerario, galería de imágenes, coordenadas (`location`) y fechas (`nextDates`).
  - Actualiza `tourCategories` si agregas una nueva categoría para que aparezca en los filtros.

---

## 6. Recursos multimedia

- `public/images`: galería general (hero, gastronomía, hoteles, atractivos). Añade nuevos archivos aquí y referencia la ruta absoluta desde los componentes, por ejemplo `/images/nuevo-banner.jpg`.
- `public/images/noviembre`: flyers utilizados en la sección de eventos. Mantén los nombres consistentes con el arreglo `novemberEvents`.
- `public/pantalla`: videos del tótem (`test1.mp4`, `test2.mp4`, etc.). Cuando agregues un nuevo video, añade su ruta a `mediaItems`.
- `public/Video`: clips utilizados en otras secciones o carruseles.

Los assets en `public` se sirven tal cual, así que no requieren importación explícita.

---

## 7. Vista de tótem (`/pantalla`)

- **Orden del loop:** definido por `mediaItems` en `src/pages/Pantalla.tsx`. Puedes mezclar tantos videos e imágenes como necesites.
- **Duraciones:** Para imágenes, usa la propiedad `duration` (milisegundos). Los videos avanzan automáticamente al terminar gracias a `onEnded`.
- **Ticker inferior y clima:** `src/utils/pantalla.ts`. Ajusta `tickerES`/`tickerEN`, el texto de `temp` y `condition`. Todos los valores se actualizan cada 15 segundos mediante `useClock`.
- **Texto superior:** `getTickerEvents` usa el `locale` global, así que respeta el idioma seleccionado en la navegación.

---

## 8. App instalable (PWA)

- **Manifest:** `public/manifest.webmanifest`. Ajusta `name`, `short_name`, colores, idioma (`lang`) y los íconos. Usa imágenes cuadradas (192px/512px) alojadas en `public/images`.
- **Service Worker:** `public/sw.js`. Aquí se define qué rutas se cachean (`ASSETS`) y cómo responder sin conexión. Agrega archivos o cambia la estrategia según tus necesidades.
- **Registro:** `src/main.tsx` registra el Service Worker solo en producción (`import.meta.env.PROD`). Si necesitas probar en desarrollo, temporalmente elimina esa condición.
- **Metadatos `<head>`:** `index.html` contiene `link rel="manifest"`, `theme-color` y `apple-touch-icon`. Actualiza estos valores si cambias branding o colores del sistema.
- **Instalación:** En Android (Chrome) aparecerá “Añadir a pantalla principal”; en iOS, usa el botón compartir → “Añadir a Inicio”. Ambos leen la info del manifest y del icono de Apple.
- Para funcionalidades avanzadas (push notifications, sincronización en segundo plano) expande `sw.js` y maneja permisos desde React.

---

## 9. Estilos y temas

- Tailwind se configura en `tailwind.config.ts`.
- Estilos globales: `src/index.css` y `src/App.css`.
- Componentes UI reutilizables (botones, tarjetas, diálogos) viven en `src/components/ui/`; se basan en la librería de shadcn/ui. Para modificar la apariencia de un tipo de componente en todo el sitio, hazlo ahí.

---

## 10. Flujo sugerido para editar contenido

1. **Localiza la sección** usando la tabla de la sección 4.
2. **Actualiza textos** en `src/lib/i18n.ts` si deben existir en ambos idiomas. Si es un copy único (ej. preguntas de FAQ), edítalo directo en el componente.
3. **Modifica imágenes o videos** colocando los archivos en `public/...` y actualizando la ruta en el componente o datos correspondientes.
4. **Guarda y revisa** con `npm run dev`.
5. **Construye** con `npm run build` antes de desplegar para asegurar que no haya errores de TypeScript o archivos faltantes.
