# HQ Design System

One source of truth for the visual language shared by this component
library and the portfolio site. All values live in code at
[`src/tokens.ts`](src/tokens.ts) and ship as `@hq525/hq-ui/tokens` — a
dependency-free module safe to import from build-time config
(e.g. `tailwind.config.ts`).

## Identity

Calm, natural, personal. The world of the design is the sage-green
field the site already lives on: soft greens, warm paper tones, and
round, pebble-like forms. Exactly one warm accent exists — persimmon,
sampled from the sweater stripe in the profile photo — and it is spent
sparingly: small dots, links, and destructive actions, never large
surfaces.

## Color

### Palettes

Six 9-step scales. Steps 100–400 are tints of the 500 base toward
white, 600–900 shades toward black, in even 20% increments.

| Scale | 500 base | Character |
|---|---|---|
| `green` | `#8FC0A9` | The core brand green; 900 is the ink |
| `greenDark` | `#4A7C59` | Fern; interactive/primary range, dark surfaces |
| `greenLight` | `#C8D5B9` | Sage; the page field |
| `teal` | `#68B0AB` | Cool support for illustration/graphics |
| `beige` | `#FAF3DD` | Warm paper; alternate light surfaces |
| `persimmon` | `#D9532C` | The single warm accent + danger range |

### Semantic roles (use these, not raw steps)

`COLORS.light` / `COLORS.dark`:

| Role | Light | Dark | Use |
|---|---|---|---|
| `background` | greenLight-500 | greenDark-900 | Page field |
| `surface` | green-100 | greenDark-800 | Cards, panels |
| `ink` | green-900 | greenDark-100 | Headings, body |
| `inkMuted` | green-800 | green-300 | Secondary text |
| `primary` / `primaryHover` | greenDark-500/600 | green-500/400 | Buttons, links |
| `onPrimary` | white | greenDark-900 | Text on primary |
| `accent` | persimmon-500 | persimmon-400 | Dots, highlights, graphics |
| `accentInk` | persimmon-700 | persimmon-300 | Accent as body text |
| `danger` / `dangerHover` | persimmon-600/700 | persimmon-400/300 | Destructive actions |

### Contrast rules (WCAG, verified)

- `ink` on `background` 10.1:1, `inkMuted` on `background` 5.9:1 — both AA for body text.
- `onPrimary` on `primary` 4.9:1, `onDanger` on `danger` 5.8:1 — AA at button sizes.
- **`accent` (500/600) is never body text on the sage background** (3.8:1) — use `accentInk` (5.7:1) for accent-colored text; 500/600 are for graphics and large display type only.

## Typography

| Role | Face | Token |
|---|---|---|
| Display (h1–h3, hero) | Fraunces — soft, slightly wonky serif; organic like the circle motif | `TYPOGRAPHY.fontDisplay` |
| Body | Inter — quiet counterpart, high legibility | `TYPOGRAPHY.fontBody` |
| Code / labels | JetBrains Mono | `TYPOGRAPHY.fontMono` |

Scale in `TYPOGRAPHY.scale`: `display` (fluid clamp 40–64px), `h1` 36,
`h2` 28, `h3` 22, `body` 16/1.6, `small` 14, `caption` 12. Display is
for one element per page; don't stack display-size type.

## Space, shape, elevation

- **Spacing** — 4px base unit (Tailwind's default scale); `SPACING.section` (6rem) between page sections.
- **Radii** — `RADII`: sm 6 / md 12 / lg 20 / full. Round generously; sharp corners are foreign to this system.
- **Shadows** — `SHADOWS` sm/md/lg, tinted with ink green (`rgba(29,38,34,…)`), never pure black.

## Breakpoints

`BREAKPOINTS`: md 600 / lg 768 / xl 992 / xxl 1200 (px). The Grid's
`xs` settings apply below `md`. The site's Tailwind `screens` must be
derived from these — never restated by hand.

## Signature motif

Overlapping circles ("pebbles") — the cluster behind the profile
photo. Rules: circles come in threes, sized large/medium/small; at
most one is `accent`-colored and it is always the smallest. The motif
can recur at small scale (list markers, favicon, section dividers) but
never more than once per viewport.

## Using the tokens

```ts
// tailwind.config.ts (site)
import { PALETTES, COLORS, BREAKPOINTS } from "@hq525/hq-ui/tokens";
```

```ts
// components (library)
import { COLORS, BREAKPOINTS } from "../tokens";
```

Rules of engagement:

1. Components and app code use **semantic roles**; raw palette steps are for defining new roles only.
2. Never hardcode a hex, px breakpoint, or shadow — if a needed token doesn't exist, add it here first.
3. Check contrast for any new text/background pair before adding it (see script pattern in the repo history; AA minimum).
4. Dark tokens exist and are AA-verified; a UI toggle can adopt them without new color decisions.
