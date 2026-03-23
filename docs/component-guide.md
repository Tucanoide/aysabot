# Component Guide

## Componentes Principales

### 1. `Hero`
- **Ruta**: `src/components/Hero.tsx`
- **Propósito**: Sección principal de impacto visual.
- **Estándares**: Utiliza degradados de marca y tipografía `Manrope`.
- **Responsive**: Se adapta de 1 a 2 columnas en dispositivos móviles.

### 2. `FloatingBotIcon`
- **Ruta**: `src/components/FloatingBotIcon.tsx`
- **Propósito**: Botón flotante para interactuar con el asistente de IA.
- **Características**:
  - Ventana de chat desplegable.
  - Soporte para avatares personalizados.
  - Manejo de estados de carga (Loader2).
- **Personalización**: La imagen del bot se encuentra en `public/bot-avatar.png`. El usuario ha proporcionado una nueva versión 3D.

## Guía de Estilos (Tailwind v4)
El proyecto utiliza Tailwind CSS v4 con variables CSS definidas en `src/app/globals.css`.
- Colores: `aysa-blue`, `aysa-orange`, `aysa-green`.
- Fuentes: `font-heading` (Manrope), `font-sans` (Inter).
