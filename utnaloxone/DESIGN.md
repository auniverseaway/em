# Utah Naloxone — DESIGN

Aesthetic lane: warm humanist optimism. Reference points: the second-chance warmth of a
community campaign, the hopeful gradient language of a "new day," grounded by real human
photography. Not editorial-magazine, not tech-minimal, not clinical.

## Color — strategy: Full palette, gradient-as-voice

Authored in OKLCH. The sunrise gradient (amber -> coral -> violet) is the load-bearing
brand signature. Canvas is warm light; deep plum provides dramatic dark set-pieces.

| Role        | OKLCH                     | ~Hex     | Use |
|-------------|---------------------------|----------|-----|
| Amber       | oklch(0.81 0.125 73)      | #FFB347  | gradient start, warmth, highlights |
| Coral       | oklch(0.70 0.175 27)      | #FF6B5C  | **primary CTA**, gradient middle |
| Violet      | oklch(0.59 0.220 285)     | #7C5CFF  | gradient end, secondary accent, links |
| Cream       | oklch(0.975 0.012 75)     | #FFF6EE  | dominant page canvas |
| Ink (plum)  | oklch(0.22 0.030 305)     | #1F1A2B  | body text on light |
| Deep plum   | oklch(0.20 0.040 300)     | #1A1426  | dark section background |

Gradient: `linear-gradient(100deg, amber, coral 48%, violet)`. Never use gradient on
text (`background-clip: text` is banned). Gradient lives in backgrounds, the mesh hero,
buttons, arcs, and the logo mark.

## Typography

- **Display:** Bricolage Grotesque (700/800) — warm, slightly irregular humanist grotesque.
- **Body:** Hanken Grotesk (400/500/600) — friendly, highly legible, neutral but warm.
- Fluid `clamp()` scale, ratio >= 1.25. Body line length 65–72ch.
- Neither font is on the reflex-reject list.

## Logo / mark

Wordmark "Utah Naloxone" in Bricolage 800, paired with a **sunrise arc** mark: a half-disc
with the gradient cresting a horizon line. Reads as dawn + a rising shield of protection.

## Components

- **Buttons:** solid coral primary (cream text), plum-outline secondary. Pill radius. Hover lifts + warms.
- **Stat moments:** narrative, scroll-revealed counters — NOT a hero-metric card template.
- **Location cards:** `auto-fit minmax(280px,1fr)`; differentiated, not identical icon stacks.
- **Pill badges** for labels/kickers.

## Motion (showpiece)

Lenis smooth scroll site-wide. GSAP + ScrollTrigger:
- Animated mesh sunrise in the hero (CSS-driven, transform/opacity only).
- Scrub-linked stat counters in the dark "stakes" section.
- Pinned 3-step "how it works" sequence with an SVG path drawing on.
- Staggered section reveals, hover micro-interactions.
- Ease-out curves only (expo/quint). No bounce, no animating layout properties.
