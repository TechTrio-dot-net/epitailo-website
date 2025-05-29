'use client';


import { toast } from 'sonner'; // ✅ Add this import

import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (

    <footer className="bg-gray-200 text-black pt-0">
      {/* Full-width image at top without spacing */}
  

      {/* Footer content without top padding */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-10 px-6">
        
        {/* Logo + Description */}
        <div>
          {/* <h2 className="text-2xl font-bold mb-2 text-orange-400">Epitailo</h2> */}
           <Image
                src="/images/EpitailoLogo.png"
                alt="Epitailo Logo"
                width={180}
                height={150}
                className="ml-30 mt-8"
              />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-orange-400">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400">About</a></li>
            <li><a href="#products" className="hover:text-orange-400">Products</a></li>
            <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-orange-500 text-xl">
            <a href="https://www.facebook.com/epitailo.tileadhesive" aria-label="Facebook" className="hover:text-blue-900">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/epitailo.tileadhesive?igsh=NzByc21pd2t0dmxt" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>


          {/* Download Button */}
          <div className="mt-7">
            <a
              href="/EPITAILO BROCHURE.pdf"
              download
              onClick={() => toast.success('📥 Brochure download started!')}
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md"
            >
              📄 Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-300 py-4">
        &copy; {new Date().getFullYear()} Epitailo&trade; | All rights reserved.
      </div>

    </footer>
  );
}