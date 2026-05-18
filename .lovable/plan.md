## Purple header with white nav text

Update `src/components/Header.tsx`:
- Header bar background: `bg-white` → `bg-primary-dark` (deep navy-purple matching footer/hero); update border to `border-white/10`.
- Desktop nav links: active = `text-accent` (gold), inactive = `text-white/85 hover:text-accent`.
- Mobile menu toggle button: `text-primary` → `text-white`, hover `hover:bg-white/10`.
- Mobile dropdown panel: `bg-white` → `bg-primary-dark`, links from `text-ink`/`text-primary` → `text-white`/`text-accent`, dividers `border-white/10`.
- Keep gold "Get Quote" button as-is (already pops on dark).
- Logo unchanged — uses the transparent light logo via header's default `<Logo />`… 

One thing to check: header currently uses `<Logo />` (default dark variant — colored logo on white). On a purple background, switch to `<Logo variant="light" />` so the same transparent gold/purple logo (which already reads well on dark, as in the footer) is used.

No changes to `UtilityBar`, footer, or other components.