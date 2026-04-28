## What we're fixing

1. The home hero feels tight and a bit chaotic on a 390px-wide screen — the portrait + tree + two leaf badges crowd each other and clip at the edges.
2. The "Why Wood Insurance" stat row and the "Let's talk" call-out also feel uneven on mobile.
3. The hero portrait, the storefront, and the handshake photo are AI/stock — replace them with the real office photos you'll upload in your next message.

## Step 1 — Upload the photos

Drop the photos into your next message (up to 10 per message, 20MB each). Helpful if you can quickly note which is which — e.g. "exterior of the office", "Cindy at her desk", "team shot", "interior lobby". If you don't, I'll pick the best fit for each slot based on what's in the image.

The three slots they'll fill on the home page:
- **Hero (right side)** — best vertical / portrait-orientation shot of Cindy or the team
- **"Big city options" section** — exterior of the Magee office (replaces the current storefront polaroid)
- **"Let's talk" section** — a warm interior or handshake-style photo

If there are extras, I'll also use them on the About and Contact pages so the real office shows up across the site instead of stock imagery.

## Step 2 — Mobile hero polish

Current issues at 390px:
- Headline is `44px` and runs into the badges
- Portrait sits in a fixed 4:5 frame with the image absolutely positioned at 62% width pinned bottom-right, leaving an awkward empty top-left
- Both LeafBadges (`Free to You`, `Local since day one`) hang off the edges and can clip
- Buttons stack full-width but the trust row below wraps unevenly

Fixes:
- Drop hero headline to `38px` on mobile (was 44), tighten line-height
- Re-center the portrait composition on mobile: image becomes the centered focal point at ~78% width inside a smaller frame, BrandTree softened behind it
- Show only one leaf badge on mobile (`Free to You`), reveal the second from `sm:` up
- Reduce hero vertical padding (`pt-10 pb-14` on mobile vs current `pt-14 pb-20`)
- Trust row: stack avatars + stars on their own line, smaller text, no wrap jitter

## Step 3 — Even out the rest of the page on mobile

- **"Big city options" section**: stat tiles currently `grid-cols-3` even on mobile, which squeezes "Carriers shopped" — switch to `grid-cols-3` with smaller type on mobile, and reduce section padding
- **"Let's talk" section**: the handshake photo is rotated -2deg and overflows on narrow screens — constrain to `max-w-full`, reduce rotation on mobile, tighten padding from `p-10` to `p-6`
- **Coverage cards**: remove the `translateY(12px)` offset on mobile (it makes the stack look misaligned) — keep the staggered look only at `lg:` and up

## Files I'll touch

- `src/pages/Index.tsx` — hero layout, badge visibility, paddings, stat grid, quote section
- `src/assets/photos/` — replace `home-hero-portrait.jpg`, `magee-storefront.jpg`, `office-handshake.jpg` (and add About/Contact replacements if you send extras)
- Possibly `src/pages/About.tsx` and `src/pages/Contact.tsx` if extra photos arrive

No new components, no new dependencies — just a tighter mobile pass and real photography.

**Next step: upload the photos in your next message and I'll execute.**