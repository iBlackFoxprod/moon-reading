Command "npm run build" exited with 1#!/bin/bash

# Quick setup script for Moon Reading landing page

echo "🌙 Moon Reading Landing Page - Setup"
echo "===================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start development server: npm run dev"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Build for production: npm run build"
echo "4. Deploy to Vercel: https://vercel.com"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
