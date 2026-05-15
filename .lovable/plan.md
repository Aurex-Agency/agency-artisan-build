## Goal

Replace the current royal-blue / leaf-green / yellow-gold theme with a palette pulled directly from the new logo: rich purple (leaves) and warm realistic gold (wordmark, ring, monogram).

## New palette

- **Primary (Purple)** — `hsl(280 45% 38%)` — deep logo purple, used on headers, primary buttons, links, navy-toned surfaces
- **Primary Dark** — `hsl(280 50% 26%)` — hover/footer/utility bar
- **Accent (Gold)** — `hsl(40 65% 52%)` — realistic warm gold for CTAs, eyebrows, accents
- **Accent Dark** — `hsl(36 60% 40%)` — gold hover, deeper gradient stop
- **Secondary** — `hsl(285 30% 55%)` — softer purple, replaces the leaf-green secondary used on a few service cards
- **Card-blue** — `hsl(280 35% 60%)` — replace the light-blue Life card top with a lighter purple so all service cards stay on-brand
- Ink, surface, muted, borders unchanged (neutral grays still read well against purple/gold)

Realistic gold is single-tone here; the metallic gradient from the logo only lives inside the image itself.

## Scope of changes

Only design tokens — no component logic, no copy, no layout changes.

1. **`src/index.css`** — update `:root` (and `.dark` mirror) for `--primary`, `--primary-dark`, `--secondary`, `--accent`, `--accent-foreground`, `--accent-dark`, `--card-blue`, `--ring`, and `--shadow-cta` (re-tint the gold glow).
2. **`tailwind.config.ts`** — no edits needed; tokens are already wired through CSS variables.
3. **Spot audit** for any hardcoded hex/Tailwind color classes that bypass tokens, in:
   - `src/components/Header.tsx`, `Footer.tsx`, `UtilityBar.tsx`, `MobileCallBar.tsx`
   - `src/components/HeroQuoteForm.tsx`, `QuoteForm.tsx`, `ServiceCard.tsx`, `CTASection.tsx`, `TestimonialSlider.tsx`, `StatRow.tsx`
   - All pages under `src/pages/`
   - Replace any literal `bg-blue-*`, `text-green-*`, `#hex` with the matching semantic token.
4. **`index.html`** — update `<meta name="theme-color">` if present to the new purple.

## Out of scope

- The logo image itself (already updated)
- Email templates under `supabase/functions/_shared/transactional-email-templates/` (kept on neutral brand for deliverability unless you ask)
- Copy, layout, animations

## Verification

After the swap, screenshot the home, Medicare, and Contact pages and confirm: header/nav purple, gold CTA buttons, service cards on-brand, footer purple-dark, no stray blue/green remaining.
