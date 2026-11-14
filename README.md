# claranuta.com

Personal one-page site for Clara Nuta. Static HTML/CSS/JS, no build step.

## Structure

- `index.html` — the page (English source copy lives here and in `js/i18n.js`)
- `css/style.css` — styling; off-white, Cormorant Garamond + Inter; CJK font stacks per language
- `js/i18n.js` — translations: `en`, `ja`, `ko`, `zh` (Simplified). Missing keys fall back to English
- `js/main.js` — language switch (`?lang=ja`, remembered in localStorage, auto-detect from browser), reveal animations, active nav
- `assets/` — portraits (web-optimised), `og.jpg` social preview

## Languages

- English is the default and the source of truth.
- Japanese uses **Noto Sans JP** everywhere (client request), Korean Noto Serif/Sans KR, Chinese Noto Serif/Sans SC.
- JA / KO / ZH copy is a first draft: have a native speaker review before launch.

## Run locally

```
python -m http.server 8765
```

then open http://localhost:8765 (or use the `claranuta` entry in `.claude/launch.json`).

## Deploy

Any static host works (Netlify, Cloudflare Pages, GitHub Pages, Vercel). Upload the folder as-is and point `claranuta.com` at it.

## To confirm with Clara before launch

- Contact shows LinkedIn, personal Gmail, BISSELL work email and Singapore mobile, as Clara asked on 14 Nov 2026.
- Case-study wording and the growth figures (+17% Lumea, +15% OneBlade NA, +31% male grooming India) come from her LinkedIn summary.
- Which portrait she prefers in the hero (currently `Clara_012_v2`) and in About (`Clara_036_v2`).
- Whether she wants Korean and Chinese kept, or Japanese only.

## Image sources (launch gallery and logos)

- `assets/launches/spotclean-mini-japan.jpg` — BISSELL / VYPER JAPAN press release on PR TIMES (Japan launch of SpotClean Mini Pet Cordless 4065P, 21 Sep 2026).
- `assets/launches/lumea-prestige.jpg`, `lumea-red-dot.jpg` — Philips product imagery for Lumea Prestige BRI950/00 (philips.co.uk).
- `assets/launches/pencil-trimmer.jpg` — Philips product imagery for Precision trimmer HP6390/10 (philips.co.uk).
- `assets/logos/philips.svg`, `bissell.svg` — brand marks via Wikimedia.

These belong to Philips and BISSELL. Clara should confirm she is comfortable using them on a personal portfolio, or replace them with her own launch photos.
The Red Dot Award line is as Clara stated it; year and exact Lumea model are not verified yet. Model numbers 4065J and 4302J were not found online; only 4065P is documented for Japan.
