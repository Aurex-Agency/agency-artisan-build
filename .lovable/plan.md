## Goal

Shift the site's voice from a single-agent personal story ("Cindy Woods, my, me") to a **business voice for Wood Insurance Agency** ("our team, our agency, we"). Cindy founded the agency, but it's a growing local business — the website should reflect that.

The About page is the one exception: it can still introduce Cindy as the founder, but framed as part of the agency's story rather than a solo operation.

## Scope of changes

Find/replace pattern across the site, page by page (no design changes, copy only):

| Was | Becomes |
|---|---|
| "Cindy will sit down with you…" | "Our agents will sit down with you…" |
| "Cindy is an independent agent…" | "Wood Insurance Agency is an independent agency…" |
| "Cindy works for you…" | "We work for you…" |
| "her help / her services" | "our help / our services" |
| "Call Cindy today" | "Call our team today" |
| "Meet Cindy Woods" (Home CTA) | "About Our Agency" |

### Files touched

1. **`index.html`** — meta description: rewrite to lead with "Wood Insurance Agency" instead of "Cindy Woods is…"

2. **`src/pages/Index.tsx`** (Home)
   - Medicare card body: replace "Cindy will sit down…" with agency voice
   - Hero CTA: "Call Cindy Today" → "Call Our Team Today"
   - Image alt text: replace Cindy-specific descriptions with agency office/team alts
   - "Meet Cindy Woods" button → "About Our Agency"
   - SEO description: agency-first phrasing
   - Three review quotes: keep as authentic testimonials but generalize "Cindy" → "the Wood Insurance team" / "they" so they read as agency reviews. Keep the tone warm and specific.

3. **`src/pages/Medicare.tsx`**
   - Two body paragraphs mentioning Cindy → "an independent agent like ours" / "our team will review…"
   - Section heading "Cindy Works for You. Not for an Insurance Company." → "We Work for You. Not for an Insurance Company."
   - Body text under it: "As an independent agent, Cindy is not tied…" → "As an independent agency, Wood Insurance is not tied…"
   - "What you get with Cindy" → "What you get with Wood Insurance"
   - "Call Cindy today" → "Call our team today"
   - SEO description: lead with the agency

4. **`src/pages/HealthInsurance.tsx`** — paragraph about "Cindy is an independent agent" → "Wood Insurance Agency is an independent agency"

5. **`src/pages/LifeInsurance.tsx`** — SEO description: drop "Cindy Woods helps you find…" → "Wood Insurance Agency helps you find…"

6. **`src/pages/About.tsx`** — **lightest touch.** Keep Cindy as founder, but reframe:
   - Eyebrow "About Cindy" → "About Our Agency"
   - Title: "About Cindy Woods | Wood Insurance Agency Magee, MS" → "About Wood Insurance Agency | Magee, MS"
   - Hero H1 stays
   - First intro paragraph: keep "I am Cindy Woods" — but add a sentence positioning the agency: "I founded Wood Insurance Agency to help my neighbors…"
   - "Three Promises I Make" → "Three Promises We Make to Every Client" (agency-wide commitment)
   - Step bodies rewritten in "we" voice
   - Office image alt text: drop "Cindy's private office" → "Our private consultation office"

7. **`src/components/QuoteForm.tsx`** — toast: "Cindy or her team will be in touch…" → "Our team will be in touch within one business day."

## Out of scope

- No layout, color, component, or routing changes
- Keep the `cindy-hero.jpg` asset filename (used on About page); only update its alt text where appropriate
- Phone number, address, hours, and brand palette unchanged
