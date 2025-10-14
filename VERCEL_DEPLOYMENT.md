# Vercel Deployment Guide

This guide explains how to deploy the SSTMProject to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. The Vercel CLI (optional, for local testing): `npm i -g vercel`

## Deployment Steps

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (if not already done)

2. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

3. **Click "Add New Project"**

4. **Import your GitHub repository:**
   - Select "Import Git Repository"
   - Choose `ThePunkSky/SSTMProject`
   - Click "Import"

5. **Configure the project:**
   - **Framework Preset:** Select "Vite" or "Other"
   - **Root Directory:** Leave as default (`.`)
   - **Build Command:** `npm run build` (configured in vercel.json)
   - **Install Command:** `npm install --legacy-peer-deps`
   - **Output Directory:** `dist/public` (configured in vercel.json)

6. **Click "Deploy"**

8. **Wait for deployment to complete**
   - Vercel will install dependencies, build the project, and deploy it
   - You'll get a URL like `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project directory
cd /path/to/SSTMProject

# Login to Vercel (first time only)
vercel login

# Deploy to preview (staging)
vercel

# Deploy to production
vercel --prod
```

## How It Works

The project is configured as a **static site** on Vercel:

1. **Build Process:**
   - Vercel runs `npm install --legacy-peer-deps`
   - Vercel runs `npm run build`
     - This builds the React frontend with Vite → `dist/public/`
     - This builds the Express backend with esbuild → `dist/index.js` (not used by Vercel)

2. **Runtime:**
   - Vercel serves the static React app from `dist/public/`
   - All static files (HTML, CSS, JS, images) are served directly by Vercel's CDN
   - SPA routing is handled automatically by Vercel's static site features

## Configuration Files

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public"
}
```

This configuration:
- Runs `npm run build` to build the React frontend and Express backend
- Serves the static React app from the `dist/public/` directory
- Vercel handles SPA routing automatically for static sites

### `.vercelignore`
Excludes unnecessary files from deployment to keep the deployment size small.

## Troubleshooting

### 404 Errors

If you're getting 404 errors after deployment:

1. **Check the deployment logs:**
   - Go to your project in Vercel Dashboard
   - Click on the deployment
   - Check the "Build Logs" tab for any errors

2. **Verify the build succeeded:**
   - Make sure `npm run build` completed successfully
   - Check that `dist/public/` was created with `index.html` and `assets/`

3. **Test locally:**
   ```bash
   npm run build
   cd dist/public
   python3 -m http.server 8080
   # Visit http://localhost:8080
   ```

4. **Check deployment logs:**
   - Go to your project in Vercel Dashboard
   - Click on the deployment
   - Check the "Build Logs" and "Deployment" tabs for any errors

### Build Failures

If the build fails:

1. **Check Node.js version:**
   - Vercel uses Node.js 18.x by default
   - You can specify a version in `package.json`:
     ```json
     "engines": {
       "node": ">=18.0.0"
     }
     ```

2. **Check dependencies:**
   - Ensure all dependencies are in `package.json`
   - The `--legacy-peer-deps` flag handles peer dependency issues

3. **Memory issues:**
   - If the build runs out of memory, you may need to upgrade your Vercel plan
   - Or optimize the build process

### Assets Not Loading

If CSS/JS files return 404:

1. **Check the build output:**
   - Verify files exist in `dist/public/assets/`
   - Check the `dist/public/index.html` references

2. **Check base path:**
   - For Vercel, the base path should be `/` (not `/SSTMProject/`)
   - This is correct in `vite.config.ts` - it only uses `/SSTMProject/` for GitHub Pages

## Differences from GitHub Pages

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| Type | Static hosting | Static hosting (CDN) |
| Backend | ❌ No | ⚠️ Not deployed (frontend only) |
| Base Path | `/SSTMProject/` | `/` |
| CDN | ✅ Yes | ✅ Yes (faster global) |
| Custom Domain | ✅ Yes | ✅ Yes (easier setup) |
| Build | GitHub Actions | Vercel Build |

## Custom Domain

To use a custom domain:

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed by Vercel
4. Vercel automatically provisions SSL certificate

## Automatic Deployments

Vercel automatically deploys:
- **Production:** When you push to `main` branch
- **Preview:** When you push to other branches or open a PR

You can configure this in Project Settings → Git.

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Node.js Runtime](https://vercel.com/docs/functions/serverless-functions/runtimes/node-js)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)
