# Elearna website

E-learning website (Elearna template) built with React, Vite and Tailwind CSS.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy
- **GitHub Pages:** push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
  In the repository go to **Settings → Pages → Source** and choose **GitHub Actions** (one time only).
  Live URL: https://marzia-sadeqi.github.io/Elearna-website/
- **Vercel:** import the repo; `vercel.json` already handles page routing.
