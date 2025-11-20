# Guía de Animaciones Premium

Esta guía documenta todas las animaciones premium disponibles en la aplicación.

## Componentes de Animación

### 1. Tilt3D
Efecto 3D de inclinación para cards y elementos interactivos.

```tsx
import { Tilt3D } from "@/components/Tilt3D";

<Tilt3D intensity={15} scale={1.05} glare={true}>
  <div className="card">Contenido</div>
</Tilt3D>
```

**Props:**
- `intensity`: Número (default: 15) - Intensidad de la rotación
- `perspective`: Número (default: 1000) - Perspectiva 3D
- `scale`: Número (default: 1.05) - Escala al hover
- `glare`: Boolean (default: true) - Efecto de brillo
- `maxGlare`: Número (default: 0.5) - Opacidad máxima del brillo

### 2. TextReveal
Revelación animada de texto con efecto de máscara.

```tsx
import { TextReveal } from "@/components/TextReveal";

<TextReveal delay={0} direction="up">
  <h1>Título</h1>
</TextReveal>
```

**Props:**
- `delay`: Número (default: 0) - Retraso en milisegundos
- `direction`: "up" | "down" | "left" | "right" (default: "up")
- `once`: Boolean (default: true) - Animar solo una vez
- `threshold`: Número (default: 0.2) - Umbral de intersección

### 3. StaggerContainer & StaggerItem
Animación escalonada para listas y grids.

```tsx
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

<StaggerContainer staggerDelay={100} animation="fade-up">
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>
```

**Props StaggerContainer:**
- `staggerDelay`: Número (default: 100) - Retraso entre items (ms)
- `animation`: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur"
- `threshold`: Número (default: 0.1) - Umbral de intersección
- `once`: Boolean (default: true)

### 4. ImageReveal
Revelación animada de imágenes con múltiples efectos.

```tsx
import { ImageReveal } from "@/components/ImageReveal";

<ImageReveal 
  src="/image.jpg" 
  alt="Descripción"
  revealType="blur"
/>
```

**Props:**
- `revealType`: "blur" | "slide" | "scale" | "mask" (default: "blur")
- `threshold`: Número (default: 0.2)
- `once`: Boolean (default: true)
- Todas las props estándar de `<img>`

### 5. CursorFollower
Cursor personalizado que sigue el mouse (ya integrado en App.tsx).

```tsx
import { CursorFollower } from "@/components/CursorFollower";

<CursorFollower 
  size={32} 
  color="rgba(0, 174, 192, 0.3)"
  opacity={0.5}
/>
```

**Props:**
- `size`: Número (default: 32) - Tamaño en píxeles
- `color`: String (default: "rgba(0, 174, 192, 0.3)")
- `opacity`: Número (default: 0.5)
- `enabled`: Boolean (default: true)

## Hooks

### useParallax
Hook para efectos de parallax scroll.

```tsx
import { useParallax } from "@/hooks/use-parallax";

const { ref, style } = useParallax({
  speed: 0.5,
  direction: "up",
  offset: 0,
  enabled: true
});

<div ref={ref} style={style}>Contenido con parallax</div>
```

**Opciones:**
- `speed`: Número (default: 0.5) - Velocidad del parallax
- `direction`: "up" | "down" (default: "up")
- `offset`: Número (default: 0) - Offset inicial
- `enabled`: Boolean (default: true)

## Animaciones CSS Disponibles

### Tailwind Classes
- `animate-text-shimmer` - Efecto shimmer en texto
- `animate-glow-pulse` - Pulso de brillo
- `animate-slide-up-fade` - Deslizar hacia arriba con fade
- `animate-scale-in` - Escalar desde pequeño
- `animate-rotate-in` - Rotar al aparecer
- `animate-shimmer-sweep` - Barrido de brillo

### Utilidades CSS
- `.glow-orb` - Orbe brillante animado
- `.glow-orb-ring` - Anillo brillante animado

## Mejores Prácticas

1. **Respetar prefers-reduced-motion**: Todos los componentes verifican automáticamente esta preferencia
2. **Usar delays escalonados**: Para crear efectos fluidos en listas
3. **Combinar animaciones**: Usar Tilt3D + ImageReveal para efectos más ricos
4. **Optimizar performance**: Las animaciones usan `transform` y `opacity` para mejor rendimiento
5. **Thresholds apropiados**: Ajustar según el tamaño del elemento

## Ejemplos de Uso

### Hero Section con TextReveal
```tsx
<TextReveal direction="up" delay={0}>
  <h1 className="text-6xl">Bienvenido</h1>
</TextReveal>
<TextReveal direction="up" delay={200}>
  <p className="text-xl">Descubre Delicias</p>
</TextReveal>
```

### Grid de Cards con Stagger
```tsx
<StaggerContainer staggerDelay={100} animation="scale">
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Tilt3D>
        <Card>{item.content}</Card>
      </Tilt3D>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Imagen con Parallax
```tsx
const { ref, style } = useParallax({ speed: 0.3 });
<img ref={ref} style={style} src="/hero.jpg" />
```


