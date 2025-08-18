#  ChatGPT 5 Website Starter (Vite + React)

Minimal starter you can run locally, push to GitHub, and auto‑deploy to Hostinger.
It also creates pull‑request **live previews** using GitHub Pages.

## Quick start
```bash
npm install
npm run dev
# open http://localhost:5173
```

## Build
```bash
npm run build
# static files in ./dist
```

## Deploy pipeline (what's inside)
- `.github/workflows/deploy-hostinger.yml` — builds and deploys to Hostinger via FTP on pushes to `main`
- `.github/workflows/deploy-pages.yml` — builds and publishes `dist/` to the `gh-pages` branch for Pages
- `.github/workflows/pr-preview.yml` — posts a live preview link on every PR

### GitHub Secrets required (Repo → Settings → Secrets and variables → Actions)
- `FTP_SERVER` — e.g. `ftp.yourdomain.com`
- `FTP_USERNAME` — your FTP user
- `FTP_PASSWORD` — your FTP password
- `FTP_PORT` — e.g. `21` (or `990` for FTPS)
- `FTP_DIR` — usually `public_html`

### Hostinger
- Create an FTP account (hPanel → Websites → Manage → Files → FTP Accounts)
- Or use Hostinger's **Git deployment** instead of FTP (hPanel → Git) and set **Auto‑Deployment** webhook

### Notes
- `vite.config.js` uses `base: './'` so GitHub Pages previews work from sub‑paths.
- For SSR/Node frameworks, use Hostinger VPS or a platform that supports Node runtimes.
