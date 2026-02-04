# 🚀 Quick Start Commands

## Installation & Development

```bash
# Install all dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Git Commands

```bash
# Create GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/moon-reading-affiliate.git
git branch -M main
git push -u origin main

# View commits
git log --oneline

# Create new branch
git checkout -b feature/your-feature-name

# Push changes
git add .
git commit -m "Your message"
git push origin main
```

## Deployment

### Vercel (1-click deploy)
```bash
# 1. Push to GitHub (see Git Commands above)
# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"
```

### Netlify Deploy
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Manual Build
```bash
npm run build
# Deploy .next folder to your hosting
npm start
```

## Project Structure Quick Reference

```
app/
├── components/          # Reusable components
│   ├── Hero.tsx        # Main section
│   ├── Benefits.tsx    # 6 benefit cards
│   ├── HowItWorks.tsx  # 3-step process
│   ├── Testimonials.tsx # Social proof
│   ├── FAQ.tsx         # Q&A section
│   ├── FinalCTA.tsx    # Final call-to-action
│   ├── Header.tsx      # Navigation
│   └── Footer.tsx      # Footer
├── layout.tsx          # Root layout + SEO
├── page.tsx            # Main page
└── globals.css         # Global styles

public/                 # Static files
package.json            # Dependencies
next.config.js          # Next.js settings
tsconfig.json           # TypeScript settings
```

## Key Configuration

### Affiliate Link Location
- **Hero.tsx** (line ~10)
- **Benefits.tsx** (line ~8)
- **HowItWorks.tsx** (line ~8)
- **FinalCTA.tsx** (line ~8)

Search for: `const affiliateLink = '...'`

### SEO Metadata
- **File**: `app/layout.tsx`
- **Lines**: 5-25
- Update title, description, keywords

### Analytics Setup
- **File**: `app/layout.tsx`
- **Google Analytics**: Replace `GA_MEASUREMENT_ID`
- **Meta Pixel**: Replace `YOUR_PIXEL_ID`

## Testing

```bash
# Start dev server
npm run dev

# Test in browser
# - http://localhost:3000
# - Open DevTools (F12)
# - Check Console for errors
# - Test all CTA buttons
# - Test mobile responsiveness (Ctrl+Shift+M)

# Lighthouse audit
# - DevTools → Lighthouse
# - Run performance audit
```

## Troubleshooting

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run dev

# Check for errors
npm run build   # Shows build errors

# Port already in use
npm run dev -- -p 3001  # Use different port
```

## Environment Variables (Optional)

Create `.env.local`:
```
NEXT_PUBLIC_GA_ID=YOUR_GA_TRACKING_ID
NEXT_PUBLIC_PIXEL_ID=YOUR_FACEBOOK_PIXEL_ID
```

Access in code:
```typescript
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const pixelId = process.env.NEXT_PUBLIC_PIXEL_ID;
```

## File Size Check

```bash
# Build and check bundle size
npm run build

# See the build output size
# Look for: "dist" or ".next" folder
```

## Update Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Audit for vulnerabilities
npm audit
npm audit fix
```

## Documentation

- **README.md** - Project overview
- **PROJECT_SUMMARY.md** - Complete summary
- **DEPLOYMENT.md** - Deployment instructions
- **Next.js Docs**: https://nextjs.org/docs
- **Bootstrap Docs**: https://getbootstrap.com/docs

---

**Need help?** See PROJECT_SUMMARY.md or DEPLOYMENT.md

**Ready to deploy?** Push to GitHub → Deploy on Vercel → Done! 🎉
