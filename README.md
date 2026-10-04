# James Bluespan 2070 — Chasmia, Forward

A light-blue campaign site for James Bluespan’s 2070 re-election campaign. The uncluttered home page, Meet James page, and 2070 agenda use the existing Chasmia platform and local campaign images.

[View the live campaign site](https://manualalan.github.io/James-Bluespan-Campaign/)

## Local development

```bash
npm install
npm run dev
```

Build with `npm run build`, then generate the GitHub Pages edition with `npm run export:pages`. The exporter renders the production build directly, including its bundled fonts; no development server is required. Set `EXPORT_ORIGIN` only to export from a running server instead.

Run `npm test` after exporting to check the deployable HTML, links, local images, fonts, and campaign downloads. GitHub Pages serves the checked-in `docs` directory on `main`.

The share button copies the public campaign link and shows the link directly when clipboard access is unavailable. The campaign card downloads as SVG. There is no email signup backend.
