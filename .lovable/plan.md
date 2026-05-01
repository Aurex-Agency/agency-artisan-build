## Goal

Rewrite `src/pages/HealthInsurance.tsx` into a long, premium-feeling page that mirrors the structure of pontotocinsuranceagency.com/health, with sharper copy, Wood Insurance branding (Navy / Gold / Green, Inter), and the same patterns already used on `/retirement`. No em dashes.

## New Page Structure (top to bottom)

1. **Hero (navy with gold accents)**
   - Eyebrow: "Health Insurance"
   - H1: "Your Health, Protected With Confidence"
   - Sub: Plain-English guidance on ACA, individual, family, and supplemental health coverage across MS, AL, TN, and LA.
   - Buttons: "Get Free Quote" (gold) / "Call (601) 397-2982" (outline white)
   - Right card on desktop: "What's Included" checklist (6 items: Individual & family plans, Medicare supplement coverage, Prescription drug coverage, Preventive care benefits, Mental health services, Emergency coverage) + an "Open Enrollment: Now Open" pill.

2. **Quick Facts strip (4 stat tiles)** under hero
   - "Avg. Annual Savings: $300+", "Carriers Compared: 20+", "Claims Support: 24/7", "Local Office: Brandon, MS"
   - Reuse the styling pattern from Retirement quick facts.

3. **Health Insurance Coverage Options (expanded)**
   - Intro paragraph.
   - Grid of **6 cards** (vs 3 today): Individual Health Plans, Family Coverage, ACA Marketplace Plans, Short-Term Health Insurance, Health Savings Accounts (HSA), Medicare Supplements.
   - Each card: icon + 1-2 sentence description + 3 bullets, matching the Retirement services card style.

4. **NEW: How We Help You Choose (3-step process)**
   - Step 1: Listen (understand your health needs, doctors, medications, budget)
   - Step 2: Compare (shop 20+ carriers, side-by-side plan analysis)
   - Step 3: Enroll (handle the paperwork, support you all year long)
   - Numbered cards on a light surface background, same pattern as Retirement.

5. **NEW: Plan Types Explained (deep section)**
   - Short intro: "Health insurance does not have to be confusing."
   - 3 cards: HMO, PPO, High-Deductible Health Plan + HSA.
   - Each with "Best for" line and 2-3 bullets.

6. **NEW: Why Choose Wood Insurance for Health (split section)**
   - Left: heading + paragraph about Cindy's independent, local approach and free service.
   - Right: 4 benefit blocks: Licensed Professional, Quick Response Time, Personal Service, Multiple Carrier Options.
   - Followed by a "Service-Specific Benefits" checklist (6 items from the reference).

7. **NEW: Open Enrollment & Special Enrollment band**
   - Gold info band explaining ACA Open Enrollment dates and Qualifying Life Events (marriage, baby, job loss, move) that allow Special Enrollment year-round.
   - CTA button to /contact.

8. **NEW: Frequently Asked Questions** (shadcn `accordion`)
   - 6 Qs: When can I enroll? Do I qualify for a subsidy? What is the difference between HMO and PPO? Can I keep my doctor? What is an HSA and who is it for? How much does your service cost? (Free to client, paid by carriers.)

9. **NEW: What Happens Next (3 numbered steps)**
   - We review your information / We contact you within 24 hours / We compare carriers and present your best options.

10. **Final CTA (navy)**
    - Headline: "Get a Health Quote in Minutes"
    - Buttons: "Get Free Quote" / "Call (601) 397-2982"

## Technical Notes

- Edit only `src/pages/HealthInsurance.tsx`. No new routes, no new components.
- Reuse existing tokens: `bg-primary` / `bg-primary-dark` (navy), `bg-accent` (gold), `bg-secondary` (green), `bg-surface` / `bg-white` alternating, `shadow-card`, `rounded-2xl`, `container-wide`, `btn-base`, `btn-gold`, `btn-navy`, `btn-outline-white`, `btn-outline-dark`, `eyebrow`.
- Use `Accordion` from `@/components/ui/accordion` for FAQs (already used on Retirement).
- Icons from `lucide-react`: Stethoscope, Users, HeartPulse, Clock, PiggyBank, Pill, ShieldCheck, Calendar, Search, Scale, Rocket, HelpCircle, Check, Award, Phone.
- Update `<Seo>` title and description to reflect the deeper page.
- Strict: no em dashes anywhere in copy.
- Keep fully responsive (sm/lg breakpoints), match visual rhythm of the Retirement page so the two feel like a set.

## Out of Scope

- No header/nav changes, no footer changes, no design token changes.
- No backend or new forms (CTAs link to existing `/contact` and `tel:` link).
- LifeInsurance, Medicare, Retirement pages untouched.
