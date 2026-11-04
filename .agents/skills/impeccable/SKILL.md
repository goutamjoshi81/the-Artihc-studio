---
name: impeccable
description: >-
  Use this skill when evaluating, polishing, and perfecting frontend craft, visual precision,
  component execution, layout alignment, typography detailing, edge-case resilience, and elite engineering quality.
---

# Impeccable — Craft, Polish & Frontend Execution Standards

The benchmark standard for executing software interfaces with flawless precision, structural integrity, and obsessive attention to detail.

---

## 1. The Impeccable Philosophy

1. **Zero Rough Edges**: No unhandled empty states, no jarring layout shifts, no clipped text, no misaligned baselines, no awkward breaks.
2. **Obsessive Optical Precision**: Mathematics gives a baseline, but the human eye is the final arbiter. Icons next to text must be optically aligned with cap-height, not bounding boxes.
3. **Complete State Coverage**: A component is only complete when all 8 states are deliberately designed:
   `default` • `hover` • `active` • `focus-visible` • `disabled` • `loading` • `empty` • `error`.

---

## 2. Craft & Execution Guidelines

### A. Typographic Excellence
- **Heading Balancing**: Always use `text-wrap: balance` on headlines and hero statements to prevent solitary single-word orphan lines:
  ```css
  h1, h2, h3, .heading-balanced {
    text-wrap: balance;
  }
  p {
    text-wrap: pretty; /* Prevents typographic orphans in modern browsers */
  }
  ```
- **Tabular Data & Numbers**: Always use tabular numbers for figures, prices, metrics, and timestamps so columns never jitter when values update:
  ```css
  .metric-value, .price, .data-cell {
    font-variant-numeric: tabular-nums;
  }
  ```
- **Font Smoothing**: Enforce crisp vector font rasterization:
  ```css
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ```

### B. Borders & Elevation Nuance
- **Never Use Harsh Black Borders**: Use translucent borders that blend with background surfaces:
  ```css
  /* Light mode */
  border: 1px solid rgba(0, 0, 0, 0.08);
  /* Dark mode */
  border: 1px solid rgba(255, 255, 255, 0.1);
  ```
- **Layered Diffuse Shadows**: Avoid single heavy shadows. Stack ambient diffuse shadows:
  ```css
  box-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(0, 0, 0, 0.06);
  ```

### C. Focus & Keyboard Accessibility
- **Never Remove Outlines Without Replacement**:
  ```css
  :focus:not(:focus-visible) {
    outline: none;
  }
  :focus-visible {
    outline: 2px solid var(--accent-color, #A3835B);
    outline-offset: 2px;
  }
  ```

### D. Zero Layout Shift (CLS)
- Always set explicit `aspect-ratio` or `width`/`height` on images and media containers.
- Render skeleton loaders that match the exact spatial geometry and padding of the incoming content.

---

## 3. The 10-Point Impeccable Audit Checklist

1. [ ] **Text wrapping**: Are titles balanced without orphaned words?
2. [ ] **Touch targets**: Are all interactive elements at least 44px × 44px on touch devices?
3. [ ] **Contrast ratio**: Does all copy meet WCAG AA standards (4.5:1 for body, 3:1 for large headings)?
4. [ ] **High-DPI / Retina**: Are images and graphics crisp at 2x and 3x device pixel ratios?
5. [ ] **Horizontal scroll**: Is `overflow-x: hidden` enforced on layout roots to eliminate accidental horizontal wiggle?
6. [ ] **Truncation**: Does long text truncate gracefully with ellipses (`text-overflow: ellipsis`) or wrap deliberately?
7. [ ] **Empty states**: Does every list/grid have an intentional, thoughtfully designed empty state illustration/copy?
8. [ ] **Loading states**: Are buttons disabled and visually indicating progress during asynchronous actions?
9. [ ] **Hover resets**: Do touch devices prevent sticky `:hover` states with `@media (hover: hover)`?
10. [ ] **Z-index hierarchy**: Is `z-index` strictly scaled (e.g., base: 1, sticky: 10, dropdown: 100, modal: 1000)?\n