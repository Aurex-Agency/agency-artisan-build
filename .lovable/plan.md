## Hero refresh — purple tree + deeper navy/purple palette

### Goal
Match the vibe of the reference image: a large stylized purple/magenta tree sitting on the right side of the hero against a deep navy-to-purple background. Keep the existing quote form on top.

### Changes

**1. Generate the tree asset**
- Use AI image generation to create `src/assets/hero-tree.png` — a stylized tree with magenta/pink leaves and a dark silhouette trunk, transparent background, similar feel to the reference (not an exact copy).

**2. Update `src/index.css` palette**
- Deepen `--primary` toward navy-purple (closer to the reference's `#1a1240`-ish deep indigo) while keeping the gold accent intact.
- Add a `--gradient-hero` token: deep navy on the left transitioning to plum/purple on the right.

**3. Update `src/pages/Index.tsx` hero section**
- Replace the current solid gradient overlay with the new hero gradient.
- Add the tree as an absolutely-positioned background image on the right side (`object-contain`, right-aligned, ~55% width on desktop, faded/lower opacity behind content on mobile so the form stays readable).
- Keep the headline, subhead, CTAs, stats, and `HeroQuoteForm` exactly as they are — only the background changes.
- Ensure left-column text and the form sit above the tree (`relative z-10`).

**4. Responsive behavior**
- Desktop (lg+): tree visible on right at full opacity behind the form column.
- Mobile/tablet: tree fades to lower opacity (~15–25%) so form remains legible.

### Files touched
- `src/assets/hero-tree.png` (new)
- `src/index.css` (palette + gradient token)
- `src/pages/Index.tsx` (hero background only)

### Not changing
- Quote form, headline copy, CTAs, stats, gold button styling, header, or any other section.
