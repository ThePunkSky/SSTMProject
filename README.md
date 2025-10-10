# SSTMProject

2 The Sky Motorsports - American Muscle V8 Performance & Custom Builds

## Development

Install dependencies:
```bash
npm install --legacy-peer-deps
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## GitHub Pages Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The site is available at: https://thepunksky.github.io/SSTMProject/

### Manual Deployment

To manually trigger a deployment:
1. Go to the repository's Actions tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Configuration

The site uses a custom base path (`/SSTMProject/`) for GitHub Pages. This is configured in:
- `vite.config.ts` - Sets the base path when `GITHUB_PAGES=true`
- `.github/workflows/deploy-github-pages.yml` - The deployment workflow
- `client/public/404.html` - Handles client-side routing for GitHub Pages
- `client/index.html` - Includes redirect script for SPA routing