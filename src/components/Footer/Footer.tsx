'use client';

import { toast } from 'sonner';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-black pt-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/EpitailoLogo.png"
            alt="Epitailo Logo"
            width={180}
            height={150}
            className="mb-4"
          />
          {/* Optional description */}
          {/* <p className="text-center md:text-left text-gray-700 max-w-xs">
            Your trusted tile adhesive brand.
          </p> */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-orange-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Make In India Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Make_In_India.png/375px-Make_In_India.png"
            alt="Make In India"
            width={150}
            height={130}
            className="object-contain"
          />
        </div>

        {/* Follow Us + Download */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-6 text-orange-500 text-2xl mb-6">
            <a
              href="https://www.facebook.com/epitailo.tileadhesive"
              aria-label="Facebook"
              className="hover:text-blue-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/epitailo.tileadhesive?igsh=NzByc21pd2t0dmxt"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>

          <a
            href="/EPITAILO BROCHURE.pdf"
            download
            onClick={() => toast.success('📥 Brochure download started!')}
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-md font-semibold transition"
          >
            📄 Download Brochure
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 border-t border-gray-300 py-4 select-none flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <span>&copy; {new Date().getFullYear()} Epitailo&trade; | All rights reserved.</span>
        <a href="/privacy-policy" className="hover:text-orange-400 transition">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-orange-400 transition">
          Terms
        </a>
      </div>
    </footer>
  );
}
