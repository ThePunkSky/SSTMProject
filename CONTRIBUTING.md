# Contributing to SSTMProject

Thank you for contributing to the SSTMProject! This guide will help you ensure your contributions meet our quality standards.

## Best Practice Checks

This project enforces best practice checks to ensure all code compiles, builds, and actually works. These checks run automatically in CI/CD pipelines and can also be enabled locally.

## Prerequisites

Before contributing, ensure you have:

- **Node.js**: Version 20.x or higher
- **npm**: Comes with Node.js
- **Git**: For version control

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ThePunkSky/SSTMProject.git
   cd SSTMProject
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Enable local git hooks (recommended):**
   ```bash
   ./setup-githooks.sh
   ```
   
   This enables pre-commit hooks that run the same checks as CI before each commit.

## Development Workflow

### Running Checks Manually

You can run the same checks that CI runs:

```bash
# TypeScript type checking
npm run check

# Build the application
npm run build

# Start the built application (press Ctrl+C to stop)
npm start
```

### Making Changes

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test your changes:
   ```bash
   npm run check  # Type check
   npm run build  # Build
   npm start      # Test the server
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   
   If you enabled git hooks, pre-commit checks will run automatically.

5. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request on GitHub

## CI/CD Pipeline

When you push code or open a Pull Request, the following checks run automatically:

### 1. **CI Workflow** (`.github/workflows/ci.yml`)
   - ✅ TypeScript type checking
   - ✅ Build verification
   - ✅ Build artifact validation
   - ✅ Server smoke test (ensures the server can start)

### 2. **Linting** (`.github/workflows/super-linter.yml`)
   - ✅ Code style and basic linting

### 3. **Deployment** (`.github/workflows/deploy-github-pages.yml`)
   - Only runs on `main` branch
   - Includes type checking before deployment
   - Deploys to GitHub Pages

## Pre-commit Hooks

If you ran `./setup-githooks.sh`, the following checks run before each commit:

1. **TypeScript Type Check**: Ensures no type errors
2. **Build Verification**: Ensures the code builds successfully
3. **Artifact Validation**: Ensures build outputs exist
4. **Smoke Test**: Ensures the server can start

### Bypassing Hooks (Not Recommended)

In rare cases where you need to commit without running checks:

```bash
git commit --no-verify -m "Your commit message"
```

**Warning**: CI will still run these checks, and your PR may fail.

## Common Issues

### Build Fails Locally

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Clear build artifacts:**
   ```bash
   rm -rf dist/
   npm run build
   ```

### TypeScript Errors

Run `npm run check` to see detailed type errors:

```bash
npm run check
```

Fix any reported errors before committing.

### Server Won't Start

1. Check the build succeeded:
   ```bash
   npm run build
   ls -la dist/
   ```

2. Check for errors in the logs:
   ```bash
   npm start
   ```

3. Ensure port 5000 is not in use:
   ```bash
   lsof -i :5000  # On Unix-like systems
   ```

## Code Quality Standards

- **TypeScript**: All code must pass `npm run check` with no errors
- **Build**: Code must compile successfully with `npm run build`
- **Runtime**: Built application must start without errors
- **Style**: Follow existing code patterns and conventions

## Pull Request Process

1. Ensure all checks pass locally
2. Open a Pull Request with a clear description
3. Wait for CI checks to pass (required)
4. Address any review feedback
5. Once approved and all checks pass, your PR will be merged

## Questions or Issues?

If you encounter any problems or have questions:

1. Check existing [Issues](https://github.com/ThePunkSky/SSTMProject/issues)
2. Open a new issue with details about the problem
3. Include error messages and steps to reproduce

## Thank You!

Your contributions make this project better. Thank you for following these guidelines!
