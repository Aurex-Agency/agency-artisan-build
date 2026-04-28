## Direction: "Rooted & Modern"

A confident, hand-crafted feel built around the logo's tree-of-life, shield, and brand palette — vivid royal blue, leaf green, warm gold. Big editorial type, organic shapes, asymmetric grids, sticker-style badges, real personality. Mississippi warmth without going kitsch.

## Core design moves

**Typography overhaul**
- Display: **Fraunces** (variable serif with optical size + soft contrast) — the new headline voice. Replaces Playfair. Used HUGE for editorial moments.
- Sans: **Inter Tight** for UI, **Caveat** (handwritten script) for human accents (signatures, captions, "from your neighbors in Magee").
- Mixed-case headlines, generous tracking on eyebrows, drop-cap on About intro.

**Reusable visual language (new components)**
- `BrandTree.tsx` — SVG tree-of-life motif (4 variants: full, branch-only, root-only, badge). Becomes the recurring graphic backbone.
- `LeafBadge.tsx` — sticker/seal element ("Free to You", "Local since…", "Independent") with rotated mounting and gold rope border.
- `Marquee.tsx` — slow-scrolling carrier names ("Humana · Aetna · UnitedHealthcare · Cigna · Mutual of Omaha · Anthem · Wellcare") with leaf separators. A texture device.
- `SectionHeading.tsx` — eyebrow + huge serif headline + optional script-underline SVG accent.
- `TopoBackground.tsx` — subtle topographic-line SVG pattern (Mississippi hills) for section backgrounds at low opacity.
- `StatTile.tsx` — gold-bordered card with tree-leaf icon for stats.

**Color & texture**
- Add new tokens: `--cream` (warm off-white #FAF6EE) for break sections, `--ink` (deep blue-black for body text in dark sections), keep the existing royal/leaf/gold but introduce **leaf-green secondary** more boldly in section backgrounds and dividers (currently underused).
- Add `--gradient-canopy` (royal → deep navy with green tint), `--gradient-sun` (gold → amber).
- Subtle paper grain via SVG noise overlay on cream sections.
- Leaf scatter pattern for footer and CTA backgrounds.

**Motion**
- Subtle parallax on hero tree branches (intersection observer, no heavy lib).
- Reveal-on-scroll fade-up for section headings (existing `animate-hero-rise` extended).
- Hover micro-interactions: gold underline grows from left on links, leaf icon "rustles" (3° rotate) on coverage cards.

## Page-by-page revamp

### Home (`Index.tsx`)
- **Hero:** Two-column, asymmetric. Left: oversized Fraunces headline "Roots run deep in Simpson County." with handwritten script underline on "deep." Subhead, dual CTAs, 5-star strip with real-feeling reviewer initials. Right: a custom **illustrated tree-of-life canvas** with three glowing branches labeled Medicare / Health / Life on hover-friendly nodes (links to product pages). Topographic background at 4% opacity. Gold "Independent · Local · Free" rotating seal in upper-right.
- **Trust strip:** Marquee of carrier names on cream background, leaf separators.
- **Coverage:** Replace zig-zag with a "three branches" layout — three big editorial cards stacked on mobile, side-by-side on desktop, each with a custom branch illustration, big serif title, body, and outline link. No stock photos here.
- **The Difference:** Royal-blue panel with leaf-pattern overlay, big pull-quote in serif italic, 3 stat tiles using the new `StatTile` component, founder signature in Caveat ("— Cindy Woods, Founder"), small framed portrait off-axis.
- **Reviews:** Polaroid-style cards on cream, slightly rotated (-2°/+1°/-1°), gold tape-strip at top, handwritten place names. Star row stays.
- **Quick Quote:** Split panel — left becomes a deep-green panel with the tree-root motif and a script "let's talk →"; right keeps the form but redesigned with floating labels.

### Medicare (`Medicare.tsx`)
- **Hero:** Royal-blue with topographic overlay, a giant translucent "65" numeral as background art (Fraunces, 30vw), headline "Medicare, demystified." Gold ribbon badge: "AEP: Oct 15 – Dec 7."
- **Options section:** Reframe the four cards as a **field guide** — each card prefixed with `01 / 02 / 03 / 04`, leaf-icon glyphs, gold left-rule, hover lift.
- **Timeline:** Horizontal "growing branch" SVG that the three nodes sit on; nodes are leaf shapes filled gold.
- **Independent Advantage panel:** Dark canopy gradient, oversized circular gold seal that says "WORKS FOR YOU" rotating slowly. Checks list redesigned with leaf bullets.
- New CTASection variant with cream + tree-root background.

### Health Insurance (`HealthInsurance.tsx`)
- Hero gets a leaf-green tint accent and the tree motif on the right (replacing the photo) with a smaller portrait inset.
- Options become editorial pull-out cards with magazine-style numerals.
- Compare table redesigned: Wood column has gold highlight border + leaf check marks, captive column desaturated.
- Pull-quote moment with big serif italic and Caveat attribution.

### Life Insurance (`LifeInsurance.tsx`)
- Hero on canopy-gradient with the root system illustration ("what holds your family up").
- Three policy types as a vertical "tree" — trunk down the left, three branches extending right with content blocks.
- Mississippi-stat moment: huge "$9,000" Fraunces, body wraps around, framed family photo on cream.
- Closing CTA on cream with rooted tree silhouette.

### About (`About.tsx`)
- **Hero:** Magazine cover treatment. Left: serif headline "Built on a handshake. Grown by referral.", drop cap on the intro paragraph, founder signature (Caveat) and "Founder, Wood Insurance Agency" caption. Right: framed portrait with gold corners and a small rotated "Magee, MS · Est." sticker.
- **Three Promises:** Vertical timeline with leaf glyphs and big numerals; copy stays.
- **Office:** Two photos as Polaroids on cream with handwritten captions ("Come on in." / "The good chair.").
- **Map/contact card:** Redesigned as a "calling card" with rope border.

### Contact (`Contact.tsx`)
- **Hero:** Cream background, oversized serif "Come find us on Highway 149." with hand-drawn script squiggle. Map gets a vintage-frame treatment.
- Form panel on royal-blue with leaf pattern, white form fields with gold focus ring.
- Add a small "What happens next" 3-step graphic (we call → we listen → we shop).

### Header
- Slightly taller (already 104px). Active nav uses leaf-shaped underline instead of straight bar. Mobile menu gets a cream overlay with serif nav items and a tree icon at the top.

### Footer
- Replace the slate-dark slab with a deep canopy gradient + faint leaf pattern. Add a "From your neighbors in Magee" Caveat line and a small tree icon. Three columns become a more editorial layout with a closing tagline strip.

### MobileCallBar
- Keep, but redesign: gold gradient, rounded top corners, small leaf icon, slightly less aggressive pulse.

## Imagery work

Generate **6 new AI photos** (Nano banana 2 for quality+speed) tuned for warmth and authenticity. All shot on warm 35mm film palette, Mississippi golden-hour, no obvious stock-photo polish:

1. `home-hero-portrait.jpg` — Cindy at her desk, candid laugh, soft window light
2. `magee-storefront.jpg` — exterior of a small-town insurance office at dusk, sign lit
3. `medicare-couple-porch.jpg` — older Black couple on a Mississippi front porch with paperwork and iced tea
4. `health-family-kitchen.jpg` — multigenerational family in a warm kitchen, no laptop visible
5. `life-grandparent-garden.jpg` — grandparent and grandchild planting in a vegetable garden
6. `office-handshake.jpg` — close crop of a handshake across a wood desk with coffee mugs

Existing assets stay as fallbacks where useful but are de-prioritized.

## Technical implementation details

- **Fonts:** Add Fraunces, Inter Tight, Caveat to `index.html` Google Fonts link; update `tailwind.config.ts` `fontFamily` (`display`, `sans`, `script`).
- **Tokens:** Extend `index.css` with `--cream`, `--ink`, `--canopy-from`/`--canopy-to`, `--gradient-canopy`, `--gradient-sun`, `--leaf-pattern` (data-URL SVG). All HSL.
- **Tailwind:** Add `cream`, `ink` to color extension; add `bg-gradient-canopy` / `bg-gradient-sun` utilities via `backgroundImage`; add `font-script`.
- **New components:** `BrandTree.tsx`, `LeafBadge.tsx`, `Marquee.tsx`, `SectionHeading.tsx`, `TopoBackground.tsx`, `StatTile.tsx`, `Polaroid.tsx`, `ScriptUnderline.tsx`, `LeafBullet.tsx`. All in `src/components/brand/`.
- **Motion:** Lightweight `useReveal` hook using `IntersectionObserver` (no framer-motion dependency unless requested).
- **Image generation:** call AI gateway with `google/gemini-3.1-flash-image-preview`, save base64 → `src/assets/photos/*.jpg`. Update imports in pages.
- **Build sanity check:** run `bun run build` after the dust settles.

## Out of scope

- No CMS, no backend, no auth, no new routes
- Phone, address, hours, copy facts unchanged
- Logo PNG and palette already in place — keep them

## Estimated outcome

Six pages and shared chrome rebuilt around a strong, ownable visual identity: tree-of-life as recurring motif, editorial typography, leaf+gold accents, polaroid testimonials, marquee carriers, hand-script touches. Distinct, warm, confidently local — not AI-generic.
