# Vercel Deployment Guide

This guide explains how to deploy the SSTMProject to Vercel.

## Overview

This is a full-stack application with:
- **Frontend**: React SPA built with Vite
- **Backend**: Express.js server for API and static file serving
- **Database**: PostgreSQL (optional, configured via environment variables)

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Git repository pushed to GitHub
- Node.js 18+ installed locally (for testing)

## Deployment Options

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Import your repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." > "Project"
   - Import your GitHub repository

2. **Configure the project**:
   - Framework Preset: **Other**
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: Leave blank (Vercel will use the configuration from `vercel.json`)
   - Install Command: `npm install --legacy-peer-deps`

3. **Set environment variables** (if needed):
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `NODE_ENV`: `production` (optional, set automatically)
   - Add any other environment variables your app requires

4. **Deploy**:
   - Click "Deploy"
   - Wait for the build and deployment to complete
   - Your app will be available at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

4. **Set environment variables** (if needed):
   ```bash
   vercel env add DATABASE_URL
   vercel env add NODE_ENV
   ```

## How It Works

### Architecture

The application uses a serverless architecture on Vercel:

1. **Build Process**:
   - `npm run build` compiles both frontend (to `dist/public`) and backend (to `dist/index.js`)
   - Frontend assets are bundled and optimized by Vite
   - Backend is bundled by esbuild

2. **Serverless Function**:
   - `api/index.ts` exports the Express app as a Vercel serverless function
   - All requests are routed through this function (configured in `vercel.json`)
   - The function initializes the Express app on first request (cold start)
   - Subsequent requests reuse the initialized app (warm requests)

3. **Routing**:
   - Static assets are served from `dist/public`
   - API routes (e.g., `/api/*`) are handled by Express
   - All other routes fallback to `index.html` for SPA routing

### Key Files

- **`vercel.json`**: Vercel configuration
  - Specifies build command
  - Configures routing to the API function

- **`api/index.ts`**: Vercel serverless function entry point
  - Imports and initializes the Express app
  - Exports a handler function that Vercel calls

- **`server/app.ts`**: Express app configuration
  - Exports `createApp()` function that sets up routes and middleware
  - Shared between standalone server (`server/index.ts`) and serverless function (`api/index.ts`)

- **`server/index.ts`**: Standalone server (for local development)
  - Uses `createApp()` to initialize the Express app
  - Starts an HTTP server on the specified port

## Testing Locally

Before deploying, test the production build locally:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

Visit `http://localhost:5000` to verify everything works.

## Troubleshooting

### 404 Errors

If you see 404 errors after deployment:

1. **Check the build logs** in Vercel dashboard
   - Ensure the build completed successfully
   - Verify `dist/public` and `dist/index.js` were created

2. **Verify routing configuration**:
   - Check `vercel.json` has the correct rewrite rules
   - Ensure `api/index.ts` exists and exports the app correctly

3. **Check environment variables**:
   - If using a database, ensure `DATABASE_URL` is set
   - Check logs for any missing environment variable errors

### Cold Start Issues

Serverless functions have "cold starts" (initialization delay on first request after inactivity):

- **First request** may take 1-5 seconds
- **Subsequent requests** are fast (warm)
- This is normal behavior for serverless functions

To minimize cold starts:
- Keep your application bundle small
- Use Vercel's Edge Functions for critical paths (advanced)

### Static Asset 404s

If CSS/JS files return 404:

1. Check the `base` path in `vite.config.ts`
2. Ensure it's set to `"/"` for Vercel (not `/SSTMProject/`)
3. The code should already handle this correctly:
   ```typescript
   base: process.env.GITHUB_PAGES === "true" ? "/SSTMProject/" : "/"
   ```

### Build Failures

If the build fails on Vercel:

1. **Check Node.js version**:
   - Vercel uses Node.js 18 by default
   - Ensure your app is compatible

2. **Install command**:
   - Use `npm install --legacy-peer-deps` if you have peer dependency warnings
   - Configure this in Vercel project settings > General > Build & Development Settings

3. **Memory limits**:
   - Default Vercel builds have 3GB memory
   - If build fails with out-of-memory errors, contact Vercel support

## Differences from GitHub Pages

| Feature | Vercel | GitHub Pages |
|---------|--------|--------------|
| Backend Support | ✅ Yes (serverless) | ❌ No (static only) |
| API Routes | ✅ Yes | ❌ No |
| Base Path | `/` | `/SSTMProject/` |
| Custom Domain | ✅ Easy setup | ✅ Requires DNS config |
| Build Time | ~2-3 minutes | ~2-3 minutes |
| Deploy Trigger | Git push or manual | Git push to main |

## Environment Variables

Required/optional environment variables:

- `DATABASE_URL`: PostgreSQL connection string (optional, only if using database)
- `NODE_ENV`: Automatically set to `production` by Vercel
- `PORT`: Not needed (Vercel manages this)

## Custom Domain

To use a custom domain:

1. Go to your project on Vercel
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update your DNS records as instructed by Vercel

## Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

You can configure this in:
- Vercel Dashboard > Project Settings > Git

## Monitoring and Logs

View logs in real-time:
- Vercel Dashboard > Your Project > Logs
- Or use the CLI: `vercel logs`

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Vercel Support](https://vercel.com/support)
