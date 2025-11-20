# Plan de Implementación: Detalles de Innovación "Premium"

## Objetivo
Implementar micro-interacciones de alta gama que den una sensación de "innovación" y modernidad sin ser invasivas, específicamente diseñadas para impresionar (efecto "Wow" para el Alcalde).

## Feedback del Usuario
- **NO**: Lenis, Splash Screen, Navegación Magnética.
- **SI**: Reveals de contenedores, detalles "premium" (Spotlight).
- **NOTA**: El evento de Noviembre es correcto (2025).

## Cambios Propuestos

### 1. Efecto "Spotlight" en Cards (Innovación Visual) 🔦
Implementar un efecto de iluminación que sigue al cursor en las tarjetas de "Experiencias" y "Atractivos".
- **Componente Nuevo**: `src/components/ui/spotlight-card.tsx`
- **Uso**: Reemplazar o envolver las cards existentes en `ExperiencesCollage` y `FeaturedCitizens`.
- **Efecto**: Un brillo sutil revela bordes o texturas al pasar el mouse, muy estilo "Apple/Linear".

### 2. Reveals de Contenedores "Cinemáticos" 🎬
Mejorar `MotionReveal` para soportar máscaras de recorte (clip-path).
- **Mejora**: En lugar de solo `fade-up`, las imágenes y secciones importantes se revelarán como si se "descorriera un velo" (wipe effect) o con un escalado suave.
- **Archivos**: `src/components/MotionReveal.tsx`.
- **Implementación**: Añadir variantes `wipe-right`, `wipe-up`, `zoom-reveal`.

### 3. Integración en Componentes Clave
- **ExperiencesCollage**: Usar `SpotlightCard` para las tarjetas de experiencias.
- **FeaturedCitizens**: Usar `SpotlightCard` para los ciudadanos destacados.
- **Hero / Secciones**: Aplicar `MotionReveal` con variantes cinemáticas a los títulos o imágenes principales.

## Plan de Verificación
- Comprobar rendimiento del efecto Spotlight en móviles (debe desactivarse o simplificarse).
- Asegurar que los reveals no retrasen la lectura del contenido.
