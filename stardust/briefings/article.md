<!-- stardust:provenance
  generated_by: briefings
  date: 2026-04-28
  synthesized_inputs:
    - example article copy — illustrative only; real article copy is authored per piece
    - imagery direction — synthesized from brand-profile.json photography rules
  note: article is a template, not a single page. Per-article copy is authored at publish-time, not in this briefing. The structural copy below (eyebrows, share row labels, end-of-article callouts) IS authoritative for the template.
-->
---
page: Article
path: /article/{slug}
type: blog
---

# Intent

The container where reader time actually happens. Long-form, code-friendly, photography-led. The chrome stays out of the way; the piece is the point. This template hosts every article regardless of pillar — voice and density adapt to the pillar, but the structural template is one.

# Audience

Three overlapping reader groups arrive here, almost always from a direct link (social, search, RSS):

- **Engineers (IC)** — at AEM/EDS shops or considering one. Want code that works, opinions that are earned, links to deeper reading. Stay 8–20 minutes per piece.
- **Managers and leaders** — practice leads, principal engineers, CTOs. Skim Opinion pieces for thought-leadership; surface relevant pieces to their teams.
- **AEM/EDS practitioners and adjacent CMS folks** — community readers; competitive Adobe-watchers; AI-curious creators in content tooling.

# Key Messages

1. The piece is the point. Layout, chrome, and navigation must defer to the writing.
2. The writer is a real person with a position. Articles are positions, not stenography.
3. Code is first-class content; photography is atmospheric production value, not illustration.

# Calls to Action

- Primary: Read the piece (i.e., scroll). No mid-article popups, no exit-intent modals, no in-line subscribe nags.
- End-of-article (in order):
  1. Share row — RSS + social icons (classy lockup; no per-platform share count)
  2. "More from {pillar}" — three reused article-cards from the same pillar
  3. About-callout — one paragraph on Chris, link to /about

# Tone

Voice carries from `brand-profile.json`. Per-pillar adjustments:

- **Opinion**: long-form editorial. Take a position in the lede. 1200–2400 words.
- **Code patterns**: utilitarian. Code is the spine; prose connects the moves. 600–1200 words.
- **Field notes**: tight, observational. A logbook register: specific, dated, lower stakes. 300–800 words.

Italic IvyOra Display accents capped at one word per headline maximum, on positioning words only (per `.impeccable.md` rule).

# Copy

## Hero block (per article — example shown)
- Eyebrow: pillar name in JetBrains Mono small caps · publish date in same line, separated by `·`. Example: `FIELD NOTES · 28 APR 2026`
- Headline: per-article (IvyOra Display 400 Regular, italic accent on one positioning word allowed). Example: *The wheel **is already** rolling.*
- Dek: 1–2 sentences (IvyOra Display 300 Light) summarizing the piece without spoiling. Example: *Three places in EDS where pulling in a framework is the wrong instinct — and what to write instead.*
- Author byline: `By Chris Millar` (IvyEpic Variable 500, 14px, Pine color)

## Body
- Per-article. Always IvyEpic Variable Regular 18px / line-height 1.6 / max-width 62ch.
- Pull-quotes: IvyOra Display 300wt italic at 28–32px on a Canopy left rule.
- Inline code: JetBrains Mono Regular 0.9em, Loam background swatch, 2px horizontal padding, no border-radius.

## Section breaks
- 1px Canopy fine-rule between major sections (the brand motif). At most every ~600 words.

## End-of-article share row
- Eyebrow: `SHARE THIS PIECE` (JetBrains Mono small caps, Pine)
- Icons: RSS · social-lockup (designer-supplied platforms)

## End-of-article "More from this pillar"
- Eyebrow: `MORE {PILLAR}` (e.g., `MORE FIELD NOTES`)
- Three article-cards, recency-ordered, excluding the current piece.
- CTA at end of row: `Browse all {pillar}` linking to /{pillar}

## End-of-article about-callout
- Eyebrow: `ABOUT THE WRITER`
- Body (IvyEpic Variable 16px, max-width 62ch): *Chris Millar writes Experience Managed. He works at Adobe; this blog is independent of Adobe. He writes when there's something he wants in writing.*
- CTA: `Read the about page → /about` (Underline tertiary button)

# Imagery

## Hero photo
- Subject: atmospheric forest imagery — canopy · leaf-shadow · bark · river-surface · fog through trees · stone · lichen · moss · rain on leaves. **Subject DNA per pillar:**
  - Opinion: dramatic — fog through trees, light through canopy, weather
  - Code patterns: structural — bark texture, lichen, stone surface, root systems
  - Field notes: incidental — moss on a rock, leaf-shadow on a path, dew
- Style: photographic. Out-of-focus / motion-blurred / macro. Never sharp documentary.
- Composition: full-bleed at 16:9 minimum height; type sits over a Stone or Trunk overlay at 80–92% opacity.
- Color cast: green / earth / shadow. Never warm-orange / sunset / golden-hour.
- Source hint: per-article. Designer-supplied or commissioned. Generated images allowed only if they don't read as AI-generated.
- Alt text: per-article (must be authored, never `[TBD]`-stamped on publish).

## Inline figures
- Code-block "screenshot" replacements use real code via `<pre>`, not images. Screenshots only when the visual itself is the subject (a UI behavior, a bug, a diff). Screenshots are figures, not heroes.
- Diagrams: hand-drawn or sketch-style preferred over auto-generated SaaS-isometric.
