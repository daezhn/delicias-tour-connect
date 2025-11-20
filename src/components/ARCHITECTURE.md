# Component Architecture & Migration Plan

The `src/components` directory has grown significantly. To improve maintainability, we propose the following structure:

## Proposed Structure

```
src/components/
├── ui/               # Base UI components (Buttons, Cards, Inputs - already exists)
├── layout/           # Structural components (Nav, Footer, SEO, ErrorBoundary)
├── features/         # Feature-specific components
│   ├── home/         # Hero, WelcomeDelicias, Events
│   ├── tours/        # ToursExplorer, TourFilters, TourMap
│   ├── weather/      # ClimaTips specific components
│   └── shared/       # Reusable feature blocks (ContactCard, FaqSection)
└── animations/       # Animation wrappers (MotionReveal, TextReveal, Tilt3D)
```

## Migration Steps

1.  **Move Layout Components**:
    *   `Navigation.tsx`, `Footer.tsx`, `SEO.tsx`, `ErrorBoundary.tsx` -> `src/components/layout/`
2.  **Group Feature Components**:
    *   `Hero.tsx`, `HeroTile.tsx` -> `src/components/features/home/`
    *   `ToursExplorer.tsx` -> `src/components/features/tours/`
3.  **Centralize Animations**:
    *   `MotionReveal.tsx`, `TextReveal.tsx`, `Reveal.tsx` -> `src/components/animations/`

## Guidelines

*   **UI Components**: Should stay pure and theme-agnostic.
*   **Feature Components**: Can contain business logic and data fetching.
*   **Layout**: Global wrappers.

> **Note:** When moving files, ensure all import paths (`@/components/...`) are updated in the consuming pages.

