## Replace site logo

1. Copy `user-uploads://Wood_Insurance_Updated_Logo.png` to `src/assets/wood-insurance-logo.png`, overwriting the current logo file.
2. No code changes needed — `src/components/Logo.tsx` already imports from `@/assets/wood-insurance-logo.png`, so the new image will appear everywhere the logo is used (header, footer, etc.) automatically.
3. Verify in the preview that the header and footer show the updated purple-tree gold-text logo at the correct size.