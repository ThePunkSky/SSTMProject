# Quick Start: CI Best Practice Checks

## 🚀 For New Contributors

### One-Time Setup (Recommended)
```bash
# Enable automatic pre-commit checks
./setup-githooks.sh
```

That's it! Now every commit will be validated automatically.

### Manual Checks (Alternative)
```bash
# Run before committing
npm run check  # Type check
npm run build  # Build
npm start      # Test (Ctrl+C to stop)
```

## 📝 What Gets Checked

Every commit and PR is automatically validated:

1. ✅ **TypeScript Type Check** - No type errors
2. ✅ **Build Verification** - Code compiles successfully
3. ✅ **Artifact Validation** - Build outputs exist
4. ✅ **Smoke Test** - Server actually starts

## 🎯 Quick Commands

```bash
# Setup hooks (one-time)
./setup-githooks.sh

# Check types
npm run check

# Build project
npm run build

# Start server
npm start

# Commit (with pre-commit checks)
git commit -m "Your message"

# Bypass checks (NOT recommended)
git commit --no-verify -m "Your message"
```

## 📊 CI Status

Check the README for live status badges showing:
- CI pipeline status
- Deployment status
- Linting status

## 🔍 Troubleshooting

### Pre-commit Hook Issues
```bash
# Reinstall dependencies
rm -rf node_modules
npm install --legacy-peer-deps

# Clear build
rm -rf dist/
npm run build
```

### Port Already in Use
The smoke test automatically skips if port 5000 is in use (e.g., dev server running).

### Type Check Fails
```bash
# See detailed errors
npm run check

# Fix the errors shown
```

## 📖 More Information

- **Full Guide**: See [CONTRIBUTING.md](./CONTRIBUTING.md)
- **Technical Details**: See [CI_CHECKS_SUMMARY.md](./CI_CHECKS_SUMMARY.md)
- **Deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)

## ✨ Success Criteria

Your code is ready to merge when:
- ✅ Pre-commit checks pass (if enabled)
- ✅ CI workflow passes (automatic)
- ✅ Code review approved
- ✅ No merge conflicts

Keep coding! 🎉
