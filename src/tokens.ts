/**
Design tokens for the HQ design system.

This module is the single source of truth for color, type, spacing,
radii, shadows, and breakpoints, shared by the component library and
any consuming app (e.g. the portfolio site's tailwind.config).

It must stay dependency-free (no React, no styled-components) so it
can be imported from build-time config files via "@hq525/hq-ui/tokens".

See DESIGN.md at the repo root for usage rules and rationale.
**/

// Raw palettes. Steps 100-400 are tints of the 500 base towards white,
// 600-900 are shades towards black, in even 20% increments.
const PALETTES = {
  green: {
    100: "#E9F2EE",
    200: "#D2E6DD",
    300: "#BCD9CB",
    400: "#A5CDBA",
    500: "#8FC0A9",
    600: "#729A87",
    700: "#567365",
    800: "#394D44",
    900: "#1D2622",
  },
  greenDark: {
    100: "#DBE5DE",
    200: "#B7CBBD",
    300: "#92B09B",
    400: "#6E967A",
    500: "#4A7C59",
    600: "#3B6347",
    700: "#2C4A35",
    800: "#1E3224",
    900: "#0F1912",
  },
  greenLight: {
    100: "#F4F7F1",
    200: "#E9EEE3",
    300: "#DEE6D5",
    400: "#D3DDC7",
    500: "#C8D5B9",
    600: "#A0AA94",
    700: "#78806F",
    800: "#50554A",
    900: "#282B25",
  },
  teal: {
    100: "#E1EFEE",
    200: "#C3DFDD",
    300: "#A4D0CD",
    400: "#86C0BC",
    500: "#68B0AB",
    600: "#538D89",
    700: "#3E6A67",
    800: "#2A4644",
    900: "#152322",
  },
  beige: {
    100: "#FEFDF8",
    200: "#FDFAF1",
    300: "#FCF8EB",
    400: "#FBF5E4",
    500: "#FAF3DD",
    600: "#C8C2B1",
    700: "#969285",
    800: "#646158",
    900: "#32312C",
  },
  // Warm accent. Base sampled from the one warm object in the site's
  // imagery (the sweater stripe in the profile photo).
  persimmon: {
    100: "#F7DDD5",
    200: "#F0BAAB",
    300: "#E89880",
    400: "#E17556",
    500: "#D9532C",
    600: "#AE4223",
    700: "#82321A",
    800: "#572112",
    900: "#2B1109",
  },
} as const;

// Semantic roles. Use these in components and app code; reach into
// PALETTES only when defining new roles.
// Contrast (WCAG): ink/sage 10.1, inkMuted/sage 5.9, white/primary 4.9,
// white/danger 5.8. accentInk (7-step) is the only accent step that
// passes AA as body text on the sage background - accent 500/600 are
// for graphics and large text only.
const COLORS = {
  light: {
    background: PALETTES.greenLight[500],
    surface: PALETTES.green[100],
    ink: PALETTES.green[900],
    inkMuted: PALETTES.green[800],
    primary: PALETTES.greenDark[500],
    primaryHover: PALETTES.greenDark[600],
    onPrimary: "#FFFFFF",
    accent: PALETTES.persimmon[500],
    accentInk: PALETTES.persimmon[700],
    danger: PALETTES.persimmon[600],
    dangerHover: PALETTES.persimmon[700],
    onDanger: "#FFFFFF",
  },
  dark: {
    background: PALETTES.greenDark[900],
    surface: PALETTES.greenDark[800],
    ink: PALETTES.greenDark[100],
    inkMuted: PALETTES.green[300],
    primary: PALETTES.green[500],
    primaryHover: PALETTES.green[400],
    onPrimary: PALETTES.greenDark[900],
    accent: PALETTES.persimmon[400],
    accentInk: PALETTES.persimmon[300],
    danger: PALETTES.persimmon[400],
    dangerHover: PALETTES.persimmon[300],
    onDanger: PALETTES.greenDark[900],
  },
} as const;

// Viewport breakpoints in px. The Grid's xs settings apply below md.
const BREAKPOINTS = {
  md: 600, // portrait tablets
  lg: 768, // landscape tablets
  xl: 992, // laptops
  xxl: 1200, // desktops
} as const;

const TYPOGRAPHY = {
  // Fraunces carries the display voice; Inter stays quiet for body text.
  fontDisplay: "'Fraunces', Georgia, 'Times New Roman', serif",
  fontBody: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  scale: {
    display: {
      fontSize: "clamp(2.5rem, 6vw, 4rem)",
      lineHeight: 1.1,
      fontWeight: 600,
    },
    h1: { fontSize: "2.25rem", lineHeight: 1.2, fontWeight: 600 },
    h2: { fontSize: "1.75rem", lineHeight: 1.25, fontWeight: 600 },
    h3: { fontSize: "1.375rem", lineHeight: 1.3, fontWeight: 600 },
    body: { fontSize: "1rem", lineHeight: 1.6, fontWeight: 400 },
    small: { fontSize: "0.875rem", lineHeight: 1.5, fontWeight: 400 },
    caption: { fontSize: "0.75rem", lineHeight: 1.4, fontWeight: 500 },
  },
} as const;

// Layout rhythm builds on a 4px base unit (Tailwind's default scale).
const SPACING = {
  unit: 4,
  section: "6rem",
} as const;

// Rounded, pebble-like corners echo the site's circle motif.
const RADII = {
  sm: "6px",
  md: "12px",
  lg: "20px",
  full: "9999px",
} as const;

// Shadows are tinted with ink green, never pure black.
const SHADOWS = {
  sm: "0 1px 2px rgba(29, 38, 34, 0.10)",
  md: "0 4px 12px rgba(29, 38, 34, 0.12)",
  lg: "0 12px 32px rgba(29, 38, 34, 0.16)",
} as const;

export { PALETTES, COLORS, BREAKPOINTS, TYPOGRAPHY, SPACING, RADII, SHADOWS };
