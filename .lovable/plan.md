## Goal

Rewrite `src/pages/LifeInsurance.tsx` into a long, premium-feeling page that mirrors the structure of pontotocinsuranceagency.com/life, with sharper copy and Wood Insurance branding. Same visual rhythm as the upgraded Retirement and Health Insurance pages so the three feel like a set. No em dashes.

## New Page Structure

1. **Hero (navy with gold accents, split layout)**
   - Eyebrow: "Life Insurance"
   - H1: "Protect the People You Love"
   - Sub headline: "Tax-free protection. Cash value that grows. Peace of mind that lasts."
   - Body copy targeting MS, AL, TN, LA families.
   - Buttons: "Get Free Quote" (gold), "Calculate My Needs" (outline white, links to /contact).
   - Right card: "What's Included" checklist (6 items: Tax-free death benefit, Income replacement for your family, Cash value accumulation, Convertible term policies, Flexible premium options, Guaranteed insurability) with a "Starting at $15/mo" pill.

2. **Quick Facts strip (4 stats)** on `bg-primary-dark`
   - "Coverage Starting At: $15/mo", "Carriers Compared: 20+", "No Medical Exam: Available", "Local Office: Brandon, MS".

3. **Coverage Options (6 cards)** on white
   - Term Life, Whole Life, Universal Life, Final Expense, No-Exam Life, Mortgage Protection.
   - Each: icon + 1-2 sentence description + 3 bullets.

4. **How Much Coverage Do You Need? (split section)** on `bg-surface`
   - Left: heading + paragraph explaining the DIME method (Debt, Income, Mortgage, Education) in plain English.
   - Right: 4 small cards: D, I, M, E with one-line explanations.
   - CTA button: "Get a Personalized Estimate".

5. **Term vs Permanent (deep section)** on white
   - Short intro: "Two paths, one decision."
   - 2 large cards side-by-side: Term Life vs Permanent Life. Each has "Best for" + 4 bullets covering cost, duration, cash value, ideal scenario.

6. **Why Choose Wood Insurance for Life (split)** on `bg-surface`
   - Left: heading + paragraph + 6-item Service-Specific Benefits checklist (term and permanent options, no-exam policies, convertible term, cash value options, beneficiary flexibility, accelerated death benefit riders).
   - Right: 4 benefit cards (Licensed Professional, Quick Response, Personal Service, Multiple Carriers).

7. **Riders & Add-Ons (NEW educational band)** on `bg-accent` (gold)
   - Heading + 4 rider cards on white: Accelerated Death Benefit, Waiver of Premium, Child/Spouse Term Rider, Return of Premium.
   - Short explanation each.

8. **Frequently Asked Questions (accordion)** on `bg-surface`
   - 6 Qs: How much life insurance do I need? Term or whole life? Do I need a medical exam? Can I have more than one policy? What if my health changes later? How much does your service cost? (free).

9. **What Happens Next (3 numbered steps)** on white — same pattern as other pages.

10. **Final CTA (navy)** — "Get a Life Quote in Minutes" with gold + outline white buttons.

## Technical Notes

- Edit only `src/pages/LifeInsurance.tsx`. No new routes, no new components.
- Reuse tokens: `bg-primary`, `bg-primary-dark`, `bg-accent`, `bg-surface`, `bg-white`, `shadow-card`, `shadow-float`, `rounded-2xl`, `container-wide`, `btn-base`, `btn-gold`, `btn-navy`, `btn-outline-white`, `btn-outline-navy`, `btn-outline-dark`, `eyebrow`.
- Use `Accordion` from `@/components/ui/accordion`.
- Icons from `lucide-react`: Shield, ShieldCheck, HeartHandshake, Heart, Users, Home, GraduationCap, DollarSign, Coins, Clock, Award, Phone, Check, HelpCircle, Stethoscope, Sparkles, FileText, Baby, Calendar, RotateCcw, PiggyBank.
- Update `<Seo>` title and description to reflect the deeper page.
- Strict: no em dashes. Match Retirement/Health visual rhythm exactly.
- Responsive at sm/lg breakpoints.

## Out of Scope

- No header/nav, footer, design-token, or routing changes.
- No backend or new forms (CTAs link to `/contact` and `tel:`).
- Other pages untouched.
