## Goal

Make `/retirement` significantly longer and more substantive, mirroring the structure of pontotocinsuranceagency.com/retirement while keeping Wood Insurance Agency's branding (Navy/Gold/Green, Inter, current design tokens) and Cindy's local voice. No em dashes.

## Current State

`src/pages/Retirement.tsx` has: gold hero with "What's Included" card, 4-card services grid, 3 free resources, and a closing CTA. It is short compared to the reference.

## New Page Structure (top to bottom)

1. **Hero (gold) — keep, polish copy**
   - Eyebrow: "Retirement Planning"
   - H1: "Secure Your Golden Years"
   - Sub: lifetime income, tax-smart strategy, and peace of mind for MS, AL, TN, and LA families.
   - Buttons: Start Planning / Free Consultation
   - Right card: "What's Included" checklist (expand to 6 items: 401(k) optimization, IRA rollovers, Annuity planning, Social Security optimization, Tax-efficient investing, Estate planning coordination)

2. **NEW: Quick Facts strip (4 stat tiles)** under hero
   - "Years Helping Families: 20+", "Carriers Compared: Multiple", "Local Service: Brandon, MS", "Service Area: MS · AL · TN · LA"
   - Reuse `StatRow` component pattern.

3. **Retirement Planning Services (expanded)**
   - Intro paragraph.
   - Grid of **6 cards** (was 4): 401(k) Planning, IRA Management, Annuities, Social Security Optimization, Tax-Efficient Investing, Estate Planning Coordination.
   - Each with icon, 1-2 sentence description, and 3 bullets (matching the reference's pattern).

4. **NEW: How We Build Your Plan (3-step process)**
   - Step 1: Discover (understand goals, income needs, timeline)
   - Step 2: Design (custom strategy across savings, income, tax, legacy)
   - Step 3: Deliver (implement, review annually, adjust as life changes)
   - Numbered cards on a light surface background.

5. **NEW: Annuity Types Explained (deep section)**
   - Short intro: "Not all annuities are created equal."
   - 3 cards: Fixed Annuities, Fixed Indexed Annuities, Immediate / Income Annuities.
   - Each with "Best for" line and 2-3 bullets.
   - This adds real depth/info the reference has scattered around.

6. **NEW: Why Choose Wood Insurance for Retirement (split section)**
   - Left: heading + paragraph about Cindy's independent, local approach.
   - Right: 4 benefit blocks: Licensed Professional, Quick Response, Personal Service, Multiple Carrier Options.

7. **Free Retirement Planning Resources (expanded to 6 cards)**
   - Retirement Readiness Quiz, Retirement Income Calculator, Annuity Comparison Tool, Retirement Planning Checklist, Annuity Selection Guide, Social Security Optimization Guide.
   - Each links to /contact (request resource).

8. **NEW: Frequently Asked Questions** (accordion using existing shadcn `accordion`)
   - 6 Qs: When should I start planning? What is the difference between a 401(k) and an IRA? Are annuities a good idea? When should I claim Social Security? Do I need to roll over my old 401(k)? How much does your service cost? (Free to client, paid by carriers.)

9. **NEW: What Happens Next (3 numbered steps)**
   - We review your information / We contact you within 24 hours / We compare carriers and present options.

10. **Final CTA (navy)** — keep current, tighten copy. Buttons: Book My Session / Call (601) 397-2982.

## Technical Notes

- File: rewrite `src/pages/Retirement.tsx` only. No new routes, no new components required (use existing `Layout`, `Seo`, shadcn `Accordion`, lucide icons).
- Reuse design tokens: `bg-accent` (gold hero), `bg-white` / `bg-surface` alternating sections, `bg-primary-dark` final CTA, `shadow-card`, `rounded-2xl`, `container-wide`. No new colors.
- Icons from `lucide-react`: PiggyBank, TrendingUp, Landmark, Calculator, FileText, ClipboardList, BookOpen, ShieldCheck, Scale, Users, Clock, Award, HelpCircle.
- Update `<Seo>` description to reflect richer content.
- Strict: no em dashes anywhere in copy.
- Keep page fully responsive (sm/lg breakpoints already used in file).

## Out of Scope

- No changes to header/nav, other pages, or design tokens.
- No backend, forms beyond linking to existing `/contact`.
