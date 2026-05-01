# Wood Insurance Agency — Pontotoc-Style Rebuild

A complete visual and structural rebuild. We replace the current "earthy, polaroid, script-font" Wood design system with the clean, modern, card-driven layout used by pontotocinsuranceagency.com, while keeping Wood's brand colors (Navy, Forest Green, Gold) and Medicare-focused copy.

## Scope

In scope:
- New design system (colors, typography, radii, shadows) modeled on the reference
- Rebuilt global chrome: utility bar, header, footer, mobile call bar
- Rebuilt pages: Home, Medicare, Retirement, Health & Life (combined), About, Contact
- New hero quote form matching the reference's floating white card
- Fully responsive, no em dashes anywhere

Out of scope:
- Backend / form submission wiring (form will continue to use the existing toast-based stub)
- New photography (we will reuse existing assets in `src/assets/`)

## Design System Changes (`src/index.css`, `tailwind.config.ts`)

Replace current tokens with a Pontotoc-style system:

- Colors (HSL):
  - `--primary` Navy `#1A3A8C` (≈ 222 69% 33%)
  - `--primary-dark` deeper navy for utility bar (≈ 222 70% 22%)
  - `--secondary` Forest Green `#2E7D32` (≈ 123 46% 34%)
  - `--accent` Warm Gold `#D4A017` (≈ 43 80% 46%)
  - `--card-blue` light blue for Life card top (≈ 210 80% 60%)
  - Backgrounds: white `#FFFFFF`, soft gray section `#F8FAFC`
  - Text: ink `#0F172A`, muted `#64748B`
- Typography: `Inter` for everything (headings + body). Drop `Fraunces`, `Caveat`, `Inter Tight`. Headings bold, tight tracking, large sizes.
- Radius: `--radius: 1rem` (cards), buttons `0.75rem` (rounded rectangles, not pills).
- Shadows: soft, large-radius drop shadow for floating cards (`0 10px 30px -10px rgba(15,23,42,0.15)`).
- Remove `.script`, `.display`, `.eyebrow`, leaf-pattern, polaroid, topo-background utilities and their dependent components.

## Global Components

### `UtilityBar.tsx` (rewrite)
Slim navy bar. Left: phone icon + `(601) 397-2982`, mail icon + `cwood@woodinsurance.agency`. Right: address `398 Simpson Hwy 149, Ste A, Magee, MS 39111`. Stacks on mobile.

### `Header.tsx` (rewrite)
White background, soft bottom border. Left: logo (shield icon + "Wood Insurance Agency" wordmark). Center nav: Medicare, Retirement Planning, Health Insurance, Life Insurance, About Us, Contact. Right: solid navy "Get Quote" button. Hamburger drawer on mobile.

### `Footer.tsx` (rewrite)
Dark navy. Four columns:
1. Logo + tagline ("Expert independent advisors specializing in Medicare, retirement planning, health, and life insurance. Your trusted partner for protecting your health and financial future.")
2. Our Services list
3. Company list (About Us, Contact, Privacy Policy, Terms of Service)
4. Contact Info (address, phone, email, Mon-Fri 9AM-5PM)

Bottom strip: `© 2026 Wood Insurance Agency. Licensed in MS, AL, TN, and LA. Not affiliated with or endorsed by the U.S. government.`

### `Logo.tsx` (rewrite)
Replace current PNG logo with an inline shield SVG (Lucide `Shield` or `ShieldCheck`) + "Wood Insurance Agency" wordmark in navy. Light variant inverts to white for footer.

### `HeroQuoteForm.tsx` (new)
Floating white card with rounded corners and soft shadow used in the home hero. Fields: First Name, Last Name, Email, Phone, Select Service (Medicare / Retirement / Health / Life). Submit: navy "Get My Free Quote". Uses existing toast stub on submit.

### `ServiceCard.tsx` (new)
Reusable 4-card grid card: solid colored top band (with white icon + title), white body with paragraph + bulleted list + "Learn More →" link. Color prop drives the top band (navy / gold / green / light-blue).

## Pages

### `pages/Index.tsx` (rewrite)
1. Hero: navy background, two-column. Left: "Wood Insurance Agency" headline, subhead, two buttons (Gold "Get Free Quote", outline-white "Schedule Consultation"), stats row (500+ Happy Clients / 20+ Carriers Shopped / 100% Free Service). Right: `HeroQuoteForm`.
2. Intro: "Comprehensive Insurance & Retirement Solutions" + subhead.
3. Services grid: four `ServiceCard`s — Medicare (navy), Retirement (gold), Health (green), Life (light blue), with the bullets specified.
4. Why Choose Us: 4 feature tiles (Independent Agents, Free to You, Personal Service, Local Expertise) + stats row.
5. Testimonials slider: three real reviews (Linda Downing, Sharon Caves, Sherry Hylender), arrow controls, auto-rotate. Use existing `embla-carousel-react` (already in the shadcn carousel).
6. Final CTA: "Ready to Protect What Matters Most?" + 4 contact blocks (Call, Email, Visit, Hours).

### `pages/Medicare.tsx` (rewrite)
- Hero: navy split. Left text "Your Medicare Made Simple" + subhead + CTAs. Right: floating white "Medicare Coverage" checklist card (Medicare Advantage, Medigap, Part D, Annual Reviews).
- Eligibility section: "Medicare Eligibility Requirements" with icon list (Age 65+, Under 65 with disability, ESRD, ALS).
- Plan types: three deep-dive cards (Medicare Advantage, Medicare Supplement, Part D) with feature bullets.
- CTA strip.

### `pages/Retirement.tsx` (rewrite)
- Hero: solid Gold background. "Retirement Planning" / "Secure Your Golden Years." Right: floating white "What's Included" checklist card.
- Services grid (4): 401(k) Planning, IRA Management, Annuities, Social Security Optimization.
- Free Resources: horizontal cards (Retirement Readiness Quiz, Annuity Comparison Tool, Retirement Guide).
- CTA strip.

### `pages/HealthLife.tsx` (new, combined) at `/health-insurance`
- Hero: navy background. "Health & Life Insurance" / "Protect your family's future."
- Section A: Health Insurance (ACA Marketplace, Individual & Family, Short-Term).
- Section B: Life Insurance (Term, Whole, Final Expense).
- CTA strip.

Old `LifeInsurance.tsx` route `/life-insurance` redirects to `/health-insurance#life`.

### `pages/About.tsx` (rewrite, lighter)
Pontotoc-style "Team / About" inner page: hero band, mission paragraph, "Meet Cindy" two-column with `cindy-hero.jpg`, values grid, CTA. Bio mentions licensed in MS, AL, TN, LA.

### `pages/Contact.tsx` (rewrite)
Two-column inner page: left contact details + map placeholder, right full quote form. Default service "Medicare".

## Files to Create

- `src/components/HeroQuoteForm.tsx`
- `src/components/ServiceCard.tsx`
- `src/components/TestimonialSlider.tsx`
- `src/components/StatRow.tsx`
- `src/pages/HealthLife.tsx`

## Files to Edit

- `src/index.css` (token + base style overhaul)
- `tailwind.config.ts` (font family + new color tokens)
- `src/components/UtilityBar.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/Logo.tsx`
- `src/components/MobileCallBar.tsx` (restyle to match)
- `src/components/QuoteForm.tsx` (restyle to Pontotoc form look, default to Medicare)
- `src/App.tsx` (route `/health-insurance` → `HealthLife`, redirect `/life-insurance`)
- `src/pages/Index.tsx`
- `src/pages/Medicare.tsx`
- `src/pages/Retirement.tsx`
- `src/pages/About.tsx`
- `src/pages/Contact.tsx`

## Files to Delete

These belong to the old design language and won't be used:
- `src/components/brand/BrandTree.tsx`
- `src/components/brand/LeafBadge.tsx`
- `src/components/brand/LeafBullet.tsx`
- `src/components/brand/Marquee.tsx`
- `src/components/brand/Polaroid.tsx`
- `src/components/brand/ScriptUnderline.tsx`
- `src/components/brand/SectionHeading.tsx`
- `src/components/brand/StatTile.tsx`
- `src/components/brand/TopoBackground.tsx`
- `src/pages/LifeInsurance.tsx` (replaced by combined `HealthLife.tsx`)
- `src/pages/HealthInsurance.tsx` (replaced by combined `HealthLife.tsx`)

## Copy Rules

- No em dashes anywhere. Use commas or split sentences.
- Service area always written as "MS, AL, TN, and LA".
- Phone: `(601) 397-2982`. Email: `cwood@woodinsurance.agency`. Address: `398 Simpson Hwy 149, Ste A, Magee, MS 39111`. Hours: `Mon-Fri 9AM-5PM`.

## Open Question

The reference site has a "Team" nav link; you specified "About Us" instead. I'll use "About Us" as requested. If you'd like a separate Team page later we can split it out.

Approve to proceed and I'll execute the rebuild in default mode.
