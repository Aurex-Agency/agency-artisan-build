## Strip em/en dashes from all visible copy

The em dash (—) is one of the strongest "AI-written" tells. I'll remove every em dash and en dash from user-visible text across the site, replacing each with the punctuation a real person would actually type (comma, period, or "to" for ranges). Code comments (not visible to visitors) stay untouched.

### Replacements

**`src/pages/Index.tsx`**
- Service card bodies (Medicare/Health/Life): swap ` — ` for `. ` or `, ` so each blurb reads like two clean sentences.
- Reviews (Sharon, Sherry): replace ` — ` with `. ` to mirror natural speech.
- Hero subhead: "Medicare, Health, and Life insurance, right here in Magee, Mississippi."
- "Big city options" paragraph: replace ` — because that's what neighbors do` with `, because that's what neighbors do`.
- Script tagline: drop the leading `— ` so it reads "from your neighbors in Magee".
- Footer hours: `Mon – Fri · 9:00 AM – 5:00 PM` → `Mon to Fri · 9:00 AM to 5:00 PM`.

**`src/pages/About.tsx`**
- Cindy bio: replace ` — and we have been growing` with `, and we have been growing`.

**`src/components/Logo.tsx`**
- Image `alt`: `Wood Insurance Agency — Protecting What Matters` → `Wood Insurance Agency, Protecting What Matters` (alt text is read aloud by screen readers, so it counts as visible).

### Left alone
- `src/components/brand/Polaroid.tsx` and `LeafBadge.tsx` JSDoc comments, and the palette comment in `index.css`. These are developer-only and never rendered.

### Other AI tells
A quick scan turned up no other classic AI-isms (no "delve", "in today's fast-paced world", "tapestry", "leverage", "moreover", "furthermore", excessive bullet lists, etc.). The current copy already sounds local and personal once the dashes are gone. If you want, after this pass I can do another sweep specifically for tone (e.g. anything that feels too "marketing-speak"), but nothing jumped out.