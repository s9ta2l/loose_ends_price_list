# Loose Ends

A minimal, single-page React catalogue and price list for **Loose Ends** by **Stelios Chatzivasileiou**, dated **27 November 2026**, in **Athens, Greece**. **Imposter Studio** is the gallery and organiser.

The catalogue contains 13 works from the supplied price-list CSV. Each photo was matched by its filename to the CSV's **Identification** column, which is also used as the temporary artwork title. Mediums, dimensions, prices and catalogue order follow the CSV. Artwork years were not supplied and are omitted. Greek and English exhibition descriptions and artist/gallery contact details come from the supplied PDFs.

## Run locally

Use Node.js 24 to match the GitHub Pages build, then open the project folder in your terminal:

```bash
npm ci
npm run dev
```

Open the local address printed by Vite (normally http://localhost:5173).

```bash
npm run build    # generate the production site in dist/
npm run preview  # preview the production build locally
```

The committed `package-lock.json` keeps dependency versions consistent between local and GitHub builds. Use `npm install` when intentionally changing dependencies and commit the updated lockfile. No API, database, external fonts, image services or environment variables are required. The initial dependency installation requires internet access.

## What to edit

| File | Purpose |
| --- | --- |
| `src/content.js` | Exhibition title, date, search description, Greek/English text, artist and gallery contacts, and artwork list |
| `src/App.jsx` | React components, gallery, information overlay, navigation behavior |
| `src/styles.css` | Typography, spacing, responsive layout, navbar transparency, and transitions |
| `public/artworks/` | The 13 supplied original artwork JPGs, with filenames derived from Identification |
| `public/logos/loose-ends-logo.png` | Supplied exhibition logo for the upper-left navigation and browser tab |
| `public/logos/imposter-studio-logo.png` | Supplied Imposter Studio logo in the footer |
| `index.html` / `vite.config.js` | HTML shell and static title/description metadata injection |
| `package.json` | Project name, commands, dependencies |

For an artwork, edit the object in `artworks` in `src/content.js`. Give it a unique `id`, a path relative to `public/`, descriptive `alt` text, title, medium and dimensions. `width` and `height` are the photo's pixel dimensions, separate from the physical artwork dimensions. Subtitle, price and year are optional; leave them out or set them to `''` to hide those lines. Source prices include the euro symbol and source dimensions include `cm`, as imported from the CSV. The catalogue displays prices as bare numbers and places the unit in the label **Dimensions (cm)**.

Both views share an exhibition heading, an artist-only **Get in touch** section and a footer. The footer contains the copyright at the left, a small Imposter Studio logo in the center, and the studio's contact email at the right. The exhibition title, date and location feed the search metadata; the date is fixed, not a changing visitor date. The exhibition descriptions preserve the supplied text and should be edited separately when the exhibition copy changes. Replace the PNG logos when changing the exhibition or organiser. The header displays the original square logo with its transparent vertical padding outside the visible image box. Interface labels such as “Get in touch”, “Medium” and “Price” are in `src/App.jsx`.

## Design and behavior

- Fixed white navbar with 86% opacity and subtle backdrop blur; 56px high on desktop and 52px on mobile. The smaller exhibition logo remains larger than the information icon. Logo scrolls to the top, and closes the information overlay if it is open.
- The information button morphs from a circled i into an X. The full-screen panel fades in and scrolls independently; closing restores the gallery scroll position. Escape also closes the panel. Keyboard focus is confined to the open panel and navbar; reduced motion is supported.
- Both views use the same heading position and typography: exhibition title, artist subtitle, then date and location. Desktop content is limited to 860px; bilingual information text to 720px.
- Artwork images have no surrounding background or divider lines and are centered vertically against their details on desktop. Tablets retain a two-column catalogue with tighter spacing. At 620px and below, each image sits above its details. Images retain their intrinsic proportions, with generous space between entries and equal gaps between metadata rows.
- The GR and EN labels use a shared fixed-width grid column, keeping every line of both language paragraphs aligned.
- Uses Georgia with system serif fallbacks; no fonts are downloaded. The price row is optional.
- The Vite HTML transform injects the exhibition name and description into the delivered HTML, including Open Graph title and description. Search engines may rewrite snippets; metadata does not guarantee a particular search result. This is a client-rendered SPA; consider prerendering if fully static body content is important for SEO.
- Original artwork photos and logos are stored locally, without changing their pixels. No Google Drive image requests are needed to view the catalogue.

## GitHub Pages

Repository: https://github.com/s9ta2l/loose_ends_price_list

Expected site address after deployment: https://s9ta2l.github.io/loose_ends_price_list/

1. Push the project, including `package-lock.json` and `.github/workflows/deploy.yml`, to the `main` branch.
2. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Review any final exhibition content and UI changes locally with `npm run dev` or `npm run preview`.
4. Open **Actions → Deploy to GitHub Pages → Run workflow**, select `main`, and run it.

The workflow installs dependencies with `npm ci`, runs `npm run build`, and publishes `dist/`. Deployment is manual: after pushing a content or UI update, run the workflow again when ready to publish it. The existing relative asset base (`./`) supports the repository subpath. No routing fallback, server-side code or hosting secrets are required.

Reference: [Vite's GitHub Pages deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).
