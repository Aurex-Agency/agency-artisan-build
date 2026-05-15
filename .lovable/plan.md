## Goal

Replace the flat yellow-leaning accent with a shinier, more "metallic gold" treatment that pops against the purple — closer to the realistic gold in the logo wordmark.

## Approach

Flat HSL can't be metallic, so I'll do two things:

1. **Shift the base gold** to a richer, more saturated warm gold (less yellow, more amber):
   - `--accent: 38 78% 52%` (was `40 65% 52%`)
   - `--accent-dark: 32 75% 40%` (deeper hover/edge)
   - Add a new `--accent-glow: 46 95% 65%` (highlight stop for gradients)

2. **Add a metallic gradient token** used by gold CTAs and gold accent surfaces:
   - `--gradient-gold: linear-gradient(135deg, hsl(46 95% 65%) 0%, hsl(40 85% 55%) 45%, hsl(32 75% 40%) 100%)`
   - Apply via the existing `.btn-gold` utility in `src/index.css` (background becomes the gradient, with a subtle inner highlight via `box-shadow: inset 0 1px 0 hsl(48 100% 80% / 0.6)` for the "shine" line)
   - Strengthen `--shadow-cta` so the gold buttons glow more

3. **Keep eyebrow / icon / small text gold** as the solid `--accent` (gradients on tiny text look muddy).

## Files

- `src/index.css` only — token values + `.btn-gold` rule + shadow.

## Out of scope

Layout, copy, purple palette, components themselves.

## Verification

Screenshot the home hero, the gold CTA section, and a service card; confirm the gold reads as polished metallic gold (highlight at top-left, deeper amber at bottom-right) and noticeably pops off the purple.
