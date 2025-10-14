#!/bin/bash

# Setup script to enable git hooks for best practice checks
# Run this after cloning the repository: ./setup-githooks.sh

set -e

echo "🔧 Setting up git hooks..."

# Configure git to use .githooks directory
git config core.hooksPath .githooks

echo "✅ Git hooks configured successfully!"
echo ""
echo "The following checks will now run before each commit:"
echo "  • TypeScript type checking (npm run check)"
echo "  • Build verification (npm run build)"
echo "  • Smoke test (server starts successfully)"
echo ""
echo "To skip hooks temporarily (not recommended), use: git commit --no-verify"
