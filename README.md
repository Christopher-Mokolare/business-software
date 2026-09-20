# Mokolare Systems

Business-facing software studio site for Christopher Mokolare.

## Purpose

This is the public-facing business site for selling custom software and automation services to growing businesses. It is intentionally business-first rather than a developer portfolio.

## Stack

- Angular 20 standalone components
- TypeScript
- Responsive mobile-first CSS
- Light/dark theme with system preference
- Angular static prerendering (SSG)
- GitHub Pages
- GitHub Actions

## Routes

- /
- /services
- /work
- /process
- /contact

The public pages are prerendered at build time, so the site is delivered as static HTML while retaining Angular component architecture and client-side navigation.

## Local development

```bash
npm install
npm start
```

Production build:

```bash
npm run build:prod
```

GitHub Pages build:

```bash
npm run build:pages
```

## Deployment

Pushes to `main` run the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`.

GitHub Pages is enabled with **Settings → Pages → Source: GitHub Actions**.

Current project-site URL:

`https://christopher-mokolare.github.io/business-software/`

If a custom domain is introduced later, update the canonical URL, sitemap and the Pages build base path accordingly.

## Production checklist

- [x] Mobile-first responsive layout
- [x] Light/dark mode
- [x] Componentized Angular architecture
- [x] Static prerendering
- [x] Route titles and descriptions
- [x] robots.txt
- [x] sitemap.xml
- [x] Accessibility skip link and navigation labels
- [x] GitHub Actions CI
- [x] GitHub Pages deployment workflow
- [x] GitHub Pages enabled
- [ ] Verify successful production deployment
- [ ] Connect a real contact-form delivery endpoint
- [ ] Add final social preview image
- [ ] Add custom domain when the business domain is ready

## Business positioning

Mokolare Systems helps businesses replace spreadsheets, WhatsApp, email and manual administration with secure software systems, workflow automation, customer portals, payment integrations and operational platforms.
