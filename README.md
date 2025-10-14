# SSTMProject

![CI](https://github.com/ThePunkSky/SSTMProject/actions/workflows/ci.yml/badge.svg)
![Deploy](https://github.com/ThePunkSky/SSTMProject/actions/workflows/deploy-github-pages.yml/badge.svg)
![Lint](https://github.com/ThePunkSky/SSTMProject/actions/workflows/super-linter.yml/badge.svg)

The Sky Motorsports - American Muscle V8 Performance & Custom Builds

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

## Contributing

We enforce best practice checks to ensure code quality. Before contributing:

1. **Enable git hooks** (recommended):
   ```bash
   ./setup-githooks.sh
   ```

2. **Run checks before committing**:
   ```bash
   npm run check  # TypeScript type checking
   npm run build  # Build verification
   ```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## Deployment

This project can be deployed to multiple platforms:

### Vercel Deployment (Recommended for Full-Stack)

Deploy the full application (frontend + backend + database) to Vercel.

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

#### Manual Deployment

### GitHub Pages Deployment (Static Site Only)

#### Configuration

For more details, see [DEPLOYMENT.md](./DEPLOYMENT.md)