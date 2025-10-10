# GitHub Pages Deployment Guide

This document explains how to complete the setup for GitHub Pages hosting.

## What Has Been Configured

The following changes have been made to enable GitHub Pages deployment:

1. **GitHub Actions Workflow** (`.github/workflows/deploy-github-pages.yml`)
   - Automatically builds and deploys the site when changes are pushed to `main`
   - Can also be triggered manually from the Actions tab

2. **Vite Configuration** (`vite.config.ts`)
   - Configured to use `/SSTMProject/` as the base path when building for GitHub Pages
   - Maintains `/` for local development

3. **SPA Routing Support**
   - Added `404.html` to handle client-side routing on GitHub Pages
   - Added redirect script to `index.html` to support direct navigation to routes

4. **Documentation**
   - Updated `README.md` with deployment instructions

## Required GitHub Repository Settings

To complete the setup, you need to configure GitHub Pages in your repository settings:

### Steps:

1. Go to your repository on GitHub: https://github.com/ThePunkSky/SSTMProject

2. Click on **Settings** (top navigation)

3. In the left sidebar, click on **Pages** (under "Code and automation")

4. Under **Source**, select:
   - Source: **GitHub Actions**
   
   (This is important! Don't select "Deploy from a branch" - we're using GitHub Actions)

5. Click **Save** if needed

### First Deployment

Once the PR is merged to `main`:

1. The GitHub Actions workflow will automatically run
2. You can monitor the deployment in the **Actions** tab
3. After successful deployment, the site will be available at:
   
   **https://thepunksky.github.io/SSTMProject/**

### Manual Deployment

To manually trigger a deployment:

1. Go to the **Actions** tab in your repository
2. Select the **"Deploy to GitHub Pages"** workflow from the left sidebar
3. Click the **"Run workflow"** button
4. Select the `main` branch
5. Click **"Run workflow"**

## Local Development

The changes do not affect local development:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server (uses base path "/")
npm run dev

# Build for production (uses base path "/")
npm run build

# Build for GitHub Pages (uses base path "/SSTMProject/")
GITHUB_PAGES=true npm run build
```

## Troubleshooting

### Site not loading or 404 errors

- Verify that GitHub Pages source is set to "GitHub Actions" in repository settings
- Check the Actions tab for any failed workflow runs
- Ensure the base path in `vite.config.ts` matches your repository name

### Assets not loading (404 for CSS/JS files)

- The base path should be `/SSTMProject/` (matching your repository name)
- This is already configured in `vite.config.ts`

### Client-side routing not working

- The `404.html` and redirect script in `index.html` handle this
- Both are already configured and will be deployed automatically

### Workflow permission errors

If you see permission errors in the Actions tab:

1. Go to repository **Settings** > **Actions** > **General**
2. Under "Workflow permissions", select **"Read and write permissions"**
3. Enable **"Allow GitHub Actions to create and approve pull requests"**
4. Click **Save**

## What's Next

1. Merge this PR to the `main` branch
2. Configure GitHub Pages in repository settings as described above
3. Monitor the first deployment in the Actions tab
4. Visit your site at https://thepunksky.github.io/SSTMProject/

That's it! Your site will automatically redeploy whenever you push changes to the `main` branch.
