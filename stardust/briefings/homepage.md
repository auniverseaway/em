<!-- stardust:provenance
  generated_by: briefings
  date: 2026-04-28
  synthesized_inputs:
    - hero copy candidates — drawn from approved tagline ("Thoughts on content management.") and brand voice
    - pillar definitions — lifted from brand-profile.json contentPillars[]
    - imagery direction — synthesized from brand-profile.json photography rules
  note: homepage briefing approved-in-batch with all four briefings.
-->
---
page: Homepage
path: /
type: landing
---

# Intent

Front door for *Experience Managed*. Establishes the publication's voice on first scroll. Routes readers into articles and into pillars. The homepage is a hub — it pulls article-cards from every pillar and shows the writer's recent work without manual curation.

# Audience

Three arrival contexts:

- **First-time readers from social or search** — see the wordmark, decide in 4 seconds whether to stay. Need: clear positioning + a piece that proves the voice.
- **Returning readers** — already trust the writer. Want: what's new, recency-ordered.
- **Community readers (AEM/EDS)** — checking what's been written; using this as an index.

All three skim before they read. The homepage must respect that and reward it.

# Key Messages

1. This is a personal publication on content management — written by Chris Millar from inside Adobe with an independent voice.
2. Three pillars: Opinion · Code patterns · Field notes. Pieces appear when there's something to say.
3. Read the latest, browse a pillar, or come back later — RSS works.

# Calls to Action

- Primary: Read the latest piece (article-card #1 in the feed)
- Secondary: Browse a pillar (the pillar-trio component)
- Tertiary (chrome): RSS · social-lockup (header right + footer)

# Tone

Editorial confidence on first scroll. Generous whitespace. The wordmark sets the register; the photography does the warmth-work. No marketing-collateral language anywhere on this page — no "subscribe to my newsletter today!", no value-proposition bar, no testimonial carousel.

# Copy

## Hero block
- Eyebrow: `EXPERIENCE MANAGED · ESTABLISHED 2026` (JetBrains Mono small caps, Pine)
- Headline: *Thoughts on content management.* (IvyOra Display 400 Regular, italic accent permitted on "Thoughts" if visually warranted)
- Dek (IvyOra Display 300 Light, max-width 720px):
  *A working publication on Adobe Experience Manager and Edge Delivery — written from inside Adobe, with an independent voice. Pieces exist because there's something I wanted in writing.*
- Byline cluster (IvyEpic Variable 14px, Pine):
  `By Chris Millar · {N} pieces · Updated {date}`

## Latest feed
- Eyebrow: `LATEST` (JetBrains Mono small caps, Pine)
- Section heading: omitted — let the eyebrow + cards speak
- Card grid: article-card, mixed pillars, recency-ordered. 6 cards on first load; "Load more" Underline-tertiary CTA paginates in place (no separate `/archive` route — keeping the IA tight).

## Pillar trio (orient first-time readers)
- Eyebrow: `THE PILLARS`
- Section heading: *Three things I write about.* (IvyOra Display 400 Regular)
- Three pillar cards, side-by-side on desktop, stacked on tablet:

  **Opinion** — *To position.*
  Long-form positions on industry direction, platform decisions, the state of CMS work. The thought-leadership read for leaders; the position-piece for engineers who want a take.
  → `Browse Opinion` (Ghost button → /opinion)

  **Code patterns** — *To equip.*
  Short, reusable techniques for AEM and Edge Delivery. Copy-paste-friendly, no framework required.
  → `Browse Code patterns` (Ghost button → /code-patterns)

  **Field notes** — *To witness.*
  Short observations from real client work. A logbook register: specific, dated, lower stakes.
  → `Browse Field notes` (Ghost button → /field-notes)

## About-callout (subtle, footer-adjacent)
- Eyebrow: `ABOUT THE WRITER`
- Body (IvyEpic Variable 16px, max-width 62ch):
  *Chris Millar writes Experience Managed. He works at Adobe; this blog is independent of Adobe. He writes when there's something he wants in writing — and is loyal to humans making things, AI-assisted included.*
- CTA: `Read the about page → /about`

## Footer
- Per `_site.md` Navigation > Footer.

# Imagery

## Hero
- Subject: full-bleed atmospheric forest photo. The strongest, most cinematic shot in the library — this is the publication's first impression.
- Style: photographic, large abstract, motion-blurred or out-of-focus, dramatic light through canopy or fog through trees.
- Composition: hero photo runs full-width behind the headline; type sits over a Stone scrim at 90% opacity (left-aligned, max-width 880px).
- Color cast: green / shadow; cool, never warm.
- Source hint: designer-supplied (or commissioned). Replace placeholder gradient on launch.
- Alt text: [TBD — depends on chosen image]

## Latest feed cards
- Each article-card uses its own article hero photo at 16:9, treated identically across the grid (same crop logic, same overlay treatment when title is over photo).

## Pillar trio
- No imagery. Trio is type-led: pillar name in IvyOra Display 500 Medium + one-paragraph definition. Section number (01 · 02 · 03) in IvyOra Display 100wt (Thin) at 96px, Canopy color.

## About-callout
- No imagery. Type-led; subtle so it doesn't compete with the feed.
