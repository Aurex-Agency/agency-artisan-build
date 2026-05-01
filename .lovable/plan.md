## Add Critical Illness Plans (Cancer, Heart Attack, Stroke) to Health Insurance Page

Expand `src/pages/HealthInsurance.tsx` to include supplemental critical illness coverage so visitors dealing with (or planning for) cancer, heart attack, and stroke diagnoses know Wood Insurance can help.

### Changes to `src/pages/HealthInsurance.tsx`

**1. Add a new "Critical Illness Coverage" section** (placed after the Coverage Options grid, before "How We Help You Choose")

A dedicated, visually distinct section with:
- Section eyebrow: "Critical Illness Plans"
- Heading: "Cancer, Heart Attack, and Stroke Coverage"
- Intro paragraph explaining that even strong major-medical plans leave gaps (deductibles, time off work, travel for treatment, experimental therapies), and supplemental critical illness policies pay a lump-sum cash benefit on diagnosis to use however the family needs.
- A 3-card grid:
  - **Cancer Plans** (Ribbon/Shield icon) — lump-sum benefit on diagnosis, coverage for chemo/radiation/targeted therapy, optional return-of-premium riders, wellness/screening benefits.
  - **Heart Attack Plans** (HeartPulse icon) — lump-sum payout on first diagnosis, coverage for bypass surgery and angioplasty, recovery and rehab support, no network restrictions.
  - **Stroke Plans** (Activity/Brain icon) — lump-sum benefit paid directly to you, covers ischemic and hemorrhagic strokes, helps with rehab, home modifications, and lost income.
- A "What the cash benefit can cover" sub-block with checkmark list: deductibles and copays, lost wages, travel and lodging for treatment, experimental or out-of-network care, mortgage and household bills, childcare.
- CTA buttons: "Get a Critical Illness Quote" → /contact, "Call (601) 439-7230".

**2. Add 2 FAQ entries** to the existing `FAQS` array:
- "Do I need a critical illness plan if I already have health insurance?" — explains gaps major-medical leaves behind.
- "How are cancer, heart attack, and stroke benefits paid?" — explains lump-sum cash on verified diagnosis, paid to the policyholder.

**3. Add one bullet** to the hero `INCLUDED` checklist: "Cancer, heart attack, and stroke plans".

**4. Add one item** to `SERVICE_BENEFITS`: "Critical illness coverage (cancer, heart attack, stroke)".

### Technical Notes

- Reuse existing design tokens (`bg-surface`, `bg-white`, `rounded-2xl`, `shadow-card`, `border-border/60`, `text-secondary`, `text-accent-dark`, `btn-navy`, `btn-outline-navy`).
- Icons from `lucide-react` already imported where possible (`HeartPulse`, `ShieldCheck`); add `Ribbon` and `Activity` to the import list.
- Section background alternates correctly with neighbors (use `bg-white` or `bg-surface` to keep the stripe rhythm; will pick the one that maintains alternation after Coverage Options which is `bg-white` → new section uses `bg-surface`, and shift the existing "How We Help You Choose" to `bg-white` to preserve flow).
- Keep all phone numbers as `(601) 439-7230` and location references as Magee, MS.
- No em dashes; use commas, periods, or parentheses.
- Fully responsive: 1 col mobile, 3 col `lg:`.

### Out of Scope

- No new routes or separate page (kept inline on Health Insurance page as requested).
- No backend or form changes; existing `/contact` form handles inquiries.