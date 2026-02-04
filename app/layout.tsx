/** Main layout file for the Next.js app
 * Configures global styles, metadata, and providers
 */

import { Metadata, Viewport } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050510',
};

export const metadata: Metadata = {
  title: 'Free Moon Reading 2026 – Unlock Your Lunar Personality',
  description: 'Discover what your moon sign reveals about your hidden personality, emotional blueprints, and future destiny. Instant personalized astrology reading.',
  keywords: 'moon reading, moon sign calculator, astrology 2026, lunar personality, zodiac traits, free birth chart, personalized horoscope',
  robots: 'index, follow',
  authors: [{ name: 'Cosmic Reading' }],
  openGraph: {
    title: 'Free Moon Reading 2026 – Unlock Your Lunar Personality',
    description: 'Discover what your moon sign reveals about your hidden personality and future destiny.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://moonreading.com/og-image.jpg', // Placeholder, but good for SEO
        width: 1200,
        height: 630,
        alt: 'Moon Reading Presentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Moon Reading 2026',
    description: 'Unlock Your Lunar Personality Today.',
  },
};

function StarsBackground() {
  return (
    <div className="stars-container">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            // @ts-ignore
            '--duration': `${2 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <div className="cosmic-bg" />
        <StarsBackground />
        <main>{children}</main>
        
        {/* Scripts for tracking - placeholders but correctly structured for arbitrage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytical and Pixel tracking would go here
              console.log('Cosmic Reading initialized');
            `,
          }}
        />
      </body>
    </html>
  );
}

