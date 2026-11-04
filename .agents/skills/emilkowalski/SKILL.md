---
name: emilkowalski
description: >-
  Use this skill when designing, building, or refining UI animations, micro-interactions,
  spring physics, gestural interfaces, smooth transitions, and high-performance frontend motion
  inspired by Emil Kowalski's design engineering principles (Animations on the Web, Sonner, Vaul).
---

# Emil Kowalski — Design Engineering & UI Motion Principles

Master reference for crafting world-class, fluid, tactile UI interactions and physics-based animations.

---

## 1. Core Philosophy of Motion

1. **Functional, Not Decorative**: Motion must communicate spatial continuity, state changes, or direct manipulation. If an animation delays the user or draws attention to itself without purpose, remove it.
2. **Physics Over Fixed Easings**: Real-world objects have mass, tension, and inertia. Favor spring physics or custom ease-out curves (`cubic-bezier(0.16, 1, 0.3, 1)`) over linear or generic `ease-in-out`.
3. **Immediacy on Interaction**: Interactive triggers (clicks, taps) must produce instant visual feedback (<16ms). Delays make interfaces feel sluggish, even if the subsequent animation is smooth.

---

## 2. The Golden Performance Rules (60fps / 120fps)

- **Only Animate Composite Properties**:
  - `transform` (`translate3d`, `scale`, `rotate`)
  - `opacity`
  - `filter` (use sparingly)
- **NEVER Animate Layout-Triggering Properties**:
  - `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, `padding`, `border-width`.
  - Animating these forces browser layout recalculation and paint on every frame, causing stutter.
- **Hardware Acceleration**:
  - Use `will-change: transform` sparingly (only during active animation) or `transform: translateZ(0)` to promote elements to their own compositor layer.

---

## 3. Essential Motion Patterns & Code Snippets

### A. The Tactile Button Press
Give clickable elements physical weight with an instantaneous scale-down on `:active`:
```css
.btn-tactile {
  transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1), background-color 0.2s ease;
}
.btn-tactile:hover {
  transform: translateY(-1px);
}
.btn-tactile:active {
  transform: scale(0.97);
  transition-duration: 0.05s; /* Instant snap on down-press */
}
```

### B. Smooth Height / Expandable Accordions (Pure CSS Grid)
Avoid JavaScript height calculations or jerky `max-height` hacks:
```css
.accordion-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.accordion-wrapper.is-open {
  grid-template-rows: 1fr;
}
.accordion-content {
  overflow: hidden;
}
```

### C. Choreographed Staggered Entrances
When revealing lists or grids, stagger items by 40ms to 70ms:
```css
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stagger-item {
  animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) backwards;
  animation-delay: calc(var(--index, 0) * 50ms);
}
```

### D. Natural Spring Easing Curve (CSS Equivalent)
When spring libraries (Framer Motion) are not available, use the benchmark editorial spring curve:
```css
:root {
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.15); /* Subtle overshoot */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);           /* Elegant luxury deceleration */
  --ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

## 4. Micro-Interactions Checklist

- [ ] **Hover Enter vs Exit**: Make hover enter snappy (150ms-200ms) and exit slightly slower (250ms-300ms) with a natural deceleration curve.
- [ ] **Origin Awareness**: Modals and dropdowns should scale up from their triggering anchor point (`transform-origin`).
- [ ] **Reduced Motion Support**: Always respect user accessibility preferences:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
  ```\n