## Footer logo fix

1. Copy `user-uploads://Wood_Insurance_Updated_Logo_No_Back.png` → `src/assets/wood-insurance-logo-light.png` (transparent-bg version suited for dark footer).
2. Update `src/components/Logo.tsx`:
   - Import the new light logo.
   - When `variant="light"`, render the new transparent logo directly (no `brightness-0 invert` filter).
   - `variant="dark"` (header) continues using the existing logo.
3. Leave `src/components/Footer.tsx` as-is (still calls `<Logo variant="light" />`).

No other files or styles change.