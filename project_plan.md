# Tierra Dorada Hub - Master Plan

## 1. Arquitectura del Sistema
- **Tipo**: Landing Page / Router Central.
- **Routing**: `react-router-dom` para cliente, `vercel.json` para rewrites de servidor.
- **Estética**: "Nave Madre Celestial" (Celeste, Blanco Marfil, Dorado). **REGLA**: Fondos claros, alto contraste.
- **Design Pattern**: "Modo Pantalla Completa" (Overlay total, sin marcos).
- **Mobile-First**: Prioridad absoluta en visualización móvil.

## 2. Stack Tecnológico
- **Core**: React 18+ (Vite), TypeScript.
- **Styling**: Tailwind CSS v3 + 21st.dev components.
- **Animation**: Framer Motion.
- **Deployment**: Vercel.

## 3. Pasos de Implementación (Checklist)

### Fase 1: Setup & Marca (LOKI-MODE)
- [x] Inicializar Proyecto Vite (TypeScript)
- [/] Actualizar Tailwind Config (Paleta Marfil y Oro Real)
- [ ] Implementar Base Layout "Pantalla Completa"

### Fase 2: Routing Core (DEVOPS-ARCHITECT)
- [ ] Actualizar `vercel.json` para apuntar `/abundancia-masterclass` a `masterclass-abundancia.vercel.app`
- [ ] Configurar Routes en `App.tsx` para `/nodriza` y `/abundancia`

### Fase 3: UI/UX Implementation (UI-UX-PRO-MAX)
- [ ] **Lienzo**: Refinar `GridBackground.tsx` para fondos claros.
- [ ] **Componentes**:
    - [ ] Actualizar `PortalCard.tsx` (Glassmorphism + Bordes Dorados).
    - [ ] `MotherShipTerminal.tsx`: Contenedor principal sin márgenes.
- [ ] **Home Page**: Ensamblaje final de la Nave Madre.

### Fase 4: Integración & Pulido
- [ ] Verificar móviles (Breakout layout).
- [ ] SEO & Meta tags.

