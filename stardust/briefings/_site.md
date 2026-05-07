<!-- stardust:provenance
  generated_by: briefings
  date: 2026-04-28
  synthesized_inputs:
    - social platforms — assistant-picked: RSS · Bluesky · GitHub · LinkedIn. Twitter/X and Mastodon dropped (former: tonal mismatch with the brand's craft register; latter: AEM-community presence too small to earn the lockup slot).
    - per-platform handles — left as [TBD] for designer
  note: site-level briefing approved by designer 2026-04-28 with author name (Chris Millar) and tagline (Thoughts on content management.) supplied. Designer authorized the assistant to fill remaining TBDs at briefings → prototype handoff.
-->
---
site: Experience Managed
pages: [homepage, article, about, category]
---

# Purpose

A personal publication on content management — Adobe Experience Manager and
Edge Delivery in particular — written by Chris Millar, an Adobe employee, with
an independent voice. Pieces exist because there's something the writer wanted
in writing.

# Navigation

Primary (header, sticky):
- Wordmark *Experience Managed.* — returns to /
- Opinion · /opinion
- Code patterns · /code-patterns
- Field notes · /field-notes
- About · /about
- RSS icon · /feed.xml (right-aligned, classy lockup)
- Social icons · classy lockup, right-aligned · **Bluesky · GitHub · LinkedIn** (per-platform handles [TBD], filled at launch)

Footer:
- Three-column layout
  - Column 1: pillars (Opinion · Code patterns · Field notes)
  - Column 2: about · contact
  - Column 3: RSS · social icons
- Bottom row: © 2026 Chris Millar · *Experience Managed.* wordmark with period-disc

# Shared Messaging

Tagline: **Thoughts on content management.**

Voice anchors carry from `stardust/brand-profile.json` (authoritative-yet-curious · plainspoken · opinionated · crafted). The site never repeats the tagline verbatim inside articles — it's a chrome element, not body copy.

# Content Hierarchy

1. **Article** — where 90% of reader time lives; the workhorse template
2. **Homepage** — front door, hub; routes readers into articles
3. **Category** — pillar/tag landing; one template, parameterized
4. **About** — read once, referenced from end-of-article block

# Content Reuse Map

| Fragment | Source Page | Reused On | Purpose |
|----------|-------------|-----------|---------|
| article-card (atmospheric hero photo · pillar eyebrow · headline · dek · date) | /article/{slug} | / · /opinion · /code-patterns · /field-notes · /tag/{tag} | Drive readers from feed/landings into articles |
| pillar-trio (3-card pillar overview with one-paragraph definition each) | _site (defined here) | / | Orient first-time readers; route to category landings |
| about-callout (one-paragraph "who writes this", links to /about) | /about | /article/{slug} (end-of-article block) · / (footer area, subtle) | Build trust quickly; route to about without a separate subscribe nag |
| social-lockup (RSS + chosen social icons, classy) | _site | header (right) · footer (column 3) · /article/{slug} (end-of-article share row) | Distribution surface; uniform across the site |

Rules:
- The homepage pulls article-cards from every pillar — mixed feed, recency-ordered, no manual curation.
- Category pages render 12–20 article-cards filtered by pillar OR tag, with a one-paragraph pillar/tag definition at top.
- Article pages end with a "More from this pillar" reused row (3 article-cards from the same pillar) followed by an about-callout.
- Reused sections always link back to source. No dead-end excerpts.
- Social-lockup never includes share-buttons in the body of an article — share is end-of-article only.
