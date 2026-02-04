# Deployment Guide - Moon Reading Landing Page

## Quick Start

Your Next.js landing page is ready to deploy! Follow these steps to get it live.

---

## Option 1: Deploy to Vercel (RECOMMENDED - Easiest)

Vercel is the official Next.js hosting platform with automatic deployments from GitHub.

### Step 1: Create GitHub Repository

```bash
cd "e:\CODING PROJECTS\2026\moonreading ad"

# Add your GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/moon-reading-affiliate.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. Click "New Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"
6. Vercel will auto-detect Next.js configuration
7. Click "Deploy"

**That's it!** Your site is live in ~60 seconds.

### Step 3: Configure Domain (Optional)

1. In Vercel dashboard, go to "Settings" → "Domains"
2. Add your custom domain
3. Update DNS records as instructed

---

## Option 2: Deploy to Netlify

Netlify also supports Next.js with automatic deployments.

### Step 1: Push to GitHub (Same as Vercel)

```bash
git remote add origin https://github.com/YOUR_USERNAME/moon-reading-affiliate.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and choose your repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
5. Click "Deploy site"

---

## Option 3: Manual Deployment (Self-Hosted)

### Build for Production

```bash
cd "e:\CODING PROJECTS\2026\moonreading ad"
npm install
npm run build
```

This creates an optimized `.next` folder ready for production.

### Deploy to Your Server

1. Upload the entire project to your server
2. Install Node.js on your server
3. Run:
```bash
npm install --production
npm start
```

The site will run on `http://localhost:3000`

### Using PM2 (Recommended for Linux)

```bash
npm install -g pm2
npm run build
pm2 start npm --name "moon-reading" -- start
pm2 startup
pm2 save
```

---

## GitHub Repository Setup

### Create Private Repository

```bash
# Create a new private repo on github.com first, then:

git remote add origin https://github.com/YOUR_USERNAME/moon-reading-affiliate.git
git branch -M main
git push -u origin main
```

### Repository Structure

Your repo now contains:
```
├── app/                    # Next.js app directory
├── public/                 # Static files
├── package.json            # Dependencies
├── next.config.js          # Next.js config
├── tsconfig.json           # TypeScript config
├── README.md               # Documentation
└── .gitignore              # Git ignore rules
```

---

## Environment Variables (If Needed)

Create `.env.local` in root directory:

```
# Analytics
NEXT_PUBLIC_GA_ID=YOUR_GOOGLE_ANALYTICS_ID
NEXT_PUBLIC_PIXEL_ID=YOUR_FACEBOOK_PIXEL_ID

# Optional: API keys if you add backend features
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Post-Deployment Checklist

- [ ] Site loads without errors
- [ ] All CTA buttons link to affiliate URL correctly
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Page speed is fast (test on PageSpeed Insights)
- [ ] SEO metadata visible (check page source)
- [ ] Analytics tracking (if implemented)
- [ ] Forms/conversions tracked (if applicable)
- [ ] SSL certificate active (https://)
- [ ] Custom domain configured (if applicable)

---

## Performance Optimization

### Check Performance

```bash
# Vercel provides automatic performance insights
# Or use:
npm run build  # See build size
```

### Bundle Analysis

```bash
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer({...})

# Run:
ANALYZE=true npm run build
```

---

## Monitoring & Maintenance

### Check Logs

**Vercel:** Dashboard → Deployments → Click deployment → Logs

**Netlify:** Dashboard → Deploys → Click deploy → Deploy log

**Self-hosted:** Check application logs in your server

### Update Dependencies

```bash
npm update
npm audit fix
```

---

## Troubleshooting

### Build Fails

1. Check `package.json` - ensure all dependencies are listed
2. Run locally first: `npm run dev`
3. Check build logs for specific errors

### Site Shows Blank Page

1. Check browser console for JavaScript errors
2. Verify environment variables are set correctly
3. Ensure `.next` folder exists after build

### Slow Performance

1. Use Vercel or Netlify (they have CDN)
2. Optimize images (use next/image)
3. Enable caching in next.config.js

---

## Support

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com/

---

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Push to GitHub
git add .
git commit -m "Your message"
git push origin main
```

---

**Your landing page is production-ready! Choose a deployment option and go live.** 🚀
