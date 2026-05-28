# CRDP content update

This package updates the cinematic CRDP Next.js site with real project photography and real project descriptions from the old CRDP website.

## Updated
- `src/data/projects.ts` — replaced placeholder projects with real CRDP portfolio entries.
- `src/data/content.ts` — updated media/capabilities copy and media poster images.
- `public/images/projects/` — added 158 usable project images extracted from the old CRDP site.
- Existing placeholder image paths in `public/images/` were replaced with real project photography so the homepage shows actual CRDP visuals immediately.

## Not changed
- Hero video remains unchanged for now, per direction. Replace later at `public/videos/hero.mp4` and `public/videos/hero.webm`.

## Deploy
Upload/commit this full project folder to GitHub in place of the current `crdp 2` contents. Netlify should redeploy automatically.
