# Delicias Tour Connect

Sitio promocional para la iniciativa turística de Delicias, Chihuahua. Presenta atractivos, eventos, hospedaje y experiencias gastronómicas de la región, así como una vista especial para tótems informativos.

## Requisitos

- Node.js 18+
- npm 9+

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia el entorno de desarrollo (Vite) |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Sirve localmente el build generado |
| `npm run lint` | Ejecuta ESLint |

## Estructura relevante

- `src/pages` – páginas principales (`Index`, `Atractivos`, `Pantalla`, etc.).
- `src/components` – componentes compartidos de UI.
- `public/images` – imágenes del sitio (hero, atractivos, gastronomía).
- `public/Video` y `public/pantalla` – videos utilizados en la web y en la vista para tótem.

## Despliegue

El proyecto usa Vite, por lo que basta con generar el build (`npm run build`) y servir el contenido de `dist` en cualquier hosting estático (Vercel, Netlify, S3, etc.). Para rutas internas se incluye un `vercel.json` con fallback al `index.html`.

## Créditos

Proyecto administrado por IDEA Delicias. Contribuciones y mejoras son bienvenidas mediante issues o pull requests. 🎉
