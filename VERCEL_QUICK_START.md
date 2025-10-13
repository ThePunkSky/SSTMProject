# Vercel Quick Start

Quick guide to deploy this project to Vercel and fix 404 errors.

## 🚀 Deploy in 3 Steps

### 1. Push to GitHub
```bash
git push origin main
```

### 2. Import to Vercel
1. Go to https://vercel.com/dashboard
2. Click "Add New Project"
3. Select your GitHub repository
4. Click "Import"

### 3. Deploy
- Vercel will auto-detect the configuration
- Click "Deploy"
- Wait for deployment to complete
- Your site will be live at `https://your-project.vercel.app`

## ✅ What's Configured

This repository includes:
- ✅ `vercel.json` - Tells Vercel how to build and deploy
- ✅ `.vercelignore` - Excludes unnecessary files
- ✅ `package.json` - Scripts for build and start
- ✅ `VERCEL_DEPLOYMENT.md` - Detailed documentation

## 🐛 Troubleshooting 404 Errors

If you get 404 errors after deployment:

1. **Check Build Logs**
   - Go to your Vercel project
   - Click on the deployment
   - Check "Build Logs" for errors

2. **Verify Build Output**
   - Make sure build completed successfully
   - Check that both frontend and backend were built

3. **Test Locally**
   ```bash
   npm run build
   npm start
   ```
   Visit http://localhost:5000

4. **Check Function Logs**
   - In Vercel Dashboard, go to "Logs" tab
   - Look for runtime errors

## 📝 Optional: Environment Variables

If you plan to use database features:
1. Go to Project Settings → Environment Variables
2. Add `DATABASE_URL` with your PostgreSQL connection string
3. Redeploy

**Note:** The app currently uses in-memory storage, so this is optional.

## 📚 More Information

- [Full Vercel Deployment Guide](./VERCEL_DEPLOYMENT.md)
- [GitHub Pages Deployment](./DEPLOYMENT.md)
- [Vercel Documentation](https://vercel.com/docs)
