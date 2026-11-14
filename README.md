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

- Email address shown in Contact (currently the one from her LinkedIn PDF). Remove if she prefers LinkedIn only.
- Case-study wording and the growth figures (+17% Lumea, +15% OneBlade NA, +31% male grooming India) come from her LinkedIn summary.
- Which portrait she prefers in the hero (currently `Clara_012_v2`) and in About (`Clara_036_v2`).
- Whether she wants Korean and Chinese kept, or Japanese only.
