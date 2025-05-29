'use client';

import { Toaster } from 'sonner';

import Banner from '../components/Banner/Banner';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Group from '@/components/Group/Group';
import Blogs from '@/components/Blog/Blogs';
// import Reel from '@/components/Reel/Reel';

import About from '@/components/About/About';
import Contact from '@/components/contact/contact';
import FixItBadge from '@/components/badge/fixitbadge';

export default function HomePage() {
  return (
    <>
      {/* 🔥 Toaster for toast notifications */}
      <Toaster richColors position="top-center" />

      <main>
        <section id="home">
          <Banner />
          <div className="absolute bottom-0 left-[75%] sm:left-3/4 md:left-[90%] transform -translate-x-1/2 translate-y-1/2 z-20">
            <FixItBadge />
          </div>
        </section>

        <section id="products">
          <ProductGrid />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="group">
          <Group />
        </section>

        <section id="blogs">
          <Blogs />
        </section>

        {/* <section id="reel">
          <Reel />
        </section> */}

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
