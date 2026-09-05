/**
 * Single source of truth for the NASA-inspired palette.
 * Mirrored in the `@theme` block in app/globals.css (Tailwind v4 is CSS-config,
 * so the hex values are duplicated there — keep both in sync) and consumed
 * directly here by canvas-based components (e.g. Starfield) that can't read
 * Tailwind classes.
 */
export const themeColors = {
  spaceBlack: "#0A0E17",
  space900: "#0A0E17",
  space800: "#0D1526",
  space700: "#121D33",
  space600: "#17273F",
  space500: "#1E3252",
  nasaBlue: "#0B3D91",
  nasaRed: "#FC3D21",
  starWhite: "#F5F7FA",
  starDim: "#8FA0BD",
} as const;
