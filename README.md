# Wakara Technologies — Static Site

Pure static HTML/CSS/JS website for Wakara Technologies, hosted via GitHub Pages.

## Site Structure

```
/
├── index.html          — Home page (hero, services grid, case studies preview, CTA)
├── about.html          — About page (bio, credentials, career highlights, values)
├── services.html       — Services page (5 service areas expanded + 4 package cards)
├── case-studies.html   — Case Studies (Eneza, CANEX/IATF, Qhala — full-width cards)
├── prototypes.html     — Prototypes / TinkerWith_ Lab (6 project cards with status badges)
├── insights.html       — Insights (3 articles + topic grid)
├── contact.html        — Contact (info + HTML form + FAQ)
├── assets/
│   ├── css/
│   │   └── theme.css   — Full brand design system & responsive layout
│   └── js/
│       └── theme.js    — Mobile nav, scroll effects, IntersectionObserver animations
├── .nojekyll           — Enables GitHub Pages to serve the site correctly
└── README.md           — This file
```

## Brand

| Token | Value |
|---|---|
| Navy | `#0f1e3d` |
| Navy Light | `#1a2d52` |
| Sky Blue | `#4a90d9` |
| Orange | `#f26522` |
| Yellow | `#fcd116` |
| Cream | `#fafaf7` |
| Heading font | Plus Jakarta Sans |
| Body font | Inter |

## Features

- Fixed navbar with backdrop blur; collapses to hamburger at 768px
- Mobile slide-in navigation
- Hero with animated floating blob and pulsing badge
- Service, package, case study, prototype, and insight card components
- Fade-in on scroll via IntersectionObserver
- `translateY(-6px)` hover lift on all `.card-hover` elements
- Status badges: Live (green), In Progress (yellow), Concept (gray)
- Tech tag pills in sky-blue
- Responsive at 1024px (2-col) and 640px (1-col)
- Contact form with service selector (connect to Formspree or your backend)
- Dark navy footer with 3-column grid

## GitHub Pages

The `.nojekyll` file at the root ensures GitHub Pages serves files correctly without Jekyll processing. To deploy: push to the branch and enable GitHub Pages in repository settings, pointing to this branch root.

## Local Development

No build step required. Open any HTML file directly in a browser, or use a simple local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```
