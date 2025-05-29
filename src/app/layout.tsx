import './globals.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { Poppins } from 'next/font/google';

// Load Poppins font with weights you want
const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'], // all weights for your CSS classes
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'ProductSite',
  description: 'Browse top products here',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
