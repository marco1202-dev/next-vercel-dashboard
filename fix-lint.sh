#!/bin/bash

# Format all files with Prettier
echo "Running Prettier..."
npx prettier --write "**/*.{js,jsx,ts,tsx,json,md}"

# Fix ESLint issues
echo "Running ESLint..."
npx eslint --fix "src/**/*.{js,jsx,ts,tsx}"

# Check TypeScript types
echo "Checking TypeScript types..."
npx tsc --noEmit

echo "Formatting and linting completed!" 