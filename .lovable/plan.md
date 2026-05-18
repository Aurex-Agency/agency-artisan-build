## Fix Header Menu Responsiveness

### Problem
The desktop navigation (6 links + logo + CTA) is too wide for the `lg` breakpoint range (~1024–1280 px). Nav text crowds, wraps, or overflows — described as "bleeding" on bigger screens.

### Solution
Switch the desktop/mobile breakpoint from `lg` (1024 px) to `xl` (1280 px) so the full horizontal nav only renders when there is genuinely enough room.

### Files to change
- `src/components/Header.tsx`

### Changes
1. Replace all `lg:` breakpoint prefixes in the header with `xl:`:
   - Nav container: `hidden lg:flex` → `hidden xl:flex`
   - Mobile hamburger button: `lg:hidden` → `xl:hidden`
   - Mobile drawer overlay: `lg:hidden` → `xl:hidden`
2. The mobile menu already works well; it will now be active on screens up to 1280 px, which is appropriate for 6 nav items plus a CTA.

### No other changes
No layout, color, or content changes. The logo size, nav labels, gap, and CTA button stay the same.
