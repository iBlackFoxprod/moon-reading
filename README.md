# Moon Reading Affiliate Landing Page

A high-converting, SEO-optimized landing page built with Next.js 13+ to promote the Moon Reading ClickBank affiliate offer.

## Features

✅ **Next.js 13+ App Directory** - Modern React framework with server components  
✅ **Bootstrap 5** - Responsive mobile-first design  
✅ **Conversion-Optimized** - Multiple CTAs, urgency messaging, social proof  
✅ **SEO-Ready** - Proper metadata, H1-H3 hierarchy, semantic HTML  
✅ **Performance** - Image optimization, fast loading, code splitting  
✅ **Modern UI/UX** - Smooth animations, Font Awesome icons, professional design  
✅ **Analytics Ready** - Google Analytics and Meta Pixel placeholders  

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles and animations
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section with main CTA
│       ├── Benefits.tsx        # 6 benefit cards
│       ├── HowItWorks.tsx      # 3-step process
│       ├── Testimonials.tsx    # Social proof section
│       ├── FAQ.tsx             # Interactive FAQ
│       ├── FinalCTA.tsx        # Final call-to-action
│       ├── Footer.tsx          # Footer with disclaimers
│       └── *.module.css        # Component-specific styles
├── public/                      # Static assets
├── package.json                # Dependencies
├── next.config.js              # Next.js configuration
└── .gitignore                  # Git ignore rules
```

## Getting Started

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and connect your repository
3. Vercel will automatically detect Next.js and deploy

### GitHub Pages

Not recommended for Next.js. Use Vercel, Netlify, or AWS instead.

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `.next` folder to your hosting provider

## SEO Optimization

- **Title:** "Discover Your Personalized Moon Reading – Reveal Your Hidden Traits"
- **Meta Description:** "Find your moon sign personality, uncover hidden traits, and get a personalized astrology reading. Start your journey now!"
- **Keywords:** moon sign calculator, astrology reading, zodiac personality, moon sign meaning, natal chart
- **H1-H3 Hierarchy:** Proper semantic structure throughout
- **Font Awesome Icons:** Professional icon library for better visual appeal

## Customization

### Update Affiliate Link

Open any component with CTAs and update:
```typescript
const affiliateLink = 'https://d0313twnfeyj3ocrocv0mftg1u.hop.clickbank.net';
```

### Add Google Analytics

In `app/layout.tsx`, replace `GA_MEASUREMENT_ID` with your tracking ID:
```typescript
src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"
```

### Add Meta Pixel

In `app/layout.tsx`, replace `YOUR_PIXEL_ID` with your Facebook Pixel ID:
```typescript
fbq('init', 'YOUR_PIXEL_ID');
```

### Modify Content

All content sections are in their respective components:
- Hero copy: `app/components/Hero.tsx`
- Benefits: `app/components/Benefits.tsx`
- Testimonials: `app/components/Testimonials.tsx`
- FAQ: `app/components/FAQ.tsx`

## Marketing Features

- **Hero Section** - Attention-grabbing headline with emotional subheadline
- **Trust Badges** - Social proof indicators (50K+ readers, 100% secure, AI analysis)
- **Benefits Cards** - 6 key benefits with icons and descriptions
- **How It Works** - Simple 3-step process for easy onboarding
- **Testimonials** - 4 verified customer reviews with 5-star ratings
- **FAQ Section** - 5 common questions with detailed answers
- **Final CTA** - High-urgency section with scarcity messaging
- **Multiple CTAs** - Strategically placed throughout for maximum conversions

## Performance

- Next.js automatic code splitting
- CSS modules for optimized styling
- Bootstrap 5 for lightweight responsive design
- Font Awesome CDN for icons
- Optimized images with next/image component

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is for personal/commercial use. Ensure compliance with ClickBank's terms of service.

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Bootstrap Documentation: https://getbootstrap.com/docs

---

**Built with ❤️ for high-converting affiliate marketing**
