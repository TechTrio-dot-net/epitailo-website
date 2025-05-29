import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Epitailo',
  description:
    'Epitailo is India’s trusted brand for smart bonding solutions including tile adhesives, epoxy grout, block mortar, and wall putty. Made in Bharat, crafted with care.',
  metadataBase: new URL('https://www.epitailo.com'),
  openGraph: {
    title: 'Epitailo – Strong Bonds Forever',
    description:
      'Epitailo offers premium tile adhesives, epoxy grouts, block mortar, and more. Trusted across India.',
    url: 'https://www.epitailo.com',
    siteName: 'Epitailo',
    images: [
      {
        url: 'https://www.epitailo.com/assets/epitailo-og-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Epitailo – Premium Tile Adhesives & Grouts',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts Preconnect and Link for Compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta Tags */}
        <meta name="title" content="Epitailo – Strong Bonds Forever" />
        <meta
          name="description"
          content="Epitailo is India’s trusted brand for smart bonding solutions including tile adhesives, epoxy grout, block mortar, and wall putty. Made in Bharat, crafted with care."
        />
        <meta name="keywords" content="tile adhesive, epoxy grout, tile grout, block jointing mortar, wall putty, construction chemical, ET 3 adhesive, stain-free grout, tile fixing solution, made in India adhesive" />
        <meta name="author" content="Plasma Chem Solution LLP" />
        <meta name="language" content="en-IN" />

        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epitailo.com" />
        <meta property="og:title" content="Epitailo – Strong Bonds Forever" />
        <meta property="og:description" content="Browse premium tile adhesives, epoxy grouts, and more from Epitailo. Trusted across India." />
        <meta property="og:image" content="https://www.epitailo.com/assets/epitailo-og-banner.jpg" />

        {/* Twitter Meta Tags (if available in future) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epitailo – Strong Bonds Forever" />
        <meta name="twitter:description" content="India’s trusted brand for smart bonding solutions." />
        <meta name="twitter:image" content="https://www.epitailo.com/assets/epitailo-og-banner.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
