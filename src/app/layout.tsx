import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Poppins } from 'next/font/google';
import ScrollonTop from '@/components/ScrollTop/ScrollTop';
import EnquireNow from '@/components/Enquire/Enquire';

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
      {/* Remove this <head> section completely or keep only meta tags NOT related to fonts */}
      <head>
        {/* Keep your SEO and OpenGraph meta tags here only */}

        <meta name="title" content="Epitailo – Strong Bonds Forever" />
        <meta
          name="description"
          content="Epitailo is India’s trusted brand for smart bonding solutions including tile adhesives, epoxy grout, block mortar, and wall putty. Made in Bharat, crafted with care."
        />
        <meta name="keywords" content="tile adhesive, epoxy grout, tile grout, block jointing mortar, wall putty, construction chemical, ET 3 adhesive, stain-free grout, tile fixing solution, made in India adhesive" />
        <meta name="author" content="Plasma Chem Solution LLP" />
        <meta name="language" content="en-IN" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.epitailo.com" />
        <meta property="og:title" content="Epitailo – Strong Bonds Forever" />
        <meta property="og:description" content="Browse premium tile adhesives, epoxy grouts, and more from Epitailo. Trusted across India." />
        <meta property="og:image" content="https://www.epitailo.com/assets/epitailo-og-banner.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Epitailo – Strong Bonds Forever" />
        <meta name="twitter:description" content="India’s trusted brand for smart bonding solutions." />
        <meta name="twitter:image" content="https://www.epitailo.com/assets/epitailo-og-banner.jpg" />

        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <ScrollonTop />
        <EnquireNow />
        <Footer />
      </body>
    </html>
  );
}
