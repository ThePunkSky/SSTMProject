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

This project is configured for deployment on Vercel.

### Environment Variables

Before deploying, make sure to configure the following environment variables in Vercel:

- `DATABASE_URL` - PostgreSQL database connection string (required)

See `.env.example` for reference.

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel project settings
4. Vercel will automatically detect the configuration and deploy

The build settings are configured in `vercel.json`.