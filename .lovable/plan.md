## Goal

Rewrite `src/pages/Medicare.tsx` into a long, premium, educational Medicare hub modeled on pontotocinsuranceagency.com/medicare. Match the visual rhythm of the new Retirement, Health, and Life pages so the four feel like a set. No em dashes.

## Page Structure

1. **Hero (navy + gold)** with split layout
   - Eyebrow "Medicare Coverage Solutions", H1 "Your Medicare Made Simple", gold sub headline.
   - Buttons: "Get Medicare Quote" (gold) / "Call (601) 397-2982" (outline white).
   - Right card: "Medicare Coverage" with 4 covered Parts (A Hospital, B Medical, C Advantage, D Prescription) with green check rows and a "65+ Eligibility" pill.

2. **Quick Facts strip (4)** on bg-primary-dark
   - "Eligibility Age: 65+", "Coverage Parts: 4", "$0 Premium Plans: Available", "Local Office: Brandon, MS".

3. **The 4 Parts of Medicare (NEW educational grid, 4 cards)** on white
   - Part A (Hospital), Part B (Medical), Part C (Advantage), Part D (Prescription) with one-paragraph plain-English explanation + 3 bullets each.

4. **Eligibility (2-col split)** on bg-surface
   - Left: "Primary Eligibility" 3 cards (Age 65+, US Citizen / 5-yr Resident, Work history 40 quarters).
   - Right: "Special Circumstances" 3 cards (Under 65 with SSDI, ESRD, ALS).

5. **Enrollment Timeline (NEW, 3 numbered cards)** on white
   - IEP (7-month window around 65), GEP (Jan 1 to Mar 31), SEP (qualifying life events).
   - Below: "Important Considerations" callout box with 4 bullets (late penalties, employer coverage, not automatic, weigh Original vs Advantage).

6. **Plan Types deep dive — Medicare Advantage (Part C)** on bg-surface
   - Heading + intro paragraph.
   - 4 sub-type mini-cards: HMO, PPO, PFFS, SNP with 3 bullets each.
   - Two-column "Advantages" / "Considerations" callout below.

7. **Plan Types deep dive — Medigap (Supplement)** on white
   - Heading + intro.
   - 3 highlighted plan cards: Plan G (Most Popular), Plan F (Most Comprehensive), Plan N (Cost-Effective). Each with 4 bullets and a badge.
   - "Important Notes" 4-bullet callout (open enrollment window, can't have both with MA, no Rx, standardized).

8. **Part D Prescription Drug Plans** on bg-surface
   - Heading + intro.
   - Coverage Tiers strip: Generic / Preferred Brand / Non-Preferred / Specialty (4 small chips).
   - 4 phase cards (Deductible, Initial Coverage, Coverage Gap, Catastrophic) with brief 2026 figures.
   - Late-enrollment penalty callout with 3 prevention bullets.

9. **2026 Medicare Costs Snapshot** on white
   - 4 premium cards (Part A, Part B, Part D, Medigap) with headline price and 2 sub-lines.
   - Below: 3-column deductibles & coinsurance grid (Part A, Part B, Part D).
   - Disclaimer line: "Figures based on 2026 CMS guidance. Your costs may vary."

10. **Why Choose Wood Insurance for Medicare (split)** on bg-surface
    - Left: heading + paragraph + 6-item Service-Specific Benefits checklist (annual reviews, all carriers, no fees, MA + Medigap + PDP, IRMAA help, drug formulary checks).
    - Right: 4 benefit cards (Licensed Professional, Quick Response, Personal Service, Multiple Carriers).

11. **FAQs accordion** on white
    - 6 Qs: When should I enroll? Original Medicare vs Advantage? Can I keep my doctor? What is IRMAA? Do I need a Part D plan if I take no medications? How much do you charge? (free).

12. **What Happens Next** 3 numbered steps on bg-surface (same pattern).

13. **Final CTA (navy)** "Ready to Compare Medicare Plans?" with gold + outline white buttons.

## Technical Notes

- Edit only `src/pages/Medicare.tsx`. No new routes, no new components.
- Reuse tokens: `bg-primary`, `bg-primary-dark`, `bg-accent`, `bg-surface`, `bg-white`, `shadow-card`, `shadow-float`, `rounded-2xl`, `container-wide`, `btn-base`, `btn-gold`, `btn-navy`, `btn-outline-white`, `btn-outline-navy`, `btn-outline-dark`, `eyebrow`.
- Use `Accordion` from `@/components/ui/accordion`.
- Icons from `lucide-react`: Heart, Shield, ShieldCheck, Pill, Calendar, Stethoscope, Hospital, Users, Award, Clock, Phone, Check, HelpCircle, FileText, AlertTriangle, DollarSign, TrendingUp, Globe, Hash, Wallet.
- Update `<Seo>` title and description.
- Strict: no em dashes, "$0" and "65+" and ranges OK.
- 2026 figures come straight from the reference — flag them with a small disclaimer.
- Responsive at sm/lg breakpoints. Match the established premium rhythm exactly.

## Out of Scope

- No header/nav, footer, design-token, or routing changes.
- No backend, no new forms (CTAs link to `/contact` and `tel:`).
- Other pages untouched.
