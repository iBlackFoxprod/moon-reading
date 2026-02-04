/** Main layout file for the Next.js app
 * Configures global styles, metadata, and providers
 */

import { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discover Your Personalized Moon Reading – Reveal Your Hidden Traits',
  description: 'Find your moon sign personality, uncover hidden traits, and get a personalized astrology reading. Start your journey now!',
  keywords: 'moon sign calculator, astrology reading, zodiac personality, moon sign meaning, personalized horoscope, natal chart, lunar astrology',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  authors: [{ name: 'Cosmic Reading' }],
  openGraph: {
    title: 'Discover Your Personalized Moon Reading – Reveal Your Hidden Traits',
    description: 'Find your moon sign personality, uncover hidden traits, and get a personalized astrology reading. Start your journey now!',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        {/* Google Analytics Placeholder */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        {/* Meta Pixel Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="bg-light">
        <main>{children}</main>
      </body>
    </html>
  );
}
