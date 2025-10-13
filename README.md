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

This project can be deployed to multiple platforms:

### Vercel Deployment (Recommended for Full-Stack)

Deploy the full application (frontend + backend + database) to Vercel.

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

Quick deploy:
1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Deploy!

### GitHub Pages Deployment (Static Site Only)

Deploy the frontend as a static site to GitHub Pages (no backend/database features).

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

The site is available at: https://thepunksky.github.io/SSTMProject/

For more details, see [DEPLOYMENT.md](./DEPLOYMENT.md)