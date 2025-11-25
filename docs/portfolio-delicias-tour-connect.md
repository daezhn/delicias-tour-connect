# 📋 Documento de Portafolio - Delicias Tour Connect

## 🏢 Información del Cliente

| Campo | Detalle |
|-------|---------|
| **Cliente** | IDEA Delicias (Instituto de Desarrollo Económico y Agropecuario Delicias) |
| **Ubicación** | Delicias, Chihuahua, México |
| **Contacto** | contacto@ideadelicias.com • 639 171 3086 |
| **Redes Sociales** | Facebook: @IDEADelicias |

---

## 🎯 Objetivo del Proyecto

Desarrollar un **portal web turístico** moderno y atractivo para promocionar la ciudad de Delicias, Chihuahua como destino turístico. El sitio presenta atractivos, eventos culturales, hospedaje, gastronomía y experiencias únicas de la región, con el lema **"Aquí todo es Delicioso"**.

El proyecto incluye además una **vista especial optimizada para tótems informativos** ubicados en puntos estratégicos de la ciudad.

---

## 🛠️ Stack Tecnológico

### Frontend
| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.3.1 | Framework principal de UI |
| **TypeScript** | Latest | Tipado estático |
| **Vite** | Latest | Build tool y bundler |
| **Tailwind CSS** | 3.x | Sistema de estilos utility-first |
| **Framer Motion** | 12.x | Animaciones y transiciones |

### Componentes UI
| Librería | Uso |
|----------|-----|
| **Radix UI** | Componentes accesibles (Dialog, Accordion, Tabs, etc.) |
| **shadcn/ui** | Sistema de diseño basado en Radix |
| **Lucide React** | Iconografía moderna |
| **Embla Carousel** | Carruseles de imágenes |
| **Recharts** | Visualización de datos |

### Funcionalidades Especiales
| Tecnología | Uso |
|------------|-----|
| **React Leaflet** | Mapas interactivos |
| **Lenis** | Smooth scrolling premium |
| **OpenAI GPT-4o-mini** | Chatbot asistente con IA |
| **React Query (TanStack)** | Manejo de estado del servidor |
| **React Hook Form + Zod** | Formularios con validación |

### SEO y Rendimiento
- **React Helmet Async** - Meta tags dinámicos
- **PWA Ready** - Manifest y Service Worker
- **Lazy Loading** - Carga diferida de rutas y componentes

---

## 📱 Características Principales

### 1. **Experiencia Visual Premium**
- Hero full-screen con imagen de alta calidad de Delicias
- Animaciones fluidas con Framer Motion
- Efecto parallax en secciones
- Gradientes animados sutiles
- Cursor personalizado en desktop
- Barra de progreso de scroll

### 2. **Navegación Inteligente**
- Menú sticky con cambio de estilo según scroll
- Navegación responsive (hamburger en móvil)
- Soporte multiidioma (Español/Inglés)
- Transiciones de página animadas

### 3. **Módulo de Eventos**
- Agenda mensual de eventos
- Calendario de disponibilidad interactivo
- Sistema de categorías visuales

### 4. **Experiencias Turísticas** (6 categorías)
- 🎭 Arte y Cultura
- 🍽️ Qué Comer
- 🎉 Qué Hacer
- 🌙 Vida Nocturna
- 👨‍👩‍👧‍👦 Familia
- 🏃 Deportes

### 5. **Módulo de Tours**
- Explorador de tours con filtros
- Mapa interactivo con ubicaciones
- Galería de imágenes por tour
- Testimonios y ratings
- Fechas próximas disponibles

### 6. **Información Práctica**
- 🚗 Cómo llegar / Transporte
- 🏨 Hospedaje y hoteles
- 🌤️ Clima y consejos
- 📍 Atractivos turísticos

### 7. **Chatbot con IA**
- Asistente virtual "IDEA" disponible 24/7
- Integración con OpenAI GPT-4o-mini
- Base de conocimiento local (tours, restaurantes, eventos)
- Interfaz de chat moderna y responsiva
- Respuestas contextualizadas sobre la ciudad

### 8. **Módulo de Galería**
- Showcase visual de la ciudad
- Imágenes optimizadas con lazy loading
- Efecto blur-up en carga de imágenes

### 9. **Ciudadanos Destacados**
- Sección de personas relevantes de Delicias
- Perfiles con biografías

### 10. **Vista para Tótems (Pantalla)**
- Interfaz optimizada para pantallas táctiles
- Layout adaptado a formato vertical
- Navegación simplificada para uso público

---

## 📄 Páginas del Sitio

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con todas las secciones |
| `/Atractivos` | Catálogo de lugares turísticos |
| `/tours` | Explorador de tours con mapa |
| `/hospedaje` | Directorio de hoteles |
| `/transporte` | Información de cómo llegar |
| `/clima-tips` | Clima y recomendaciones |
| `/personas-destacadas` | Ciudadanos ilustres |
| `/experiencias/*` | 6 subcategorías de experiencias |
| `/Pantalla` | Vista para tótems informativos |
| `/pantallatouch` | Vista táctil para tótems |
| `/privacidad` | Política de privacidad |

---

## 🎨 Identidad Visual

### Paleta de Colores
```
- Fondo principal: #f6ecdf (crema cálido)
- Primario: Turquesa (#00aec0)
- Acentos: Naranja (#f6b043), Rosa (#f79d84)
- Gradientes: Combinaciones de naranja, rosa y azul
- Texto: Slate oscuro para contraste
```

### Tipografías
- **Outfit** - Sans-serif moderna (cuerpo de texto)
- **Fraunces** - Serif elegante (títulos destacados)
- **Great Vibes** - Script decorativa (acentos especiales)

### Estilo de Diseño
- Look turístico cálido y acogedor
- Fotografías de alta calidad
- Animaciones sutiles pero impactantes
- Bordes redondeados (rounded-3xl, rounded-full)
- Sombras suaves con blur

---

## 📊 Datos Dinámicos

El sitio maneja datos estructurados para:

| Entidad | Campos Principales |
|---------|-------------------|
| **Tours** | Título bilingüe, categoría, duración, precio, descripción, itinerario, galería, ubicación GPS, rating, testimonios, fechas |
| **Atractivos** | Nombre, categoría, descripción, imagen, ubicación, horario, highlights |
| **Experiencias** | Rutas temáticas, planificador diario, paradas de atlas |
| **Eventos** | Información mensual de actividades |

---

## 🚀 Infraestructura de Deploy

| Aspecto | Solución |
|---------|----------|
| **Hosting** | Vercel (configuración incluida) |
| **Build** | Vite (output en `/dist`) |
| **CDN** | Vercel Edge Network |
| **SPA Routing** | Fallback a index.html configurado |

### Scripts Disponibles
```bash
npm run dev      # Desarrollo local (puerto 8080)
npm run build    # Build de producción
npm run preview  # Preview del build
npm run lint     # ESLint
```

---

## 📈 Optimizaciones Implementadas

### Rendimiento
- ✅ Lazy loading de rutas con React.lazy
- ✅ Preload de recursos críticos (hero, fuentes)
- ✅ Imágenes optimizadas con blur-up effect
- ✅ Code splitting automático por Vite
- ✅ Skeletons de carga para mejor UX

### SEO
- ✅ Meta tags dinámicos por página
- ✅ Open Graph y Twitter Cards
- ✅ Manifest PWA
- ✅ robots.txt configurado
- ✅ Estructura semántica HTML5

### Accesibilidad
- ✅ Componentes Radix UI (ARIA compliant)
- ✅ Navegación por teclado
- ✅ Labels descriptivos
- ✅ Contraste de colores adecuado

---

## 📂 Estructura del Proyecto

```
delicias-tour-connect/
├── public/
│   ├── images/          # Assets visuales organizados
│   ├── fonts/           # Tipografías locales
│   ├── icons/           # Iconos de la app
│   ├── Video/           # Contenido multimedia
│   └── manifest.webmanifest
├── src/
│   ├── components/      # 50+ componentes React
│   │   ├── ui/          # Componentes shadcn/ui
│   │   └── skeletons/   # Loaders de contenido
│   ├── pages/           # 17 páginas del sitio
│   ├── data/            # Datos estructurados (tours, atracciones, etc.)
│   ├── hooks/           # Custom hooks (locale, mobile, parallax)
│   ├── lib/             # Utilidades y configuración
│   ├── i18n/            # Traducciones ES/EN
│   └── utils/           # Funciones auxiliares
├── docs/                # Documentación del proyecto
└── [config files]       # Vite, Tailwind, TypeScript, ESLint
```

---

## 🌟 Aspectos Destacados para el Portafolio

### Complejidad Técnica
1. **Chatbot con IA** - Integración completa con OpenAI, base de conocimiento local, UX conversacional
2. **Mapas interactivos** - React Leaflet con markers personalizados y geolocalización
3. **Sistema de animaciones** - Parallax, reveal animations, page transitions
4. **Multiidioma** - Sistema i18n con detección automática de locale
5. **Vista para tótems** - Adaptación responsiva especial para displays públicos

### Impacto del Proyecto
- Promoción turística de una ciudad mexicana
- Facilita la planificación de visitas
- Digitaliza información turística previamente fragmentada
- Proporciona asistencia 24/7 mediante chatbot

### Escalabilidad
- Arquitectura modular y componentes reutilizables
- Datos separados de la lógica de presentación
- Fácil adición de nuevas categorías y contenido
- Sistema de estilos consistente con Tailwind

---

## 📝 Notas Técnicas para Referencia

### Variables de Entorno Requeridas
```env
VITE_OPENAI_API_KEY=sk-xxx  # Para el chatbot (opcional)
```

### Configuración de Seguridad (CSP)
El proyecto incluye Content Security Policy configurada para:
- API de OpenAI (chatbot)
- Open-Meteo (clima)
- Google Fonts
- WebSockets para desarrollo

---

## 📞 Créditos

**Desarrollado para:** IDEA Delicias  
**Tipo de proyecto:** Portal turístico institucional  
**Estado:** ✅ En producción  
**Año:** 2025

---

*Este documento fue generado para uso en portafolio de servicios de desarrollo web.*
