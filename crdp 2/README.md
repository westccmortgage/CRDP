# California Residential Development Partners (CRDP)

A luxury cinematic residential development website — Next.js · TypeScript · Tailwind CSS · Framer Motion.

Editorial Los Angeles luxury aesthetic: ivory background, Cormorant Garamond display type, champagne/gold accents, fullscreen cinematic hero video.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm start   # production build
```

## Structure

```
src/
  app/
    layout.tsx        # fonts + metadata
    page.tsx          # homepage section assembly
    globals.css       # luxury base styles, grain, gold rules
  components/
    Navbar.tsx         # scroll-aware luxury nav + mobile menu
    Hero.tsx           # fullscreen autoplay/muted/loop video + poster fallback
    FeaturedProjects.tsx  # cinematic tournament-style project cards
    Portfolio.tsx      # editorial portfolio rows w/ status filter
    Media.tsx          # cinematic video cards (drone, construction, before/after)
    Capabilities.tsx   # 6-cell luxury service grid
    About.tsx          # institutional editorial + stats
    Contact.tsx        # project inquiry form (Netlify Forms ready)
    Footer.tsx
    Reveal.tsx         # scroll-reveal helper
  data/
    projects.ts        # CMS-ready project portfolio
    content.ts         # CMS-ready media + capabilities
  lib/
    types.ts           # shared content types
public/
  videos/  hero.mp4, hero.webm   # cinematic hero loop (replace with property footage)
  images/  posters + project/media imagery (replace with real photography)
```

## CMS-ready content

All content lives in typed arrays in `src/data/` against interfaces in `src/lib/types.ts`
(`Project`, `MediaItem`, `Capability`). To wire a headless CMS (Sanity, Contentful,
Payload, etc.), replace the static imports with async fetches returning the same shapes —
no component changes required.

## Replacing media

- **Hero video:** drop a property film at `public/videos/hero.mp4` (+ optional `.webm`).
  Keep a matching poster at `public/images/hero-poster.jpg` for instant first paint.
- **Project / media imagery:** replace files in `public/images/` (paths referenced in `src/data/`).

The shipped video/images are lightweight cinematic placeholders.

## Deployment (Netlify)

`netlify.toml` is configured with `@netlify/plugin-nextjs`. Connect the repo in Netlify and
deploy — build command `npm run build`, Node 20. The contact form uses `data-netlify="true"`
so submissions are captured by Netlify Forms out of the box.
