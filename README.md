# Wakara Technologies

**Learning Engineering as a Service**

Official website for [Wakara Technologies](https://wakaratech.com) — an EdTech consultancy based in Nairobi, Kenya. We partner with EdTech leaders, public institutions, and innovation teams to design, build, and scale learning products that work.

## What We Do

- **Learning Experience Design** — Curriculum architecture, instructional design, and learning product strategy
- **Digital Transformation Strategy** — Helping institutions move from analogue to digital without losing what works
- **Product & Innovation Engineering** — Building learning tools, platforms, and prototypes from scratch
- **Accessibility & Inclusion** — Designing for low-bandwidth, low-literacy, and low-resource contexts
- **Growth & Scale Operations** — Systems and processes to take learning products from pilot to scale

## TinkerWith_ Lab

A collection of learning-tech experiments built in the open. Prototypes include tools for robotics curriculum, cyber security awareness, emotional self-regulation, career development, and more. See the [Prototypes page](https://wakaratech.com/prototypes.html) for the full list.

## Site Structure

```
/
├── index.html          — Home / Coming Soon
├── about.html          — About (bio, credentials, career highlights)
├── services.html       — Services (5 service areas + engagement packages)
├── case-studies.html   — Case Studies (loaded from content.json)
├── prototypes.html     — TinkerWith_ Lab (loaded from content.json)
├── insights.html       — Insights / articles (loaded from content.json)
├── contact.html        — Contact form + FAQ
├── admin.html          — Password-protected content admin panel
├── content.json        — Single source of truth for dynamic content
├── assets/
│   ├── css/theme.css   — Brand design system & responsive layout
│   └── js/theme.js     — Mobile nav, scroll effects, animations
└── .nojekyll           — Disables Jekyll so GitHub Pages serves files correctly
```

## Tech Stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- Hosted on GitHub Pages at [wakaratech.com](https://wakaratech.com)
- Content managed via `content.json` (prototypes, insights, case studies)
- Admin panel for live content updates (password-protected)
- Contact form via Formspree

## Brand Tokens

| Token | Value |
|---|---|
| Navy | `#0f1e3d` |
| Sky Blue | `#4a90d9` |
| Orange | `#f26522` |
| Yellow | `#fcd116` |
| Cream | `#fafaf7` |
| Heading font | Plus Jakarta Sans |
| Body font | Inter |

## Local Development

No build step required. Open any HTML file directly in a browser, or serve locally:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Contact

- Email: [wakaratech@gmail.com](mailto:wakaratech@gmail.com)
- Phone / WhatsApp: +254 117 784 724
- Book a call: [30-min discovery session](https://calendar.app.google/kDBzfZApc8v6rd1K8)
- Location: Nairobi, Kenya — remote-first, available globally

---

&copy; 2026 Wakara Technologies. All rights reserved.
