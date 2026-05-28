# CRDP Gallery Update

This package updates the CRDP Next.js site with real-photo project detail pages.

## Included
- Dynamic project routes: `/projects/[slug]`
- 9 static project pages generated from `src/data/projects.ts`
- Real CRDP gallery images connected from `public/images/projects/`
- Updated project data with long-form editorial descriptions, specs, materials, and gallery arrays
- Featured and portfolio cards now link to the individual project pages
- Netlify Forms attributes removed from `Contact.tsx` to avoid the Netlify Next.js plugin form error

## Upload instruction
Upload the contents of this package into your GitHub project folder (`crdp 3`) and commit.
Netlify will redeploy automatically.

## Important
This package does not replace or modify the hero video. Video should be handled later.
