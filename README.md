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

## Deployment

### Vercel Deployment

This project is configured for deployment on Vercel with full-stack support (Express backend + React frontend).

#### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ThePunkSky/SSTMProject)

#### Manual Deployment

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

#### Configuration

The project includes a `vercel.json` configuration file that:
- Runs the build command to compile both frontend and backend
- Routes all requests through the Express server running as a serverless function
- Handles SPA routing and API endpoints

The Express app is exported from `api/index.ts` as a Vercel serverless function.

#### Environment Variables

If your application requires environment variables (e.g., database credentials), configure them in your Vercel project settings:
1. Go to your project on Vercel
2. Navigate to Settings > Environment Variables
3. Add required variables (e.g., `DATABASE_URL`, `PORT`)

### GitHub Pages Deployment

This site can also be deployed to GitHub Pages when changes are pushed to the `main` branch.

The site is available at: https://thepunksky.github.io/SSTMProject/

#### Manual Deployment

To manually trigger a deployment:
1. Go to the repository's Actions tab
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

#### Configuration

The site uses a custom base path (`/SSTMProject/`) for GitHub Pages. This is configured in:
- `vite.config.ts` - Sets the base path when `GITHUB_PAGES=true`
- `.github/workflows/deploy-github-pages.yml` - The deployment workflow
- `client/public/404.html` - Handles client-side routing for GitHub Pages
- `client/index.html` - Includes redirect script for SPA routing