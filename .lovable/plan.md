# Fix 404 on refresh (Vercel hosting)

## Problem

The site is deployed to Vercel at `woodinsuranceagency.net`. This is a React single-page app using React Router (`BrowserRouter`). When you visit `/contact` or any non-root URL directly (or refresh that page), Vercel looks for a file at that path, doesn't find one, and returns its 404 page. The home page works because `/` maps directly to `index.html`.

The fix is to tell Vercel: "for any request that isn't a real file, serve `index.html` instead." React Router then reads the URL client-side and renders the right page.

## Change

Add a new file `vercel.json` at the project root with a catch-all rewrite to `index.html`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

That's the only change needed in the code. Vercel auto-detects `vercel.json` on the next deploy.

## After the file is added

1. Commit/push so Vercel rebuilds (or trigger a redeploy in the Vercel dashboard).
2. Once deployed, hard-refresh `woodinsuranceagency.net/contact` — it should load instead of 404.

## Note on hosting

Lovable's own hosting (`*.lovable.app` and custom domains connected through **Project Settings → Domains**) handles SPA fallback automatically with no config file needed. The `vercel.json` is only required because you're hosting on Vercel. If you ever move the domain to Lovable's hosting, the file is harmless and can stay or be removed.
